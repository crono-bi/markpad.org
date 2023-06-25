---
Position: 4
Title: Aspecto
---


# Personalización del aspecto

Se puede modificar el aspecto de la tabla con las siguientes propiedades:

 * ColumnAutoWidth
 * AllowColumnResizing
 * AllowColumnReordering
 * AlternateRowBackground
 * ShowBorders
 * ShowColumnLines
 * ShowRowLines
 * FocusRow
 * AllowSorting
 * MulticolumnSort


::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/tables/apperance.md)
:::


``` data
APPEARANCE (AlternateRowBackground=YES, ShowColumnLines=NO, ColumnAutoWidth=NO)
[SEARCH PANEL] (SearchPanelVisible=YES, Text='Búsqueda...', Width=240, AllowColumnFiltering=NO, FilterRowVisible=NO)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Porcentaje Importe', [Value]=EXPRESSION (pct([Importe|vxbOrRSR])))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
```


También se puede personalizar la alineación y el formato de las columnas con estas propiedades:

- Alignment
- DataType
- Format


``` data
APPEARANCE (AlternateRowBackground=YES, ShowColumnLines=NO, ColumnAutoWidth=NO)
[SEARCH PANEL] (SearchPanelVisible=YES, Text='Búsqueda...', Width=240, AllowColumnFiltering=NO, FilterRowVisible=NO)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Porcentaje Importe', [Value]=EXPRESSION (pct([Importe|vxbOrRSR])))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
```
