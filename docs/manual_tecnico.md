# Manual técnico

 El sistema se compone de `src/index.html` (formulario) y `src/script.js` (lógica).


## Función validarTelefono(tel)
- Archivo: `src/script.js`
- Recibe un texto y devuelve `true` si contiene solo dígitos, `false` en caso contrario.
- Expresión regular: `/^[0-9]+$/`
  - `^` inicio del texto
  - `[0-9]` cualquier dígito del 0 al 9
  - `+` uno o más dígitos
  - `$` fin del texto