import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { CadastroUsuariosComponent } from './pages/cadastro-usuarios/cadastro-usuarios.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    component: ListaUsuariosComponent
  },
  {
    path: 'usuario/:id',
    component: CadastroUsuariosComponent
  },
  {
    path: 'novo',
    component: CadastroUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
