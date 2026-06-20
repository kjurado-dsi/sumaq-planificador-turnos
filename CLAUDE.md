# Instrucciones para Claude Code

Este proyecto tambien puede ser editado por Codex. Es un proyecto HTML publicado con GitHub Pages, por lo que no usa `clasp`.

## Antes de empezar cualquier tarea

1. Leer este archivo.
2. Leer `AI_NOTES.md`.
3. Revisar el estado de cambios pendientes si Git esta disponible.
4. No sobrescribir cambios existentes sin entender su origen.

## Durante el trabajo

1. Trabajar por turnos.
2. No editar en paralelo los mismos archivos que Codex.
3. Preferir cambios pequenos y revisables.
4. Revisar el diff si hay dudas sobre cambios previos.

## Despues de cada cambio importante

Actualizar `AI_NOTES.md` agregando una nueva entrada arriba, sin borrar entradas anteriores.

Cada entrada debe incluir:

- Fecha.
- Autor: Claude, Codex o Usuario.
- Resumen del cambio.
- Archivos modificados.
- Comandos ejecutados.
- Estado de publicacion: `git push` o pendiente.
- Pendientes o riesgos.

## Reglas de seguridad

Nunca guardar tokens, contrasenas, claves API, credenciales, datos sensibles de clientes ni URLs privadas con credenciales.

`AI_NOTES.md` es memoria de trabajo. La fuente de verdad final es el historial de Git, los archivos reales y las pruebas ejecutadas.

## GitHub Pages

Hacer `git push` publica los cambios mediante GitHub Pages. Si la pagina no cambia al instante, esperar 1 o 2 minutos y recargar sin cache.
