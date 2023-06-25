---
Position: 2
Title: Búsqueda
---


## Panel de búsqueda

El elemento `[SEARCH PANEL]`añade un buscador en la parte superior de la tabla que permite buscar un texto en toda la tabla.


::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/tables/search.md)
:::



``` data
APPEARANCE (ShowRowLines=YES)
[SEARCH PANEL] (SearchPanelVisible=YES, Text='Búsqueda...', Width=240, AllowColumnFiltering=NO, FilterRowVisible=YES)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Porcentaje Importe', [Value]=EXPRESSION (pct(Importe)))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
```



## Fila de búsqueda

El elemento `[FILTER ROW]` añade una fila debajo de la cabecera que permite realizar un búsqueda dentro de cualquier columna.


``` data
APPEARANCE (ShowRowLines=YES)
[SEARCH PANEL] (SearchPanelVisible=YES, Text='Búsqueda...', Width=240, AllowColumnFiltering=NO, FilterRowVisible=NO)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Porcentaje Importe', [Value]=EXPRESSION (pct([Importe|vxbOrRSR])))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
```
