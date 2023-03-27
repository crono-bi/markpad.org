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

``` chart
CHART 
  HEADER(Title='Gráfico de barras con 1 indicador')
  ARGUMENT([Value]=Tienda)
  SERIE(Type='Bar',[Value]=Importe)
  LEGEND(Position='righttop')
SELECT Tienda,Unidades,Importe 
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Tienda
```

Se pueden crear gráficos de barra con varios indicadores.


``` chart
CHART 
  HEADER(Title='Gráfico de barras con 2 indicadores')
  ARGUMENT([Value]=Tienda)
  SERIE(Type='Bar',[Value]=Importe)
  SERIE(Type='Bar',[Value]=Objetivo)
  LEGEND(Position='topright')
SELECT Tienda,Unidades,Importe,Objetivo
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Tienda
```


Es posible ocultar los ejes o el grid.


``` chart
CHART 
  HEADER(Title='Ejes y grids ocultos')
  [x axis](Visible=NO, gridVisible=NO)
  [Y axis](Visible=NO, gridVisible=NO)
  SERIE(Type='Bar',[Value]=Importe)
  SERIE(Type='Bar',[Value]=Objetivo)
  LEGEND(Position='rightbottom')
SELECT Año,Unidades,Importe,Objetivo
FROM DATABASE [Demo Crono Pad] 
where año>=2010 and País='España'
order by Año
```


También se puede añadir un nombre a los ejes.


``` chart
CHART 
  HEADER(Title='Nombres de los ejes',subtitle='Esto es un subtitulo')
  [x axis](Visible=YES, gridVisible=NO, Name='Años')
  [Y axis](Visible=YES, gridVisible=NO, name='Importe €')
  SERIE(Type='Bar',[Value]=Importe)
  SERIE(Type='Bar',[Value]=Objetivo)
  LEGEND(Position='leftbottom', Visible=NO)
SELECT Año,Unidades,Importe,Objetivo
FROM DATABASE [Demo Crono Pad] 
where año>=2010 and País='España'
order by Año
```

## Barras apiladas

Es posible construir gráficos de barras apiladas.


``` chart
CHART 
  HEADER(Title='Gráfico de barras apiladas')
  legend(Visible=NO)
  [y axis](Name='Importe')
  SERIE(Type='StackedBar',[Value]=[Ventas 2011])
  SERIE(Type='StackedBar',[Value]=[Ventas 2012])
SELECT  
    Tienda,
    Importe  where (año=2011) [Ventas 2011],
    Importe  where (año=2012) [Ventas 2012]
FROM DATABASE [Demo Crono Pad] 
where país='ESPAÑA' order by Tienda
```

También se pueden definir barras completamente apiladas (*full stacked*).


``` chart
CHART 
  HEADER(Title='Gráfico de barras completamente apiladas')
  legend(Visible=NO)
  [y axis](Name='Importe')
  SERIE(Type='FullStackedBar',[Value]=[Ventas 2011])
  SERIE(Type='FullStackedBar',[Value]=[Ventas 2012])
SELECT  
    Tienda,
    Importe  where (año=2011) [Ventas 2011],
    Importe  where (año=2012) [Ventas 2012]
FROM DATABASE [Demo Crono Pad] 
where país='ESPAÑA' order by Tienda
```

Se puede definir distintas *pilas* para que se agrupen las barras según las necesidades.


``` chart
CHART 
    HEADER(Title='Dos apilados distintos')
    legend(Visible=YES)
    [y axis](Name='Importe')
    SERIE(Type='StackedBar',Stack='Ventas' ,[Value]=[Ventas 2011])
    SERIE(Type='StackedBar',Stack='Ventas' ,[Value]=[Ventas 2012])
    SERIE(Type='StackedBar',[Value]=[Objetivo 2011])
    SERIE(Type='StackedBar',[Value]=[Objetivo 2012])
SELECT  
    Tienda,
    Importe  where (año=2011) [Ventas 2011],
    Importe  where (año=2012) [Ventas 2012],
    Objetivo where (año=2011) [Objetivo 2011],
    Objetivo where (año=2012) [Objetivo 2012]                
FROM DATABASE [Demo Crono Pad] 
where 
    país='ESPAÑA' 
    and año in (2011,2012)
order by Tienda
```

También se pueden apilar únicamente algunos indicadores (y otros no).

``` chart
CHART 
    HEADER(Title='El objetivo no está apilado')
    legend(Visible=YES)
    [y axis](Name='Importe')
    SERIE(Type='StackedBar',[Value]=[Ventas 2011])
    SERIE(Type='StackedBar',[Value]=[Ventas 2012])
    SERIE(Type='Bar',[Value]=Objetivo)
SELECT  
    Tienda,
    Importe  where (año=2011) [Ventas 2011],
    Importe  where (año=2012) [Ventas 2012],
    Objetivo
FROM DATABASE [Demo Crono Pad] 
where 
    país='ESPAÑA' 
    and año in (2011,2012)
order by Tienda
```

## Barras horizontales

Se puede girar el gráfico para construir gráficos de barras horizontales.

``` chart
CHART 
    ARGUMENT([Value]=Tienda)
    SERIE(Type='HorizontalBar',[Value]=Importe)
    [x axis](Name='Ventas', step=1000000)
    [Y axis](Name='TOP 5 Tiendas')
SELECT top 6 Tienda,Unidades,Importe 
FROM DATABASE [Demo Crono Pad] 
where año=2012 order by Importe desc
```

También se pueden construir barras horizontales con varios indicadores.

``` chart
CHART 
  HEADER(Title='Gráfico de barras horizontales con 2 indicadores')
  ARGUMENT([Value]=Tienda)
  SERIE(Type='HorizontalBar',[Value]=Importe)
  SERIE(Type='HorizontalBar',[Value]=Objetivo)
  LEGEND(Position='righttop')
SELECT top 5 Tienda,Unidades,Importe,Objetivo
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Importe desc
```

            


## Barras horizontales apiladas

Se pueden construir barras horizontales apiladas.

``` chart
CHART 
  HEADER(Title='Gráfico de barras horizontales apiladas')
  ARGUMENT([Value]=Tienda)
  SERIE(Type='StackedHorizontalBar',[Value]=Importe)
  SERIE(Type='StackedHorizontalBar',[Value]=Objetivo)
  [x axis](Name='Importe de ventas')
  [y axis](Name='Tiendas')
  LEGEND(Position='righttop')
SELECT top 5 Tienda,Unidades,Importe,Objetivo
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='ESPAÑA'
order by Importe desc
```

También puede estar las barras horizontales completamente apiladas.


``` chart
CHART 
  HEADER(Title='Gráfico de barras horizontales apiladas')
  ARGUMENT([Value]=Tienda)
  SERIE(Type='FullStackedHorizontalBar',[Value]=Importe)
  SERIE(Type='FullStackedHorizontalBar',[Value]=Objetivo)
  [x axis](Name='Importe de ventas')
  [y axis](Name='Tiendas')
  LEGEND(Position='righttop')
SELECT top 5 Tienda,Unidades,Importe,Objetivo
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='ESPAÑA'
order by Importe desc
```
