import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimeService } from '../../services/time.service';
import { WorldClock } from '../../models/clock.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  /**
   * Lista de relojes mundiales configurados
   */
  public clocks: WorldClock[] = [
    { city: 'Londres', timezone: 'Europe/London', currentTime: new Date() },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', currentTime: new Date() },
    { city: 'New York', timezone: 'America/New_York', currentTime: new Date() },
    { city: 'Bogotá', timezone: 'America/Bogota', currentTime: new Date() },
    { city: 'París', timezone: 'Europe/Paris', currentTime: new Date() },
    { city: 'Dubái', timezone: 'Asia/Dubai', currentTime: new Date() },
    { city: 'Sídney', timezone: 'Australia/Sydney', currentTime: new Date() },
    { city: 'Ciudad de México', timezone: 'America/Mexico_City', currentTime: new Date() },
    { city: 'Seúl', timezone: 'Asia/Seoul', currentTime: new Date() }
  ];

  /**
   * Suscripción al servicio de tiempo para poder liberarla después
   */
  private timeSubscription?: Subscription;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    // Nos suscribimos al observable que emite cada segundo
    this.timeSubscription = this.timeService.currentTime$.subscribe(() => {
      this.updateAllClocks();
    });
  }

  /**
   * Método que actualiza la hora de cada reloj en la lista
   */
  private updateAllClocks(): void {
    this.clocks = this.clocks.map(clock => ({
      ...clock,
      currentTime: this.timeService.getTimeByTimezone(clock.timezone)
    }));
  }

  /**
   * IMPORTANTE: Limpiar la suscripción al destruir el componente para evitar memory leaks.
   */
  ngOnDestroy(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
      console.log('DashboardComponent: Suscripción al TimeService liberada.');
    }
  }
}
