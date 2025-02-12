import {Component} from '@angular/core';
import {SurveyListComponent} from './features/survey/components/survey/survey-list/survey-list.component';
import {MenuItem} from './shared/models/menu-item.interface';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ITLens-frontend';
  navigationItems: MenuItem[] = [
    {
      label: 'Accueil',
      path: '/',
      icon: 'fas fa-home'
    },
    {
      label: 'À propos',
      path: '/about',
      icon: 'fas fa-info-circle'
    },
    {
      label: 'Services',
      path: '/services',
      icon: 'fas fa-cogs'
    },
    {
      label: 'Contact',
      path: '/contact',
      icon: 'fas fa-envelope'
    }
  ];
}
