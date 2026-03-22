import React, { useState } from 'react';

// Asumimos que tienes un componente para mostrar el detalle del blog
// import BlogDetail from './BlogDetail'; // Descomenta si lo tienes en otro archivo

// Datos de los blog posts (los que ya tienes)
const blogPostsData = [
  {
    id: 1,
    title: "El poder de la IA en la previsión de inventario: menos quiebres, más eficiencia",
    image: "/blog/inventory-ai.webp", // Miniatura para la tarjeta
    imageUrl: "https://framerusercontent.com/images/OfvM5o9RoNzi4UsnnWQoKjZGyA.png?scale-down-to=1024", // Imagen principal del post
    date: "9 de marzo de 2025", // Asegúrate que el formato sea consistente o parsea adecuadamente
    author: "Equipo Ingenio 360", // Puedes cambiar el autor si es específico
    readTime: "4 min de lectura", // Estimación basada en el contenido
    content: [
      {
        type: "introduction",
        text: "La gestión de inventario siempre ha sido un aspecto desafiante de las operaciones comerciales. Demasiado stock conduce a costos excesivos, mientras que muy poco resulta en agotamiento de existencias y pérdida de ventas. Los métodos de pronóstico tradicionales, que dependen de datos históricos y cálculos manuales, a menudo se quedan cortos en el mercado actual de rápido movimiento. Entra en juego la **previsión de inventario impulsada por IA**, un cambio de juego para las empresas que buscan optimizar las cadenas de suministro, minimizar el desperdicio y mejorar la eficiencia."
      },
      {
        type: "heading",
        level: 2, // Nivel de encabezado (h2)
        text: "Por qué la previsión tradicional se queda corta"
      },
      {
        type: "paragraph",
        text: "Muchas empresas todavía dependen de hojas de cálculo o sistemas ERP obsoletos para la previsión de la demanda. Estos métodos tienen dificultades con:"
      },
      {
        type: "list",
        items: [
          "Predicciones inexactas debido a las fluctuaciones del mercado y cambios en el comportamiento del consumidor.",
          "Falta de adaptabilidad en tiempo real, lo que lleva a una reposición de stock ineficiente.",
          "Excesiva dependencia de datos históricos, lo que dificulta la respuesta a cambios repentinos en la demanda."
        ]
      },
      {
          type: "paragraph",
          text: "Las soluciones impulsadas por IA resuelven estos problemas aprovechando datos en tiempo real, algoritmos de aprendizaje automático y análisis predictivo."
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo la IA mejora la previsión de inventario"
      },
      {
        type: "heading",
        level: 3, // Nivel de sub-encabezado (h3)
        text: "1. Procesamiento de datos en tiempo real"
      },
      {
        type: "paragraph",
        text: "A diferencia de los modelos tradicionales, la IA recopila y analiza continuamente datos en **tiempo real** de múltiples fuentes, como tendencias de ventas, demanda del mercado e incluso condiciones climáticas. Esto permite a las empresas ajustar dinámicamente los niveles de inventario."
      },
      {
        type: "heading",
        level: 3,
        text: "2. Análisis predictivo para la previsión de la demanda"
      },
      {
        type: "paragraph",
        text: "Los modelos de IA identifican patrones en datos históricos de ventas, tendencias estacionales y factores externos (por ejemplo, cambios económicos) para predecir la demanda futura con alta precisión. Esto ayuda a las empresas a mantener niveles óptimos de stock."
      },
      {
        type: "heading",
        level: 3,
        text: "3. Reposición automatizada y alertas inteligentes"
      },
      {
        type: "paragraph",
        text: "Los sistemas de inventario impulsados por IA pueden activar automáticamente pedidos de reposición cuando los niveles de stock bajan, asegurando que nunca te quedes sin productos de alta demanda. Las alertas inteligentes notifican a las empresas sobre posibles agotamientos de stock o exceso de inventario."
      },
      {
        type: "heading",
        level: 3,
        text: "4. Reducción de desperdicios y costos de mantenimiento"
      },
      {
        type: "paragraph",
        text: "El exceso de existencias conduce a un aumento de los costos de almacenamiento y a la posible obsolescencia del producto. La previsión impulsada por IA previene el exceso de inventario, reduciendo el desperdicio y optimizando el capital de trabajo."
      },
      {
        type: "heading",
        level: 2,
        text: "Industrias que se benefician de la previsión impulsada por IA"
      },
      {
        type: "paragraph",
        text: "La previsión con IA no es solo para el sector minorista, está transformando múltiples industrias:"
      },
      {
        type: "list",
        items: [
          "Comercio electrónico y minorista: Evita la escasez de stock mientras te mantienes al día con las fluctuaciones de la demanda.",
          "Manufactura: Optimiza la adquisición de materias primas y los cronogramas de producción.",
          "Salud y farmacéutica: Asegura la disponibilidad oportuna de medicamentos críticos.",
          "Alimentos y bebidas: Minimiza el deterioro y reduce las ineficiencias de la cadena de suministro."
        ]
      },
      {
        type: "heading",
        level: 2,
        text: "Reflexiones finales: Inventario a prueba de futuro con IA"
      },
      {
        type: "paragraph",
        text: "La previsión impulsada por IA no es solo un lujo, es una necesidad para las empresas que buscan mantenerse competitivas en el mundo actual basado en datos. Al aprovechar el aprendizaje automático y la automatización, las empresas pueden reducir las roturas de stock, disminuir costos y maximizar la eficiencia como nunca antes."
      },
      {
        type: "paragraph",
        text: "¿Listo para optimizar tu inventario con IA? Las soluciones avanzadas de previsión de Cawar pueden ayudarte a tomar el control de tu cadena de suministro con confianza." // Asumo que "Cawar" es un nombre de ejemplo o el de tu empresa.
      }
    ],
    relatedBlogs: [2, 3, 4] // IDs de blogs relacionados (ejemplo)
  },
  {
    id: 2,
    title: "Cómo la IA está transformando la gestión de la cadena de suministro",
    image: "/blog/supply-chain-ai.webp", // Miniatura para la tarjeta
    imageUrl: "https://framerusercontent.com/images/PxxduMvIVplzvjE6fI7PCrVlR6w.png?scale-down-to=1024", // Imagen principal del post
    date: "20 de marzo de 2025",
    author: "Equipo Ingenio 360", // Puedes cambiarlo si es otro autor
    readTime: "5 min de lectura", // Estimación
    content: [
      {
        type: "introduction",
        text: "La cadena de suministro global se ha convertido en un sistema complejo y dinámico influenciado por diversos factores: cambios económicos, cambio climático, regulaciones comerciales y comportamiento del consumidor. Las estrategias tradicionales de gestión de la cadena de suministro luchan por mantener el ritmo, lo que a menudo conduce a ineficiencias, exceso de inventario o escasez de existencias."
      },
      {
        type: "paragraph",
        text: "Aquí es donde entra en juego la **gestión de la cadena de suministro impulsada por IA**. La Inteligencia Artificial (IA) aprovecha los **datos en tiempo real, el análisis predictivo y la automatización** para optimizar los procesos de la cadena de suministro, asegurando que las empresas sigan siendo ágiles y eficientes. En este blog, exploraremos cómo la IA está revolucionando las cadenas de suministro y por qué las empresas que no adoptan estas tecnologías corren el riesgo de quedarse atrás."
      },
      {
        type: "heading",
        level: 1, // Título principal dentro del contenido
        text: "1. Previsión de la demanda con aprendizaje automático"
      },
      {
        type: "paragraph",
        text: "Uno de los mayores desafíos en la gestión de la cadena de suministro es predecir las **fluctuaciones de la demanda**. Las empresas a menudo dependen de métodos de pronóstico obsoletos, que dependen de **datos históricos de ventas** y no consideran los **cambios del mercado en tiempo real**."
      },
      {
        type: "heading",
        level: 2, // Subtítulo
        text: "Cómo la IA mejora la previsión de la demanda"
      },
      {
        type: "paragraph",
        text: "Las herramientas de previsión de la demanda impulsadas por IA analizan grandes cantidades de datos, incluyendo:"
      },
      {
        type: "list",
        items: [
          "**Tendencias de ventas**: Análisis de datos de ventas pasados y presentes.",
          "**Demanda del mercado**: Detección de cambios basados en factores externos como actividades de la competencia, preferencias del consumidor e incluso eventos globales.",
          "**Condiciones económicas**: Ajuste de predicciones basadas en fluctuaciones económicas, inflación o interrupciones en la cadena de suministro.",
          "**Tendencias estacionales**: Anticipación de períodos de alta y baja demanda para una mejor planificación del inventario."
        ]
      },
      {
          type: "example",
          text: "Ejemplo: IA en la previsión minorista\n\nUna importante marca minorista que utiliza la previsión basada en IA redujo las **roturas de stock en un 35%** y el **exceso de inventario en un 20%**, simplemente analizando los patrones de demanda en tiempo real y ajustando los niveles de stock en consecuencia."
      },
      {
        type: "heading",
        level: 1,
        text: "2. Optimización inteligente del inventario"
      },
      {
        type: "paragraph",
        text: "Gestionar el inventario de manera eficiente es clave para reducir costos y maximizar las ganancias. La optimización de inventario impulsada por IA asegura que las empresas mantengan los **niveles de stock correctos en el momento adecuado**, previniendo tanto el **exceso de existencias** como la **escasez de stock**."
      },
      {
        type: "heading",
        level: 2,
        text: "Beneficios de la IA en la optimización de inventario"
      },
      {
        type: "list",
        items: [
          "**Ajustes automatizados de stock**: La IA sugiere cuándo y cuánto inventario pedir basándose en **datos de ventas en tiempo real**.",
          "**Reducción de los costos de mantenimiento**: La IA ayuda a mantener niveles óptimos de stock, previniendo gastos innecesarios de almacenamiento.",
          "**Estrategias de precios dinámicos**: Los análisis basados en IA permiten a las empresas ajustar los precios según la oferta y la demanda, ayudando a liquidar el stock de baja rotación."
        ]
      },
      {
          type: "example",
          text: "Ejemplo: IA en el comercio electrónico\n\nAmazon, por ejemplo, utiliza IA para predecir qué productos tendrán demanda y **redirige automáticamente el stock a almacenes más cercanos a las áreas de alta demanda**. Esto reduce el tiempo de entrega y optimiza las cadenas de suministro."
      },
      {
        type: "heading",
        level: 1,
        text: "3. Optimización de rutas para entregas más rápidas"
      },
      {
        type: "paragraph",
        text: "Las ineficiencias en el envío a menudo resultan en **entregas retrasadas, mayores costos de transporte y clientes insatisfechos**. La logística impulsada por IA analiza las **condiciones del tráfico, el clima y los datos de entregas pasadas** para determinar las rutas de envío más eficientes."
      },
      {
        type: "heading",
        level: 2,
        text: "Cómo la IA optimiza las rutas"
      },
      {
        type: "list",
        items: [
          "**Monitoreo de tráfico en tiempo real**: Ajusta las rutas de entrega basándose en las condiciones del tráfico en vivo.",
          "**Ajustes de ruta basados en el clima**: Predice las condiciones climáticas y evita interrupciones.",
          "**Programación de transporte rentable**: Optimiza las rutas para reducir el consumo de combustible y los costos de transporte."
        ]
      },
      {
          type: "example",
          text: "Ejemplo: IA en la entrega de última milla\n\nEmpresas como UPS y FedEx utilizan la optimización de rutas basada en IA, reduciendo el consumo de combustible hasta en un **10%** y mejorando la velocidad de entrega en un **20%**."
      },
      {
        type: "heading",
        level: 1,
        text: "4. Gestión de riesgos y predicción de interrupciones"
      },
      {
        type: "paragraph",
        text: "La cadena de suministro es vulnerable a riesgos como **retrasos de proveedores, desastres naturales y recesiones económicas**. La IA identifica riesgos potenciales mediante:"
      },
      {
        type: "list",
        items: [
          "Monitoreo de eventos geopolíticos y cambios regulatorios.",
          "Predicción de fallas de proveedores basada en datos de rendimiento.",
          "Detección de señales tempranas de escasez de materiales o aumentos de precios."
        ]
      },
      {
          type: "paragraph",
          text: "Al predecir los riesgos de manera temprana, las empresas pueden **ajustar proactivamente sus cadenas de suministro**, asegurando operaciones más fluidas incluso en tiempos de crisis."
      },
      {
        type: "heading",
        level: 2, // Usaré level 2 para "Final Thoughts" para mantener consistencia con la estructura general de un blog.
        text: "Reflexiones finales"
      },
      {
        type: "paragraph",
        text: "La gestión de la cadena de suministro impulsada por IA ya no es un concepto futurista, es una necesidad para las empresas que desean **mantenerse competitivas, reducir ineficiencias y mejorar la rentabilidad**. Al aprovechar la previsión, la automatización y el análisis impulsados por IA, las empresas pueden construir una cadena de suministro **resiliente, adaptable y rentable**."
      },
      {
        type: "paragraph",
        text: "¿Quieres optimizar tu cadena de suministro con IA? Las soluciones impulsadas por IA de Cawar pueden ayudarte a tomar el control de tu inventario, logística y previsiones." // Nuevamente, "Cawar" como placeholder.
      }
    ],
    relatedBlogs: [1, 3, 5] // Ejemplo, actualiza según sea necesario
  },
  {
    id: 3,
    title: "Prevención de quiebres de stock: cómo IA mantiene tu negocio funcionando sin problemas", // "AU" lo interpretamos como IA
    image: "/blog/logistics-ai.webp", // Miniatura para la tarjeta
    imageUrl: "https://framerusercontent.com/images/j84JETLKpgoeIf3lbgTN0J4DEk.png?scale-down-to=1024", // Imagen principal del post
    date: "4 de marzo de 2025", // Fecha del post
    author: "Jordan Hayes", // Tomado de la imagen "Captura de pantalla 2025-05-19 034209.png" que es consistente con estas nuevas imágenes.
    readTime: "3 min de lectura", // Estimación, puedes ajustarla.
    content: [
      {
        type: "introduction",
        text: "Las roturas de stock son la peor pesadilla de toda empresa. Cuando un producto se agota, los clientes se frustran, se pierden ventas y la reputación de la marca se ve afectada. Desafortunadamente, muchas empresas todavía dependen del seguimiento manual o de herramientas de pronóstico obsoletas, que no logran predecir la demanda con precisión."
      },
      {
        type: "paragraph",
        text: "¿La buena noticia? Los sistemas de gestión de inventario impulsados por IA ofrecen una solución revolucionaria. Al utilizar análisis predictivos, seguimiento en tiempo real y reabastecimiento automatizado, la IA ayuda a las empresas a mantener niveles óptimos de stock y a prevenir costosas situaciones de escasez."
      },
      {
        type: "heading",
        level: 1,
        text: "1. El costo real de las roturas de stock"
      },
      {
        type: "paragraph",
        text: "Muchas empresas subestiman el daño que causan las roturas de stock. Un solo evento de rotura de stock puede llevar a:"
      },
      {
        type: "list",
        items: [
          "**Pérdida de ingresos**: Los estudios demuestran que las empresas pierden hasta el 10% de sus ventas anuales debido a la escasez de stock.",
          "**Insatisfacción del cliente**: El 70% de los clientes cambiará de marca si su producto preferido no está disponible.",
          "**Costos de reabastecimiento de emergencia**: El reabastecimiento urgente a menudo incurre en mayores costos de adquisición y envío."
        ]
      },
      {
        type: "heading",
        level: 1, // Lo mantengo como nivel 1 según las imágenes previas, podría ser 2 si prefieres
        text: "2. Cómo la IA previene las roturas de stock"
      },
      {
        type: "heading",
        level: 2, // Subsección
        text: "1. Predicción de las fluctuaciones de la demanda"
      },
      {
        type: "paragraph",
        text: "Los modelos de pronóstico de IA analizan:"
      },
      {
        type: "list",
        items: [
            "Tendencias de ventas a lo largo del tiempo.",
            "Factores externos como el clima, tendencias económicas y revuelo en redes sociales.",
            "Aumentos repentinos de la demanda (por ejemplo, tendencias virales o temporadas festivas)."
        ]
      },
      {
        type: "paragraph",
        text: "Al identificar estos factores en tiempo real, la IA asegura que las empresas siempre tengan niveles de stock adecuados."
      },
      {
        type: "example",
        text: "Ejemplo: IA en la industria de la moda\n\nUn minorista de moda global redujo la escasez de stock en un 40% después de implementar la previsión de demanda basada en IA, lo que les ayudó a rastrear las tendencias estacionales y ajustar el inventario en consecuencia."
      },
      {
        type: "heading",
        level: 2, // Subsección
        text: "2. Alertas de inventario automatizadas y reabastecimiento inteligente"
      },
      {
        type: "paragraph",
        text: "Los sistemas de IA proporcionan:"
      },
      {
        type: "list",
        items: [
          "Seguimiento de inventario en tiempo real, asegurando que las empresas nunca se queden con poco stock.",
          "Órdenes de compra automatizadas, activadas cuando el stock alcanza un umbral crítico.",
          "Coordinación de proveedores, permitiendo un reabastecimiento fluido antes de que ocurra la escasez."
        ]
      },
      {
        type: "heading",
        level: 1, // Lo mantengo como nivel 1, podría ser 2
        text: "3. Visibilidad de inventario multisede"
      },
      {
        type: "paragraph",
        text: "Muchas empresas luchan con el inventario distribuido en múltiples almacenes y tiendas. Los sistemas de inventario impulsados por IA centralizan el seguimiento del stock, asegurando que el stock se pueda redistribuir eficazmente."
      },
      {
        type: "example",
        text: "Ejemplo: IA en cadenas de supermercados\n\nWalmart utiliza IA para rastrear el inventario en miles de tiendas, reduciendo las roturas de stock en más del 25% y mejorando la eficiencia de la cadena de suministro."
      },
      {
        type: "heading",
        level: 2, // Para "Final Thoughts"
        text: "Reflexiones finales"
      },
      {
        type: "paragraph",
        text: "Las roturas de stock no solo afectan las ventas de hoy, sino que impactan la confianza del cliente y la reputación de la marca a largo plazo. Con la previsión y la automatización impulsadas por IA, las empresas pueden:"
      },
      {
        type: "list", // Los puntos bajo "businesses can:"
        items: [
            "Asegurar una gestión de inventario sin interrupciones.",
            "Reducir la pérdida de ingresos.",
            "Mejorar la satisfacción del cliente."
        ]
      },
      {
        type: "paragraph",
        text: "¿Listo para eliminar las roturas de stock? Las herramientas de previsión impulsadas por IA de Cawar ayudan a las empresas a mantener niveles óptimos de stock con precisión y eficiencia." // "Cawar" como placeholder
      }
    ],
    relatedBlogs: [1, 2, 4] // Ejemplo, actualiza según sea necesario
  },
  {
    id: 4,
    title: "Cómo la IA está revolucionando la gestión de inventarios: el futuro de la eficiencia empresarial",
    image: "/blog/demand-ml.webp", // Miniatura para la tarjeta
    imageUrl: "https://framerusercontent.com/images/jJjAgUTgTgNU1NIp4FTXq7ah3kc.jpg?scale-down-to=1024", // Imagen principal del post
    date: "14 de marzo de 2025",
    author: "Alex Smith", // O "Equipo Ingenio 360" si prefieres consistencia
    readTime: "5 min de lectura", // Estimación
    content: [
      {
        type: "introduction",
        text: "La gestión de inventarios siempre ha sido un acto de equilibrio. Demasiado stock conduce a costos de almacenamiento excesivos y desperdicio, mientras que muy poco resulta en ventas perdidas y clientes frustrados. Los sistemas tradicionales de gestión de inventarios dependen de datos históricos y seguimiento manual, que a menudo no proporcionan información precisa y en tiempo real."
      },
      {
        type: "paragraph",
        text: "La Inteligencia Artificial (IA) está cambiando el juego. Al aprovechar el aprendizaje automático, el análisis predictivo y la automatización, los sistemas de inventario impulsados por IA ayudan a las empresas a reducir las roturas de stock, minimizar el exceso y optimizar sus cadenas de suministro. En este artículo, exploraremos cómo la IA está revolucionando la gestión de inventarios y por qué las empresas deben adoptar esta tecnología para mantenerse competitivas."
      },
      {
        type: "heading",
        level: 1,
        text: "1. Las limitaciones de la gestión tradicional de inventarios"
      },
      {
        type: "paragraph",
        text: "Muchas empresas todavía utilizan el seguimiento basado en hojas de cálculo o sistemas obsoletos de Planificación de Recursos Empresariales (ERP). Estos métodos tienen desventajas significativas:"
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 1.1
        text: "1.1 Previsión de demanda inexacta"
      },
      {
        type: "paragraph",
        text: "La previsión tradicional se basa en datos de ventas pasadas, ignorando factores externos como:"
      },
      {
        type: "list",
        items: [
          "Tendencias del mercado y fluctuaciones estacionales de la demanda.",
          "Cambios económicos que afectan el comportamiento del consumidor.",
          "Interrupciones de la cadena de suministro en tiempo real (por ejemplo, retrasos de proveedores)."
        ]
      },
      {
          type: "paragraph",
          text: "El resultado: las empresas a menudo terminan con escasez de productos de alta demanda o con exceso de artículos de baja rotación."
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 1.2
        text: "1.2 Falta de visibilidad del inventario en tiempo real"
      },
      {
        type: "paragraph",
        text: "Sin seguimiento en tiempo real, las empresas luchan por monitorear los niveles de stock en múltiples ubicaciones, lo que lleva a:"
      },
      {
        type: "list",
        items: [
          "Oportunidades de reabastecimiento perdidas y roturas de stock.",
          "Acumulación excesiva de inventario en un almacén mientras otro se queda sin existencias."
        ]
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 1.3
        text: "1.3 Altos costos operativos"
      },
      {
        type: "paragraph",
        text: "La gestión ineficiente del inventario conduce a gastos de almacenamiento innecesarios, tarifas de reabastecimiento de emergencia e ingresos perdidos."
      },
      {
        type: "heading",
        level: 1,
        text: "2. Cómo la IA transforma la gestión de inventarios"
      },
      {
        type: "paragraph",
        text: "Las soluciones de inventario impulsadas por IA ofrecen información en tiempo real, reabastecimiento automatizado y análisis predictivo para ayudar a las empresas a mantener niveles óptimos de stock."
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 2.1
        text: "2.1 Previsión de demanda impulsada por IA"
      },
      {
        type: "paragraph",
        text: "En lugar de depender únicamente de datos de ventas pasadas, la previsión impulsada por IA analiza:"
      },
      {
        type: "list",
        items: [
          "Tendencias de comportamiento de compra del cliente.",
          "Señales de demanda del mercado provenientes de búsquedas en línea y redes sociales.",
          "Condiciones de la cadena de suministro global."
        ]
      },
      {
          type: "paragraph",
          text: "Estos conocimientos permiten a las businesses predecir la demanda con más del 90% de precisión, reduciendo tanto las roturas de stock como el exceso de inventario."
      },
      {
        type: "example",
        text: "Ejemplo: IA en el sector minorista\n\nUn importante minorista de moda que utiliza la previsión impulsada por IA redujo la escasez de stock en un 40%, asegurando que los estilos de alta demanda siempre estuvieran disponibles mientras se minimizaba la sobreproducción."
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 2.2
        text: "2.2 Reabastecimiento automatizado de stock"
      },
      {
        type: "paragraph",
        text: "Los sistemas de inventario impulsados por IA activan automáticamente los pedidos de reabastecimiento cuando los niveles de stock bajan, eliminando el riesgo de error humano."
      },
      {
        type: "heading",
        level: 3, // Para "How It Works:"
        text: "Cómo funciona:"
      },
      {
        type: "list",
        items: [
          "La IA detecta niveles bajos de stock y genera órdenes de compra automáticas.",
          "El sistema selecciona el mejor proveedor basándose en precios y plazos de entrega.",
          "Las empresas obtienen actualizaciones en tiempo real sobre el progreso del reabastecimiento."
        ]
      },
      {
          type: "paragraph",
          text: "Esto reduce la carga de trabajo manual y asegura que los productos siempre estén disponibles."
      },
      {
        type: "example",
        text: "Ejemplo: IA en cadenas de supermercados\n\nLos supermercados que utilizan sistemas de reabastecimiento impulsados por IA vieron una reducción del 30% en el desperdicio de productos perecederos al optimizar los pedidos de productos frescos basándose en las tendencias de la demanda."
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 2.3
        text: "2.3 Gestión optimizada de inventario multialmacén"
      },
      {
        type: "paragraph",
        text: "Para las empresas que gestionan inventario en múltiples ubicaciones, la IA proporciona:"
      },
      {
        type: "list",
        items: [
          "Visibilidad centralizada del stock.",
          "Transferencias inteligentes de stock entre almacenes.",
          "Recomendaciones dinámicas de precios para mover artículos de baja rotación."
        ]
      },
      {
          type: "paragraph",
          text: "Esto asegura una distribución eficiente del inventario y reduce los costos de almacenamiento."
      },
      {
        type: "example",
        text: "Ejemplo: IA en el almacenamiento para comercio electrónico\n\nEl sistema de inventario impulsado por IA de Amazon predice las tendencias de demanda regional y redistribuye el stock en consecuencia, reduciendo los retrasos en los envíos y los gastos de almacenamiento."
      },
      {
        type: "heading",
        level: 2, // Para "Final Thoughts"
        text: "Reflexiones finales"
      },
      {
        type: "paragraph",
        text: "La gestión de inventarios impulsada por IA ya no es un lujo, es una necesidad para las empresas que buscan escalar de manera eficiente. Al implementar la previsión y la automatización impulsadas por IA, las empresas pueden:"
      },
      {
          type: "list",
          items: [
              "Reducir las roturas de stock y mejorar la satisfacción del cliente.",
              "Minimizar el exceso de inventario y los costos de almacenamiento.",
              "Automatizar el reabastecimiento y optimizar las cadenas de suministro."
          ]
      },
      {
        type: "paragraph",
        text: "¿Quieres revolucionar tu gestión de inventarios? Las herramientas de previsión impulsadas por IA de Cawar ayudan a las empresas a mantenerse a la vanguardia con precisión y eficiencia." // "Cawar" como placeholder
      }
    ],
    relatedBlogs: [1, 5] // Ejemplo, actualiza según sea necesario
  },
  {
    id: 5,
    title: "Los costos ocultos del sobrestock y cómo la IA ayuda a evitarlos",
    image: "/blog/retail-predictive.webp", // Miniatura para la tarjeta
    imageUrl: "https://framerusercontent.com/images/VSv2JacyJXFEZNXP4inJoHHjHEc.png?scale-down-to=1024", // Imagen principal del post
    date: "18 de abril de 2025",
    author: "Emily White", // O "Equipo Ingenio 360"
    readTime: "4 min de lectura", // Estimación
    content: [
      {
        type: "introduction",
        text: "Si bien la mayoría de las empresas se centran en prevenir las roturas de stock, el sobrestock es un problema igualmente grave. El exceso de inventario inmoviliza capital, aumenta los costos de almacenamiento y conduce a desperdicios, especialmente en el caso de bienes perecederos. Las empresas a menudo sobreestiman la demanda, lo que lleva a una acumulación innecesaria que finalmente afecta la rentabilidad."
      },
      {
        type: "paragraph",
        text: "La Inteligencia Artificial (IA) está cambiando la forma en que las empresas gestionan el inventario. Al proporcionar análisis en tiempo real, información predictiva y toma de decisiones automatizada, la IA ayuda a las empresas a mantener el equilibrio adecuado, previniendo el sobrestock sin arriesgarse a roturas de stock."
      },
      {
        type: "heading",
        level: 1,
        text: "1. El verdadero costo del sobrestock"
      },
      {
        type: "paragraph",
        text: "El exceso de inventario impacta a las empresas en más de un sentido:"
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 1.1
        text: "1.1 Aumento de los costos de almacenamiento"
      },
      {
        type: "paragraph",
        text: "El almacenamiento es costoso. Cada unidad extra de inventario no vendido ocupa un espacio valioso, lo que lleva a:"
      },
      {
        type: "list",
        items: [
          "Mayores tarifas de alquiler y almacenamiento.",
          "Aumento de los costos de seguro.",
          "Más recursos gastados en el mantenimiento del stock."
        ]
      },
      {
          type: "example",
          text: "Ejemplo: Sobrestock en el sector minorista\n\nUna marca de moda global sobreprodujo ropa de temporada, lo que provocó pérdidas millonarias en rebajas a medida que el stock no vendido se acumulaba."
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 1.2
        text: "1.2 Desperdicio y obsolescencia"
      },
      {
        type: "paragraph",
        text: "Ciertos productos, como alimentos, cosméticos y tecnología, tienen una vida útil limitada. Cuando hay sobrestock, corren el riesgo de:"
      },
      {
        type: "list",
        items: [
          "Caducidad (alimentos, productos farmacéuticos).",
          "Quedar obsoletos (electrónicos, artículos de moda rápida).",
          "Daños por almacenamiento prolongado."
        ]
      },
      {
          type: "example",
          text: "Ejemplo: Sobrestock en electrónica\n\nUn fabricante de teléfonos inteligentes sobreestimó la demanda de un modelo, dejando miles de unidades sin vender. Para cuando la demanda repuntó, ya se había lanzado un nuevo modelo, dejando el stock obsoleto."
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 1.3
        text: "1.3 Problemas de flujo de caja"
      },
      {
        type: "paragraph",
        text: "El exceso de stock inmoviliza capital de trabajo, impidiendo que las empresas inviertan en nuevos productos, marketing o expansión."
      },
      {
        type: "list",
        items: [
            "En lugar de obtener ingresos por la venta de inventario, las empresas pierden dinero en costos de mantenimiento.",
            "Esto conduce a ventas con descuento, reduciendo los márgenes de beneficio."
        ]
      },
      {
        type: "heading",
        level: 1,
        text: "2. Cómo la IA ayuda a prevenir el sobrestock"
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 2.1
        text: "2.1 Previsión de demanda impulsada por IA"
      },
      {
        type: "paragraph",
        text: "La IA predice la demanda con una precisión inigualable, analizando:"
      },
      {
        type: "list",
        items: [
          "Tendencias de ventas en múltiples mercados.",
          "Sentimiento del consumidor extraído de redes sociales y reseñas en línea.",
          "Influencias económicas y estacionales en tiempo real."
        ]
      },
      {
          type: "paragraph",
          text: "Esto evita que las empresas pidan demasiado stock, reduciendo el desperdicio y los costos innecesarios."
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 2.2
        text: "2.2 Estrategias dinámicas de precios y descuentos"
      },
      {
        type: "paragraph",
        text: "Los modelos de precios impulsados por IA ajustan los precios en tiempo real basándose en patrones de demanda, ayudando a las empresas a:"
      },
      {
        type: "list",
        items: [
          "Mover el exceso de stock más rápido sin rebajas excesivas.",
          "Aumentar los márgenes ajustando los precios durante los períodos de máxima demanda."
        ]
      },
      {
        type: "example",
        text: "Ejemplo: IA en marketplaces en línea\n\nLas plataformas de comercio electrónico utilizan IA para reducir automáticamente los precios del inventario de baja rotación, impulsando las ventas mientras protegen los márgenes de beneficio."
      },
      {
        type: "heading",
        level: 2, // Subtítulo para 2.3
        text: "2.3 Optimización de almacenes impulsada por IA"
      },
      {
        type: "paragraph",
        text: "La IA ayuda a las empresas a redistribuir el stock de manera eficiente entre múltiples ubicaciones, asegurando que el inventario se almacene donde la demanda es más alta."
      },
      {
        type: "list",
        items: [
            "Previene el sobrestock en áreas de baja demanda.",
            "Reduce los retrasos en los envíos al colocar el stock más cerca de los clientes."
        ]
      },
      {
        type: "heading",
        level: 2, // Para "Final Thoughts"
        text: "Reflexiones finales"
      },
      {
        type: "paragraph",
        text: "El sobrestock es una sangría oculta en la rentabilidad de las empresas, pero la gestión de inventarios impulsada por IA puede eliminar este problema. Al aprovechar la previsión, los precios dinámicos y la optimización de almacenes impulsados por IA, las empresas pueden:"
      },
      {
          type: "list",
          items: [
              "Reducir el exceso de stock y liberar capital de trabajo.",
              "Disminuir los costos de almacenamiento y minimizar el desperdicio.",
              "Aumentar la rentabilidad con estrategias de precios inteligentes."
          ]
      },
      {
        type: "paragraph",
        text: "¿Buscas prevenir el sobrestock? Las soluciones de inventario impulsadas por IA de Cawar ayudan a las empresas a alcanzar la máxima eficiencia con un desperdicio mínimo." // "Cawar" como placeholder
      }
    ],
    relatedBlogs: [2, 4] // Ejemplo, actualiza según sea necesario
  },
];

