---
Position: 6
Title: Ordenación personalizada
---


## Ordenación personalizada

Se puede especificar una ordenación personalizada sobre una columna para, por ejemplo, ordenar correctamente los meses.


::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/tables/sort.md)
:::


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