---
Position: 3
Title: "Gráficos de área"
---



## Gráficos de área


Los gráficos de área por defecto muestran el cero, aunque se puede cambiar este comportamiento con la propiedad `BegintAtZero`.

``` chart
CHART 
  HEADER(Title='Gráfico de áreas')
  [x axis](Visible=YES, gridVisible=NO, Name='Años')
  [Y axis](Visible=YES, gridVisible=NO, name='Importe €', BegintAtZero=YES)
  SERIE(Type='Area',[Value]=Importe)
  LEGEND(Position='bottom')
SELECT Año,Unidades,Importe
FROM DATABASE [Demo Crono Pad] 
where año>=2010 and País='España'
order by Año
```

El tipo de gráfico `SplineArea` muestra las áreas empleando líneas curvas.


``` chart
CHART 
    HEADER(Title='Área curva')
    legend(Visible=YES)
    argument([Value]=Mes)
    SERIE(Type='SplineArea',[Value]=[Ventas 2011])
SELECT  
    [Num Mes],
    Mes,
    Importe  where (año=2011) [Ventas 2011]
FROM DATABASE [Demo Crono Pad] 
where 
    país<>'ESPAÑA' 
order by [Num Mes]
```


## Gráficos de áreas apiladas

El tipo de gráfico `StackedArea` permite hacer gráficos de área apiladas.

``` chart
CHART
    HEADER(Title='Ventas apiladas')
    legend(Visible=YES)
    [y axis](Name='Importe')
    SERIE(Type='StackedArea',[Value]=[Ventas 2011])
    SERIE(Type='StackedArea',[Value]=[Ventas 2012])
SELECT  
    Tienda,
    Importe  where (año=2011) [Ventas 2011],
    Importe  where (año=2012) [Ventas 2012],
    calculate [Ventas 2011]+[Ventas 2012] total
FROM DATABASE [Demo Crono Pad] 
where 
    país<>'ESPAÑA' 
    and año in (2011,2012)
order by total desc
```


El tipo de gráfico `StackedSplineArea` permite hacer gráficos de área curvas completamente apiladas.

``` chart
CHART 
    HEADER(Title='Ventas apiladas curvas')
    legend(Visible=YES)
    [y axis](Name='Importe')
    SERIE(Type='StackedSplineArea',[Value]=[Ventas 2011])
    SERIE(Type='StackedSplineArea',[Value]=[Ventas 2012])
SELECT  
    Tienda,
    Importe  where (año=2011) [Ventas 2011],
    Importe  where (año=2012) [Ventas 2012],
    calculate [Ventas 2011]+[Ventas 2012] total
FROM DATABASE [Demo Crono Pad] 
where 
    país<>'ESPAÑA' 
    and año in (2011,2012)
order by total desc
```

## Gráficos de áreas completamente apiladas

El tipo de gráfico `FullStackedArea` permite hacer gráficos de área completamente apiladas.

``` chart
CHART 
    HEADER(Title='Ventas apiladas')
    legend(Visible=YES, position='topright')
    [y axis](Name='Importe')
    SERIE(Type='FullStackedArea',[Value]=[Ventas 2011])
    SERIE(Type='FullStackedArea',[Value]=[Ventas 2012])
SELECT  
    Tienda,
    Importe  where (año=2011) [Ventas 2011],
    Importe  where (año=2012) [Ventas 2012],
    calculate [Ventas 2011]+[Ventas 2012] total
FROM DATABASE [Demo Crono Pad] 
where 
    país<>'ESPAÑA' 
    and año in (2011,2012)
order by total desc
```
El tipo de gráfico `FullStackedSplineArea` permite hacer gráficos de área curvas completamente apiladas.


``` chart
CHART 
    HEADER(Title='Ventas apiladas curvas')
    legend(Visible=YES, position='top')
    [y axis](Name='Importe')
    SERIE(Type='FullStackedSplineArea',[Value]=[Ventas 2011])
    SERIE(Type='FullStackedSplineArea',[Value]=[Ventas 2012])
SELECT  
    Tienda,
    Importe  where (año=2011) [Ventas 2011],
    Importe  where (año=2012) [Ventas 2012],
    calculate [Ventas 2011]+[Ventas 2012] total
FROM DATABASE [Demo Crono Pad] 
where 
    país<>'ESPAÑA' 
    and año in (2011,2012)
order by total desc
```
