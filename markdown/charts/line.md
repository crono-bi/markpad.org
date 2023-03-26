---
Position: 2
---

# Gráficos de línea

En esta página se muestra mediante ejemplos los gráficos de líneas que es posible crear con **Crono Pad**.

## Gráficos de línea

Por defecto los gráficos de línea no muestran el zero.

``` chart
CHART 
  HEADER(Title='Gráfico de lineas')
  [x axis](Visible=YES, gridVisible=NO, Name='Años')
  [Y axis](Visible=YES, gridVisible=NO, name='Importe €')
  SERIE(Type='Line',[Value]=Importe)
  SERIE(Type='Line',[Value]=Objetivo)
  LEGEND(Position='bottomleft')
SELECT Año,Unidades,Importe,Objetivo
FROM DATABASE [Demo Crono Pad] 
where año>=2010 and País='España'
order by Año
```

Pero se puede cambiar este comportamiento estableciendo la propiedad `BegintAtZero`


``` chart
CHART 
  HEADER(Title='Gráfico de lineas')
  [x axis](Visible=YES, gridVisible=NO, Name='Años')
  [Y axis](Visible=YES, gridVisible=NO, name='Importe €', BegintAtZero=YES)
  SERIE(Type='Line',[Value]=Importe)
  SERIE(Type='Line',[Value]=Objetivo)
  LEGEND(Position='bottomleft')
SELECT Año,Unidades,Importe,Objetivo
FROM DATABASE [Demo Crono Pad] 
where año>=2010 and País='España'
order by Año
```

## Gráficos de líneas curvas

Se pueden hacer el gráfico con líneas curvas urilizaddo el tipo de gráfico `Spline`.

``` chart
CHART 
    HEADER(Title='Vienen curvas')
    legend(Visible=YES)
    argument([Value]=Mes)
    SERIE(Type='Spline',[Value]=[Ventas 2011])
SELECT  
    [Num Mes],
    Mes,
    Importe  where (año=2011) [Ventas 2011]
FROM DATABASE [Demo Crono Pad] 
where 
    país='ESPAÑA' 
order by [Num Mes]
```

