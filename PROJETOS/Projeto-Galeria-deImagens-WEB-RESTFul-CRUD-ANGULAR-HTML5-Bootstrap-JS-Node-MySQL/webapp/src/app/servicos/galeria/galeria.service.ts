import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespostaClass } from '../../classes/resposta-class';
import { ConfigClass } from '../../classes/config-class';

const httpOpcoes = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}

const caminho = `${ConfigClass.getUrlApi().toString()}/galeria`;

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<HttpResponse<RespostaClass>> {
      return this.http.get<RespostaClass>(
        caminho, {observe: 'response'}
      );
  }

  getId(id: number): Observable<HttpResponse<RespostaClass>> {
    return this.http.get<RespostaClass>(
      `${caminho}/${id}`, {observe: 'response'}
    );
  }

  cadastrar(dados: any): Observable<HttpResponse<RespostaClass>> {
    return this.http.post<RespostaClass>(
      caminho, dados, {observe: 'response'}
    );
  }

  editar(dados: any): Observable<HttpResponse<RespostaClass>> {
    return this.http.put<RespostaClass>(
      caminho, dados, {observe: 'response'}
    );
  }

  deletar(id: number): Observable<HttpResponse<RespostaClass>> {
    return this.http.delete<RespostaClass>(
      `${caminho}/${id}`, {observe: 'response'}
    );
  }

}
