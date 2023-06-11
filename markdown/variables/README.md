---
Variables: ["Pais", "Anyo"]
Position: 5
---

# Variables

Se pueden definir y usar variables en una página de **Crono Pad**. Para ello solo hace falta definirlos en la cabecera del fichero y luego emplearlas como variables SQL.

::: recuerda
El código <strong>Crono Markdown</strong> utilizado para generar esta página está disponible en
el [repositorio Github del proyecto](https://github.com/bifacil/pad.crono.net/blob/master/markdown/variables/README.md)
:::

Este fichero tiene esta cabecera:

```
---
Variables: ["Pais", "Anyo"]
---
```

Si una página tiene variables definidas aparece un menú en la parte superior para permitir seleccionar los valores. La página se actualizará reflejando los valores seleccionados.


``` data
[search panel](SearchPanelVisible=NO, FilterRowVisible=YES)
[data column](Name='País', [value]=País)
[data column](Name='TIENDA', [value]=Tienda)
[data column](Name='Ventas', [value]=Importe) 
[data filter]([Value]=+(País=@Pais and year(fecha)=@anyo))
```

