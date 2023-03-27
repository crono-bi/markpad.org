---
Position: 5
---



# Gráfico de tarta

En esta página se muestra mediante ejemplos los gráficos de tarta que es posible crear con **Crono Pad**.


::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/charts/pie.md)
:::



El tipo de gráfica `Pie` sirve para construir gráficos de tarta.


``` chart
CHART 
  HEADER(Title='Gráfico de tarta')
  ARGUMENT([Value]=Tienda)
  SERIE(Type='Pie',[Value]=+round(100*[pct],1))
  LEGEND(Position='bottom')
SELECT top 5 Tienda,Importe,pct(importe) [pct]
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Importe desc
```

Se pueden incluir varias series en un gráfico de tartas.

``` chart
CHART 
  HEADER(Title='Gráfico de tarta')
  ARGUMENT([Value]=Tienda)
  SERIE(Type='Pie',[Value]=+round(100*[pct],1))
  SERIE(Type='Pie',[Value]=+round(120*[pct],1))
  LEGEND(Position='bottom')
SELECT top 5 Tienda,Importe,pct(importe) [pct]
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Importe desc
```

## Gráfico de donut


El tipo de gráfico `Donut` proporciona este aspecto al gráfico.

``` chart
CHART 
  HEADER(Title='Gráfico de donut')
  ARGUMENT([Value]=Tienda)
  SERIE(Type='Donut',[Value]=+round(100*[pct],1))
  LEGEND(Position='bottom')
SELECT top 5 Tienda,Importe,pct(importe) [pct]
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Importe desc
```

Se pueden incluir varias series en un gráfico donut.


``` chart
CHART 
  HEADER(Title='Donut con 2 series')
  ARGUMENT([Value]=Tienda)
  SERIE(Type='Donut',[Value]=+round(100*[pct],1))
  SERIE(Type='Donut',[Value]=+round(120*[pct],1))
  LEGEND(Position='bottom')
SELECT top 5 Tienda,Importe,pct(importe) [pct]
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Importe desc
```