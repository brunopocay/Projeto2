import { Component, Input, OnInit } from '@angular/core';
import { Exame } from 'src/app/Models/Exame';
import { AuthService } from 'src/app/Services/auth.service';
import { DownloadService } from 'src/app/Services/download.service';

@Component({
  selector: 'app-tableresult',
  templateUrl: './tableresult.component.html',
  styleUrls: ['./tableresult.component.css']
})
export class TableresultComponent implements OnInit {
  constructor(private downloadService$: DownloadService, private authService$: AuthService) {}

  
  @Input() tableColor: string;
  @Input() tableResultData: Exame[];
  localStorageItens: {tipoUsuario:string | null, sessao: string | null }
  
  ngOnInit(): void {
    this._getLocalStorage();
  }

  protected DownloadPDF(event: MouseEvent){
    const nrExame = (event.target as HTMLButtonElement).value;

    if(this.tableResultData.length > 0){
      let nrExameFormatado = nrExame.replace('/','')
      this.downloadService$.DownloadPDF(this.localStorageItens.sessao!, nrExameFormatado)
    }
    else{
      console.log('Erro ao resgatar dados do exame');
    }
  }

  private _getLocalStorage(){
    this.localStorageItens = this.authService$.getAuthSessao();
  }
}
