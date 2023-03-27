---
Title: Layout
Position: 3
---

# Layout

**Crono Pad** permite incluir rejillas utilizando la funcionalidad de Grid CSS. Esto permite construir un *layout* para el contenido del documento, pudiendo distribuir las gráficas y tablas convenientemente.


::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/layout/README.md)
:::


A continuación se muestra ina disposición en 3 columnas. Se han añadido algunas propiedades CSS para que se identifique mejor cada una de las celdas de la rejilla.

||| [Container]([Columns]=3) Item (BackgroundColor='#a0a0c5')

Este es la primera celda.

||| Item (BackgroundColor='#b4c5a0')

Esta es la segunda celda.


||| Item (BackgroundColor='#e98748')

Esta es la tercera celda.

|||/


Crono Pad ofrece flexibilidad para añadir propiedades CSS tanto al contenedor o a cualquiera de las celdas. Se puede asignar directamente la propiedad `style` de CSS, pero se puede utilizar una sintaxis más sencilla asignando directamente propiedades como `MinHeight`, `BackgroundColor`, `gap`, `border`, `Padding`.



||| [Container]([Columns]=3, MinHeight='100px', BackgroundColor='red', gap='10px') Item (BackgroundColor='#a0a0c5', Padding='3px', Border='1px solid black')

Este es la primera celda.

||| Item (BackgroundColor='#a0a0c5', Padding='3px', Border='1px solid black')

En esta segunda celda.

||| Item (BackgroundColor='#a0a0c5', Padding='3px', Border='1px solid black')

Esta es la tercera celda.

||| Item (BackgroundColor='#b4c5a0', Padding='3px', Border='1px solid black')

Este es la cuarta celda.

||| Item (BackgroundColor='#a0a0c5', Padding='3px', Border='1px solid black')

Esta es la quinta celda.

||| Item (BackgroundColor='#a0a0c5', Padding='3px', Border='1px solid black')

Esta es la sexta celda.

|||/


Se pueden definir columnas de distintos tamaños y se puede especificar el `GridRow` o `GridColumn` para que las celdas ocupen varios espacios.


||| [Container]([Columns]='200px auto', MinHeight='100px', BackgroundColor='red', gap='10px') Item (BackgroundColor='#a0a0c5', Padding='3px', Border='1px solid black')

Este es la primera celda.

||| Item (BackgroundColor='#a0a0c5', Padding='3px', Border='1px solid black', GridRow='span 2')

Esta es la segunda celda.

||| Item (BackgroundColor='#a0a0c5', Padding='3px', Border='1px solid black')

Esta es la tercera celda.


|||/

Por supuesto, dentro de las celdas se pueden colocar tablas, gráficos o cualquier otro elemento markdown.

||| [Container]([Columns]='300px auto', gap='25px')


``` grid
GRID
    [grid column](Name='Mes', [value]=Mes, SortValue=[Num Mes], AllowHeaderFiltering=YES)
    [grid column](Name='Unidades', [value]=Unidades,SummaryType='sum')
    [grid column](Name='Importe', [value]=Importe,SummaryType='sum', format='C2', AllowSorting=NO)
SELECT
    LB_TIEMPO.NOMBRE_MES AS Mes,
    LB_TIEMPO.MES AS [Num Mes],
    sum(LB_VENTAS2.UNIDADES) AS Unidades,
    sum(LB_VENTAS2.PVP) AS Importe
FROM dbo.LB_VENTAS_DIARIAS LB_VENTAS2
INNER JOIN dbo.LB_TIEMPO LB_TIEMPO USING FECHA
ORDER BY [Num Mes]
```

|||


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


|||/
