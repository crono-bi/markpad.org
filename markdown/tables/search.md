---
Position: 2
Title: Búsqueda
---


## Panel de búsqueda

El elemento `[SEARCH PANEL]`añade un buscador en la parte superior de la tabla que permite buscar un texto en toda la tabla.


::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/tables/search.md)
:::


``` grid
 GRID
    [search panel]
    [grid column](Name='País', [value]=País)
    [grid column](Name='TIENDA', [value]=Tienda)
    [grid column](Name='Ventas', [value]=Importe)
    [grid column](Name='%', [value]=+round(pct,3))
SELECT top 5 País,Tienda,Importe,pct(importe) [pct]
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Importe desc
```

## Fila de búsqueda

El elemento `[FILTER ROW]` añade una fila debajo de la cabecera que permite realizar un búsqueda dentro de cualquier columna.



``` grid
 GRID
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
