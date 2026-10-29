// script.js - Versión 1.1

// valido que el teléfono tenga solo números
function validarTelefono(tel) { return /^[0-9]+$/.test(tel); }

// exporto la función para poder probarla con Node
if (typeof module !== "undefined") { module.exports = { validarTelefono }; }