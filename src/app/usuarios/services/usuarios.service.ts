import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  users: Usuario[] = [
    {idUsuario: 1, 
      nome: 'Usuário Teste 1', 
      chave: 'user-teste1', 
      email: 'teste1@teste.com', 
      fone: '(47) 98862-1668', 
      situacao: true},

    {idUsuario: 2, 
      nome: 'Usuário Teste 2', 
      chave: 'user-teste2', 
      email: 'teste2@teste.com', 
      fone: '(47) 99961-1458', 
      situacao: true},

    {idUsuario: 3, 
      nome: 'Usuário Teste 3', 
      chave: 'user-teste3', 
      email: 'teste3@teste.com', 
      fone: '(47) 96762-2268', 
      situacao: false},

    {idUsuario: 4, 
      nome: 'Usuário Teste 4', 
      chave: 'user-teste4', 
      email: 'teste4@teste.com', 
      fone: '(47) 98147-1900', 
      situacao: true},
      
    {idUsuario: 5, 
      nome: 'Usuário Teste 5', 
      chave: 'user-teste5', 
      email: 'teste5@teste.com', 
      fone: '(47) 97898-6677', 
      situacao: false},
  ];

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<Usuario[]> {
    return of(this.users);
  }

  cadastrarUsuario(): Observable<Usuario> {
    return of(this.users[0]);
  }

}
