# Reglas de trabajo del proyecto

Este proyecto puede ser trabajado por Claude, Codex, Gemini y el usuario.
La fuente común del código es este repositorio de GitHub.

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

## Al terminar una tarea

1. Probar lo que corresponda.
2. Revisar `git diff`.
3. Actualizar `AI_NOTES.md` sin borrar entradas anteriores.
4. Crear un commit descriptivo.
5. Hacer `commit` y `git push` solo con confirmación del usuario.
6. Indicar cambios, validaciones y pendientes.

## Cambio de asistente

Antes de entregar el proyecto a otro asistente, dejar en `AI_NOTES.md`:

- estado actual;
- archivos modificados;
- pruebas realizadas;
- próximo paso;
- pendientes o riesgos.

El siguiente asistente debe hacer `git pull` y leer `AI_NOTES.md` antes de continuar.

## Seguridad

Nunca guardar tokens, contraseñas, claves API, credenciales ni datos sensibles en
este repositorio, `AI_NOTES.md` o commits.

## Publicación

Este proyecto no se considera publicado mediante GitHub Pages en este flujo.
Hacer `git push` solo actualiza GitHub y no implica automáticamente un despliegue web.
