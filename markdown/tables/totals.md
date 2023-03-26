---
Position: 5
Title: Totales
---

Se puede añadir una fila de totales estableciendo la propiedad `SummaryType`:

``` grid
GRID
    [APPEARANCE](alternateColumns=YES, FocusRow=YES ,MulticolumnSort=YES)
    [search panel]
    [grid column](Name='País', [value]=País,Alignment='Center')
    [grid column](Name='TIENDA', [value]=Tienda, SummaryType='count', DisplayFormat='Tiendas: {0}')
    [grid column](Name='Ventas', format='N0',[value]=Importe,SummaryType='sum')
    [grid column](Name='Ventas Min', format='N2', [value]=Importe,SummaryType='min')
    [grid column](Name='Ventas Max', format='C0', [value]=Importe,SummaryType='max')
    [grid column](Name='%', [value]=+round(pct,3), format='P1',SummaryType='sum')
SELECT top 5 País,Tienda,Importe,pct(importe) [pct]
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Importe desc
```
