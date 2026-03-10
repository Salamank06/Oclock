import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  // Observable que emite la fecha actual cada segundo
  // shareReplay permite compartir la misma emisión entre varios componentes
  public currentTime$: Observable<Date> = timer(0, 1000).pipe(
    map(() => new Date()),
    shareReplay(1)
  );

  // Calcula la hora de una ciudad según su zona horaria
  getTimeByTimezone(timezone: string): Date {
    const now = new Date();
    // Convierte la hora actual al formato de la zona horaria recibida
    const tzDateStr = now.toLocaleString('en-US', { timeZone: timezone });
    return new Date(tzDateStr);
  }
}
