---
Position: 2
---

# Gráficos de línea

En esta página se muestra mediante ejemplos los gráficos de líneas que es posible crear con **Crono Pad**.

::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/charts/line.md)
:::


## Gráficos de línea

Por defecto los gráficos de línea no muestran el zero.


``` data
CHARTT (ChartType='Line')
HEADER (Title='Gráfico de líneas')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[X AXIS] (Name='Importe €', Visible=YES, GridVisible=YES)
[Y AXIS] (Name='Años', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='Año', [Value]=EXPRESSION ([Año|DoPLIxSw]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Objetivo', [Value]=EXPRESSION ([Objetivo|RUsyRowA]))
```



Pero se puede cambiar este comportamiento estableciendo la propiedad `BegintAtZero`


``` data
CHARTT (ChartType='Line')
HEADER (Title='Gráfico de líneas')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[X AXIS] (Name='Importe €', Visible=YES, GridVisible=YES)
[Y AXIS] (Name='Años', Visible=YES, GridVisible=YES, BeginAtZero=YES)
[DATA COLUMN] (Name='Año', [Value]=EXPRESSION ([Año|DoPLIxSw]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Objetivo', [Value]=EXPRESSION ([Objetivo|RUsyRowA]))
```



## Gráficos de líneas curvas

Se pueden hacer el gráfico con líneas curvas urilizaddo el tipo de gráfico `Spline`.

``` data
CHARTT (ChartType='Spline')
HEADER (Title='Gráfico de líneas curvas')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[X AXIS] (Name='Importe €', Visible=YES, GridVisible=YES)
[Y AXIS] (Name='Años', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='Año', [Value]=EXPRESSION ([Año|DoPLIxSw]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Objetivo', [Value]=EXPRESSION ([Objetivo|RUsyRowA]))
```

