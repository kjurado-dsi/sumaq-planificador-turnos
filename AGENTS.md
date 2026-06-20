# Instrucciones para Codex

Este proyecto puede ser editado por Codex y Claude Code. Es un proyecto HTML publicado con GitHub Pages, por lo que no usa `clasp`.

## Antes de empezar cualquier tarea

1. Leer este archivo.
2. Leer `AI_NOTES.md`.
3. Revisar el estado de cambios pendientes si Git esta disponible.
4. No sobrescribir cambios existentes sin entender su origen.

## Durante el trabajo

1. Trabajar por turnos.
2. No editar en paralelo los mismos archivos con dos asistentes distintos.
3. Preferir cambios pequenos y revisables.
4. Si hay dudas sobre cambios previos, revisar el diff antes de continuar.

## Despues de cada cambio importante

Actualizar `AI_NOTES.md` agregando una nueva entrada arriba, sin borrar entradas anteriores.

Cada entrada debe incluir:

- Fecha.
- Autor: Codex, Claude o Usuario.
- Resumen del cambio.
- Archivos modificados.
- Comandos ejecutados.
- Estado de publicacion: `git push` o pendiente.
- Pendientes o riesgos.

## Reglas de seguridad

Nunca guardar en `AI_NOTES.md`, `AGENTS.md`, `CLAUDE.md` ni commits:

- tokens
- contrasenas
- claves API
- credenciales
- datos sensibles de clientes
- URLs privadas con credenciales

`AI_NOTES.md` es memoria de trabajo, no fuente absoluta de verdad. La fuente final es el historial de Git, los archivos reales y las pruebas ejecutadas.

## Regla especial para GitHub Pages

Este proyecto se publica con GitHub Pages.

Para publicar cambios, normalmente basta con:

```bash
git add .
git commit -m "Describe el cambio"
git push
```

Luego esperar 1 o 2 minutos y recargar la pagina publicada.
