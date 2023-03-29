---
Title: Parámetros de URL
Position: 4
---

# Parámetros de URL

**Crono Pad** permite incluir parámetros en la URL de una página y luego estos parámetros se pueden utilizar como variables al construir las consultas que generarán las visualizaciones.


::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/parameters/README.md)
:::

Cada página puede tener varios parámetros y se puede indicar el tipo de cada una de ellas. Por defecto son alfanuméricos.

Los parámetros se definen en la cabecera YAML con esta sintaxis:

- `Parameters: "{param1}"`
- `Parameters: "{param1}/{param2:int}"`


Con los parámetros de URL un mismo fichero Markdown se "transforma" en múltiples URL con contenido personalizado, como en este ejemplo:

``` text
SELECT $'- [{NOMBRE}](/markdown/parameters/item/{ID_TIENDA})'
FROM LB_TIENDAS
ORDER BY NOMBRE
```