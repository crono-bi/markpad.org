---
Position: 4
Title: "Gráficos combinados"
---

# Gráficos combinados

Es posible combinar gráficos de distinto tipo utilizando el eje Y secudario si es preciso.


::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/charts/combined.md)
:::




``` data
CHARTT (ChartType='Bar')
HEADER (Title='Gráfico combinado')
LEGEND (Visible=YES, Position='Bottom')
[DATA COLUMN] (Name='Año', [Value]=EXPRESSION ([Año|DoPLIxSw]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Objetivo', [Value]=EXPRESSION ([Objetivo|RUsyRowA]))
```


También se pueden combinar gráficos de barra apilados con gráficos de líneas.

``` data
CHARTT (ChartType='StackedBar')
HEADER (Title='Gráfico combinado')
LEGEND (Visible=YES, Position='Bottom')
[DATA COLUMN] (Name='Año', [Value]=EXPRESSION ([Año|DoPLIxSw]))
[DATA COLUMN] (Name='Importe',Stack='Ventas', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Importe',Stack='Ventas', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Objetivo', [Value]=EXPRESSION ([Objetivo|RUsyRowA]))
```

