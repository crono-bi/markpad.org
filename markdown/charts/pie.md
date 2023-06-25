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



``` data
CHARTT (ChartType='Pie')
HEADER (Title='Gráfico de tarta')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA FILTER] ([Value]=EXPRESSION ([Año|DoPLIxSw]=2012))
```


Se pueden incluir varias series en un gráfico de tartas.


``` data
CHARTT (ChartType='Pie')
HEADER (Title='Gráfico de tarta con 2 series')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Importe 2011', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2011)))
[DATA COLUMN] (Name='Importe 2012', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2012)))
```


## Gráfico de donut


El tipo de gráfico `Donut` proporciona este aspecto al gráfico.


``` data
CHARTT (ChartType='Donut')
HEADER (Title='Gráfico de donut')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Importe', [Value]=EXPRESSION ([Importe|vxbOrRSR]))
[DATA FILTER] ([Value]=EXPRESSION ([Año|DoPLIxSw]=2012))
```

Se pueden incluir varias series en un gráfico donut.



``` data
CHARTT (ChartType='Donut')
HEADER (Title='Gráfico de donut con 2 series')
[CHART APPEARANCE] (AnimateChart=YES)
LEGEND (Visible=YES)
[DATA COLUMN] (Name='País', [Value]=EXPRESSION ([País|tlkjfKSm]))
[DATA COLUMN] (Name='Importe 2011', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2011)))
[DATA COLUMN] (Name='Importe 2012', [Value]=EXPRESSION ([Importe|vxbOrRSR] WHERE ([Año|DoPLIxSw]=2012)))
```