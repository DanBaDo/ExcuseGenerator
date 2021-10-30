# Ejercícios JS (I)

## Excuse generator

Para el caso se divide la tarea en tres funciones (randomIndex, randomElement y buildExcuse) que se llaman de la última a la primera.

Creo que la única parte reseñable es que se emplea un filtro en la función randomElement a fin de garantizar que el elemento entregado por la función sea un string.

## Character rate

Escrito en una función recursiva. No aprecio posibilidad razonable de dividir la función en otras menores.

```function countLetters(iterable, maxDeep = 1, deep = 1, counters = {}, childs = [1])```

* iterable: lista de elementos en los que contar caracteres. Hablo de iterable porque se podrá tratar tanto de un array como un string. No se me ocurrión un nombre mejor.
* maxDeep: límite para la recursividad.
* deep: flag para controlar el nivel de recursividad de la iteración.
* counters: objeto para almacenar los contadores para cada caracter. Lo ideal sería usar un objeto de tipo [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) pero qué pereza. Por otra parte entiendo que la intención es emplear las funciones y tipos básicos de JS. El uso de on objeto tiene la ventaja de que se pasa por referencia entre iteraciones de la función evitando tener que consolidar los datos de las diferentes iteraciones.
* childs: contador para el número de iteración activa para poder controlar cuando una instancia es la última en ejecutarse y debe entregar la salida.

Por lo demás, empleo un filtro para detectar arrays o strings de varios caracteres e iterar sobre ellos y otro filtro para detectar strings de un sólo caracter y contarlos. El resto de elementos no-array, no-strings, son ignorados.

Los contadores se almacenan en un objeto usando como índice el propio caracter. Se comprueba si el contador ya existe antes de incrementar el contador pues, de no existir, es necesario añadir la propiedad/índice al objeto.

Entrego como salida el objeto con los contadores porque considero que es lo más útil para manejar los datos por parte de otras funciones. También es óptimo a nivel de gestión de memoria pues permite en todo momento trabajar con la referencia a los datos.

## Drop duplicates

Divido la taréa en dos funciones (inArray y dropDuplicated).

La primera comprueba si un elemento forma parte de un array.

La segunda recorre un array copiando sus elementos en un nuevo array sólo si no existen previamente.

## Reverse

Pues contamos 3,2,1 en lugar de 1,2,3.

La fórmula ```newArray[lastElementIdx - i] = array[i]``` genera un índice en orden directo empezando en 0 a partir del conteo en orden inverso del búcle. De esa forma evito el empleo del método .push del array.

## Dudas:
* ¿Empleo bien el término iteración en countLetters? ¿debería de hablar de instancias?
* ¿Donde encuentro información sobre operaciones seguras para programación asyncrona en JS? No tengo claro si esta forma de trabajo sería segura en una implementación asíncrona de la función countLetters.