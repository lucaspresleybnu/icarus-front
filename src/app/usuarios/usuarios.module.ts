import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { CadastroUsuariosComponent } from './pages/cadastro-usuarios/cadastro-usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosService } from './services/usuarios.service';
import { NgxMaskDirective, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    CadastroUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NgxMaskDirective
  ],
  providers: [
    UsuariosService,
    provideNgxMask({
      dropSpecialCharacters: true,
      validation: true,
      showMaskTyped: true
    })
  ]
})
export class UsuariosModule { }
