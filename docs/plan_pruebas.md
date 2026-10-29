# Plan de pruebas

Todavía no hay casos de prueba definidos para la versión 1.0.


## Casos de prueba - Validación de teléfono (v1.1)

| Caso | Entrada | Resultado esperado |
|------|---------|--------------------|
| CP-01 | 123456789 | true |
| CP-02 | 12ab34 | false |
| CP-03 | 12-34 | false |
| CP-04 | (vacío) | false |