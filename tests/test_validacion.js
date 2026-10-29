const assert = require("assert");
const { validarTelefono } = require("../src/script.js");

assert.strictEqual(validarTelefono("123456789"), true);
assert.strictEqual(validarTelefono("12ab34"), false);
assert.strictEqual(validarTelefono("12-34"), false);
assert.strictEqual(validarTelefono(""), false);

console.log("Todos los tests pasaron");