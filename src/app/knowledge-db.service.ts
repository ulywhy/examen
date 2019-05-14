import { Injectable } from '@angular/core';
import {
Stitch,
RemoteMongoClient,
AnonymousCredential
} from 'mongodb-stitch-browser-sdk';
import { DBConnectorService } from './dbconnector.service';


@Injectable({
  providedIn: 'root'
})
export class KnowledgeDBService {


  constructor(private dbConnector : DBConnectorService) {}

  getRandomQuestions(numberOfQuestions):any{
    return this.dbConnector.getDB()
      .collection('questions').aggregate([{ $sample: { size: numberOfQuestions } }]).asArray()
        .then(docs => {
          docs.forEach(doc => doc.answers.sort(function () {
            return Math.round(Math.random()) - 0.5
          }))
          console.log(docs)
          return docs
        }).catch(err => {
          console.error(err)
          return err
      });

  }

  saveResult(user:any, questions:any[], total:number):any{
    return this.dbConnector.getDB().collection('users')
        .updateOne({"user":user}, {"$set":
          {
            "questions":questions,
            "total": total,
          },
        },
        {
          "upsert" : false
        })
  }
  /*this.dbConnector.getDB().collection('questions').insertMany([
    {
        value : "La IA es:",
        answers : [
            {value:"El estudio y la simulación de actividades intelectuales del hombre.", correct:true},
            {value:"Una prueba que determina el comportamiento a lo que se entiende como inteligente o no."},
            {value:"Un sistema que incorpora conocimiento y que es capaz de responder, explicar y justificar sus respuestas."}
          ],
        tooltip : "IA: Inteligencia Artificial."
    },
    {
        value : "¿Qué es la IA?",
        answers : [
            {value:"Ciencia que intenta la creación de programas para máquinas que imiten el comportamiento y la comprensión humana, siendo capaces de aprender, reconocer y pensar.", correct:true},
            {value:"Ciencia que crea máquinas que razonan como el ser humano, en un campo particular."},
            {value:"Ciencia que ayuda a la toma de decisiones y que en principio imita el comportamiento y comprensión humana."}
        ],
        tooltip : "IA: Inteligencia Artificial."
    },
    {
        value : "¿Qué aspectos se requieren para que la IA sea una realidad?",
        answers : [
            {value:"Que la IA posea inteligencia y un computador.", correct:true},
            {value:"Que la IA sea capaz de aprender, reconocer y pensar."},
            {value:"Que la IA posea inteligencia y una comunicación adecuada con el ser humano."}
        ],
        tooltip : "IA: Inteligencia Artificial."
    },
    {
        value : "Para que la IA sea una realidad se necesita de:",
        answers : [
            {value:"Facultad de entender o conocer y las computadoras.", correct:true},
            {value:"Disponer de almacenes de información y máquinas capaces de manejarla."},
            {value:"Computadoras inteligentes y programas diseñados para simular reglas mentales."}
    *ngIf="question.answers[question.selected].correct; else elseBlock" background-color="accent">
                          ],
        tooltip : "IA: Inteligencia Artificial."
    },
    {
        value : "¿Porque la computadora es el artefacto que puede manifestar inteligencia?",
        answers : [
            {value:"Porque puede manejar SO, procesar en lenguaje natural, y representar el conocimiento,", correct:true},
            {value:"Porque ayuda en la toma de decisiones, conteniendo el conocimiento, guardando toda la información. Razonando automáticamente."},
            {value:"Porque separa el conocimiento, y  simula el razonamiento humano automáticamente."}
        ],
        tooltip : "SO:Sistema Operativo"
    },
    {
        value : "La computadora es el artefacto con mayores posibilidades de manifestar inteligencia debido a:",
        answers : [
             {value:"Que puede guardar la información, razonar automáticamente y auto-aprendizaje.", correct:true},
            {value:"Que puede estudiar a las máquinas capaces de realizar procesos mecánicos repetitivos."},
            {value:"Que pueden estudiar el uso del lenguaje natural como medio de comunicación."}
        ],
        tooltip : "___"
    },
    {
        value : "Es considerada a una persona como EH, aquélla que:",
        answers : [
            {value:"Tiene la experiencia y los conocimientos sobre un tema.", correct:true},
            {value:"Tiene cualidades de inteligencia y capacidad de razonar utilizando reglas lógicas."},
            {value:"Puede identificar y recoger los conocimientos teóricos adquiridos en la práctica."}
        ],
        tooltip : "EH: Experto Humano"
    },
    {
        value : "¿Qué son los sistemas expertos?",
        answers : [
            {value:"Programas que reproducen el proceso intelectual de un EH en un campo particular.", correct:true},
            {value:"Programas que ofrecen un amplio campo de posibilidades en resolución de problemas y  aprendizaje."},
            {value:"Son programas que tienen el privilegio de razonar y pensar dentro de un campo particular y pertenecen a la Inteligencia Artificial."}
        ],
        tooltip : "EH: Experto Humano"
    },
    {
        value : "¿Cómo podemos medir la Inteligencia?",
        answers : [
            {value:"Midiendo los resultados, apreciando  y diferenciando un comportamiento.", correct:true},
            {value:"Midiendo en forma objetiva no ambigua el pensamiento en un lenguaje operativo."},
            {value:"Mediante formas de solución a si las máquinas piensan sobre un problema determinado."}
        ],
        tooltip : "___"
    },
    {
        value : "Son objetivos de la IA.",
        answers : [
            {value:"Resolver problemas difíciles, entender  inglés sencillo, entender imágenes simples.", correct:true},
            {value:"Ayudar a los expertos en los procesos de extracción del conocimiento, utilizando un lenguaje natural."},
            {value:"Eliminar operaciones de propósitos específicos, ayudando a los expertos en el análisis de problemas difíciles."}
        ],
        tooltip : "IA: Inteligencia Artificial"
    },
    {
        value : "¿Cuál es la idea original de Lógica Difusa?",
        answers : [
            {value:"Manejar aspectos imprecisos del mundo real.", correct:true},
            {value:"Introducir conceptos con ciertos grados de cierto y falso."},
            {value:"Motivar la descripción de fenómenos naturales que llevan grados de precisión en contextos de tiempo."}
        ],
        tooltip : "___"
    },
    {
        value : "¿Qué es la Lógica Difusa?",
        answers : [
            {value:"Forma de razonamiento, de criterios múltiples para tomar decisiones y valores múltiples para la evaluación de posibilidades.", correct:true},
            {value:"Forma de razonamiento que deriva una solución decidiendo cada una de las restricciones o parámetros, falso o verdadero en valores alfanuméricos."},
            {value:"Técnicas de razonamiento que aplican valores múltiples de verdad o confianza a las restricciones durante la resolución de problemas."}
        ],
        tooltip : "___"
    },
    {
        value : "¿Cuándo usar Lógica Difusa?",
        answers : [
            {value:"Cuando se quieran representar y operar con conceptos que tengan imprecisión o incertidumbre.", correct:true},
            {value:"Cuando se quieran representar y operar conceptos con la lógica convencional."},
            {value:"Cuando ciertas partes de un sistema se conozcan y puedan medirse de manera fiable."}
        ],
        tooltip : "___"
    },
    {
        value : "¿Cuáles son los pasos que siguen los AG?",
        answers : [
            {value:"Representan al problema en una cadena de longitud apropiada. Reconocimiento de patrones de idoneidad, que recogen su representatividad en experiencias pasadas.", correct:true},
            {value:"Selección de individuos para la nueva generación, realizando cruces y mutaciones."},
            {value:"Actualización de los pesos de los patrones, aplicando operadores de búsqueda y supresión de patrones ineficaces."}
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Los AG se inspiran en la noción Darwiniana de la evolución la cual enuncia:",
        answers : [
            {value:"Mecanismo por el cual las especies sobreviven o se extinguen.", correct:true},
            {value:"Forma de encontrar los resultados más económicos y eficientes."},
            {value:"Las especies tienen una manera de entender la evolución biológica."}
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Los AG son:",
        answers : [
            {value:"Algoritmo matemático que transforma un conjunto de objetos matemáticos en una población nueva asociada con la aptitud.", correct:true},
            {value:"Programas de computador que apoyados en conocimiento y razonamiento, desarrollan tareas difíciles."},
            {value:"Sistemas que incorporan conocimiento y que son capaces de responder, explicar y justificar sus respuestas."}
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Los AG funcionan:",
        answers : [
            {value:"Buscan una representación de posibles soluciones (cadenas binarias).", correct:true},
            {value:"Tratando de encontrar las formas más económicas para problemas de optimización."},
            {value:"Buscando la selección natural, para después pasar al análisis de resultados, comparándolos con las técnicas existentes."}
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Son operaciones asociadas a los AG:",
        answers : [
            {value:"Selección, cruza y mutación.", correct:true},
            {value:"Cromosomas, población y la selección."},
            {value:"Generación de NA, cromosomas, cruces, mutación."}
        ],
        tooltip : "AG: Algoritmos Genéticos, NA: Nuevos Algoritmos"
    },
    {
        value : "Son técnicas utilizadas en la selección de AG:",
        answers : [
            {value:"La de la rueda de la fortuna y la del torneo.", correct:true},
            {value:"La búsqueda de descendientes y la técnica de planes reproductivos."},
            {value:"La selección natural y la de la constitución genética de los organismos."}
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "El proceso de cruce en los AG consiste en:",
        answers : [
            {value:"Operador mediante el cual los individuos intercambian material cromosómico, formando la siguiente generación.", correct:true},
            {value:"Hacer competir a los individuos en grupos de cierto tamaño predefinido."},
            {value:"Cambio aleatorio realizado a uno de los genes de un cromosoma."}
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Una mutación en AG es:",
        answers : [
            {value:"Cambio aleatorio realizado a uno de los genes de un cromosoma.", correct:true},
            {value:"Selección aleatoria, a partir de la cual se realiza intercambio de material cromosómico de dos individuos."},
            {value:"Tomar de una población individuos (los mejores) de acuerdo a su función de aptitud."}
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "Son ventajas de los AG:",
        answers : [
            {value:"La operación simultánea de varias soluciones, usan operadores aleatorios, no requieren de conocimientos específicos del problema.", correct:true},
            {value:"La identificación y recolección de conocimientos teóricos adquiridos en la práctica."},
            {value:"Eliminar operaciones de propósitos específicos, ayudando a los expertos en el 	análisis de problemas difíciles."}
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "La selección de la “rueda de la fortuna” usada en AG es:",
        answers : [
            {value:"Asignar una probabilidad  a los individuos con mayor aptitud y mayores probabilidades de ser seleccionados.", correct:true},
            {value:"Hacer competir a los individuos en grupos definidos y los sobrevivientes son 	aquéllos cuya aptitud es mayor."},
            {value:"Selección en la cual los individuos intercambian material cromosómico, formando la siguiente generación."}
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "La selección mediante torneo en AG consiste en:",
        answers : [
            {value:"Hacer competir a los individuos en grupos, y los sobrevivientes son aquéllos cuya aptitud es mayor.", correct:true},
            {value:"Asignar una probabilidad i a cada organismo y seleccionar aleatoriamente un individuo."},
            {value:"Escoger de forma aleatoria 2 individuos, realizar el intercambio de material de los 2 individuos y representarlos en forma binaria."}
        ],
        tooltip : "AG: Algoritmos Genéticos"
    },
    {
        value : "¿Cuál es la estructura de una Neurona?",
        answers : [
            {value:"Está formada por un soma celular, que presenta extensiones ramificadas, denominadas dendritas y una extensión llamada axón.", correct:true},
            {value:"Está formada por un encéfalo complejo que es continúo con un cordón nervioso tubular dorsal único."},
            {value:"Está formada por neuronas aferentes que forman sinapsis."}
        ],
        tooltip : "___"
    },
    {
        value : "¿Qué es una Red Neuronal?",
        answers : [
            {value:"Sistema de computación que consta de un gran número de neuronas que transforman varias señales de entrada en una única salida.", correct:true},
            {value:"Sistema de procesamiento de información que consta de un número de procesadores simples y muy interconectados."},
            {value:"Grupo de neuronas simuladas, que en realidad, conforman un procesador muy complejo que poseen una capacidad limitada de cómputo, que esta restringida a un conjunto elemental de instrucciones."}
        ],
        tooltip : "___"
    },
    {
        value : "Forman parte de la estructura de una Neurona:",
        answers : [
            {value:"El soma celular, las dendritas y una extensión larga llamada axón.", correct:true},
            {value:"Los elementos individuales de procesamiento y el interconexionado de los elementos de procesamiento."},
            {value:"El grupo de neuronas simuladas, interconectadas al cerebro que son capaces de aprender."}
        ],
        tooltip : "___"
    },
    {
        value : "Son las encargadas de informar continuamente al SNC sobre los estímulos que llegan al cuerpo:",
        answers : [
            {value:"Las neuronas aferentes.", correct:true},
            {value:"Las Neuronas motoras y de asociación."},
            {value:"Las neuronas bipolares y multipolares."}
        ],
        tooltip : "SNC; Sistema Nervioso Central"
    },
    {
        value : "Son actividades del SNC:",
        answers : [
            {value:"Estímulos detectados por el organismo.", correct:true},
            {value:"Las vibraciones ocasionadas por los pasos de una animal."},
            {value:"Las realizadas por operaciones matemáticas llamadas interneuronas."}
        ],
        tooltip : "SNC; Sistema Nervioso Central"
    },
    {
        value : "El SNC está formado por:",
        answers : [
            {value:"Un encéfalo continuo complejo con un cordón nervioso tubular dorsal.", correct:true},
            {value:"Neuronas aferentes que hacen conexiones funcionales."},
            {value:"Respuestas de músculos y glándulas."}
        ],
        tooltip : "SNC; Sistema Nervioso Central"
    },
    {
        value : "Al hablar de sinapsis en el SNC estamos refiriéndonos a:",
        answers : [
            {value:"Conexiones funcionales con las neuronas de asociación.", correct:true},
            {value:"Flujos de información debidos a cambios que ocurren dentro del cuerpo."},
            {value:"Respuestas ocasionadas por sensores de recepción, transmisión de impulsos al cerebro."}
        ],
        tooltip : "SNC; Sistema Nervioso Central"
    },
    {
        value : "La estructura de una neurona en el SNC.",
        answers : [
            {value:"El formado por el soma, axón, y extensiones ramificadas llamadas dendritas.", correct:true},
            {value:"La sinapsis que interpreta los mensajes neurales que van llegando al cerebro."},
            {value:"El formado por neuronas aferentes y eferentes."}
        ],
        tooltip : "SNC; Sistema Nervioso Central"
    },
    {
        value : "Una red neuronal es:",
        answers : [
            {value:"Sistema de computación formado por elementos simples, muy interconectados, que procesan la información respondiendo a estímulos externos.", correct:true},
            {value:"Sistema nervioso bombardeado por miles de estímulos, que responden a una secuencia de flujos de información."},
            {value:"Sistema de computación formado por neuronas de asociación."}
        ],
        tooltip : "___"
    },
    {
        value : "Son elementos comunes que aparecen en una red neuronal:",
        answers : [
            {value:"Neuronas e interconexionado de elementos de procesamiento.", correct:true},
            {value:"Procesadores simples, muy interconectados, análogos a las neuronas biológicas del cerebro."},
            {value:"Neuronas simuladas capaces de aprender, elementos simples y procesamiento de la información."}
        ],
        tooltip : "___"
    },
    {
        value : "Una neurona en una red neuronal es:",
        answers : [
            {value:"Procesador simple con capacidad limitada de cómputo y memoria pequeña para almacenar información.", correct:true},
            {value:"Es la encargada de realizar conexiones funcionales de asociación formando sinapsis con otras neuronas."},
            {value:"Parte del SNC que informan al computador sobre los estímulos que llegan al cuerpo."}
        ],
        tooltip : "SNC: Sistema Nervioso Central"
    },
    {
        value : "Los SE son:",
        answers : [
            {value:"Programas de computador que apoyados en conocimiento y razonamiento, desarrollan tareas difíciles.", correct:true},
            {value:"Programas de computadora que no requieren de los EH para la solución de tareas difíciles."},
            {value:"Programas de computadora que ejecutan gran cantidad de información y que no son similares a los SI."}
        ],
        tooltip : "SE: sistemas Expertos, SI: Sistemas de Información, EH: Experto Humano"
    },
    {
        value : "Para que un SE sea aceptado por un usuario debe ser:",
        answers : [
            {value:"Útil y poder usarse. Capaz de explicar sus propios consejos.", correct:true},
            {value:"Incorpora nuevo conocimiento Resolver problemas muy difíciles, Razonar heurísticamente."},
            {value:"Manipular descripciones simbólicas, posibilidad de utilizar personal no especializado y obtener soluciones rápidas, reducción de Costos."}
        ],
        tooltip : "EH: Experto Humano"
    },
    {
        value : "Para que la IA sea una realidad se necesita de(duplicado):",
         answers : [
            {value:"Facultad de entender o conocer y las computadoras.", correct:true},
            {value:"Disponer de almacenes de información y máquinas capaces de manejarla."},
            {value:"Computadoras inteligentes y programas diseñados para simular reglas mentales."}
        ],
        tooltip : "IA: Inteligencia Artificial."
    },
    {
        value : "¿Porque la computadora es el artefacto que puede manifestar inteligencia?(duplicado)",
        answers : [
            {value:"Porque puede manejar SO, procesar en lenguaje natural, y representar el conocimiento,", correct:true},
            {value:"Porque ayuda en la toma de decisiones, conteniendo el conocimiento, guardando toda la información. Razonando automáticamente."},
            {value:"Porque separa el conocimiento, y  simula el razonamiento humano automáticamente."}
        ],
        tooltip : "SO: Sistema Operativo"
    },
    {
        value : "¿Por qué son valiosos los SE?",
        answers : [
            {value:"Porque permiten guardar los conocimientos de un especialista y difundirlos, aunque desaparezca el especialista.", correct:true},
            {value:"Porque aplican los conocimientos en la solución de problemas."},
            {value:"Porque mejoran canales de información, resuelven y deciden problemas más rápidamente."}
        ],
        tooltip : "SE: Sistema Experto"
    }]
  ).then(docs => {
    console.log("Found questions", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
    console.error(err)
  });
}*/
}
