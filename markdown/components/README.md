---
Title: Componentes
Position: 4
---

**Crono Pad** permite definir "componentes" para reutilizar el código entre distintas páginas.

::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/components/README.md)
:::

Los componentes se definen creando un fichero Markdown dentro de la carpeta `Resouces/Components`. 


Por ejemplo, este el el contenido del componente `warning.md`:

```
<div class="custom-block warning">
  <p class="custom-block-title">Aviso</p>

  $SLOT$

</div>
```

Una vez definido el componente en la carpeta *Components* es fácil incluirlo tantas veces como sea necesario en cualquier página del proyecto.



::: warning
El código Markdown permite incluir también etiquetas HTML, por lo que con un poco de conocimiento de HTML resulta sencillo crear elementos reutilizables como este.
:::


::: warning
Utiliza la palabra `$SLOT$` dentro del componente para personalizar el contenido del componente.
:::
