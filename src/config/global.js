export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Educación Física',
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
        titulo: 'Ejercicios de gimnasia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué son los ejercicios de gimnasia?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Consideraciones para la práctica y enseñanza según la edad',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Creación de ambientes educativos para realizar actividades de educación física.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El juego como recurso didáctico en Educación Física',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Los objetivos de la enseñanza de Educación Física en la educación.',
            hash: 't_2_2',
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
        'Fonseca González, I. (2023). Manual de gimnasia con el niño.',
      link:
        'https://www.ninoanino.org/wp-content/uploads/2023/07/Manual-de-gimnasia-con-el-nino_compressed.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud [OMS]. (2021). DIRECTRICES DE LA OMS SOBRE ACTIVIDAD FÍSICA y COMPORTAMIENTOS SEDENTARIOS. Organización Mundial de la Salud.',
      link:
        'https://iris.who.int/bitstream/handle/10665/349729/9789240032194-spa.pdf?sequence=1',
    },
    {
      referencia:
        'UNICEF. (2019). La actividad física en niños, niñas y adolescentes. Fondo de las Naciones Unidas Para la Infancia.',
      link:
        'https://www.unicef.org/uruguay/media/2276/file/La%20actividad%20f%C3%ADsica%20en%20ni%C3%B1os,%20ni%C3%B1as%20y%20adolescentes.pdf',
    },
    {
      referencia: 'Decorexpro. (2024). Carga para niños de 3-4 años.',
      link: 'https://little.decorexpro.com/es/zaryadka/dlya-detej-3-4-let/',
    },
    {
      referencia:
        'Ríos Ferreras, C. (2014). Los ambientes de aprendizaje y espacios de fantasía en la educación física. Trabajo de Fin de Grado, Universidad de Salamanca.',
      link:
        'https://gredos.usal.es/bitstream/handle/10366/125861/TG_RIOS%20FERRERAS%2C%20Carlos_Ambientes.pdf?sequence=1',
    },
    {
      referencia:
        'Gallardo, P., & Gavira, Fernández., J. (2010). El juego como recurso didáctico en educación física. Universidad de Cundinamarca, 6-84.',
      link:
        'https://www.studocu.com/co/document/universidad-de-cundinamarca/educacion-comunitaria-y-pedagogia-social/el-juego-como-recurso-didactico-en-educacion-fisicapg-6-84/103653737',
    },
    {
      referencia:
        'Navarro Estarreado, A. (2015). Revisión teórica sobre las metodologías utilizadas en la enseñanza durante la puesta en práctica de actividades físicas en el medio natural, 74-80.',
      link:
        'https://1library.co/article/escenarios-y-ambientes-de-la-educaci%C3%B3n-f%C3%ADsica.zwrg7o0y',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Principio que garantiza que todos los estudiantes, independientemente de sus capacidades, puedan participar en actividades educativas.',
    },
    {
      termino: 'Autonomía',
      significado:
        'Habilidad para tomar decisiones y desenvolverse en el entorno sin depender constantemente de ayuda externa.',
    },
    {
      termino: 'Coordinación',
      significado:
        'Capacidad de realizar movimientos de manera sincronizada y eficiente, fundamental en la educación física.',
    },
    {
      termino: 'Creatividad',
      significado:
        'Facultad para generar nuevas ideas, soluciones y movimientos dentro de los espacios de aprendizaje.',
    },
    {
      termino: 'Equilibrio',
      significado:
        'Control del cuerpo en diferentes posiciones y situaciones, clave en la motricidad infantil y en actividades físicas.',
    },
    {
      termino: 'Exploración',
      significado:
        'Acción de investigar y probar nuevas formas de movimiento, descubriendo habilidades propias.',
    },
    {
      termino: 'Inclusión',
      significado:
        'Estrategia para asegurar que todos los estudiantes, sin importar sus diferencias, participen de manera equitativa en el aprendizaje.',
    },
    {
      termino: 'Interacción',
      significado:
        'Comunicación y colaboración entre los estudiantes, promoviendo el trabajo en equipo y el desarrollo social.',
    },
    {
      termino: 'Motricidad',
      significado:
        'Conjunto de funciones nerviosas y musculares que permiten el movimiento del cuerpo.',
    },
    {
      termino: 'Percepción',
      significado:
        'Proceso por el cual se interpretan estímulos del entorno, esencial para el desarrollo sensorial y motriz.',
    },
  ],
}
