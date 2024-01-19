import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-chart-pie-35 text-blue', class: '' },
    { path: '/projetos', title: 'Projetos',  icon:'ni-settings text-blue', class: '' },
    { path: '/orcamentos', title: 'Orçamentos',  icon:'ni-bullet-list-67 text-blue', class: '' },
    { path: '/atendimento', title: 'Atendimento',  icon:'ni-chat-round text-blue', class: '' },
    { path: '/financeiro', title: 'Financeiro',  icon:'ni-money-coins text-blue', class: '' },
    { path: '/estoque', title: 'Estoque',  icon:'ni-delivery-fast text-blue', class: '' },
    { path: '/usuarios', title: 'Usuários',  icon:'ni-single-02 text-blue', class: '' },
    { path: '/relatorios', title: 'Relatórios',  icon:'ni-single-copy-04 text-blue', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[] = [];
  public isCollapsed = true;
  public logo = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
