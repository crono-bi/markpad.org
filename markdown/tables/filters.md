---
Position: 3
---


# Filtros

El elemento `[HEADER FILTER]` añade un icono en la cabecera de cada columna para permitir filtrar los valores de la tabla.



::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/tables/filters.md)
:::




``` data
APPEARANCE (ShowRowLines=YES)
[SEARCH PANEL] (SearchPanelVisible=NO, Text='Búsqueda...', Width=240, AllowColumnFiltering=YES, FilterRowVisible=NO)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Porcentaje Importe', [Value]=EXPRESSION (pct([Importe|vxbOrRSR])))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
```

Por supuesto, se pueden combinar el panel de búsqueda, la fila de búsqueda y los filtros de cabecera en una misma tabla.

``` data
APPEARANCE (ShowRowLines=YES)
[SEARCH PANEL] (SearchPanelVisible=YES, Text='Búsqueda...', Width=240, AllowColumnFiltering=YES, FilterRowVisible=YES)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Porcentaje Importe', [Value]=EXPRESSION (pct([Importe|vxbOrRSR])))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
```

