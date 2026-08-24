/**
 * SUMAQ Planificador de Turnos - Servidor Google Apps Script
 * Copia este código en tu editor de Google Apps Script (Code.gs).
 * Este código está optimizado para funcionar directamente con tu pestaña "CONFIGS".
 */

var SPREADSHEET_ID = "1jxakRiogHtf1BlanlGbFj1iFwapVtcR60cFOrRDgfkM";

function getPlannerSpreadsheet() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function doGet(e) {
  var page = e.parameter.page || 'index';
  var templateName = 'index';
  if (page === 'operadoras') {
    templateName = 'index';
  } else if (page === 'supervisores') {
    templateName = 'turnos_sumaq_supervisores';
  }
  
  return HtmlService.createTemplateFromFile(templateName)
    .evaluate()
    .setTitle('SUMAQ — Planificador v9')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Guarda el estado del planificador en la hoja de cálculo "CONFIGS"
 */
function savePlannerState(stateJson, personasJson, configName, tipo) {
  try {
    var ss = getPlannerSpreadsheet();
    var sheet = ss.getSheetByName("CONFIGS");
    if (!sheet) {
      sheet = ss.insertSheet("CONFIGS");
      sheet.appendRow(["ID", "FECHA", "EMAIL", "AUTOR", "NOMBRE_CON", "TIPO", "DATOS_JSON"]);
    }
    
    var data = sheet.getDataRange().getValues();
    var nameToFind = configName || "ACTUAL";
    var typeToFind = tipo || "PLANIFICADOR";
    
    var foundRowIdx = -1;
    // Buscamos si ya existe una fila con el mismo NOMBRE_CON y TIPO
    for (var i = 1; i < data.length; i++) {
      if (data[i][4] === nameToFind && data[i][5] === typeToFind) {
        foundRowIdx = i + 1; // Fila real en Sheets (1-indexed)
        break;
      }
    }
    
    var userEmail = "Usuario";
    try {
      userEmail = Session.getActiveUser().getEmail() || "Usuario";
    } catch(e) {}
    
    var authorName = userEmail.split('@')[0];
    var timestamp = new Date();
    var idValue = foundRowIdx > 0 ? data[foundRowIdx-1][0] : "ID_" + Date.now();
    
    var fullJson = JSON.stringify({
      state: JSON.parse(stateJson),
      personas: JSON.parse(personasJson)
    });
    
    if (foundRowIdx > 0) {
      // Sobrescribimos la fila existente
      sheet.getRange(foundRowIdx, 2).setValue(timestamp); // FECHA
      sheet.getRange(foundRowIdx, 3).setValue(userEmail); // EMAIL
      sheet.getRange(foundRowIdx, 4).setValue(authorName); // AUTOR
      sheet.getRange(foundRowIdx, 7).setValue(fullJson); // DATOS_JSON
    } else {
      // Agregamos una nueva fila
      sheet.appendRow([
        idValue,      // ID
        timestamp,    // FECHA
        userEmail,    // EMAIL
        authorName,   // AUTOR
        nameToFind,   // NOMBRE_CON
        typeToFind,   // TIPO
        fullJson      // DATOS_JSON
      ]);
    }
    
    return { success: true };
  } catch (err) {
    return { success: false, error: err.toString() };
  }
}

/**
 * Carga una configuración de la hoja "CONFIGS" según su nombre y tipo
 */
function loadPlannerState(configName, tipo) {
  try {
    var ss = getPlannerSpreadsheet();
    var sheet = ss.getSheetByName("CONFIGS");
    if (!sheet) return null;
    
    var data = sheet.getDataRange().getValues();
    var nameToFind = configName || "ACTUAL";
    var typeToFind = tipo || "PLANIFICADOR";
    
    var foundRowIdx = -1;
    for (var i = 1; i < data.length; i++) {
      if (data[i][4] === nameToFind && data[i][5] === typeToFind) {
        foundRowIdx = i;
        break;
      }
    }
    
    if (foundRowIdx === -1) {
      // Si no encuentra "ACTUAL", intentamos recuperar la última fila con datos JSON válida
      if (data.length > 1) {
        for (var j = data.length - 1; j > 0; j--) {
          if (data[j][6]) {
            return JSON.parse(data[j][6]);
          }
        }
      }
      return null;
    }
    
    var jsonStr = data[foundRowIdx][6];
    if (!jsonStr) return null;
    return JSON.parse(jsonStr);
  } catch (err) {
    return null;
  }
}

/**
 * Obtiene la lista de todas las configuraciones guardadas de tipo "PLANIFICADOR"
 */
function getSavesList() {
  try {
    var ss = getPlannerSpreadsheet();
    var sheet = ss.getSheetByName("CONFIGS");
    if (!sheet) return [];
    
    var data = sheet.getDataRange().getValues();
    var list = [];
    for (var i = 1; i < data.length; i++) {
      var name = data[i][4];
      var tipo = data[i][5];
      // Excluimos la versión de guardado automático "ACTUAL" para la lista de cargables
      if ((tipo === "PLANIFICADOR" || tipo === "VERSION") && name !== "ACTUAL") {
        var dateVal = data[i][1];
        var formattedDate = "";
        try {
          formattedDate = Utilities.formatDate(new Date(dateVal), Session.getScriptTimeZone() || "GMT-5", "dd/MM/yyyy HH:mm");
        } catch(e) {
          formattedDate = new Date(dateVal).toLocaleDateString('es-PE');
        }
        list.push({
          id: data[i][0],
          date: formattedDate,
          email: data[i][2],
          author: data[i][3],
          name: name,
          tipo: tipo
        });
      }
    }
    return list;
  } catch (err) {
    return [];
  }
}
