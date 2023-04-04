---
Position: 7
---

# Secciones

Una sección es un contenido que se repite para cada uno de los valores de una lista. De este modo, podemos construir una gráfica para cada país, por ejemplo.

::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/sections/README.md)
:::


A continuación se muestran las ventas de las tiendas de cada país

{{{SECTION}}}

``` SELECT distinct Pais FROM LB_TIENDAS ORDER BY PAIS ```

## {{@Pais}}


``` chart
CHART 
  HEADER(Title='Ventas')
  ARGUMENT([Value]=Tienda)
  SERIE(Type='Bar',[Value]=Importe)
  LEGEND(Position='righttop')
SELECT Tienda,Unidades,Importe 
FROM DATABASE [Demo Crono Pad] 
where País=@Pais
order by Tienda
```

{{{END SECTION}}}



También se pueden crear subsecciones. Es decir, dentro de una sección se puede crear otra para mostrar los datos año a año, por ejemplo.