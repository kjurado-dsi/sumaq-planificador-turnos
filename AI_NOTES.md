# AI_NOTES

Memoria compartida entre Codex, Claude Code y el usuario.

Las entradas nuevas deben agregarse arriba.

Este archivo debe actualizarse despues de cada cambio importante, publicacion o decision tecnica relevante.

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
