<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Ejercicios de gimnasia.'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 ¿Has considerado alguna vez la importancia de la gimnasia en la educación inicial? La niñez es un período clave para el desarrollo físico y mental. En este contexto, la gimnasia no solo se presenta como una actividad divertida, sino que se convierte en una herramienta esencial para el bienestar infantil, especialmente cuando se integra con un estilo de vida saludable y una dieta equilibrada.
        .d-flex.bg-azul-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-3.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 Según <b>Fonseca González (2023)</b>, la gimnasia en esta etapa es fundamental para el desarrollo físico, cognitivo y social de los niños. A través de ejercicios adaptados a su edad, se estimulan la coordinación motriz, el equilibrio y la disciplina, elementos clave para su bienestar integral.
    
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 La educación inicial establece las bases para el crecimiento completo del niño. En este proceso, la gimnasia juega un papel crucial al fortalecer habilidades motoras, fomentar hábitos saludables y promover la interacción con el entorno. Los ejercicios no solo favorecen la coordinación y el equilibrio, sino que también facilitan la expresión corporal y la comprensión del propio cuerpo.
        .bg-amarillo.p-4(data-aos='fade-up').mb-4
          span Desde edades tempranas, el movimiento permite a los niños explorar nuevas sensaciones, reforzar la confianza en sí mismos y ganar autonomía. Las actividades gimnásticas, además de ser seguras y lúdicas, estimulan la creatividad y el aprendizaje a través del juego. También favorecen la socialización, ya que enseñan a compartir experiencias físicas, promoviendo el trabajo en equipo y el respeto mutuo. 
        span Más allá de su dimensión deportiva, la gimnasia ofrece beneficios múltiples que impactan positivamente en el desarrollo integral infantil:
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
    
    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5
    
        .row.mb-4
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-6.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Físico
                p.px-1.text-small.mb-0.text-center Mejora de la coordinación, flexibilidad, fuerza y control corporal.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-7.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Cognitivo
                p.px-1.text-small.mb-0.text-center Favorece la concentración, la memoria y la capacidad de seguir instrucciones.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-8.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Socioemocional
                p.px-1.text-small.mb-0.text-center Estimula la autoestima, la confianza, el respeto, la empatía y la cooperación.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-9.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Expresión y comunicación
                p.px-1.text-small.mb-0.text-center Promueve la expresión corporal y la interpretación de emociones a través del movimiento.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-10.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Salud integral
                p.px-1.text-small.mb-0.text-center Contribuye a liberar energía, reducir el estrés, mejorar el estado de ánimo y mantener una buena condición física general.
    
    .d-flex.bg-azul.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-11.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.px-4.mb-0 Incorporar la gimnasia en la educación inicial no implica únicamente ejecutar movimientos físicos, sino también fomentar valores y habilidades fundamentales que los niños conservarán a lo largo de su vida. Una enseñanza adaptada a cada etapa del desarrollo asegura un aprendizaje <b>progresivo</b>, <b>significativo</b> y <b>motivador</b>. (Fonseca González, 2023).
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 ¿Qué son los ejercicios de gimnasia?

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-gris.p-4(data-aos="fade-up")
        p.mb-0 Los ejercicios de gimnasia son actividades físicas diseñadas para mejorar la <b>movilidad</b>, la <b>fuerza</b> y la <b>coordinación</b> de los niños desde los primeros años de vida. En la primera infancia —etapa que abarca desde el nacimiento hasta los cinco años—, estos ejercicios están especialmente orientados a <b>promover el desarrollo integral</b> mediante el movimiento, el juego y la exploración. <i>(Organización Mundial de la Salud [OMS], 2021).</i>

    h2 Características de los ejercicios de gimnasia en la primera infancia

    p.mb-4 Según la <b>Organización Mundial de la Salud (2021)</b>, estos ejercicios poseen una serie de características clave que los hacen adecuados para el desarrollo infantil:

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Adaptados a la edad
              p Las actividades físicas deben ajustarse a las capacidades motoras y cognitivas propias de cada etapa del desarrollo. Ejercicios distintos para cada edad.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Basados en el juego
              p El aprendizaje lúdico es esencial. Actividades como carreras, circuitos y juegos con pelotas hacen del movimiento una experiencia atractiva y espontánea.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Énfasis en habilidades básicas
              p Se promueven habilidades motoras fundamentales como caminar, correr, saltar, lanzar o mantener el equilibrio, fundamentales para el desarrollo físico.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Exploración del movimiento 
              p Se anima a los niños a experimentar libremente diferentes formas de moverse (trepar, girar, balancearse), fortaleciendo la conciencia corporal.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Desarrollo multisensorial
              p Se incorporan estímulos sensoriales variados (texturas, sonidos, colores) que favorecen la percepción y el desarrollo sensorial.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Interacción social
              p Las actividades grupales estimulan la comunicación, cooperación y habilidades sociales mediante el trabajo en equipo o ejercicios en pareja.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')

    p.mb-4 Estos ejercicios incluyen <b>movimientos básicos</b> como saltos, giros, desplazamientos y actividades de equilibrio, los cuales —como se ha indicado— están adaptados para fomentar un desarrollo armónico y seguro. A continuación, se describen los factores que intervienen en estas prácticas desde una perspectiva del desarrollo físico, cognitivo, social y del bienestar integral, según lo expuesto por Fonseca González (2023) en su <i>Manual de gimnasia</i>.

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Desarrollo Físico")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Coordinación motriz:</i> actividades como gatear, saltar, lanzar y atrapar refinan la coordinación ojo-mano y la coordinación gruesa, base para habilidades futuras como escribir o practicar deportes.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Equilibrio:</i> mejora el equilibrio estático y dinámico, aumentando la seguridad y reduciendo caídas.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Fuerza y flexibilidad:</i> los movimientos controlados y estiramientos fortalecen la musculatura y amplían el rango de movimiento, previniendo lesiones.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Conciencia corporal (propiocepción):</i> ayuda a percibir el cuerpo en el espacio, clave para el control del movimiento.
          .div(titulo="Desarrollo Cognitivo")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Planificación y secuenciación:</i> seguir secuencias de movimientos fortalece habilidades organizativas y de ejecución.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Atención y concentración:</i> requiere enfocarse en instrucciones y ejecución precisa, mejorando estas capacidades.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Resolución de problemas:</i> enfrentar obstáculos físicos promueve la creatividad y la solución de problemas.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Memoria:</i> memorizar rutinas y secuencias entrena la memoria operativa.
          .div(titulo="Desarrollo Social")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Disciplina:</i> introduce normas, respeto por los turnos y esfuerzo personal.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Trabajo en equipo y cooperación:</i> fomenta la colaboración y el apoyo mutuo en actividades grupales.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Comunicación:</i> mejora la interacción con compañeros e instructores.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Confianza y autoestima:</i> superar retos físicos fortalece la seguridad en uno mismo.
          .div(titulo="Bienestar Integral")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Liberación de energía:</i> canaliza la energía acumulada, reduciendo el estrés y la ansiedad.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Hábitos saludables:</i> estimula la práctica de ejercicio desde temprana edad, promoviendo un estilo de vida activo.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Prevención de problemas de salud:</i> favorece un peso corporal adecuado y reduce riesgos futuros.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 <i>Diversión y motivación:</i> es una actividad lúdica que impulsa la participación constante.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Consideraciones para la práctica y enseñanza según la edad

    p.mb-4 La enseñanza de la gimnasia debe adaptarse a las <b>capacidades y necesidades</b> de cada grupo etario, según las recomendaciones de <b>UNICEF (2019)</b>. A continuación, se describen las prácticas sugeridas para tres rangos de edad:

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold 6 meses a 2 años
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Estimulación temprana:</b> fundamental para el desarrollo motor inicial. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Gateo:</b> fomentar el desplazamiento sobre manos y rodillas fortalece los músculos esenciales para la marcha. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Ejercicios suaves para cuello y espalda:</b> levantar la cabeza mientras están boca abajo fortalece la musculatura cervical y dorsal.
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Exploración de diferentes texturas:</b> permitir el contacto con superficies variadas estimula el desarrollo sensorial y mejora la coordinación motora.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen') 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold 2 a 4 años
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Ejercicios más estructurados:</b> adecuados a medida que se incrementa el control corporal. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Caminar y correr en diferentes direcciones:</b> mejora la orientación espacial y la agilidad. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Saltar con ambos pies:</b> favorece el desarrollo del equilibrio y la fuerza en las piernas.
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Lanzar y atrapar pelotas grandes:</b> estimula la coordinación ojo-mano y la motricidad fina. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Subir y bajar escaleras con apoyo:</b> fortalece las piernas y fomenta la confianza en el movimiento. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Bailar al ritmo de la música:</b> estimula la expresión corporal, la creatividad y la percepción rítmica.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen') 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold 4 a 6 años
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Gimnasia artística básica:</b> ideal para fomentar autonomía y creatividad en el movimiento.
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Saltar en un pie y luego en el otro:</b> mejora el equilibrio y la coordinación interhemisférica. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Brincar la cuerda:</b> fortalece la resistencia cardiovascular y la agilidad general. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Circuitos con obstáculos sencillos:</b> incentivan la resolución de desafíos motrices y la planificación de movimientos.
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Ejercicios de equilibrio:</b> caminar sobre una línea o mantenerse en un pie fortalece el control postural. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 <b>Actividades de coordinación ojo-mano:</b> como encestar pelotas o ensartar cuentas, mejoran la precisión motriz.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen') 

    h2 Propuesta de rutina de gimnasia infantil
    p.mb-4 Según el portal <i>Decorexpro</i> (2024), se sugiere una <b>estructura secuencial</b> para las clases de gimnasia infantil:

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Calentamiento', :icon="require('@/assets/curso/unidad/img-32.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-23.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Calentamiento 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Debe ser breve (<b>máximo 3 minutos</b>). 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Incluye <b>caminar y correr alternadamente.</b> 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Añadir elementos sorpresa (música, objetos). 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Sirve para <b>activar gradualmente el cuerpo</b>.
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Parte principal', :icon="require('@/assets/curso/unidad/img-32.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-24.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Parte principal
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Ejercicios que activen la musculatura y articulaciones. 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Promueven una <b>postura adecuada</b> y el <b>desarrollo corporal armonioso</b>.
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Enfriamiento final', :icon="require('@/assets/curso/unidad/img-32.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-25.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Enfriamiento final
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Disminuir progresivamente la intensidad. 

            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Incluir <b>caminatas suaves</b> y <b>estiramientos</b> para regresar a un estado de calma.

    p.mb-4 Ejercicios recomendados para el calentamiento: 
    
    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5

        .row
          .col-12.col-xl-8.d-flex
            .my-auto
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Caminata en el lugar con incremento gradual del ritmo.
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Correr en círculo y alrededor de obstáculos (puede incorporarse el juego "Atrapa").
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Caminata sobre puntas, talones, bordes internos y externos de los pies (beneficioso para pies planos).
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Paradas repentinas ante estímulos (como un aplauso o el silencio de la música); se puede usar el juego "Escondite".
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Caminata con reto manual: levantar brazos, extender a los lados y bajar tras una señal.
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    h2 Parte lúdica de la rutina
    p.mb-4 Después del calentamiento, es fundamental incluir una <b>fase lúdica</b> en la clase de gimnasia. Esta etapa no solo mantiene la motivación y el interés de los niños, sino que también estimula la imaginación, la coordinación y la socialización a través del juego. A continuación, se describen algunos ejercicios sugeridos, recomendados por <i>Decorexpro</i> (2024):

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="¡Hola a todos!")
            p Posición inicial: De pie, piernas separadas y manos en la espalda. <br>Al contar hasta 1: Inhalar e inclinarse hacia adelante. <br>Al contar hasta 2: Regresar a la posición inicial. 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Estimula la respiración controlada y la movilidad del tronco.

          .div(titulo="¿Dónde están mis amigos?")
            p Posición inicial: Piernas separadas y manos en la cintura. <br>Al contar 1: Girar el cuerpo hacia un lado. <br>Al contar 2: Girar hacia el otro lado. <br>Se puede incluir movimiento de manos hacia la cara, como si se observara a alguien. 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Favorece la rotación del tronco y la conciencia espacial.

          .div(titulo="Crecemos como hongos")
            p Posición inicial: Pies separados y brazos hacia abajo. <br>1: Levantar brazos hacia los lados. <br>2: Estirarse hacia arriba en puntas de pies. <br>3: Caer suavemente sobre los talones. <br>4: Volver a la posición inicial. 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Mejora el equilibrio, la coordinación y la fuerza en piernas.

          .div(titulo="¡Tomemos el sol!")
            p Posición inicial: Acostado boca arriba. <br>Girar lentamente hacia el vientre en una dirección y luego hacia la otra. 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Estimula la movilidad general y el reconocimiento corporal.

          .div(titulo="Salto de conejito")
            p Posición inicial: Piernas juntas, brazos al frente. <br>Realizar saltos en el lugar y alrededor de un objeto (ej. un árbol o arbusto). 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Promueve la agilidad, la fuerza en piernas y la orientación espacial.


    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5

        h2 Enfriamiento y estiramientos
        p.mb-4 Para finalizar la sesión, se recomienda una fase de <b>enfriamiento</b>, que incluye caminatas suaves y ejercicios de respiración para <b>normalizar el pulso</b> y relajar el cuerpo. Si el tiempo lo permite, se puede realizar un conjunto de estiramientos sencillos:
        .row.mb-4 
          .col-10.col-md-6.mx-auto
            .d-flex.bg-amarillo-oscuro.px-3.py-1.flex-column.flex-md-row.mb-4(data-aos='fade-up')
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-28.svg', alt='Texto descriptivo de la imagen')
              .my-auto.p-4.p-xl-0
                p.pe-xl-3.mb-3.text-bold Desde posición sentada 
                span Inclinarse hacia adelante con piernas rectas y separadas.
          .col-10.col-md-6.mx-auto
            .d-flex.bg-amarillo-oscuro.px-3.py-1.flex-column.flex-md-row.mb-4(data-aos='fade-up')
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-29.svg', alt='Texto descriptivo de la imagen')
              .my-auto.p-4.p-xl-0
                p.pe-xl-3.mb-3.text-bold Desde posición de pie
                span Inclinarse hacia adelante con piernas rectas y ampliamente extendidas.
        span Todos los movimientos deben ser <b>suaves y lentos</b>, con el objetivo de evitar lesiones y lograr una transición tranquila hacia el estado de reposo. (<i>Decorexpro</i>, 2024). Como se ha observado, la <b>gimnasia en la educación inicial</b> constituye una herramienta clave para el <b>desarrollo integral</b> de los niños. Su práctica debe estar cuidadosamente adaptada a cada etapa del crecimiento, integrando aspectos <b>motrices, lúdicos y afectivos</b>. Un enfoque seguro y progresivo garantiza que el aprendizaje se dé en un entorno que respete tanto las capacidades como las necesidades propias de la infancia.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/177890?page=27") Aznar Oro, P. Morte Remacha, J. L. & Serrano Ferruz, R. (2021). La educación física en la educación infantil de 3 a 6 años
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.ninoanino.org/wp-content/uploads/2023/07/Manual-de-gimnasia-con-el-nino_compressed.pdf") Fonseca González, I. (2023). Manual de gimnasia con el niño
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/") Elibro
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.ninoanino.org/") Niño a Niño
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=IwKvRMW6KPU") DeporteUNAM. (2020). Rutina de gimnasia para niños (video 5) [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
