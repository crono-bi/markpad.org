---
Position: 3
Title: "Gráficos de área"
---

# Gráficos de área

En esta página se muestra mediante ejemplos los gráficos de área que es posible crear con **Crono Pad**.


::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/charts/area.md)
:::


## Gráficos de área simples


Los gráficos de área por defecto muestran el cero, aunque se puede cambiar este comportamiento con la propiedad `BegintAtZero`.


``` data
CHARTT (ChartType='Area')
[CHART APPEARANCE] (Palette='Office')
HEADER (Title='Gráfico de áreas simples')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[X AXIS] (Name='Importe €', Visible=YES, GridVisible=YES)
[Y AXIS] (Name='Años', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='Año', [Value]=EXPRESSION ([Año|DoPLIxSw]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
```


El tipo de gráfico `SplineArea` muestra las áreas empleando líneas curvas.



``` data
CHARTT (ChartType='SplineArea')
[CHART APPEARANCE] (Palette='Office')
HEADER (Title='Gráfico de áreas simples')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[X AXIS] (Name='Importe €', Visible=YES, GridVisible=YES)
[Y AXIS] (Name='Años', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='Año', [Value]=EXPRESSION ([Año|DoPLIxSw]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
```


## Gráficos de áreas apiladas

El tipo de gráfico `StackedArea` permite hacer gráficos de área apiladas.



``` data
CHARTT (ChartType='StackedArea')
HEADER (Title='Ventas apiladas')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[X AXIS] (Name='Países', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Importe 2011', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2011)))
[DATA COLUMN] (Name='Importe 2012', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2012)))
```


El tipo de gráfico `StackedSplineArea` permite hacer gráficos de área curvas completamente apiladas.


``` data
CHARTT (ChartType='StackedSplineArea')
[CHART APPEARANCE] (Palette='Office')
HEADER (Title='Ventas apiladas curvas')
LEGEND (Visible=YES)
[X AXIS] (Name='Países', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Importe 2011', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2011)))
[DATA COLUMN] (Name='Importe 2012', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2012)))
```



## Gráficos de áreas completamente apiladas

El tipo de gráfico `FullStackedArea` permite hacer gráficos de área completamente apiladas.


``` data
CHARTT (ChartType='FullStackedArea')
HEADER (Title='Ventas apiladas')
LEGEND (Visible=YES)
[X AXIS] (Name='Países', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Importe 2011', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2011)))
[DATA COLUMN] (Name='Importe 2012', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2012)))
```


El tipo de gráfico `FullStackedSplineArea` permite hacer gráficos de área curvas completamente apiladas.

``` data
CHARTT (ChartType='FullStackedSplineArea')
HEADER (Title='Ventas apiladas curvas')
LEGEND (Visible=YES)
[X AXIS] (Name='Países', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Importe 2011', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2011)))
[DATA COLUMN] (Name='Importe 2012', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2012)))
```
