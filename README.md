# Oclock - World Time Dashboard 
 
Oclock es una aplicación de monitoreo de tiempo global desarrollada con **Angular 17+**. El proyecto demuestra la capacidad de manejar actualizaciones de estado constantes y precisas, manteniendo un alto rendimiento mediante la correcta gestión de suscripciones y limpieza de recursos. 
 
## Características Técnicas 
 
- **Actualización en Tiempo Real:** Implementación de un motor de tiempo basado en observables de RxJS que emite cambios cada segundo de forma centralizada. 
- **Internacionalización de Horarios:** Cálculo dinámico de desfases horarios para ciudades clave (Londres, Tokyo, New York, Bogotá, París, Dubái, Sídney, Ciudad de México y Seúl). 
- **Gestión de Ciclo de Vida:** Uso riguroso de `ngOnDestroy` para la eliminación de temporizadores e intervalos, evitando fugas de memoria (memory leaks). 
- **Arquitectura Reactiva:** Separación total de la lógica de tiempo en un servicio inyectable, permitiendo que los componentes sean puramente representacionales. 
 
## Tecnologías Utilizadas 
 
- **Framework:** Angular (Standalone Components) 
- **Reactividad:** RxJS (Interval, Map, ShareReplay) 
- **Estilos:** CSS3 con sistema de Grid adaptativo y diseño Glassmorphism / Neumorphism. 
- **Formateo:** `DatePipe` de Angular para la manipulación de locales y zonas horarias. 
 
## Implementación de Ingeniería 
 
El valor técnico de este proyecto reside en: 
 
1. **Optimización del Event Loop:** El uso de un solo flujo de tiempo para todos los relojes reduce la carga sobre el hilo principal del navegador. 
2. **Robustez del Componente:** Implementación del patrón de desuscripción para asegurar que no existan procesos en segundo plano una vez que el usuario navega fuera del dashboard. 
3. **Diseño Modular:** Interfaz basada en tarjetas (cards) escalables que se ajustan automáticamente a diferentes resoluciones de pantalla. 
 
## Instalación y Uso 
 
1. Clonar el repositorio. 
2. Ejecutar `npm install`. 
3. Ejecutar `ng serve` (o `npm start`). 
4. Acceder a `localhost:4200`. 
 
Este proyecto completa la trilogía de aplicaciones fundamentales para demostrar competencia técnica en el desarrollo Frontend moderno.
