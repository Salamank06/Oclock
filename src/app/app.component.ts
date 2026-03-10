import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  template: '<app-dashboard></app-dashboard>',
  styles: [`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `]
})
export class AppComponent {}
