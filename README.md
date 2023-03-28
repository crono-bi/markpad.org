---
Sidebar: NO
---

# Bienvenido

**Crono Pad** es un generador de aplicaciones web de datos, ya sean cuadros de mando, informes estéticos, simples listados o paneles de información.

**Crono Pad** permite:

- Construir páginas web estáticas que funcionan sin servidor (solo HTML/CSS/JS).
- Aplicaciones web que se conectan a una base de datos para mostrar información actualizada (con gráficos y tablas)
- Servicio API que puede ser llamado desde cualquier desarrollo propio (Vue, React, Angular, ...)


::: recuerda
El código fuente de una aplicación **Crono Pad** son ficheros de texto en **Markdown**.
:::

## Generador de aplicaciones

Hay otras aplicaciones y generadores web que utilizan Markdown para convertir código Markdown en una página web. Algunas de las más populares son **Jekyll**, **Vuepress**, **Hugo**, **Gatsby** o **MkDocs**, cada uno con sus propias características y funcionalidades. Son aplicaciones muy útiles que se utilizan típicamente para escribir *blogs*, documentación técnica, o en general contenido fundamentalmente textual.

La diferencia de **Crono Pad** frente a esos otros productos es su especialización en aplicaciones de datos. **Crono Pad** permite incluir gráficos complejos y tablas con funcionalidades avanzadas dentro del mismo documento Markdown. 

El objetivo es facilitar la construcción de este tipo de aplicaciones rápidamente y poder llevar la información desde la base de datos hasta la web con facilidad, incluyendo tablas y gráficos complejos, y sin necesidad de programación.

## Servidor Crono Pad

Las aplicaciones de **Crono Pad** no son necesariamente aplicaciones estáticas con código HTML pre-generado. Existe un servidor de **Crono Pad** que atiende las peticiones y genera HTML al momento, consultando la base de datos cuando sea necesario.

**Crono Pad** ofrece un front-end predeterminado que evita la necesidad de construir uno propio con *JavaScript/Typescript* ni usar ningún framework como *Vue*, *Angular* o *React*. Tampoco es necesario construir un *Backend* con *.Net*, *Java*, o *NodeJs*... **Crono Pad** elimina la necesidad de todas estas capas, agilizando el desarrollo, reduciendo los tiempos de puesta en producción, facilitando el mantenimiento y, en definitiva, eliminando la complejidad asociada a cualquier desarrollo web.

Sin embargo, **Crono Pad** es también un *API servidor de informes*, por lo que es posible llamar a *Crono Pad* y mostrar los gráficos y tablas dentro de cualquier desarrollo a medida con *Vue*, *Angular*, *React* o cualquier otro framework...


## Crono Business Intelligence

**Crono Pad** es un producto de **[Crono](https://businessintelligence.es)**. **Crono Pad** aprovecha la potencia del lenguaje **Crono SQL** para extraer la información requerida de la base de datos.

El siguiente gráfico se ha definido utilizando **Crono Pad**.


``` chart
CHART 
  HEADER(Title='Gráfico de barras apiladas')
  legend(Visible=NO)
  [y axis](Name='Importe')
  SERIE(Type='StackedBar',[Value]=[Ventas 2011])
  SERIE(Type='StackedBar',[Value]=[Ventas 2012])
SELECT  
    Tienda,
    Importe  where (año=2011) [Ventas 2011],
    Importe  where (año=2012) [Ventas 2012]
FROM DATABASE [Demo Crono Pad] 
where país='ESPAÑA' order by Tienda
```

La siguiente tabla permite ordenar los registros haciendo clic en la cabecera, realizar búsquedas, o filtrar la información. También se ha definido utilizando **Crono Pad**.


``` grid
GRID
  [SEARCH PANEL]  
  [HEADER FILTER]  
  [grid column](Name='País', [value]=País)
  [grid column](Name='TIENDA', [value]=Tienda)
  [grid column](Name='Importe', [value]=Importe, SummaryType='sum')
  [grid column](Name='Unidades', [value]=Unidades, SummaryType='sum')
  [grid column](Name='PVP', [value]=PVP)
select 
  país,
  tienda, 
  unidades,
  importe, 
  importe/unidades pvp
from database [Demo Crono Pad]
order by país,tienda
```

Esta página de **Crono Pad** se ha escrito íntegramente utilizando **Crono Pad**. Todo el código fuente está disponible en el [repositorio de Github del proyecto](https://github.com/bifacil/pad.crono.net).

::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/README.md)
:::

En el resto de apartados se describen las características del Markdown de **Crono Pad** y se muestran ejemplos de todas sus características.

- [Markdown](/markdown/)
- [Gráficos](/markdown/charts/)
- [Tablas](/markdown/tables/)
- [Layout](/markdown/layout/)
- [Componentes](/markdown/components/)

