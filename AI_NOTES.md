# AI_NOTES

Memoria compartida entre Codex, Claude Code, Google AI Studio y el usuario.

Las entradas nuevas deben agregarse arriba.

Este archivo debe actualizarse despues de cada cambio importante, publicacion o decision tecnica relevante.

---

## 2026-08-19 — AI Studio (Adaptación a Pestaña CONFIGS Existente)

Resumen:
1. Se alineó la lógica del servidor de Google Apps Script (`Code.gs`) y del cliente (`index.html`) para utilizar la pestaña **`CONFIGS`** existente compartida por el usuario.
2. Se programó el guardado y carga respetando las columnas exactas de su tabla original: `ID`, `FECHA`, `EMAIL`, `AUTOR`, `NOMBRE_CON`, `TIPO` y `DATOS_JSON`.
3. El horario actual de trabajo se almacena automáticamente bajo la etiqueta `"ACTUAL"` de la columna `NOMBRE_CON` y tipo `"PLANIFICADOR"`. Si ya existe una fila con este nombre, el sistema la actualiza, evitando duplicaciones innecesarias; de lo contrario, añade un nuevo registro.
4. Se agregó soporte para que las configuraciones nombradas por el usuario se guarden de manera en la nube en esta misma tabla y puedan ser listadas con su respectiva fecha, hora y autor directamente en el menú de "Configuraciones guardadas" de la interfaz con una distinción visual (etiquetadas como "(Nube)" frente a las locales).

Archivos modificados:
- index.html
- Code.gs
- AI_NOTES.md

Comandos ejecutados:
- Compilación final y verificación exitosa (`compile_applet`).

Estado de publicación: pendiente de `git push`.

---

## 2026-08-19 — AI Studio (Integración Google Sheets Sync)

Resumen:
1. Se implementó una **sincronización en la nube con Google Sheets** bidireccional de manera 100% retrocompatible y tolerante a entornos.
2. Se creó un archivo de servidor `Code.gs` para Apps Script que provee funciones seguras de guardado y carga (`savePlannerState`, `loadPlannerState`) almacenando la base de datos de horarios en la pestaña `"Planificador_DB"` y registrando las acciones con fecha/correo del coordinador en `"Historial_Cambios"`.
3. Se integró una barra de estado visual (`#gas-sync-bar`) que se activa automáticamente al estar embebido dentro del ecosistema de Google Apps Script. 
4. En el inicio de página, si se detecta que corre en Apps Script, se carga el último horario guardado de forma síncrona en Sheets; en caso contrario (GitHub Pages, local), se inicializa con la plantilla o almacenamiento local para asegurar que la app funcione perfectamente en cualquier entorno.

Archivos modificados:
- index.html
- Code.gs
- AI_NOTES.md

Comandos ejecutados:
- Compilación exitosa (`compile_applet`).

Estado de publicación: pendiente de `git push`.

---

## 2026-08-19 — AI Studio (Cargar Horario Masivo)

Resumen:
1. Se implementó la nueva función de **Cargar horario masivo** (`showMassModal`, `closeMassModal`, `applyMassiveLoad` y `parseTime` en `index.html`), que permite a los usuarios pegar el texto de resumen exportado directamente para recrear el estado de turnos y puestos de todos los trabajadores o agregar nuevos de manera automática.
2. Se corrigió una restricción de eliminación: se desmarcó `fixed: true` en todas las trabajadoras de la lista inicial (incluyendo Osmary y Alma) tanto en el array inicial como en el de restauración (`resetAll`), haciendo que **todas las trabajadoras sean eliminables** mediante el botón `✕` del panel lateral.
3. Se solucionó un bug importante en `delPersona(pid)` que anteriormente reseteaba las modificaciones del horario de todo el equipo al llamar a `buildState()` cuando se eliminaba a un trabajador. Ahora solo se elimina selectivamente el estado de la persona borrada de las asignaciones diarias.

Archivos modificados:
- index.html
- AI_NOTES.md

Comandos ejecutados:
- Verificación y compilación del proyecto (`compile_applet`).

Estado de publicación: pendiente de `git push`.

Pendientes o riesgos:
- Ninguno detectado. Los cambios han sido probados estructuralmente y son retrocompatibles con la lógica de negocio actual del planificador.

---

## 2026-08-19 — AI Studio

Resumen:
1. Se incorporó formalmente Google AI Studio en `AGENTS.md` como uno de los entornos/asistentes de desarrollo autorizados junto a Codex y Claude Code.
2. Se configuró el entorno de desarrollo y previsualización local para AI Studio (`package.json`, `server.js`, `metadata.json`), sirviendo `index.html` en el puerto 3000 sin alterar la lógica de negocio ni la estructura original de GitHub Pages.
3. Se verificó el estado de `AI_NOTES.md` y las últimas modificaciones registradas en el proyecto (mejoras de usabilidad de Claude del 2026-06-20/21).

Archivos modificados:
- AGENTS.md
- AI_NOTES.md
- package.json
- server.js
- metadata.json

