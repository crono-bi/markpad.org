---
Position: 1
Title: "Gráficos de barra"
---

# Gráficos de barra

En esta página se muestra mediante ejemplos los gráficos de barra que es posible crear con **Crono Pad**.

::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/charts/bar.md)
:::


## Gráficos de barra simples

Se pueden crear gráficos de barra de un indicador.


``` data
CHARTT (ChartType='Bar')
[CHART APPEARANCE] (AnimateChart=YES)
HEADER (Title='GRáfico de barras con 1 indicador')
LEGEND (Visible=YES)
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
```


Se pueden crear gráficos de barra con varios indicadores.


``` data
CHARTT (ChartType='Bar')
HEADER (Title='GRáfico de barras con 2 indicador')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES, Position='TopRight')
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Objetivo', [Value]=EXPRESSION ([Objetivo|RUsyRowA]))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
[DATA FILTER] ([Value]=EXPRESSION ([Año|DoPLIxSw]=2012))
```


Es posible ocultar los ejes o el grid.


``` data
CHARTT (ChartType='Bar')
HEADER (Title='Ejes y grid ocultos')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES, Position='RightBottom')
[X AXIS] (Visible=NO, GridVisible=NO)
[Y AXIS] (Visible=NO, GridVisible=NO)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Objetivo', [Value]=EXPRESSION ([Objetivo|RUsyRowA]))
[DATA FILTER] ([Value]=EXPRESSION ([Año|DoPLIxSw]=2012))
```



También se puede añadir un nombre a los ejes.

``` data
CHARTT (ChartType='Bar')
HEADER (Title='Nombre de los ejes', Subtitle='ESto es un subtítulo')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES, Position='RightBottom')
[X AXIS] (Name='Importe €', Visible=YES, GridVisible=YES)
[Y AXIS] (Name='Países', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Objetivo', [Value]=EXPRESSION ([Objetivo|RUsyRowA]))
[DATA FILTER] ([Value]=EXPRESSION ([Año|DoPLIxSw]=2012))
```


## Barras apiladas

Es posible construir gráficos de barras apiladas.



``` data
CHARTT (ChartType='StackedBar')
[CHART APPEARANCE] (AnimateChart=YES)
HEADER (Title='Gráfico de barras apiladas')
LEGEND (Visible=YES)
[Y AXIS] (Name='Importe €', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Año', [Value]=EXPRESSION ([Año|DoPLIxSw]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
[DATA FILTER] ([Value]=EXPRESSION ([Año|DoPLIxSw] IN (2011,2012)))
```

También se pueden definir barras completamente apiladas (*full stacked*).


``` data
CHARTT (ChartType='FullStackedBar')
HEADER (Title='Gráfico de barras completamente apiladas')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[Y AXIS] (Name='Importe €', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Año', [Value]=EXPRESSION ([Año|DoPLIxSw]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
[DATA FILTER] ([Value]=EXPRESSION ([Año|DoPLIxSw] IN (2011,2012)))
```

Se puede definir distintas *pilas* para que se agrupen las barras según las necesidades.



``` data
CHARTT (ChartType='StackedBar')
HEADER (Title='Dos apilados distintos')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Importe 2011', Stack='Ventas',[Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2011)))
[DATA COLUMN] (Name='Importe 2012', Stack='Ventas',[Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2012)))
[DATA COLUMN] (Name='Objetivo 2011', [Value]=EXPRESSION ([Objetivo|RUsyRowA] WHERE ([Año|DoPLIxSw]=2011)))
[DATA COLUMN] (Name='Objetivo 2012', [Value]=EXPRESSION ([Objetivo|RUsyRowA] WHERE ([Año|DoPLIxSw]=2012)))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
```



También se pueden apilar únicamente algunos indicadores (y otros no).

``` data
CHARTT (ChartType='StackedBar')
HEADER (Title='El objetivo no está apilado')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[DATA COLUMN] (Name='Tienda', [Value]=EXPRESSION ([Tienda|yhxAmCEr]))
[DATA COLUMN] (Name='Importe 2011', Stack='Ventas', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2011)))
[DATA COLUMN] (Name='Importe 2012', Stack='Ventas', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2012)))
[DATA COLUMN] (Name='Objetivo', [Value]=EXPRESSION ([Objetivo|RUsyRowA]))
[DATA FILTER] ([Value]=EXPRESSION ([Año|DoPLIxSw] IN (2011,2012)))
[DATA FILTER] ([Value]=EXPRESSION ([País|tlkjfKSm]='ESPAÑA'))
```


## Barras horizontales

Se puede girar el gráfico para construir gráficos de barras horizontales.


``` data
CHARTT (ChartType='HorizontalBar')
HEADER (Title='Bsrras horizontales')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[X AXIS] (Name='Años', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='Año', [Value]=EXPRESSION ([Año|DoPLIxSw]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
```



También se pueden construir barras horizontales con varios indicadores.

``` data
CHARTT (ChartType='HorizontalBar')
HEADER (Title='Barras horizontales con 2 indicadores')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[X AXIS] (Name='Años', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='Año', [Value]=EXPRESSION ([Año|DoPLIxSw]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA COLUMN] (Name='Objetivo', [Value]=EXPRESSION ([Objetivo|RUsyRowA]))
```

            


## Barras horizontales apiladas

Se pueden construir barras horizontales apiladas.


``` data
CHARTT (ChartType='StackedHorizontalBar')
HEADER (Title='Gráfico de barras apiladas')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[X AXIS] (Name='Países', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='País', [Value]=País)
[DATA COLUMN] (Name='Importe 2011', Stack='Ventas', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2011)))
[DATA COLUMN] (Name='Importe 2012', Stack='Ventas', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2012)))
```


También puede estar las barras horizontales completamente apiladas.


``` data
CHARTT (ChartType='FullStackedHorizontalBar')
[CHART APPEARANCE] (AnimateChart=YES)
HEADER (Title='Gráfico de barras completamente apiladas')
LEGEND (Visible=YES)
[X AXIS] (Name='Países', Visible=YES, GridVisible=YES)
[DATA COLUMN] (Name='País', [Value]=País)
[DATA COLUMN] (Name='Importe 2011', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2011)))
[DATA COLUMN] (Name='Importe 2012', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2012)))
```