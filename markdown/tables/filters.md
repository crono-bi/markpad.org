---
Position: 3
---


# Filtros

El elemento `[HEADER FILTER]` añade un icono en la cabecera de cada columna para permitir filtrar los valores de la tabla.



::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/tables/filters.md)
:::


``` grid
 GRID
    [HEADER FILTER]
    [grid column](Name='País', [value]=País)
    [grid column](Name='TIENDA', [value]=Tienda)
    [grid column](Name='Ventas', [value]=Importe)
    [grid column](Name='%', [value]=+round(pct,3))
SELECT top 5 País,Tienda,Importe,pct(importe) [pct]
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Importe desc
```

Por supuesto, se pueden combinar el panel de búsqueda, la fila de búsqueda y los filtros de cabecera en una misma tabla.


``` grid
 GRID
    [search panel](Text='Search...', width=600, Visible=YES)
    [HEADER FILTER]
    [FILTER ROW]
    [grid column](Name='País', [value]=País)
    [grid column](Name='TIENDA', [value]=Tienda)
    [grid column](Name='Ventas', [value]=Importe)
    [grid column](Name='%', [value]=+round(pct,3))
SELECT top 5 País,Tienda,Importe,pct(importe) [pct]
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Importe desc
```
