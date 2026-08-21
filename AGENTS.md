# Instrucciones para Asistentes IA (Codex, Claude Code y Google AI Studio)

Este proyecto puede ser editado por Codex, Claude Code y Google AI Studio. Es un proyecto HTML publicado con GitHub Pages, por lo que no usa `clasp`.

## Antes de trabajar

1. Hacer `git pull` antes de empezar.
2. Leer este archivo y `AI_NOTES.md`.
3. Revisar `git status` y no sobrescribir cambios que no se entiendan.

## Durante el trabajo

- Trabajar por turnos: solo un asistente edita el proyecto a la vez.
- Claude y Codex trabajan sobre la copia local; Gemini trabaja mediante GitHub.
- No editar en paralelo los mismos archivos.
- Mantener los cambios pequeños y revisables.
- El archivo principal es `index.html`, salvo indicación del usuario.

## Despues de cada cambio importante

Actualizar `AI_NOTES.md` agregando una nueva entrada arriba, sin borrar entradas anteriores.

Cada entrada debe incluir:

- Fecha.
- Autor: Codex, Claude, AI Studio o Usuario.
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
