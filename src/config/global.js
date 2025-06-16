export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Corporalidad y formación Integral',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El cuerpo y el movimiento en relación consigo mismo.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conciencia Corporal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Autopercepción',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El cuerpo y el movimiento en relación hacia los demás.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Competencias sociales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Competencias emocionales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Competencias comunicativas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Competencias Ciudadanas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gutiérrez, E., & Castillo, J. A. (2014). Reflexiones sobre la concepción del cuerpo y del movimiento para una educación integral de la primera infancia. Praxis Pedagógica, 14(15), 15–42.',
      link: 'https://doi.org/10.26620/uniminuto.praxis.14.15.2014.15-42',
    },
    {
      referencia:
        'Coaching. (2021, April 15). 5 actividades para mejorar la conciencia corporal en los niños. Formainfancia.',
      link: 'https://formainfancia.com/conciencia-corporal-ninos-actividades/',
    },
    {
      referencia:
        'Duarte, J. A., Rodríguez, L. C., & Castro-Martínez, J. A. (2017). Cuerpo y movimiento en la educación inicial: concepciones, intenciones y prácticas. Universidad del Rosario.',
      link:
        'https://repository.urosario.edu.co/server/api/core/bitstreams/eb363283-8324-40d9-a290-07ea7bb53823/content',
    },
    {
      referencia:
        'Cañizares Márquez, J. M. & Carbonero Celis, C. (2016). Capacidades perceptivo motrices: esquema corporal y lateralidad en la infancia: ( ed.). Wanceulen Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/63428?page=16',
    },
    {
      referencia:
        'Campo Ternera, L. A. (2014). El desarrollo del autoconcepto en niños y niñas y su relación con la interacción social en la infancia. Psicogente, 17(31), 67-79.',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0124-01372014000100005',
    },
    {
      referencia:
        'Quintero, M.L. Montenegro, M.L. (2015). Desarrollo emocional y afectivo en la primera infancia.',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/3493/1077853323-%20Desarrollo%20Emocional%20y%20Afectivo%20en%20la%20Primera%20Infancia.pdf?sequence=3',
    },
    {
      referencia:
        'Rodríguez Camón, E. (2016, 6 julio). Habilidades sociales en la infancia: ¿cuáles son y cómo desarrollarlas? Psicologiaymente.',
      link:
        'https://psicologiaymente.com/desarrollo/habilidades-sociales-infancia',
    },
    {
      referencia:
        'Bisquerra Alzina, R., & Pérez Escoda, N. (2007). Las competencias emocionales. Educación XX1, 10, 61-82.',
      link: 'https://www.redalyc.org/pdf/706/70601005.pdf',
    },
    {
      referencia:
        'Pico Mora, L. J. (2017). Mi Palabra cuenta: Desarrollo de la competencia comunicativa oral en primera infancia. Universidad Distrital Francisco José de Caldas.',
      link:
        'https://repository.udistrital.edu.co/server/api/core/bitstreams/c0da8c99-a5f2-41fb-9e51-b0932b95d8de/content',
    },
    {
      referencia:
        'Gutiérrez Carvajal, M. J. (2021). Competencias ciudadanas en primera infancia: propuesta pedagógica para promover las competencias virtuales. Universidad Autónoma de Bucaramanga.',
      link:
        'https://repository.unab.edu.co/bitstream/handle/20.500.12749/14076/2021_Tesis_Mary_Jurley_Gutierrez_Carvajal.pdf?sequence=1',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. MEN. (2014). Sentido de la educación inicial. En https://www.mineducacion.gov.co/. Panamericana Formas e Impresiones S.A.',
      link:
        'https://www.mineducacion.gov.co/1780/articles-341810_archivo_pdf_sentido_de_la_educacion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autonomía',
      significado:
        'Capacidad del niño para realizar acciones y tomar decisiones de manera independiente, desarrollando confianza en sí mismo y en sus habilidades motrices.',
    },
    {
      termino: 'Conciencia Corporal',
      significado:
        'Reconocimiento del propio cuerpo, sus partes, límites y movimientos, que facilita el desarrollo de habilidades físicas y la construcción de la identidad.',
    },
    {
      termino: 'Cooperación',
      significado:
        'Habilidad para trabajar en conjunto con otros, compartir recursos y colaborar para alcanzar objetivos comunes dentro de un grupo social.',
    },
    {
      termino: 'Corporalidad',
      significado:
        'Integración del cuerpo como medio de expresión, interacción y aprendizaje en la formación integral de los niños y niñas.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad de comprender y responder de manera adecuada a las emociones de los demás, fomentando relaciones sociales positivas y respetuosas.',
    },
    {
      termino: 'Espacio',
      significado:
        'Entorno físico que los niños exploran, manipulan y representan mentalmente, desarrollando percepción espacial y habilidades de navegación.',
    },
    {
      termino: 'Movimiento',
      significado:
        'Acción física que permite a los niños interactuar con su entorno, desarrollar habilidades motoras y expresar emociones y pensamientos.',
    },
    {
      termino: 'Normas',
      significado:
        'Reglas sociales que los niños aprenden para convivir en armonía con los demás, comprendiendo valores como el respeto y la responsabilidad.',
    },
    {
      termino: 'Temporalidad',
      significado:
        'Noción básica del tiempo que los niños comienzan a desarrollar, diferenciando entre pasado, presente y futuro a través de rutinas y experiencias.',
    },
    {
      termino: 'Vocabulario',
      significado:
        'Conjunto de palabras que los niños adquieren y enriquecen mediante el lenguaje y la comunicación, esencial para expresar ideas y emociones.',
    },
  ],
}
