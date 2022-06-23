import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {


   }

   getUsuarioList(): Observable<any>{
     return this.http.get<any>(AppConstants.baseUrl);
   }

   deletarUsuario(id: Number) : Observable<any>{
     return this.http.delete(AppConstants.baseUrl + id, {responseType : 'text'});

   }

   cadastrarUsuario(usuario: Usuario) : Observable<Usuario>{
     return this.http.post<Usuario>(AppConstants.baseUrl, usuario);
   }

   atualizarUsuario(usuario: Usuario) : Observable<Usuario>{
    return this.http.put<Usuario>(AppConstants.baseUrl, usuario);
  }

   consultarUsuario(nome: String) :Observable<any>{
    return this.http.get<any>(AppConstants.baseBuscarPorNome + nome);
   }

   getUsuarioId(id): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + id);
   }

   /* Verifica se o Usuario está autenticado via token */
   userAutenticado() {
    if (localStorage.getItem('token') !== null &&
    localStorage.getItem('token').toString().trim() !== null){
      return true;
    } else {
      return false;
    }

   }


}
