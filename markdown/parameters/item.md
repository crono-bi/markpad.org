---
Parameters: '{idTienda:int}'
---

# Ventas mensuales

El contenido de esta página depende del parámetro incluido en la URL.

::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/parameters/item.md)
:::

``` grid
SELECT
  Tienda,
  [NUM MES],
  Mes AS [Mes],
  Unidades AS [Unidades]
FROM DATABASE [Demo Crono Pad] 
WHERE
  [Año|xGhTSjZE] = '2012'
  AND LB_TIENDAS.ID_TIENDA=@idTienda
order by [num mes]
```
