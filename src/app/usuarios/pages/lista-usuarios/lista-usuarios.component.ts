import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent {
  title = 'icarus-front';
  listaUsuarios: Usuario[] = [];

  constructor(
    private usuariosService: UsuariosService
  ) {}

  consultarUsuarios() {
    return this.usuariosService
    .getUsuarios()
    .subscribe(
      usuarios => this.listaUsuarios = usuarios
    );
  }

  ngOnInit() {
    this.consultarUsuarios();
  }
}
