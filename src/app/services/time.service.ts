import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  /**
   * Observable que emite la fecha actual cada segundo.
   * Usamos shareReplay para que múltiples suscriptores reciban la misma emisión.
   */
  public currentTime$: Observable<Date> = timer(0, 1000).pipe(
    map(() => new Date()),
    shareReplay(1)
  );

  /**
   * Calcula la hora actual para una zona horaria específica.
   * @param timezone La zona horaria (ej: 'Europe/London', 'America/Bogota')
   * @returns Un objeto Date ajustado a esa zona horaria
   */
  getTimeByTimezone(timezone: string): Date {
    const now = new Date();
    // Utilizamos toLocaleString para obtener la hora en el timezone deseado y lo convertimos de vuelta a Date
    const tzDateStr = now.toLocaleString('en-US', { timeZone: timezone });
    return new Date(tzDateStr);
  }
}