// Componente para mostrar el detalle de un blog
// (Este es un ejemplo, deberás adaptarlo a tu diseño y datos)
const BlogDetail = ({ post, onBack, onSelectRelatedBlog }) => {
  // Definición robusta de relatedPosts, incluso si post.relatedBlogs es undefined
  const relatedPosts = post.relatedBlogs
    ? blogPostsData.filter(p => post.relatedBlogs.includes(p.id) && p.id !== post.id)
    : [];

  return (
    // Padding general y color de fondo
    <div className="p-4 sm:p-6 md:p-8 bg-black text-white min-h-screen">
      <button
        onClick={onBack}
        // Estilos del botón de volver, con buen tamaño de toque en móviles
        className="mb-6 md:mb-8 text-zinc-400 hover:text-white transition-colors inline-flex items-center group text-sm sm:text-base"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Volver a todos los blogs
      </button>

      {/* Contenedor del artículo con ancho máximo para legibilidad */}
      <article className="max-w-full md:max-w-3xl mx-auto">
        <header className="mb-6 md:mb-8 text-center md:text-left">
          <p className="text-xs sm:text-sm text-zinc-400 mb-2">
            {/* Formateo de fecha más robusto */}
            {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            {post.readTime && ` • ${post.readTime}`}
          </p>
          {/* Título principal con tamaño responsivo */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            {post.title}
          </h1>
          {post.author && (
            <div className="flex items-center justify-center md:justify-start mt-3 sm:mt-4">
              {/* Avatar del autor (si lo tienes) */}
              {/* <img src="/path-to-author-avatar.png" alt={post.author} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3" /> */}
              <span className="text-sm sm:text-base text-zinc-300">Por {post.author}</span>
            </div>
          )}
        </header>

        <img
          src={post.imageUrl}
          alt={post.title}
          // Imagen principal responsiva y con sombra
          className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-cover rounded-lg mb-6 md:mb-10 shadow-lg"
        />

        {/* Contenido del blog con Tailwind Typography para responsividad automática del texto */}
        {/* Clases 'prose-sm' para móviles, 'prose-base' para sm y 'prose-lg' para md+ */}
        <div className="prose prose-sm sm:prose-base md:prose-lg prose-invert max-w-none text-zinc-300">
          {post.content.map((item, index) => {
            // Reemplazo para **bold** y parseo de saltos de línea
            const processText = (text) => {
                return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            };

            switch (item.type) {
              case "introduction":
                return <p key={index} className="lead !text-zinc-200 mb-5 sm:mb-6" dangerouslySetInnerHTML={{ __html: processText(item.text) }} />;
              case "paragraph":
                // whitespace-pre-line para conservar saltos de línea manuales si los hay en tus datos
                return <p key={index} className="mb-3 sm:mb-4 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: processText(item.text) }} />;
              case "heading":
                if (item.level === 1) return <h2 key={index} className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-8 sm:mt-10 mb-3 sm:mb-4" dangerouslySetInnerHTML={{ __html: processText(item.text) }} />;
                if (item.level === 2) return <h3 key={index} className="text-lg sm:text-xl md:text-2xl font-semibold text-white mt-6 sm:mt-8 mb-2 sm:mb-3" dangerouslySetInnerHTML={{ __html: processText(item.text) }} />;
                if (item.level === 3) return <h4 key={index} className="text-base sm:text-lg md:text-xl font-semibold text-white mt-5 sm:mt-6 mb-2" dangerouslySetInnerHTML={{ __html: processText(item.text) }} />;
                return null;
              case "list":
                return (
                  <ul key={index} className="list-disc pl-5 sm:pl-6 mb-3 sm:mb-4 space-y-1">
                    {item.items.map((li, i) => <li key={i} className="mb-1" dangerouslySetInnerHTML={{ __html: processText(li) }} />)}
                  </ul>
                );
              case "example":
                return (
                  <div key={index} className="my-5 sm:my-6 p-3 sm:p-4 border-l-4 border-blue-500 bg-zinc-800/60 rounded-md">
                    {/* whitespace-pre-line para conservar la estructura del texto del ejemplo */}
                    <p className="text-zinc-200 text-xs sm:text-sm whitespace-pre-line font-mono" dangerouslySetInnerHTML={{ __html: processText(item.text) }} />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </article>

      {/* Sección de Blogs Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="max-w-full md:max-w-5xl mx-auto mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-zinc-700">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 sm:mb-8 text-center">
            Otros Blogs que te interesarán
          </h2>
          {/* Grid responsivo para blogs relacionados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                onClick={() => {
                    onSelectRelatedBlog(relatedPost);
                    window.scrollTo(0,0);
                }}
                // Estilos de tarjeta para blogs relacionados
                className=" rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105 cursor-pointer flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedPost.imageUrl || relatedPost.image}
                    alt={relatedPost.title}
                    // Altura fija para móviles, puede variar en pantallas más grandes si quieres
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="py-4 sm:py-5 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug mb-2 flex-grow group-hover:text-blue-400 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-auto">
                    {new Date(relatedPost.date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};


export const CardBlogs = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleGoBack = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    // Pasamos blogPostsData al BlogDetail si lo necesita (ej. para relatedPosts)
    return <BlogDetail post={selectedPost} onBack={handleGoBack} onSelectRelatedBlog={handleSelectPost} />;
  }

  return (
    // Grid responsivo: 1 columna en móviles (default), 2 en md+
    // Padding responsivo
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
      {blogPostsData.map((post) => (
        <div
          key={post.id}
          onClick={() => handleSelectPost(post)}
          // Estilos de tarjeta
          className=" rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 cursor-pointer flex flex-col"
        >
          <div className="relative overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              // Altura de imagen responsiva
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="py-4 sm:py-6 flex flex-col flex-grow"> {/* flex-grow para que el contenido empuje la fecha hacia abajo si los títulos varían en altura */}
            <h2 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-2 group-hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-auto"> {/* mt-auto para empujar la fecha abajo */}
                {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// No olvides exportar CardBlogs si está en su propio archivo
// export default CardBlogs;