import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardPrincipalComponent } from './dashboard/pages/dashboard-principal/dashboard-principal.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPrincipalComponent
  },
  {
    path: 'usuarios',
    loadChildren: () => import('../app/usuarios/usuarios.module').then(m => m.UsuariosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
