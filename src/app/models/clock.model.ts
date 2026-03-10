// Interfaz que define la estructura de un reloj mundial
export interface WorldClock {
  city: string;
  timezone: string;
  currentTime: Date;
  flag?: string;
}
