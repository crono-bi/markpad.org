---
Title: "Gráficos"
Position: 1
---


# Tipos de gráficos

En este apartado se explican los tipos de gráfico soportados actualmente:

- Gráficos de barra
- Gráficos de línea
- Gráficas de tarta

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




::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/charts/README.md)
:::
