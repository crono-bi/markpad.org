---
Variables: ["Pais", "Anyo"]
---

# Variables

Se pueden definir y usar variables en una página de **Crono Pad**. Para ello solo hace falta definirlos en la cabecera del fichero y luego emplearlas como variables SQL.

Este fichero tiene esta cabecera:

```
---
Variables: ["Pais", "Anyo"]
---
```

Si una página tiene variables definidas aparece un menú en la parte superior para permitir seleccionar los valores. La página se actualizará reflejando los valores seleccionados.



``` grid
GRID
    [APPEARANCE](alternateColumns=YES, ShowColumnLines=YES, ShowRowLines=YES,FocusRow=YES)
    [grid column](Name='País', [value]=País)
    [grid column](Name='TIENDA', [value]=Tienda)
    [grid column](Name='Ventas', [value]=Importe)
    [grid column](Name='%', [value]=pct, format='P1')
SELECT País,Tienda,Importe,pct(importe) [pct]
FROM DATABASE [Demo Crono Pad] 
where País=@Pais and año=@anyo
order by Importe desc
```
