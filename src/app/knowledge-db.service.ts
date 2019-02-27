import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeDBService {

  constructor() { }


  questions = [
    {
        value : "La IA es:",
        answers : [
            "El estudio y la simulación de actividades intelectuales del hombre.",
            "Una prueba que determina el comportamiento a lo que se entiende como inteligente o no.",
            "Un sistema que incorpora conocimiento y que es capaz de responder, explicar y justificar sus respuestas."],
        tooltip : "IA: Inteligencia Artificial."
    },
    {
        value : "¿Qué es la IA?",
        answers : [
            "Ciencia que intenta la creación de programas para máquinas que imiten el comportamiento y la comprensión humana, siendo capaces de aprender, reconocer y pensar.",
            "Ciencia que crea máquinas que razonan como el ser humano, en un campo particular.",
            "Ciencia que ayuda a la toma de decisiones y que en principio imita el comportamiento y comprensión humana."
        ],
        tooltip : "IA: Inteligencia Artificial."
    },
    {
        value : "¿Qué aspectos se requieren para que la IA sea una realidad?",
        answers : [
            "Que la IA posea inteligencia y un computador.",
            "Que la IA sea capaz de aprender, reconocer y pensar.",
            "Que la IA posea inteligencia y una comunicación adecuada con el ser humano."
        ],
        tooltip : "IA: Inteligencia Artificial."
    },
    {
        value : "Para que la IA sea una realidad se necesita de:",
        answers : [
            "Facultad de entender o conocer y las computadoras.",
            "Disponer de almacenes de información y máquinas capaces de manejarla.",
            "Computadoras inteligentes y programas diseñados para simular reglas mentales."
        ],
        tooltip : "IA: Inteligencia Artificial."
    },
    {
        value : "¿Porque la computadora es el artefacto que puede manifestar inteligencia?",
        answers : [
            "Porque puede manejar SO, procesar en lenguaje natural, y representar el conocimiento,",
            "Porque ayuda en la toma de decisiones, conteniendo el conocimiento, guardando toda la información. Razonando automáticamente.",
            "Porque separa el conocimiento, y  simula el razonamiento humano automáticamente."
        ],
        tooltip : "SO:Sistema Operativo"
    },
    {
        value : "La computadora es el artefacto con mayores posibilidades de manifestar inteligencia debido a:",
        answers : [
             "Que puede guardar la información, razonar automáticamente y auto-aprendizaje.",
            "Que puede estudiar a las máquinas capaces de realizar procesos mecánicos repetitivos.",
            "Que pueden estudiar el uso del lenguaje natural como medio de comunicación."
        ],
        tooltip : "___"
    },
    {
        value : "Es considerada a una persona como EH, aquélla que:",
        answers : [
            "Tiene la experiencia y los conocimientos sobre un tema.",
            "Tiene cualidades de inteligencia y capacidad de razonar utilizando reglas lógicas.",
            "Puede identificar y recoger los conocimientos teóricos adquiridos en la práctica."
        ],
        tooltip : "EH: Experto Humano"
    },
    {
        value : "¿Qué son los sistemas expertos?",
        answers : [
            "Programas que reproducen el proceso intelectual de un EH en un campo particular.",
            "Programas que ofrecen un amplio campo de posibilidades en resolución de problemas y  aprendizaje.",
            "Son programas que tienen el privilegio de razonar y pensar dentro de un campo particular y pertenecen a la Inteligencia Artificial."
        ],
        tooltip : "EH: Experto Humano"
    },
    {
        value : "¿Cómo podemos medir la Inteligencia?",
        answers : [
            "Midiendo los resultados, apreciando  y diferenciando un comportamiento.",
            "Midiendo en forma objetiva no ambigua el pensamiento en un lenguaje operativo.",
            "Mediante formas de solución a si las máquinas piensan sobre un problema determinado."
        ],
        tooltip : "___"
    },
    {
        value : "Son objetivos de la IA.",
        answers : [
            "Resolver problemas difíciles, entender  inglés sencillo, entender imágenes simples.",
            "Ayudar a los expertos en los procesos de extracción del conocimiento, utilizando un lenguaje natural.",
            "Eliminar operaciones de propósitos específicos, ayudando a los expertos en el análisis de problemas difíciles."
        ],
        tooltip : "IA: Inteligencia Artificial"
    },
    {
        value : "¿Cuál es la idea original de Lógica Difusa?",
        answers : [
            "Manejar aspectos imprecisos del mundo real.",
            "Introducir conceptos con ciertos grados de cierto y falso.",
            "Motivar la descripción de fenómenos naturales que llevan grados de precisión en contextos de tiempo."
        ],
        tooltip : "___"
    },
    {
        value : "¿Qué es la Lógica Difusa?",
        answers : [
            "Forma de razonamiento, de criterios múltiples para tomar decisiones y valores múltiples para la evaluación de posibilidades.",
            "Forma de razonamiento que deriva una solución decidiendo cada una de las restricciones o parámetros, falso o verdadero en valores alfanuméricos.",
            "Técnicas de razonamiento que aplican valores múltiples de verdad o confianza a las restricciones durante la resolución de problemas."
        ],
        tooltip : "___"
    },
    {
        value : "¿Cuándo usar Lógica Difusa?",
        answers : [
            "Cuando se quieran representar y operar con conceptos que tengan imprecisión o incertidumbre.",
            "Cuando se quieran representar y operar conceptos con la lógica convencional.",
            "Cuando ciertas partes de un sistema se conozcan y puedan medirse de manera fiable."
        ],
        tooltip : "___"
    },
    {
        value : "¿Cuáles son los pasos que siguen los AG?",
        answers : [
            "Representan al problema en una cadena de longitud apropiada. Reconocimiento de patrones de idoneidad, que recogen su representatividad en experiencias pasadas.",
            "Selección de individuos para la nueva generación, realizando cruces y mutaciones.",
            "Actualización de los pesos de los patrones, aplicando operadores de búsqueda y supresión de patrones ineficaces."
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Los AG se inspiran en la noción Darwiniana de la evolución la cual enuncia:",
        answers : [
            "Mecanismo por el cual las especies sobreviven o se extinguen.",
            "Forma de encontrar los resultados más económicos y eficientes.",
            "Las especies tienen una manera de entender la evolución biológica."
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Los AG son:",
        answers : [
            "Algoritmo matemático que transforma un conjunto de objetos matemáticos en una población nueva asociada con la aptitud.",
            "Programas de computador que apoyados en conocimiento y razonamiento, desarrollan tareas difíciles.",
            "Sistemas que incorporan conocimiento y que son capaces de responder, explicar y justificar sus respuestas."
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Los AG funcionan:",
        answers : [
            "Buscan una representación de posibles soluciones (cadenas binarias).",
            "Tratando de encontrar las formas más económicas para problemas de optimización.",
            "Buscando la selección natural, para después pasar al análisis de resultados, comparándolos con las técnicas existentes."
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Son operaciones asociadas a los AG:",
        answers : [
             "Selección, cruza y mutación.",
            "Cromosomas, población y la selección.",
            "Generación de NA, cromosomas, cruces, mutación."
        ],
        tooltip : "AG: Algoritmos Genéticos, NA: Nuevos Algoritmos"
    },
    {
        value : "Son técnicas utilizadas en la selección de AG:",
        answers : [
            "La de la rueda de la fortuna y la del torneo.",
            "La búsqueda de descendientes y la técnica de planes reproductivos.",
            "La selección natural y la de la constitución genética de los organismos."
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "El proceso de cruce en los AG consiste en:",
        answers : [
            "Operador mediante el cual los individuos intercambian material cromosómico, formando la siguiente generación.",
            "Hacer competir a los individuos en grupos de cierto tamaño predefinido.",
            "Cambio aleatorio realizado a uno de los genes de un cromosoma."
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Una mutación en AG es:",
        answers : [
            "Cambio aleatorio realizado a uno de los genes de un cromosoma.",
            "Selección aleatoria, a partir de la cual se realiza intercambio de material cromosómico de dos individuos.",
            "Tomar de una población individuos (los mejores) de acuerdo a su función de aptitud."
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Son ventajas de los AG:",
        answers : [
            "La operación simultánea de varias soluciones, usan operadores aleatorios, no requieren de conocimientos específicos del problema.",
            "La identificación y recolección de conocimientos teóricos adquiridos en la práctica.",
            "Eliminar operaciones de propósitos específicos, ayudando a los expertos en el 	análisis de problemas difíciles."
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "La selección de la “rueda de la fortuna” usada en AG es:",
        answers : [
            "Asignar una probabilidad  a los individuos con mayor aptitud y mayores probabilidades de ser seleccionados.",
            "Hacer competir a los individuos en grupos definidos y los sobrevivientes son 	aquéllos cuya aptitud es mayor.",
            "Selección en la cual los individuos intercambian material cromosómico, formando la siguiente generación."
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "La selección mediante torneo en AG consiste en:",
        answers : [
            "Hacer competir a los individuos en grupos, y los sobrevivientes son aquéllos cuya aptitud es mayor.",
            "Asignar una probabilidad i a cada organismo y seleccionar aleatoriamente un individuo.",
            "Escoger de forma aleatoria 2 individuos, realizar el intercambio de material de los 2 individuos y representarlos en forma binaria."
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "¿Cuál es la estructura de una Neurona?",
        answers : [
            "Está formada por un soma celular, que presenta extensiones ramificadas, denominadas dendritas y una extensión llamada axón.",
            "Está formada por un encéfalo complejo que es continúo con un cordón nervioso tubular dorsal único.",
            "Está formada por neuronas aferentes que forman sinapsis."
        ],
        tooltip : "___"
    },
    {
        value : "¿Qué es una Red Neuronal?",
        answers : [
            "Sistema de computación que consta de un gran número de neuronas que transforman varias señales de entrada en una única salida.",
            "Sistema de procesamiento de información que consta de un número de procesadores simples y muy interconectados.",
            "Grupo de neuronas simuladas, que en realidad, conforman un procesador muy complejo que poseen una capacidad limitada de cómputo, que esta restringida a un conjunto elemental de instrucciones."
        ],
        tooltip : "___"
    },
    {
        value : "Forman parte de la estructura de una Neurona:",
        answers : [
            "El soma celular, las dendritas y una extensión larga llamada axón.",
            "Los elementos individuales de procesamiento y el interconexionado de los elementos de procesamiento.",
            "El grupo de neuronas simuladas, interconectadas al cerebro que son capaces de aprender."
        ],
        tooltip : "___"
    },
    {
        value : "Son las encargadas de informar continuamente al SNC sobre los estímulos que llegan al cuerpo:",
        answers : [
            "Las neuronas aferentes.",
            "Las Neuronas motoras y de asociación.",
            "Las neuronas bipolares y multipolares."
        ],
        tooltip : "SNC; Sistema Nervioso Central"
    },
    {
        value : "Son actividades del SNC:",
        answers : [
            "Estímulos detectados por el organismo.",
            "Las vibraciones ocasionadas por los pasos de una animal.",
            "Las realizadas por operaciones matemáticas llamadas interneuronas."
        ],
        tooltip : "SNC; Sistema Nervioso Central"
    },
    {
        value : "El SNC está formado por:",
        answers : [
            "Un encéfalo continuo complejo con un cordón nervioso tubular dorsal.",
            "Neuronas aferentes que hacen conexiones funcionales.",
            "Respuestas de músculos y glándulas."
        ],
        tooltip : "SNC; Sistema Nervioso Central"
    },
    {
        value : "Al hablar de sinapsis en el SNC estamos refiriéndonos a:",
        answers : [
            "Conexiones funcionales con las neuronas de asociación.",
            "Flujos de información debidos a cambios que ocurren dentro del cuerpo.",
            "Respuestas ocasionadas por sensores de recepción, transmisión de impulsos al cerebro."
        ],
        tooltip : "SNC; Sistema Nervioso Central"
    },
    {
        value : "La estructura de una neurona en el SNC.",
        answers : [
            "El formado por el soma, axón, y extensiones ramificadas llamadas dendritas.",
            "La sinapsis que interpreta los mensajes neurales que van llegando al cerebro.",
            "El formado por neuronas aferentes y eferentes."
        ],
        tooltip : "SNC; Sistema Nervioso Central"
    },
    {
        value : "Una red neuronal es:",
        answers : [
            "Sistema de computación formado por elementos simples, muy interconectados, que procesan la información respondiendo a estímulos externos.",
            "Sistema nervioso bombardeado por miles de estímulos, que responden a una secuencia de flujos de información.",
            "Sistema de computación formado por neuronas de asociación."
        ],
        tooltip : "___"
    },
    {
        value : "Son elementos comunes que aparecen en una red neuronal:",
        answers : [
            "Neuronas e interconexionado de elementos de procesamiento.",
            "Procesadores simples, muy interconectados, análogos a las neuronas biológicas del cerebro.",
            "Neuronas simuladas capaces de aprender, elementos simples y procesamiento de la información."
        ],
        tooltip : "___"
    },
    {
        value : "Una neurona en una red neuronal es:",
        answers : [
            "Procesador simple con capacidad limitada de cómputo y memoria pequeña para almacenar información.",
            "Es la encargada de realizar conexiones funcionales de asociación formando sinapsis con otras neuronas.",
            "Parte del SNC que informan al computador sobre los estímulos que llegan al cuerpo."
        ],
        tooltip : "SNC: Sistema Nervioso Central"
    },
    {
        value : "Los SE son:",
        answers : [
            "Programas de computador que apoyados en conocimiento y razonamiento, desarrollan tareas difíciles.",
            "Programas de computadora que no requieren de los EH para la solución de tareas difíciles.",
            "Programas de computadora que ejecutan gran cantidad de información y que no son similares a los SI."
        ],
        tooltip : "SE: sistemas Expertos, SI: Sistemas de Información, EH: Experto Humano"
    },
    {
        value : "Para que un SE sea aceptado por un usuario debe ser:",
        answers : [
            "Útil y poder usarse. Capaz de explicar sus propios consejos.", "Incorpora nuevo conocimiento Resolver problemas muy difíciles, Razonar heurísticamente.", "Manipular descripciones simbólicas, posibilidad de utilizar personal no especializado y obtener soluciones rápidas, reducción de Costos."
        ],
        tooltip : "EH: Experto Humano"
    },
    {
        value : "Para que la IA sea una realidad se necesita de(duplicado):",
         answers : [
            "Facultad de entender o conocer y las computadoras.",
            "Disponer de almacenes de información y máquinas capaces de manejarla.",
            "Computadoras inteligentes y programas diseñados para simular reglas mentales."
        ],
        tooltip : "IA: Inteligencia Artificial."
    },
    {
        value : "¿Porque la computadora es el artefacto que puede manifestar inteligencia?(duplicado)",
        answers : [
            "Porque puede manejar SO, procesar en lenguaje natural, y representar el conocimiento,",
            "Porque ayuda en la toma de decisiones, conteniendo el conocimiento, guardando toda la información. Razonando automáticamente.",
            "Porque separa el conocimiento, y  simula el razonamiento humano automáticamente."
        ],
        tooltip : "SO: Sistema Operativo"
    },
    {
        value : "¿Por qué son valiosos los SE?",
        answers : [
            "Porque permiten guardar los conocimientos de un especialista y difundirlos, aunque desaparezca el especialista.",
            "Porque aplican los conocimientos en la solución de problemas.",
            "Porque mejoran canales de información, resuelven y deciden problemas más rápidamente."
        ],
        tooltip : "SE: Sistema Experto"
    }];



  getRandomQuestions(){
    return this.questions;
  }
}
