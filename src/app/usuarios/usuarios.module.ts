import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { CadastroUsuariosComponent } from './pages/cadastro-usuarios/cadastro-usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosService } from './services/usuarios.service';

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    CadastroUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  providers: [
    UsuariosService
  ]
})
export class UsuariosModule { }
