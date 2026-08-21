#!/usr/bin/env bash
# Publica los cambios locales al Apps Script en vivo.
# Uso: ./publicar.sh   (o: npm run publicar)
set -e

cd "$(dirname "$0")"

ID_FILE=".deployment-id"

if [ ! -f "$ID_FILE" ]; then
  echo "No existe $ID_FILE con el deploymentId."
  echo "Corre una vez: npx clasp deployments"
  echo "y guarda el ID correcto asi: echo 'TU_ID' > $ID_FILE"
  exit 1
fi

DEPLOYMENT_ID=$(cat "$ID_FILE" | tr -d '[:space:]')

echo "Verificando cuenta autenticada..."
npx clasp login --status || true

echo ""
echo "Subiendo codigo (clasp push)..."
npx clasp push --force

echo ""
echo "Publicando en el deployment $DEPLOYMENT_ID..."
npx clasp deploy --deploymentId "$DEPLOYMENT_ID" --description "Actualizacion $(date '+%Y-%m-%d %H:%M')"

echo ""
echo "Listo. Revisa: https://script.google.com/a/ds-inmobiliario.com/macros/s/AKfycbyxUv2iyEaqi1KZx3E8QqCN7pHeeQMVI18fC8HS3zPmXsAnPohl3NsxfFy7ndHtnbJS/exec?page=operadoras"
