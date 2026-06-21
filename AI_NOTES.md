# AI_NOTES

Memoria compartida entre Codex, Claude Code y el usuario.

Las entradas nuevas deben agregarse arriba.

Este archivo debe actualizarse despues de cada cambio importante, publicacion o decision tecnica relevante.

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
