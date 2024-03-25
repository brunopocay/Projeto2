import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Models/ApiResponse';
import { environment } from 'src/environments/environment';
import { Exame } from '../Models/Exame';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {
  constructor(private http$: HttpClient) { }

  private urlapi$ = 'exames';

  public GetExames(idSessao: string):Observable<ApiResponse<Exame[]>>{
    const httpOptions$ = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    const params = new HttpParams()
      .set('sessao', idSessao)
      .set('Pagina', '1')
      .set('QtPagina', '20');
    return this.http$.get<ApiResponse<Exame[]>>(`${environment.apiURL}/${this.urlapi$}`, {params:  params, ...httpOptions$});
  }

}
