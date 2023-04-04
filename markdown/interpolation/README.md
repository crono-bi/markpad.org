---
Title: Interpolación
Position: 6
---

# Interpolación de expresiones

La interpolación de expresiones SQL es una características de **Crono Pad** que permite agregar dinámicamente valores calculados en el texto de la web.

::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/interpolation/README.md)
:::

La interpolación se realiza mediante la sintaxis de doble llave **{&#8203;{  }&#8203;}** y permite que el resultado de la expresión se muestre en la vista de la aplicación. Por ejemplo, podemos escribir **{&#8203;{ 2+3 }&#8203;}** y se mostrará  **5** en nuestra página.

**Crono Pad** utiliza el potente motor de **Crono SQL** por lo que puede utilizarse cualquier fórmula o expresión propia de SQL o de Crono.

Algunos ejemplos:

- Año actual: **{{year(current_date)}}**
- Fecha actual: **{{format(current_date,'D','es')}}**
- Pi: **{{pi()}}**
- 1+2+3+4+5= **{{1+2+3+4+5}}**

La interpolación resulta útil para mostrar el valor actual de los parámetros o las variables definidas.


