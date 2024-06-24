
# Seven Segment Display

Para este mini proyecto use una matriz para definir el numero 
que pintara el componente

Primero separe los segmentes en "x" y "y"  
y les asigne una letra para diferenciarlos
## Ejemplo:

![Screenshot](https://res.cloudinary.com/dlekrzpoh/image/upload/v1719249479/uy4zkl2e0mfthpg1psdl.png)


#

Apartir de esto cree la matriz 


```javascript
 const [display, setDisplay] = useState([
    //X   a     b       c 
        [false, false, false],
    //Y   a     b     c      d
        [false, true, false, true]
])
```
En el ejemplo anterior para poder pintar el numero 1

Hay que establecer en true la posicion 1 de display que este caso seria Y y de esa la posicion hay que cambiar true a la posicion 1 y 3


## Static File

Para facilitar la conversion y poder mostrar de mejor manera el numero en el componente, cree un archivo statico con todas las posibles formas de hacerlos los numeros.


```typescript
const valuesSegments : valuesSegmentsType  = {
    0: [ // 0
        [true, false, true],
        [true, true, true, true]
    ],
    1: [ // 1
        [false, false, false],
        [false, true, false, true]
    ],
    2: [ // 2
        [true, true, true],
        [false, true, true, false]
    ],
    3: [ // 3
        [true, true, true],
        [false, true, false, true]
    ],
    4: [ // 4
        [false, true, false],
        [true, true, false, true]
    ],
    5: [ // 5
        [true, true, true],
        [true, false, false, true]
    ],
    6: [ // 6
        [true, true, true],
        [true, false, true, true]
    ],
    7: [ // 7
        [true, false, false],
        [false, true, false, true]
    ],
    8: [ // 8
        [true, true, true],
        [true, true, true, true]
    ],
    9: [ // 9
        [true, true, true],
        [true, true, false, true]
    ]
};

export default valuesSegments
```
## 
Teniendo esto en cuenta cree este metodo usando este valores predeterminados

```typescript
    const calNumerDisplay = (value: number) => {
        setDisplay(valuesSegments[value]);
    };

```
Este metodo recibe el numero y busca en valuesSegments el numero recibido y asigna el state de display.

### Pintar

Teniendo en cuenta todo lo anterior es mas facil pintarlos, solo es necesita crea los 7 segmentos y cambiar su color dependiendo si esta en true

## ejemplo
``` js

{/* segmento 4 */}
{/* Y C */}
<div className={`
    ${display[1][2] 
        ? 'bg-red-700 ' 
        : 'bg-slate-100'
    }`}
>
</div>    
```
Usando un operador ternario se activa la clase cambiando su color
