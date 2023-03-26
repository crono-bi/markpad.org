---
Sidebar: NO
---

# Bienvenido

**Crono Pad** es un generador de aplicaciones web a partir de código **Markdown**. A diferencia de otros productos, **Crono Pad** está especializado en la construcción de aplicaciones web de datos, ya sean cuadros de mando, informes estéticos, simples listados o paneles de información.

## Markdown

**Markdown** es un lenguaje sencillo que se utiliza para formatear texto de forma sencilla y fácil de leer. Fue creado por John Gruber en 2004 con el objetivo de proporcionar una forma de escribir documentos que sean fáciles de leer y de escribir, y que puedan convertirse fácilmente en HTML.

En Markdown, el texto se escribe utilizando una serie de símbolos que indican cómo se debe formatear el texto. Por ejemplo, un asterisco (*) alrededor de una palabra o frase indica que debe ser enfatizada (como en **negrita** o *cursiva*).

Markdown también permite crear títulos, listas con viñetas, enlaces, imágenes, bloques de código y mucho más, todo con una sintaxis simple y fácil de recordar.

Una de las ventajas de Markdown es que es fácil de aprender y utilizar, y se puede escribir en cualquier editor de texto simple. Además, muchos sitios web y plataformas, como GitHub, Reddit y Stack Overflow, admiten Markdown para formatear el texto de manera sencilla y rápida. 


## Markdown para aplicaciones de datos

Hay otras aplicaciones y generadores web que utilizan Markdown para convertir código Markdown en una página web. Algunas de las más populares son **Jekyll**, **Vuepress**, **Hugo**, **Gatsby** o **MkDocs**, cada uno con sus propias características y funcionalidades. Son aplicaciones muy útiles que se utilizan típicamente para escribir *blogs*, documentación técnica, o en general contenido fundamentalmente textual.

La diferencia de **Crono Pad** frente a esos otros productos es su especialización en aplicaciones de datos. **Crono Pad** permite incluir gráficos complejos y tablas con funcionalidades avanzadas dentro del mismo documento Markdown. El objetivo es facilitar la construcción de este tipo de aplicación especializada rápidamente y poder la información desde la base de datos hasta la web con facilidad, incluyendo tablas y gráficos complejos, y sin necesidad de programación.

**Crono Pad** se apoya en el lenguaje **Crono SQL** para extraer la información requerida de la base de datos.

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

Esta página de **Crono Pad** se ha escrito íntegramente utilizando **Crono Pad**. Todo el código fuente está disponible en el repositorio de Github del proyecto.

En el resto de apartados se describen las características del Markdown de **Crono Pad** y se muestran ejemplos de todas sus características.