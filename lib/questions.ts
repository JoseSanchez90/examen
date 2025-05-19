import type { Question } from "./types"

// Función para obtener preguntas según la materia y dificultad
export function getQuestions(subject: string, difficulty: string): Question[] {
  // Preguntas de razonamiento verbal
  if (subject === "verbal") {
    if (difficulty === "easy") {
      return [
        {
          question: "¿Cuál es el sinónimo de 'feliz'?",
          type: "multiple-choice",
          options: ["Triste", "Contento", "Enojado", "Asustado"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el antónimo de 'grande'?",
          type: "multiple-choice",
          options: ["Enorme", "Gigante", "Pequeño", "Mediano"],
          correctAnswer: "c",
        },
        {
          question: "Completa la oración: El perro es al hueso como el gato es al...",
          type: "multiple-choice",
          options: ["Árbol", "Ratón", "Pescado", "Pájaro"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Manzana", "Plátano", "Zanahoria", "Naranja"],
          correctAnswer: "c",
        },
        {
          question: "¿Cuál es el significado de 'veloz'?",
          type: "multiple-choice",
          options: ["Lento", "Rápido", "Grande", "Pequeño"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra significa lo mismo que 'bonito'?",
          type: "multiple-choice",
          options: ["Feo", "Hermoso", "Grande", "Alto"],
          correctAnswer: "b",
        },
        {
          question: "Completa la analogía: Día es a Sol como Noche es a...",
          type: "multiple-choice",
          options: ["Estrellas", "Luna", "Oscuridad", "Dormir"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Perro", "Gato", "León", "Pájaro"],
          correctAnswer: "d",
        },
        {
          question: "¿Cuál es el antónimo de 'frío'?",
          type: "multiple-choice",
          options: ["Helado", "Caliente", "Tibio", "Congelado"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué significa 'enorme'?",
          type: "multiple-choice",
          options: ["Pequeño", "Mediano", "Muy grande", "Normal"],
          correctAnswer: "c",
        },
        {
          question: "Completa la oración: El lápiz es para escribir como la cuchara es para...",
          type: "multiple-choice",
          options: ["Cortar", "Comer", "Beber", "Cocinar"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el sinónimo de 'rápido'?",
          type: "multiple-choice",
          options: ["Lento", "Veloz", "Despacio", "Pausado"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Rojo", "Azul", "Mesa", "Verde"],
          correctAnswer: "c",
        },
        {
          question: "Completa la analogía: Zapato es a pie como guante es a...",
          type: "multiple-choice",
          options: ["Brazo", "Mano", "Dedo", "Pierna"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el antónimo de 'alto'?",
          type: "multiple-choice",
          options: ["Bajo", "Grande", "Ancho", "Delgado"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué significa 'diminuto'?",
          type: "multiple-choice",
          options: ["Muy grande", "Mediano", "Muy pequeño", "Normal"],
          correctAnswer: "c",
        },
        {
          question: "Completa la oración: La abeja hace miel como la vaca produce...",
          type: "multiple-choice",
          options: ["Queso", "Leche", "Yogurt", "Mantequilla"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el sinónimo de 'alegre'?",
          type: "multiple-choice",
          options: ["Triste", "Contento", "Enojado", "Asustado"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Camisa", "Pantalón", "Zapato", "Mochila"],
          correctAnswer: "d",
        },
        {
          question: "Completa la analogía: Libro es a leer como película es a...",
          type: "multiple-choice",
          options: ["Escuchar", "Ver", "Tocar", "Oler"],
          correctAnswer: "b",
        },
      ]
    } else if (difficulty === "medium") {
      return [
        {
          question: "¿Cuál es el sinónimo de 'esplendoroso'?",
          type: "multiple-choice",
          options: ["Opaco", "Brillante", "Oscuro", "Apagado"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el antónimo de 'valiente'?",
          type: "multiple-choice",
          options: ["Cobarde", "Fuerte", "Audaz", "Intrépido"],
          correctAnswer: "a",
        },
        {
          question: "Completa la analogía: Pintor es a cuadro como escritor es a...",
          type: "multiple-choice",
          options: ["Lápiz", "Libro", "Palabra", "Letra"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Matemáticas", "Ciencias", "Recreo", "Historia"],
          correctAnswer: "c",
        },
        {
          question: "¿Cuál es el significado de 'efímero'?",
          type: "multiple-choice",
          options: ["Duradero", "Pasajero", "Eterno", "Permanente"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra significa lo mismo que 'cauteloso'?",
          type: "multiple-choice",
          options: ["Descuidado", "Prudente", "Imprudente", "Despreocupado"],
          correctAnswer: "b",
        },
        {
          question: "Completa la analogía: Médico es a enfermedad como juez es a...",
          type: "multiple-choice",
          options: ["Abogado", "Justicia", "Crimen", "Tribunal"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Cuchara", "Tenedor", "Plato", "Cuchillo"],
          correctAnswer: "c",
        },
        {
          question: "¿Cuál es el antónimo de 'generoso'?",
          type: "multiple-choice",
          options: ["Egoísta", "Amable", "Bondadoso", "Caritativo"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué significa 'perseverante'?",
          type: "multiple-choice",
          options: ["Que se rinde fácilmente", "Que es constante", "Que es perezoso", "Que es inconstante"],
          correctAnswer: "b",
        },
        {
          question: "Completa la oración: El reloj es para medir el tiempo como la balanza es para medir...",
          type: "multiple-choice",
          options: ["La distancia", "El peso", "La temperatura", "La velocidad"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el sinónimo de 'elocuente'?",
          type: "multiple-choice",
          options: ["Callado", "Expresivo", "Tímido", "Reservado"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Fútbol", "Básquetbol", "Ajedrez", "Natación"],
          correctAnswer: "c",
        },
        {
          question: "Completa la analogía: Abeja es a colmena como hormiga es a...",
          type: "multiple-choice",
          options: ["Nido", "Madriguera", "Hormiguero", "Cueva"],
          correctAnswer: "c",
        },
        {
          question: "¿Cuál es el antónimo de 'abundante'?",
          type: "multiple-choice",
          options: ["Escaso", "Copioso", "Numeroso", "Suficiente"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué significa 'obsoleto'?",
          type: "multiple-choice",
          options: ["Moderno", "Anticuado", "Nuevo", "Reciente"],
          correctAnswer: "b",
        },
        {
          question: "Completa la oración: El martillo es para el carpintero como el bisturí es para el...",
          type: "multiple-choice",
          options: ["Profesor", "Médico", "Cocinero", "Bombero"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el sinónimo de 'diligente'?",
          type: "multiple-choice",
          options: ["Perezoso", "Aplicado", "Descuidado", "Negligente"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Alegría", "Tristeza", "Inteligencia", "Enojo"],
          correctAnswer: "c",
        },
        {
          question: "Completa la analogía: Ojo es a ver como oído es a...",
          type: "multiple-choice",
          options: ["Hablar", "Escuchar", "Oler", "Tocar"],
          correctAnswer: "b",
        },
      ]
    } else {
      // hard
      return [
        {
          question: "¿Cuál es el sinónimo de 'ineludible'?",
          type: "multiple-choice",
          options: ["Evitable", "Inevitable", "Opcional", "Prescindible"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el antónimo de 'parsimonia'?",
          type: "multiple-choice",
          options: ["Lentitud", "Calma", "Rapidez", "Tranquilidad"],
          correctAnswer: "c",
        },
        {
          question: "Completa la analogía: Democracia es a pueblo como monarquía es a...",
          type: "multiple-choice",
          options: ["Presidente", "Rey", "Dictador", "Ciudadano"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Soneto", "Oda", "Novela", "Elegía"],
          correctAnswer: "c",
        },
        {
          question: "¿Cuál es el significado de 'vehemente'?",
          type: "multiple-choice",
          options: ["Apático", "Intenso", "Indiferente", "Desinteresado"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra significa lo mismo que 'perspicaz'?",
          type: "multiple-choice",
          options: ["Despistado", "Sagaz", "Distraído", "Torpe"],
          correctAnswer: "b",
        },
        {
          question: "Completa la analogía: Escultor es a mármol como orfebre es a...",
          type: "multiple-choice",
          options: ["Madera", "Arcilla", "Metales preciosos", "Tela"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Sinfónico", "Filarmónico", "Orquestal", "Pictórico"],
          correctAnswer: "d",
        },
        {
          question: "¿Cuál es el antónimo de 'prodigalidad'?",
          type: "multiple-choice",
          options: ["Generosidad", "Avaricia", "Abundancia", "Derroche"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué significa 'inefable'?",
          type: "multiple-choice",
          options: [
            "Que se puede expresar fácilmente",
            "Que no se puede expresar con palabras",
            "Que es fácil de entender",
            "Que es comprensible",
          ],
          correctAnswer: "b",
        },
        {
          question: "Completa la oración: La entomología es a los insectos como la ornitología es a...",
          type: "multiple-choice",
          options: ["Los peces", "Las aves", "Los mamíferos", "Los reptiles"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el sinónimo de 'taciturno'?",
          type: "multiple-choice",
          options: ["Hablador", "Silencioso", "Extrovertido", "Sociable"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Ecuánime", "Imparcial", "Justo", "Sesgado"],
          correctAnswer: "d",
        },
        {
          question: "Completa la analogía: Filántropo es a generosidad como misántropo es a...",
          type: "multiple-choice",
          options: ["Amor", "Odio a la humanidad", "Caridad", "Bondad"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el antónimo de 'verosímil'?",
          type: "multiple-choice",
          options: ["Creíble", "Inverosímil", "Probable", "Posible"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué significa 'anacrónico'?",
          type: "multiple-choice",
          options: ["Actual", "Fuera de su tiempo", "Moderno", "Contemporáneo"],
          correctAnswer: "b",
        },
        {
          question:
            "Completa la oración: La numismática es al estudio de las monedas como la filatelia es al estudio de...",
          type: "multiple-choice",
          options: ["Los libros", "Los sellos", "Las pinturas", "Las esculturas"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el sinónimo de 'sempiterno'?",
          type: "multiple-choice",
          options: ["Temporal", "Eterno", "Efímero", "Pasajero"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué palabra no pertenece al grupo?",
          type: "multiple-choice",
          options: ["Quimera", "Esfinge", "Centauro", "Sátiro"],
          correctAnswer: "b",
        },
        {
          question: "Completa la analogía: Prólogo es a inicio como epílogo es a...",
          type: "multiple-choice",
          options: ["Medio", "Final", "Introducción", "Desarrollo"],
          correctAnswer: "b",
        },
      ]
    }
  }

  // Preguntas de personal social (medio ambiente)
  else if (subject === "social") {
    if (difficulty === "easy") {
      return [
        {
          question: "¿Qué debemos hacer con la basura?",
          type: "multiple-choice",
          options: ["Tirarla en la calle", "Reciclarla", "Quemarla", "Enterrarla"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos es un recurso natural renovable?",
          type: "multiple-choice",
          options: ["Petróleo", "Oro", "Árboles", "Diamantes"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué podemos hacer para ahorrar agua?",
          type: "multiple-choice",
          options: [
            "Dejar el grifo abierto",
            "Tomar duchas largas",
            "Cerrar el grifo mientras nos cepillamos los dientes",
            "Lavar el auto todos los días",
          ],
          correctAnswer: "c",
        },
        {
          question: "¿Cuál de estos animales está en peligro de extinción en Perú?",
          type: "multiple-choice",
          options: ["Perro", "Gato", "Cóndor andino", "Gallina"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la contaminación?",
          type: "multiple-choice",
          options: ["Plantar árboles", "Ensuciar el medio ambiente", "Reciclar papel", "Cuidar a los animales"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos NO es un tipo de contaminación?",
          type: "multiple-choice",
          options: [
            "Contaminación del aire",
            "Contaminación del agua",
            "Contaminación del suelo",
            "Contaminación de plantas",
          ],
          correctAnswer: "d",
        },
        {
          question: "¿Qué color de contenedor se usa para el papel y cartón?",
          type: "multiple-choice",
          options: ["Verde", "Amarillo", "Azul", "Rojo"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es reciclar?",
          type: "multiple-choice",
          options: ["Tirar la basura", "Reutilizar materiales", "Contaminar el agua", "Cortar árboles"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos es un problema ambiental?",
          type: "multiple-choice",
          options: ["Plantar árboles", "Reciclar", "Deforestación", "Usar bicicleta"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la biodiversidad?",
          type: "multiple-choice",
          options: [
            "Un tipo de contaminación",
            "La variedad de seres vivos",
            "Un tipo de planta",
            "Un animal en extinción",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Qué debemos hacer con las pilas usadas?",
          type: "multiple-choice",
          options: [
            "Tirarlas a la basura normal",
            "Llevarlas a puntos de recogida especiales",
            "Enterrarlas en el jardín",
            "Tirarlas al río",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es una fuente de energía renovable?",
          type: "multiple-choice",
          options: ["Petróleo", "Carbón", "Sol", "Gas natural"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es el calentamiento global?",
          type: "multiple-choice",
          options: [
            "El aumento de la temperatura de la Tierra",
            "El frío en invierno",
            "La lluvia en verano",
            "El viento fuerte",
          ],
          correctAnswer: "a",
        },
        {
          question: "¿Qué animal es el símbolo nacional de Perú?",
          type: "multiple-choice",
          options: ["Puma", "Vicuña", "Cóndor", "Llama"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué es un ecosistema?",
          type: "multiple-choice",
          options: [
            "Un tipo de animal",
            "Un lugar donde viven seres vivos que se relacionan entre sí",
            "Una planta",
            "Un tipo de contaminación",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos NO es un recurso natural?",
          type: "multiple-choice",
          options: ["Agua", "Plástico", "Aire", "Suelo"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué podemos hacer para cuidar el medio ambiente?",
          type: "multiple-choice",
          options: [
            "Usar muchas bolsas de plástico",
            "Dejar luces encendidas",
            "Plantar árboles",
            "Tirar basura en la calle",
          ],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la capa de ozono?",
          type: "multiple-choice",
          options: [
            "Una capa de nubes",
            "Una capa que protege la Tierra de los rayos del sol",
            "Una capa de contaminación",
            "Una capa de agua",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos animales vive en la selva peruana?",
          type: "multiple-choice",
          options: ["Pingüino", "Oso polar", "Jaguar", "Camello"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la deforestación?",
          type: "multiple-choice",
          options: ["Plantar árboles", "Cortar árboles sin control", "Regar las plantas", "Cuidar el bosque"],
          correctAnswer: "b",
        },
      ]
    } else if (difficulty === "medium") {
      return [
        {
          question: "¿Qué es el desarrollo sostenible?",
          type: "multiple-choice",
          options: [
            "Usar todos los recursos naturales rápidamente",
            "Satisfacer las necesidades actuales sin comprometer las futuras",
            "Construir muchas fábricas",
            "Talar todos los árboles",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos NO es un bioma peruano?",
          type: "multiple-choice",
          options: ["Selva amazónica", "Desierto costero", "Tundra ártica", "Bosque andino"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué son los combustibles fósiles?",
          type: "multiple-choice",
          options: [
            "Energías renovables",
            "Recursos que se forman en millones de años a partir de restos orgánicos",
            "Plantas medicinales",
            "Tipos de árboles",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el río más largo de Perú?",
          type: "multiple-choice",
          options: ["Río Rímac", "Río Amazonas", "Río Urubamba", "Río Mantaro"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué es la huella ecológica?",
          type: "multiple-choice",
          options: [
            "Una marca en el suelo",
            "El impacto ambiental que producimos",
            "Un tipo de calzado",
            "Una huella digital",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos es un problema causado por la contaminación del aire?",
          type: "multiple-choice",
          options: ["Inundaciones", "Terremotos", "Enfermedades respiratorias", "Sequías"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la agricultura sostenible?",
          type: "multiple-choice",
          options: [
            "Usar muchos pesticidas",
            "Cultivar sin dañar el medio ambiente",
            "Talar bosques para sembrar",
            "Usar mucha agua",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos animales es endémico de Perú?",
          type: "multiple-choice",
          options: ["León", "Mono choro de cola amarilla", "Elefante", "Jirafa"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué es un área natural protegida?",
          type: "multiple-choice",
          options: [
            "Un parque de diversiones",
            "Un espacio que se protege por su valor natural",
            "Una fábrica",
            "Un centro comercial",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el parque nacional más antiguo de Perú?",
          type: "multiple-choice",
          options: [
            "Parque Nacional del Manu",
            "Parque Nacional Huascarán",
            "Parque Nacional de Cutervo",
            "Parque Nacional Bahuaja-Sonene",
          ],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la erosión del suelo?",
          type: "multiple-choice",
          options: ["Plantar árboles", "El desgaste de la tierra", "Regar las plantas", "Abonar la tierra"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos NO es un efecto del cambio climático?",
          type: "multiple-choice",
          options: [
            "Aumento del nivel del mar",
            "Derretimiento de glaciares",
            "Aumento de especies animales",
            "Fenómenos meteorológicos extremos",
          ],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la economía circular?",
          type: "multiple-choice",
          options: [
            "Gastar mucho dinero",
            "Un modelo económico que busca reducir, reutilizar y reciclar",
            "Ahorrar en el banco",
            "Comprar muchas cosas",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es la principal causa de la deforestación en la Amazonía peruana?",
          type: "multiple-choice",
          options: [
            "La agricultura y ganadería",
            "La construcción de casas",
            "Los incendios naturales",
            "Los terremotos",
          ],
          correctAnswer: "a",
        },
        {
          question: "¿Qué es la desertificación?",
          type: "multiple-choice",
          options: [
            "Plantar árboles en el desierto",
            "El proceso por el cual tierras fértiles se convierten en desierto",
            "Crear oasis",
            "Llover en el desierto",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos es un problema del uso excesivo de plásticos?",
          type: "multiple-choice",
          options: [
            "Mejora la calidad del agua",
            "Contamina océanos y afecta a la vida marina",
            "Ayuda a las plantas a crecer",
            "Limpia el aire",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Qué son las energías limpias?",
          type: "multiple-choice",
          options: [
            "Energías que contaminan mucho",
            "Energías que no producen contaminación",
            "Energías muy caras",
            "Energías que usan petróleo",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos NO es un recurso hídrico de Perú?",
          type: "multiple-choice",
          options: ["Lago Titicaca", "Río Amazonas", "Mar Mediterráneo", "Río Urubamba"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la biodiversidad de Perú?",
          type: "text",
          keywords: ["variedad", "especies", "ecosistemas", "diversidad", "flora", "fauna"],
        },
        {
          question: "Explica qué podemos hacer para cuidar el medio ambiente en nuestra vida diaria.",
          type: "text",
          keywords: [
            "reciclar",
            "ahorrar",
            "agua",
            "luz",
            "energía",
            "transporte",
            "público",
            "plantar",
            "reducir",
            "reutilizar",
          ],
        },
      ]
    } else {
      // hard
      return [
        {
          question: "¿Qué es la resiliencia ecológica?",
          type: "multiple-choice",
          options: [
            "La capacidad de un ecosistema para resistir perturbaciones",
            "Un tipo de planta",
            "Un animal en extinción",
            "Un tipo de contaminación",
          ],
          correctAnswer: "a",
        },
        {
          question: "¿Cuál es el principal gas de efecto invernadero?",
          type: "multiple-choice",
          options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la eutrofización?",
          type: "multiple-choice",
          options: [
            "Un tipo de árbol",
            "El enriquecimiento excesivo de nutrientes en un ecosistema acuático",
            "Una especie de pez",
            "Un método de pesca",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estas NO es una consecuencia de la minería ilegal en Perú?",
          type: "multiple-choice",
          options: [
            "Contaminación por mercurio",
            "Deforestación",
            "Mejora de la calidad del agua",
            "Pérdida de biodiversidad",
          ],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la biocapacidad?",
          type: "multiple-choice",
          options: [
            "La capacidad de un área para producir recursos y absorber residuos",
            "Un tipo de enfermedad",
            "Una planta medicinal",
            "Un animal en extinción",
          ],
          correctAnswer: "a",
        },
        {
          question: "¿Cuál es la importancia de los humedales?",
          type: "multiple-choice",
          options: [
            "No tienen ninguna importancia",
            "Son fuentes de contaminación",
            "Regulan el ciclo del agua y albergan biodiversidad",
            "Solo sirven para el turismo",
          ],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la acidificación de los océanos?",
          type: "multiple-choice",
          options: [
            "La disminución del pH del agua marina",
            "El aumento de la temperatura del mar",
            "La contaminación por plásticos",
            "El aumento de peces",
          ],
          correctAnswer: "a",
        },
        {
          question: "¿Cuál de estos ecosistemas peruanos tiene mayor biodiversidad?",
          type: "multiple-choice",
          options: ["Desierto costero", "Puna", "Selva amazónica", "Páramo"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la biopiratería?",
          type: "multiple-choice",
          options: [
            "Un tipo de pirata",
            "La apropiación ilegal de recursos biológicos o conocimientos tradicionales",
            "Un método de conservación",
            "Un tipo de planta",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es el principal problema ambiental de la costa peruana?",
          type: "multiple-choice",
          options: [
            "Exceso de lluvia",
            "Contaminación marina y escasez de agua",
            "Demasiada vegetación",
            "Exceso de animales",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Qué es la permacultura?",
          type: "multiple-choice",
          options: [
            "Un sistema de diseño agrícola sostenible",
            "Un tipo de contaminación",
            "Una especie de planta",
            "Un animal en extinción",
          ],
          correctAnswer: "a",
        },
        {
          question: "¿Cuál de estos NO es un servicio ecosistémico?",
          type: "multiple-choice",
          options: ["Purificación del aire", "Polinización", "Contaminación del agua", "Control de erosión"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la huella hídrica?",
          type: "multiple-choice",
          options: [
            "Una marca en el agua",
            "El volumen total de agua dulce utilizado para producir bienes y servicios",
            "Un tipo de contaminación",
            "Una técnica de natación",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es la principal amenaza para el oso de anteojos en Perú?",
          type: "multiple-choice",
          options: ["La pérdida de hábitat", "El cambio climático", "Los depredadores naturales", "Las enfermedades"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué es la agroecología?",
          type: "multiple-choice",
          options: [
            "El uso intensivo de pesticidas",
            "La aplicación de principios ecológicos a la agricultura",
            "La tala de bosques para sembrar",
            "El uso de transgénicos",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál de estos NO es un objetivo de desarrollo sostenible de la ONU?",
          type: "multiple-choice",
          options: [
            "Acción por el clima",
            "Agua limpia y saneamiento",
            "Aumentar el consumismo",
            "Energía asequible y no contaminante",
          ],
          correctAnswer: "c",
        },
        {
          question: "¿Qué es la economía verde?",
          type: "multiple-choice",
          options: [
            "Usar billetes verdes",
            "Un modelo económico que busca el bienestar humano y la equidad social reduciendo los riesgos ambientales",
            "Ahorrar dinero",
            "Gastar en cosas verdes",
          ],
          correctAnswer: "b",
        },
        {
          question: "Explica el concepto de justicia ambiental y da un ejemplo en el contexto peruano.",
          type: "text",
          keywords: [
            "equidad",
            "distribución",
            "impactos",
            "ambientales",
            "comunidades",
            "vulnerables",
            "minería",
            "contaminación",
            "derechos",
          ],
        },
        {
          question: "¿Cómo afecta el cambio climático a los glaciares andinos y qué consecuencias tiene para Perú?",
          type: "text",
          keywords: [
            "derretimiento",
            "retroceso",
            "agua",
            "escasez",
            "recursos hídricos",
            "agricultura",
            "consumo",
            "andes",
          ],
        },
        {
          question: "Explica la importancia de la Amazonía peruana para el equilibrio climático global.",
          type: "text",
          keywords: ["pulmón", "biodiversidad", "carbono", "oxígeno", "regulación", "clima", "lluvia", "ecosistema"],
        },
      ]
    }
  }

  // Preguntas de gramática
  else if (subject === "grammar") {
    if (difficulty === "easy") {
      return [
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Vaca", "Baca", "Vaka", "Baka"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Cavallo", "Kaballo", "Caballo", "Kavallo"],
          correctAnswer: "c",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Elefante", "Elefantte", "Elefamte", "Elefannte"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Jirafa", "Girafa", "Jirapa", "Girapa"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Avión", "Abión", "Havión", "Habión"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Vicicleta", "Bicicleta", "Visicleta", "Bisicleta"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Lápis", "Lápiz", "Lápic", "Láppiz"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Cuaderno", "Cuadeno", "Kuaderno", "Quaderno"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Bentana", "Ventana", "Bentanna", "Ventanna"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Zanahoria", "Sanahoria", "Zanahoria", "Sanahoria"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Pelota", "Pellota", "Pelotta", "Pellotta"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Sapato", "Zapato", "Sapatto", "Zapatto"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Árbol", "Arból", "Árvol", "Arvól"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Caza", "Casa", "Kasa", "Kaza"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Perro", "Pero", "Perrro", "Peró"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Gato", "Gatto", "Gatto", "Gatto"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Messa", "Mesa", "Meza", "Messa"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Silla", "Cilla", "Siya", "Ciya"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Escuela", "Eskuela", "Escuella", "Eskuella"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Maestro", "Maéstro", "Maéstro", "Maestró"],
          correctAnswer: "a",
        },
      ]
    } else if (difficulty === "medium") {
      return [
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Vurro", "Burro", "Vuro", "Buro"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Haber", "Haver", "A ver", "Aver"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Hay", "Ai", "Ay", "Hai"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Vajo", "Bajo", "Vago", "Bago"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Voca", "Boca", "Voka", "Boka"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Vampiro", "Banpiro", "Banpiro", "Vampiro"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Hierba", "Hierva", "Yerba", "Yerva"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Hola", "Ola", "Holla", "Olla"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Ahora", "Aora", "Haora", "Ahorra"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Vosque", "Bosque", "Voske", "Boske"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Cojer", "Coger", "Cojer", "Coller"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Examen", "Exámen", "Exsamen", "Exsámen"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Aver", "A ver", "Haver", "Haber"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Valla", "Vaya", "Balla", "Baya"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Hecho", "Echo", "Hechó", "Echó"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Tubo", "Tuvo", "Tubo", "Tuvo"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Haz", "Has", "As", "Az"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Haya", "Aya", "Halla", "Alla"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Vello", "Bello", "Veyo", "Beyo"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Cavo", "Cabo", "Kavo", "Kabo"],
          correctAnswer: "b",
        },
      ]
    } else {
      // hard
      return [
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Exhuberante", "Exuberante", "Exuverante", "Exhuverante"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Absorver", "Absorber", "Absorver", "Absorber"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Adquisición", "Adquicisión", "Adquisisión", "Adqisición"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Idiosincracia", "Idiosincrasia", "Idiosincracia", "Idiosincrasia"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Eminente", "Inminente", "Heminente", "Hinminente"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Excéptico", "Escéptico", "Exéptico", "Eséptico"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Exhumar", "Exumar", "Eshumar", "Esumar"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Obscuro", "Oscuro", "Obscuro", "Oscuro"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Hebrio", "Ebrio", "Hebrio", "Ebrio"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Abceso", "Acceso", "Abseso", "Absceso"],
          correctAnswer: "d",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Coadyuvar", "Coadyubar", "Coadlluvar", "Coadllubar"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Convalecencia", "Combalecencia", "Convalescencia", "Combalescencia"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Enajenar", "Enagenar", "Henajenar", "Henagenar"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Espectativa", "Expectativa", "Espectativa", "Expectativa"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Estricnina", "Estrignina", "Extricnina", "Extrignina"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Excentrico", "Excéntrico", "Escentrico", "Escéntrico"],
          correctAnswer: "b",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Exhaustivo", "Exaustivo", "Exahustivo", "Exhautivo"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Injerencia", "Ingerencia", "Hinjerencia", "Hingerencia"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Proscribir", "Proscrivir", "Proscribir", "Proscrivir"],
          correctAnswer: "a",
        },
        {
          question: "¿Cómo se escribe correctamente?",
          type: "multiple-choice",
          options: ["Subrrepticio", "Subrepticio", "Surrepticio", "Surepticio"],
          correctAnswer: "c",
        },
      ]
    }
  }

  // Preguntas de historia de Perú
  else if (subject === "history") {
    if (difficulty === "easy") {
      return [
        {
          question: "¿Quién fue el último emperador inca?",
          type: "multiple-choice",
          options: ["Huayna Cápac", "Atahualpa", "Huáscar", "Manco Inca"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué español conquistó el Imperio Inca?",
          type: "multiple-choice",
          options: ["Hernán Cortés", "Francisco Pizarro", "Diego de Almagro", "Pedro de Valdivia"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál es la capital de Perú?",
          type: "multiple-choice",
          options: ["Cusco", "Lima", "Arequipa", "Trujillo"],
          correctAnswer: "b",
        },
        {
          question: "¿En qué año se declaró la independencia de Perú?",
          type: "multiple-choice",
          options: ["1821", "1824", "1830", "1810"],
          correctAnswer: "a",
        },
        {
          question: "¿Quién proclamó la independencia de Perú?",
          type: "multiple-choice",
          options: ["Simón Bolívar", "José de San Martín", "Túpac Amaru II", "Francisco Pizarro"],
          correctAnswer: "b",
        },
        {
          question: "¿Cuál fue la capital del Imperio Inca?",
          type: "multiple-choice",
          options: ["Lima", "Machu Picchu", "Cusco", "Cajamarca"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué civilización peruana construyó las líneas de Nazca?",
          type: "multiple-choice",
          options: ["Los Incas", "Los Mochicas", "Los Nazca", "Los Chimú"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué animal aparece en el escudo nacional de Perú?",
          type: "multiple-choice",
          options: ["Cóndor", "Vicuña", "Puma", "Llama"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué colores tiene la bandera de Perú?",
          type: "multiple-choice",
          options: ["Azul y blanco", "Verde y amarillo", "Rojo y blanco", "Rojo, blanco y azul"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué famosa ciudadela inca fue descubierta en 1911?",
          type: "multiple-choice",
          options: ["Sacsayhuamán", "Ollantaytambo", "Machu Picchu", "Písac"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué lago comparten Perú y Bolivia?",
          type: "multiple-choice",
          options: ["Lago Junín", "Lago Titicaca", "Lago Umayo", "Lago Huacachina"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca es famosa por sus cerámicas con forma de rostros?",
          type: "multiple-choice",
          options: ["Chavín", "Mochica", "Nazca", "Paracas"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué idioma, además del español, es oficial en Perú?",
          type: "multiple-choice",
          options: ["Aymara", "Quechua", "Guaraní", "Náhuatl"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué famoso explorador descubrió Machu Picchu?",
          type: "multiple-choice",
          options: ["Hiram Bingham", "Thor Heyerdahl", "Jacques Cousteau", "Howard Carter"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué guerra enfrentó a Perú y Chile en el siglo XIX?",
          type: "multiple-choice",
          options: ["Guerra del Pacífico", "Guerra de la Independencia", "Guerra con Ecuador", "Guerra con Bolivia"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué presidente peruano gobernó durante la década de 1990?",
          type: "multiple-choice",
          options: ["Alan García", "Alberto Fujimori", "Alejandro Toledo", "Ollanta Humala"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca construyó la ciudadela de Chan Chan?",
          type: "multiple-choice",
          options: ["Chimú", "Mochica", "Nazca", "Wari"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué montaña es considerada la más alta de Perú?",
          type: "multiple-choice",
          options: ["Huascarán", "Alpamayo", "Coropuna", "Yerupajá"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué río es el más largo de Perú?",
          type: "multiple-choice",
          options: ["Río Rímac", "Río Amazonas", "Río Urubamba", "Río Marañón"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué héroe nacional peruano murió en la batalla de Arica?",
          type: "multiple-choice",
          options: ["Miguel Grau", "Francisco Bolognesi", "Andrés Avelino Cáceres", "José Olaya"],
          correctAnswer: "b",
        },
      ]
    } else if (difficulty === "medium") {
      return [
        {
          question: "¿Qué batalla selló la independencia de Perú y América del Sur?",
          type: "multiple-choice",
          options: ["Batalla de Ayacucho", "Batalla de Junín", "Batalla de Arica", "Batalla de Tarapacá"],
          correctAnswer: "a",
        },
        {
          question: "¿Quién fue el líder de la rebelión indígena contra los españoles en 1780?",
          type: "multiple-choice",
          options: ["Manco Inca", "Túpac Amaru II", "Atahualpa", "Huáscar"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué territorio perdió Perú tras la Guerra del Pacífico?",
          type: "multiple-choice",
          options: ["Loreto", "Tarapacá", "Tumbes", "Amazonas"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca es conocida por sus trepanaciones craneanas?",
          type: "multiple-choice",
          options: ["Paracas", "Nazca", "Mochica", "Wari"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué presidente peruano implementó la reforma agraria en la década de 1960?",
          type: "multiple-choice",
          options: ["Fernando Belaúnde Terry", "Juan Velasco Alvarado", "Manuel A. Odría", "Alan García"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué héroe naval peruano murió en el Combate de Angamos?",
          type: "multiple-choice",
          options: ["Miguel Grau", "Francisco Bolognesi", "Alfonso Ugarte", "Andrés Avelino Cáceres"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué cultura pre-inca construyó el complejo arqueológico de Caral?",
          type: "multiple-choice",
          options: ["Cultura Caral", "Cultura Chavín", "Cultura Lima", "Cultura Paracas"],
          correctAnswer: "a",
        },
        {
          question: "¿En qué año se firmó el Tratado de Ancón que puso fin a la Guerra del Pacífico?",
          type: "multiple-choice",
          options: ["1879", "1883", "1890", "1902"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué presidente peruano fue derrocado por un golpe de Estado en 1968?",
          type: "multiple-choice",
          options: ["Manuel Prado", "Fernando Belaúnde Terry", "Manuel A. Odría", "José Luis Bustamante y Rivero"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca es conocida por sus textiles de gran calidad?",
          type: "multiple-choice",
          options: ["Paracas", "Nazca", "Mochica", "Chimú"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué presidente peruano enfrentó la crisis de los rehenes en la residencia del embajador japonés?",
          type: "multiple-choice",
          options: ["Alan García", "Alberto Fujimori", "Alejandro Toledo", "Ollanta Humala"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca construyó la fortaleza de Kuelap?",
          type: "multiple-choice",
          options: ["Chachapoyas", "Wari", "Chimú", "Tiahuanaco"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué presidente peruano gobernó durante la Guerra con Ecuador en 1995?",
          type: "multiple-choice",
          options: ["Alan García", "Alberto Fujimori", "Alejandro Toledo", "Ollanta Humala"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca es conocida por sus geoglifos?",
          type: "multiple-choice",
          options: ["Paracas", "Nazca", "Mochica", "Chimú"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué presidente peruano implementó el 'autogolpe' en 1992?",
          type: "multiple-choice",
          options: ["Alan García", "Alberto Fujimori", "Alejandro Toledo", "Ollanta Humala"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca construyó el complejo de Chavín de Huántar?",
          type: "multiple-choice",
          options: ["Chavín", "Mochica", "Nazca", "Wari"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué presidente peruano enfrentó la crisis económica con hiperinflación en la década de 1980?",
          type: "multiple-choice",
          options: ["Fernando Belaúnde Terry", "Alan García", "Alberto Fujimori", "Valentín Paniagua"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca es conocida por su cerámica negra?",
          type: "multiple-choice",
          options: ["Paracas", "Nazca", "Chimú", "Wari"],
          correctAnswer: "c",
        },
        {
          question: "Describe brevemente el Imperio Inca y menciona sus principales características.",
          type: "text",
          keywords: [
            "tahuantinsuyo",
            "cusco",
            "quechua",
            "inca",
            "emperador",
            "caminos",
            "agricultura",
            "terrazas",
            "quipu",
            "organización",
          ],
        },
        {
          question: "Explica las causas y consecuencias de la Guerra del Pacífico para Perú.",
          type: "text",
          keywords: [
            "salitre",
            "guano",
            "chile",
            "bolivia",
            "territorio",
            "tarapacá",
            "arica",
            "tacna",
            "derrota",
            "economía",
          ],
        },
      ]
    } else {
      // hard
      return [
        {
          question: "¿Qué tratado definió la frontera entre Perú y Colombia?",
          type: "multiple-choice",
          options: ["Tratado de Ancón", "Tratado Salomón-Lozano", "Tratado de Lima", "Tratado de Río de Janeiro"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué político peruano fundó la Alianza Popular Revolucionaria Americana (APRA)?",
          type: "multiple-choice",
          options: [
            "José Carlos Mariátegui",
            "Víctor Raúl Haya de la Torre",
            "Manuel González Prada",
            "Luis Alberto Sánchez",
          ],
          correctAnswer: "b",
        },
        {
          question: "¿Qué virrey implementó las reformas borbónicas en el Perú?",
          type: "multiple-choice",
          options: [
            "Francisco de Toledo",
            "Manuel de Amat y Junient",
            "José Fernando de Abascal",
            "Agustín de Jáuregui",
          ],
          correctAnswer: "c",
        },
        {
          question: "¿Qué batalla marcó el inicio de la Guerra del Pacífico?",
          type: "multiple-choice",
          options: ["Batalla de Arica", "Combate de Angamos", "Batalla de Tarapacá", "Combate de Iquique"],
          correctAnswer: "d",
        },
        {
          question: "¿Qué presidente peruano fue asesinado por miembros del MRTA en 1985?",
          type: "multiple-choice",
          options: ["Luis Miguel Sánchez Cerro", "Fernando Belaúnde Terry", "Manuel Odría", "Miguel Iglesias"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué arqueólogo peruano descubrió la tumba del Señor de Sipán?",
          type: "multiple-choice",
          options: ["Julio C. Tello", "Walter Alva", "Luis Lumbreras", "Federico Kauffmann Doig"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué presidente peruano firmó el Tratado de Paz con Ecuador en 1998?",
          type: "multiple-choice",
          options: ["Alan García", "Alberto Fujimori", "Alejandro Toledo", "Ollanta Humala"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué movimiento revolucionario surgió en Perú en la década de 1980?",
          type: "multiple-choice",
          options: ["Sendero Luminoso", "Tupac Amaru", "Montoneros", "M-19"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué intelectual peruano escribió 'Siete ensayos de interpretación de la realidad peruana'?",
          type: "multiple-choice",
          options: ["César Vallejo", "José Carlos Mariátegui", "Mario Vargas Llosa", "Víctor Raúl Haya de la Torre"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué presidente peruano nacionalizó la International Petroleum Company?",
          type: "multiple-choice",
          options: ["Fernando Belaúnde Terry", "Juan Velasco Alvarado", "Francisco Morales Bermúdez", "Alan García"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca desarrolló la metalurgia del cobre y el oro?",
          type: "multiple-choice",
          options: ["Vicús", "Mochica", "Nazca", "Chimú"],
          correctAnswer: "a",
        },
        {
          question: "¿Qué presidente peruano implementó el Plan Inca?",
          type: "multiple-choice",
          options: ["Fernando Belaúnde Terry", "Juan Velasco Alvarado", "Francisco Morales Bermúdez", "Alan García"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca es conocida por su cerámica policromada?",
          type: "multiple-choice",
          options: ["Paracas", "Nazca", "Mochica", "Chimú"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué presidente peruano enfrentó la crisis de la deuda externa en la década de 1980?",
          type: "multiple-choice",
          options: ["Fernando Belaúnde Terry", "Alan García", "Alberto Fujimori", "Valentín Paniagua"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca desarrolló un sistema de irrigación avanzado en la costa norte?",
          type: "multiple-choice",
          options: ["Paracas", "Nazca", "Mochica", "Chimú"],
          correctAnswer: "c",
        },
        {
          question: "¿Qué presidente peruano implementó el 'shock económico' en 1990?",
          type: "multiple-choice",
          options: ["Alan García", "Alberto Fujimori", "Alejandro Toledo", "Ollanta Humala"],
          correctAnswer: "b",
        },
        {
          question: "¿Qué cultura pre-inca es considerada la primera civilización de América?",
          type: "multiple-choice",
          options: ["Caral", "Chavín", "Mochica", "Nazca"],
          correctAnswer: "a",
        },
        {
          question:
            "Analiza el impacto de la reforma agraria implementada por el gobierno de Juan Velasco Alvarado en la sociedad peruana.",
          type: "text",
          keywords: [
            "haciendas",
            "latifundios",
            "cooperativas",
            "campesinos",
            "propiedad",
            "tierra",
            "agricultura",
            "desigualdad",
            "oligarquía",
          ],
        },
        {
          question:
            "Explica las principales características del gobierno de Alberto Fujimori y su impacto en la historia reciente de Perú.",
          type: "text",
          keywords: [
            "autogolpe",
            "constitución",
            "terrorismo",
            "sendero",
            "economía",
            "neoliberal",
            "corrupción",
            "montesinos",
            "autoritarismo",
          ],
        },
        {
          question: "Analiza las relaciones entre Perú y Chile después de la Guerra del Pacífico hasta la actualidad.",
          type: "text",
          keywords: [
            "frontera",
            "límites",
            "marítimos",
            "haya",
            "tratados",
            "comercio",
            "inversiones",
            "diplomacia",
            "conflicto",
          ],
        },
      ]
    }
  }

  // Si no se encuentra la materia o dificultad, devolver preguntas genéricas
  return [
    {
      question: "¿Cuál es la capital de Perú?",
      type: "multiple-choice",
      options: ["Cusco", "Lima", "Arequipa", "Trujillo"],
      correctAnswer: "b",
    },
    {
      question: "¿Cuánto es 2 + 2?",
      type: "multiple-choice",
      options: ["3", "4", "5", "6"],
      correctAnswer: "b",
    },
    {
      question: "¿Cómo se escribe correctamente?",
      type: "multiple-choice",
      options: ["Vaca", "Baca", "Vaka", "Baka"],
      correctAnswer: "a",
    },
    {
      question: "¿Quién descubrió América?",
      type: "multiple-choice",
      options: ["Cristóbal Colón", "Simón Bolívar", "Francisco Pizarro", "Hernán Cortés"],
      correctAnswer: "a",
    },
    {
      question: "¿Qué planeta es conocido como el planeta rojo?",
      type: "multiple-choice",
      options: ["Venus", "Júpiter", "Marte", "Saturno"],
      correctAnswer: "c",
    },
  ]
}