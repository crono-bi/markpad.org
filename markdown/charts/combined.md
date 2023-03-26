---
Position: 4
Title: "Gráficos combinados"
---


## Gráficos combinados

Es posible combinar gráficos de distinto tipo utilizando el eje Y secudario si es preciso.


``` chart
CHART 
  HEADER(Title='Gráfico combinado')
  [x axis](Visible=YES, gridVisible=NO, Name='Años')
  [Y axis](Visible=YES, gridVisible=NO, name='Importe €', BegintAtZero=YES)
  [Y axis](Visible=YES, gridVisible=NO, name='Objetivo', BegintAtZero=YES, step=5000)
  SERIE(Type='Bar',[Value]=Imp, Name='Importe (M€)')
  SERIE(Type='Line',[Value]=Obj, SecondaryAxis=YES, Name='Objetivo (M€)')
  LEGEND(Position='bottom')
SELECT 
  Año,
  Importe/1000 Imp,
  Objetivo/1000 Obj
FROM DATABASE [Demo Crono Pad] 
where año>=2010 and País='España'
order by Año
```

También se pueden combinar gráficos de barra apilados con gráficos de líneas.

``` chart
CHART 
  HEADER(Title='Gráfico combinado')
  [x axis](Visible=YES, Name='Años')
  [Y axis](Visible=YES, gridVisible=NO, name='Importe €', BegintAtZero=YES)
  [Y axis](Visible=YES, name='Objetivo', BegintAtZero=YES, step=5000)
  SERIE(Type='StackedBar',[Value]=Imp, Name='Importe 1 (M€)')
  SERIE(Type='StackedBar',[Value]=Imp, Name='Importe 2 (M€)')
  SERIE(Type='Line',[Value]=Obj, SecondaryAxis=YES, Name='Objetivo (M€)')
  LEGEND(Position='bottom')
SELECT 
  Año,
  Importe/1000 Imp,
  Objetivo/1000 Obj
FROM DATABASE [Demo Crono Pad] 
where año>=2010 and País='España'
order by Año
```


