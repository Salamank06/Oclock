# Oclock - World Clocks Dashboard

Este es un dashboard de relojes internacionales desarrollado con **Angular v17+ (Standalone)**.

## Requisitos
- [Node.js](https://nodejs.org/) (v18.13.0 o superior)
- [Angular CLI](https://angular.io/cli) (Opcional, se puede usar npm)

## Cómo ejecutar el proyecto

Debido a restricciones de ejecución de scripts en algunos sistemas Windows, utiliza los siguientes comandos:

1. **Instalar dependencias:**
   ```powershell
   npm.cmd install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```powershell
   npm.cmd start
   ```

3. **Ver en el navegador:**
   Abre [http://localhost:4200/](http://localhost:4200/) en tu navegador.

## Características Técnicas
- **Angular Standalone Components:** No requiere módulos (NgModules).
- **RxJS Timer:** El servicio `TimeService` emite la hora cada segundo.
- **Glassmorphism / Neumorphism:** Diseño moderno con efectos de desenfoque y sombras.
- **Limpieza de Suscripciones:** El componente `Dashboard` se desuscribe correctamente en `ngOnDestroy` para evitar memory leaks.
