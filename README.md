# Sauce Demo QA Automation Reto

## Descripción
Este proyecto contiene una suite de pruebas automatizadas para la aplicación web Sauce Demo (https://www.saucedemo.com/).
Está construido utilizando **Playwright** junto con **Cucumber (Gherkin)**, y se ha implementado el patrón de diseño **Page Object Model (POM)**.

## Requisitos Previos
- Node.js (v14 o superior recomendado).
- NPM (generalmente instalado junto con Node.js).

## Instalación y Configuración

1. Clonar el repositorio.
2. Abrir una terminal en la raíz del proyecto y ejecutar el siguiente comando para instalar todas las dependencias necesarias:
   ```bash
   npm install
   ```
3. Instalar los navegadores de Playwright:
   ```bash
   npx playwright install chromium
   ```

## Ejecución de las Pruebas

Para ejecutar las pruebas automatizadas, utiliza el siguiente comando:
```bash
npm run test
```

Este comando ejecutará Cucumber, el cual buscará los archivos `.feature` y ejecutará los pasos definidos. Al finalizar, mostrará el progreso en consola y generará un reporte HTML en la carpeta `reports/cucumber-report.html`.

## Estrategia de Automatización y Patrones Utilizados

- **Herramientas:** Playwright para la interacción rápida y fiable con el navegador, y Cucumber.js para permitir escenarios legibles (BDD) mediante Gherkin.
- **Patrón de Diseño:** Se implementó el patrón **Page Object Model (POM)**. Toda la lógica de interacción con los elementos de la UI está encapsulada dentro de la carpeta `src/pages/` (`LoginPage`, `InventoryPage`, `CartPage`, `CheckoutPage`). Esto separa las aserciones y lógica de los tests de la estructura HTML de la página web.
- **Estructura:**
  - `src/features/`: Contiene los escenarios descritos en formato Gherkin.
  - `src/steps/`: Contiene los "step definitions" de Cucumber que unen los pasos en lenguaje natural con las acciones en el código.
  - `src/pages/`: Clases POM.
  - `src/support/`: Configuración del `World` customizado de Cucumber y `hooks` globales (setup y teardown de Playwright).

## Escenarios de Prueba Implementados
De acuerdo a los criterios de aceptación, se han implementado 5 escenarios distintos:
1. **Criterio 1:** Iniciar sesión con credenciales válidas.
2. **Criterio 2:** Iniciar sesión con credenciales inválidas (usuario bloqueado).
3. **Criterio 3:** Agregar un producto al carrito desde la página de productos.
4. **Criterio 4:** Ver los productos agregados en el carrito de compras.
5. **Criterio 5:** Completar el proceso de compra hasta la confirmación.