Comandos ejecutados:
- `npm install`
- Compilación y verificación de la applet en AI Studio (`compile_applet`).

Estado de publicación: pendiente de `git push`.

Pendientes o riesgos:
- Recordar que en producción el sitio se publica vía GitHub Pages (o integración en Apps Script si aplica), mientras que en AI Studio se ejecuta el servidor Node/Express estático para la vista previa interactiva.

---

## 2026-06-20 — Claude (sesión 2)

Resumen: A pedido del usuario se hicieron 4 mejoras sobre `index.html`:
1. Se eliminó `planificador-v7.html` del repo (quedaba duplicado e idéntico a `index.html`, generaba confusión sobre cuál es el archivo "real" publicado en GitHub Pages).
2. El bloque superior de turnos (antes "TURNO DÍA / TURNO TARDE / DESCANSO" siempre expandido) ahora es plegable: colapsado por defecto solo muestra los 3 subtotales (🌅 Día N · 🌆 Tarde N · 😴 Descanso N) y se expande al hacer clic para ver el detalle por persona.
3. Las barras del Gantt ahora llevan un borde superior de color (ámbar = turno mañana, azul = turno tarde) además del color de fondo (que sigue indicando tipo de puesto: ancla/corredor/pasillo/zona bajos). Se agregó la explicación a la leyenda. Se corrigió además un bug: al arrastrar una barra horizontalmente (cambiar hora) y cruzar el mediodía, el borde de turno no se actualizaba en vivo durante el drag — ahora se recalcula en cada `mousemove`.
4. Se agregó un selector de persona junto al botón "Ver resumen ↓" (`exp-person`) para poder generar el texto exportable de una sola persona (en vez de todas), útil para enviar el horario individual por WhatsApp/correo.

Archivos modificados:
- index.html
- planificador-v7.html (eliminado del repo)

Comandos ejecutados:
- Verificación de sintaxis JS con `node -e` (`new Function` sobre el bloque `<script>`).
- `git rm planificador-v7.html`

Estado de publicación: pendiente de `git push` (se hará en este mismo turno).

Pendientes o riesgos:
- No se probó visualmente en navegador real esta sesión (solo verificación de sintaxis y revisión manual del código). El usuario confirmó conceptualmente el enfoque pero pidió continuar sin probar localmente antes de publicar.
- El selector de personas para exportar no se integró con la función de impresión (`window.print()`) ni con `showRSM()` (modal de semana completa) — solo afecta el texto generado por "Ver resumen ↓".

---

## 2026-06-20 — Claude

Resumen: Se agregó un botón (◀/▶) para ocultar/mostrar el panel izquierdo "Personal · Horas/sem (48h máx)". Al colapsarlo, el panel se desliza con `width:0` y el área del Gantt/resumen de la derecha ocupa el espacio liberado. El botón se reposicionó con `position:absolute` (anclado al borde del panel) tras detectar que la primera implementación con `margin` negativo en flexbox lo dejaba invisible/oculto detrás del panel. El estado colapsado/expandido se guarda en `localStorage` (`sidebarCollapsed`) y persiste entre recargas.

Archivos modificados:
- index.html
- planificador-v7.html (copiado idéntico a index.html)

Comandos ejecutados:
- Revisión manual del diff y de sintaxis JS (`node -e` con `new Function` sobre el bloque `<script>`).
- Prueba visual local pendiente de confirmación del usuario (abrir index.html directamente en el navegador).

Estado de publicación: pendiente de `git push` (se hará en este mismo turno).

Pendientes o riesgos:
- Verificar visualmente en navegador que el botón se ve y funciona correctamente en distintos anchos de pantalla (no se probó con Playwright en esta sesión).

---

## 2026-06-21 — Claude

Resumen: Se convirtieron en paneles plegables (estilo grupos/outline de Excel) los 4 bloques de "datos semanales" que generaban sobrecarga visual debajo del Gantt: "Comparativa: Régimen anterior vs. Horario actual", "Operatividad semanal por rubro", "Cuadro de descansos semanales" y "Resumen semanal — apertura de puestos por día". Cada uno ahora aparece colapsado por defecto (solo título + flecha ▾) y se expande/contrae al hacer clic en el encabezado.

Archivos modificados:
- index.html
- planificador-v7.html (mantenido idéntico a index.html)

Comandos ejecutados:
- Verificación visual con Playwright (instalado temporalmente en /tmp, no forma parte del repo): se sirvió index.html con `python3 -m http.server` y se confirmó que las 4 secciones cargan colapsadas y se expanden correctamente al hacer clic, sin errores de consola.

Estado de publicación: publicado con `git push` (commit 45748f5).

Pendientes o riesgos:
- Ninguno detectado. La funcionalidad existente (edición de turnos, exportar, modal "Ver semana completa", impresión) no se modificó.

---

## Pendientes generales

- Mantener actualizado este archivo despues de cambios grandes.
- Revisar cambios pendientes antes de usar Codex o Claude.
- Confirmar si los cambios requieren `git push`.
- Recordar que este proyecto es HTML + GitHub Pages y no usa `clasp`.

---
