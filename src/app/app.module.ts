import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { DashboardPrincipalComponent } from './dashboard/pages/dashboard-principal/dashboard-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    UsuariosModule,
    FinanceiroModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
