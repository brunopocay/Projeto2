import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { DateFormat } from 'src/app/Helpers/TimeStamp';
import { ApiResponse } from 'src/app/Models/ApiResponse';
import { Exame } from 'src/app/Models/Exame';
import { AuthService } from 'src/app/Services/auth.service';
import { ExamesService } from 'src/app/Services/exames.service';

@Component({
  selector: 'app-form-show-filter',
  templateUrl: './form-show-filter.component.html',
  styleUrls: ['./form-show-filter.component.css']
})
export class FormShowFilterComponent implements OnInit {
  
  constructor(private examesService$: ExamesService, private authService$: AuthService) {
    const data = new Date();
    data.setDate(data.getDate() - 7);
    this.dataInicial = data.toISOString().split('T')[0];
  }
  
  dataAtual: string = new Date().toISOString().split('T')[0]
  dataInicial: string;
  listaDeExames: Exame[] = [];
  ApiResult: ApiResponse<Exame[]>;
  localStorageItens: {tipoUsuario:string | null, sessao: string | null }
  
  ngOnInit(): void {
    this._getLocalStorage();
    this.GetListaExames();
  }
  
  pesquisar() {
    
  }

  GetListaExames() {
    this.examesService$.GetExames(this.localStorageItens.sessao!)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error) {
            console.log(error.error.Error);
          }
          return throwError(() => error.error);
        })
      )
      .subscribe((response: ApiResponse<Exame[]>) => {
        this.ApiResult = response;
        this.listaDeExames = this.ApiResult.Data;
      });
  }

  private _getLocalStorage(){
    this.localStorageItens = this.authService$.getAuthSessao();
  }

}
