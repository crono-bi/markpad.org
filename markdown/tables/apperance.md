---
Position: 4
Title: Aspecto
---


# Personalización del aspecto

Se puede modificar el aspecto de la tabla con las siguientes propiedades:

 * AlternateColumns
 * ShowBorders
 * ShowColumnLines
 * ShowRowLines
 * FocusRow
 * AllowSorting
 * MulticolumnSort


::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/tables/apperance.md)
:::


``` grid
GRID
    [APPEARANCE](alternateColumns=YES, ShowColumnLines=YES, ShowRowLines=YES,FocusRow=YES ,MulticolumnSort=YES, AllowSorting=YES)
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

También se puede personalizar la alineación y el formato de las columnas con estas propiedades:

- Alignment
- DataType
- Format


``` grid
GRID
    [APPEARANCE](alternateColumns=YES, ShowColumnLines=YES, ShowRowLines=YES,FocusRow=YES ,MulticolumnSort=YES, AllowSorting=NO)
    [search panel]
    [grid column](Name='País', [value]=País,Alignment='Center')
    [grid column](Name='TIENDA', [value]=Tienda,Alignment='right')
    [grid column](Name='Ventas', [value]=Importe,Alignment='left', format='C1')
    [grid column](Name='%', [value]=+round(pct,3), format='percent')
SELECT top 5 País,Tienda,Importe,pct(importe) [pct]
FROM DATABASE [Demo Crono Pad] 
where año=2012 and País='España'
order by Importe desc
```
