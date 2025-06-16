<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Creación de ambientes educativos para realizar actividades de educación física.'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      .row.mb-4
        .col-12.col-xl-8
          .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-30.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Para comprender qué son los <b>ambientes de aprendizaje y espacios</b> en el contexto de la Educación Física, es esencial diferenciar entre los términos espacio y ambiente, los cuales suelen emplearse como sinónimos pero no lo son.
          span Según Ríos Ferreras (2014), el término <i>espacio</i>, en su cuarta acepción según la RAE, se define como “capacidad de terreno, sitio o lugar”. En cambio, <i>ambiente</i>, en su tercera acepción, se refiere a “condiciones o circunstancias físicas, sociales, económicas, etc., de un lugar, de una reunión, de una colectividad o de una época”.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Espacio', :icon="require('@/assets/curso/unidad/img-32.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-33.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Espacio
              p(data-aos='fade-up') Se entiende como el entorno físico. En Educación Física, incluye los objetos, los materiales deportivos, el mobiliario y la decoración de las instalaciones. Es el soporte tangible donde se desarrollan las actividades.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Ambiente', :icon="require('@/assets/curso/unidad/img-32.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-34.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Ambiente
              p(data-aos='fade-up') Abarca el espacio físico más las relaciones que se generan en él. Incluye los afectos y las interacciones entre estudiantes, así como entre estudiantes y docentes. Es un constructo más amplio y complejo, cargado de significados y dinámicas sociales.

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Ambos elementos influyen de manera determinante en el proceso educativo. Laorden y Pérez (2002), citados por Ríos Ferreras (2014), señalan que <i>“el espacio se convierte en un factor didáctico que ayuda a definir la situación de enseñanza-aprendizaje y permite crear un ambiente estimulante para el desarrollo de todas las capacidades del alumnado, así como favorecer la autonomía y motivación del equipo de profesores”</i>.
          .bg-azul-oscuro.p-4(data-aos='fade-up').mb-4
            span Loughlin y Suina (1987), también citados por Ríos Ferreras (2014), aportan una visión ampliada al afirmar que <i>“el ambiente es mucho más que un edificio o una disposición del mobiliario. La visión conceptual del ambiente es mucho más amplia. Descansa en un entendimiento de las relaciones entre entornos físicos y conducta, entre disposiciones ambientales y aprendizaje”.</i>
          span Este entorno o ambiente no es un elemento fijo, sino que <b>puede y debe ser modelado, construido y manipulado</b>. Es fundamental que el docente lo gestione adecuadamente para ofrecer un entorno rico y variado que fomente la actividad del alumnado y aumente su participación.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

      h2 Ambientes de aprendizaje en Educación Física
      .row.mb-4
        
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Un entorno educativo que influye positivamente en la conducta y el aprendizaje se denomina <b>ambiente de aprendizaje</b>. Blández (1995), citado por Ríos Ferreras (2014), lo define como <i>“un espacio transformado que invita a ser utilizado para un fin concreto”</i>. Esto requiere seleccionar y combinar materiales adecuados para cada contenido y organizarlos de manera que <b>fomenten su uso y provoquen la participación</b>.
          .bg-gris.p-4(data-aos='fade-up')
            span El objetivo es construir un entorno que <b>invite al aprendizaje y lo motive</b>, donde los estudiantes puedan <b>asumir un rol protagónico</b> y ser constructores activos de su conocimiento. El rol del docente en este marco no es el de transmitir información de manera frontal, sino el de facilitar y organizar el aprendizaje desde una posición secundaria.

      h2 Enfoque metodológico en los espacios de Educación Física

      .row.mb-4
        .col-12.col-xl-8
          .bg-amarillo.p-4(data-aos='fade-up').mb-4
            span Los espacios utilizados en Educación Física comparten los principios de los ambientes de aprendizaje, pero con una <b>metodología particular</b>, orientada a que <i>“los alumnos descubran sus propios aprendizajes y que estos espacios sean un medio eficaz para aprender libremente”</i> (Ríos Ferreras, 2014).
          span Este enfoque está alineado con las ideas de Delgado Noguera (2000), citado por Ríos Ferreras (2014), quien defiende que se debe <i>“dar más participación activa al alumno para mejorar la enseñanza”</i>. Igualmente, coincide con la propuesta de Vaca Escribano (1996), también citado por Ríos, quien plantea <b>tres aspectos fundamentales para la enseñanza de la Educación Física</b>:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="a. Espacios y organización que fomenten la ejercitación de habilidades motrices")
              p El diseño del entorno físico debe estimular el desarrollo motor del alumnado. Un espacio bien organizado debe: 

              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Ser amplio y seguro, permitiendo movimientos libres sin obstáculos peligrosos. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Incluir zonas diferenciadas para realizar actividades específicas como correr, saltar, trepar o mantener el equilibrio. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Contar con superficies variadas (suelos blandos, rampas, colchonetas) que estimulen diferentes habilidades motrices. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Favorecer la autonomía del alumnado, permitiendo que exploren y decidan sus propios movimientos.
            .div(titulo="b. Materiales sugerentes y polivalentes para la exploración motriz")
              p Los materiales deben ser versátiles y adaptables. Algunos ejemplos: 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Pelotas de diferentes tamaños, pesos y texturas, que favorecen el desarrollo de la coordinación y el control corporal. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Cuerdas y aros, que promueven el equilibrio, la agilidad y la coordinación. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Bloques y estructuras modulares, que invitan a trepar, construir o rediseñar el espacio. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Elementos naturales como troncos, piedras o arena, que estimulan la percepción sensorial y el contacto con el entorno natural.
              
            .div(titulo="c. Un clima de aula que favorezca el aprendizaje y la disposición para moverse")
              p El componente emocional y social del ambiente es determinante para que el alumnado se sienta motivado y dispuesto a participar. Para crear un clima adecuado, es necesario: 

              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Fomentar la confianza y el respeto, para que los niños se sientan seguros y se atrevan a probar nuevos movimientos. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Incluir música y juegos con ritmos y dinámicas que estimulen el movimiento de forma lúdica. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Promover la cooperación mediante actividades grupales que favorezcan la interacción social. 
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                p.mb-0 Evitar la presión y la competencia excesiva, priorizando el disfrute, la exploración y el aprendizaje sobre el rendimiento físico.
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

      .row.bg-gris-oscuro.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Tipos de espacios donde ocurre el aprendizaje
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Tipos de espacios donde ocurre el aprendizaje, donde se aborda una clasificación de los ambientes educativos basada en los criterios de origen, movilidad y forma de participación, según la propuesta de Ríos Ferreras (2014).
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_espacios.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Tipos de espacios donde ocurre el aprendizaje
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 El juego como recurso didáctico en Educación Física

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 El juego es un componente esencial en la vida de los niños, especialmente durante la Educación Primaria. No se trata solo de diversión, sino de un <b>medio indispensable para el desarrollo integral</b>. Como expresó Jean Chateau, citado por Ríos Ferreras (2014):
          .d-flex.bg-azul-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-40.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 “No se debería decir que el niño solamente crece, habría que decir que se desarrolla por el juego”.
          span En el contexto escolar, y en particular en Educación Física, suelen prevalecer los <b>juegos dirigidos</b> organizados por el docente, mientras que el <b>juego libre</b> aparece con menor frecuencia.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Juego dirigido', :icon="require('@/assets/curso/unidad/img-32.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Juego dirigido
              p(data-aos='fade-up') Planificado, estructurado y gestionado por el docente, quien actúa como <i>jugador experto</i> (Ríos Ferreras, 2014). Está orientado a desarrollar habilidades específicas, fomentar la cooperación y mejorar la disciplina. Se establecen reglas y objetivos precisos. Sin embargo, su uso excesivo puede limitar la iniciativa del alumnado. (Gallardo, Gavira, Fernández, 2010)
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Juego libre', :icon="require('@/assets/curso/unidad/img-32.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-43.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Juego libre
              p(data-aos='fade-up') Surge de manera espontánea, sin intervención directa del adulto. Permite la autoexpresión, la exploración motriz y el desarrollo de la creatividad. Favorece el pensamiento autónomo y una relación más natural con el entorno y con los demás. Es fundamental para el crecimiento emocional del niño. (Gallardo, Gavira, Fernández, 2010)
      
      h2 Juego y pedagogía invisible
      p.mb-4 El concepto de juego en los ambientes de aprendizaje puede entenderse desde la perspectiva de la <b>pedagogía invisible de Basil Bernstein</b>, citada por Ríos Ferreras (2014):

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-44.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='8.6%' y='18%' numero='+')
          .h5.mb-2 El juego es una forma de expresión del niño 
          p El niño se comunica con el docente a través del juego, mostrando emociones y conocimientos de forma auténtica.
        .tarjeta.bg-white.p-4(x='20.7%' y='78.4%' numero='+')
          .h5.mb-2 Los objetivos y recursos del juego son variables
          p No se trata de una actividad rígida, sino dinámica, cambiante, ajustada al contexto y a las necesidades del grupo.
        .tarjeta.bg-white.p-4(x='87.4%' y='62.3%' numero='+')
          .h5.mb-2 El juego es un acto personalizado
          p No está limitado a estructuras prefijadas ni esquemas individualistas; cada niño vive el juego a su manera.
        .tarjeta.bg-white.p-4(x='85.5%' y='18%' numero='+')
          .h5.mb-2 El juego también permite evaluar
          p A través del juego, se pueden observar logros, competencias, actitudes y procesos de aprendizaje de manera significativa.

      p.mb-4 La función emocional y social del juego son: 
      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Afectiva")
              p Las experiencias motrices y lúdicas permiten establecer vínculos afectivos significativos. Favorecen el reconocimiento, la expresión y el control progresivo de emociones y sentimientos. (Gallardo, Gavira, Fernández, 2010)
            .div(titulo="Cognitiva y personal")
              p En la educación infantil, el juego integra pensamiento, acción y emoción. Contribuye al desarrollo del autoconocimiento y la autonomía personal, elementos clave para la construcción de la identidad.
            .div(titulo="Social")
              p Facilita el aprendizaje de normas de convivencia, el respeto por el otro, la cooperación y el trabajo en equipo. El juego compartido promueve la inclusión y la empatía.

      .d-flex.bg-azul.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-3.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.pe-xl-3.mb-0 Como resume <b>Blández (2000)</b>, citado por Ríos Ferreras (2014): <i>“Los alumnos aprenden jugando y juegan aprendiendo”.</i>

      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Los objetivos de la enseñanza de Educación Física en la educación

      .row.mb-4
        .col-12.col-xl-8
          .bg-gris.p-4.mb-4(data-aos='fade-up')
            span El área de <b>Educación Física</b> se centra en el <b>cuerpo y la motricidad humana</b>, orientándose al desarrollo de capacidades físicas, habilidades sociales y la apropiación de elementos culturales que favorecen el crecimiento personal y una <b>mejor calidad de vida</b>.
          span A continuación, se exponen los objetivos fundamentales de la Educación Física, destacando su papel en la formación integral del alumnado y su contribución al desarrollo de competencias motrices, afectivas y sociales en un marco de inclusión y respeto por la diversidad.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen') 

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5
          
          .row.mb-4
            .col-6.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
            .col-12.col-xl-6
              TarjetaAudio.color-secundario.bg-white.mb-3(
                texto='Educación corporal podcast'
                tiempo
                :audio="require('../../assets/componentes/audios/Educación_corporal_Podcast_Unidad_III.mp3')"
                @audio-hover='mostrarIndicadorTarjetaAudio = false'
              )

          h2 Enfoque de la educación física en la primera infancia
          p.mb-4 Para Gallardo y Gavira Fernández (2010), en la primera infancia la Educación Física se organiza a partir de dos grandes finalidades:

          .row
            .col-10.col-md-6.mx-auto
              .d-flex.bg-amarillo-oscuro.px-3.h-100.py-2.flex-column.flex-md-row.mb-4(data-aos='fade-up')
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-48.svg', alt='Texto descriptivo de la imagen')
                .my-auto.p-4.p-xl-0
                  p.pe-4.mb-2.text-bold Educación del cuerpo y del movimiento 
                  span Se busca desarrollar habilidades físicas y motrices, promoviendo la adquisición de hábitos saludables que perduren a lo largo de la vida.
            .col-10.col-md-6.mx-auto
              .d-flex.bg-amarillo-oscuro.px-3.h-100.py-2.flex-column.flex-md-row.mb-4(data-aos='fade-up')
                img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-49.svg', alt='Texto descriptivo de la imagen')
                .my-auto.p-4.p-xl-0
                  p.pe-4.mb-2.text-bold Educación a través del cuerpo y el movimiento
                  span El cuerpo se convierte en una herramienta para fortalecer habilidades sociales y emocionales necesarias para la convivencia, el trabajo en equipo y la autorregulación emocional.

      h2 Áreas de contenido en Educación Física

      p.mb-4 Gallardo y Gavira Fernández (2010) estructuran los contenidos de la Educación Física en cuatro áreas principales, cada una con objetivos específicos y actividades asociadas:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Condición física y salud 
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Desarrollo de resistencia, fuerza, flexibilidad y coordinación.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Fomento de hábitos saludables y prevención de enfermedades.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Ejercicios cardiovasculares adaptados a la edad.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Fortalecimiento muscular y autocuidado.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Educación sobre nutrición, higiene y bienestar físico.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Juegos y deportes 
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Participación en juegos tradicionales y contemporáneos.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Práctica de deportes individuales y colectivos como fútbol, baloncesto o atletismo.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Desarrollo de estrategias y tácticas deportivas.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Transmisión de valores como el respeto, la disciplina, la solidaridad y el trabajo en equipo.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Expresión corporal 
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Actividades rítmicas y coreográficas para desarrollar coordinación.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Juegos teatrales y de mímica para la expresión emocional.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Ejercicios de relajación y conciencia corporal.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Uso del lenguaje corporal como medio de comunicación no verbal.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Actividades en el medio natural 
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Prácticas al aire libre como senderismo, ciclismo, escalada o kayak.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Educación ambiental y respeto por el entorno.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Actividades recreativas que fomenten la exploración y el disfrute del medio natural.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
                  p.mb-0 Desarrollo del bienestar físico y mental mediante el contacto con la naturaleza.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')

      h2 Importancia del juego y el deporte
      p.mb-4 El área de <b>juegos y deportes</b> es clave dentro de la Educación Física. A través de experiencias lúdicas, los estudiantes:

      .row.bg-gris.p-4.py-xl-0.mb-4(data-aos='fade-up')
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-54.png', alt='Texto descriptivo de la imagen') 
        .col-12.col-xl-8.d-flex
          .my-auto
            div.d-flex.mb-3
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Mejoran sus <b>capacidades físicas.</b>
            div.d-flex.mb-3
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Desarrollan actitudes positivas como la <b>cooperación, la inclusión y la participación activa.</b>
            div.d-flex.mb-3
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').mx-2.my-1
              p.mb-0 Aprenden a <b>valorar el esfuerzo propio y el ajeno,</b> así como a convivir respetuosamente con las diferencias.

      .row.bg-gris-oscuro.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Elementos en la creación de ambientes educativos
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Elementos en la creación de ambientes educativos, donde se aborda el diseño y la implementación de entornos propicios para la enseñanza de la Educación Física. 
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_creacion.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Elementos en la creación de ambientes educativos

      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/60032?page=1") López Pastor, V. M. (2005). La educación física en educación infantil: una propuesta y algunas experiencias
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/") Elibro
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=4hWQ-tOlPYI") Canal ISEP. (2020). ¡A mover el cuerpo! - Nivel Inicial - Educación Física | Tu escuela en casa [Vídeo]
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p

  </template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    cuestionario: {
      tema: 'Gimnasia en la primera infancia',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los beneficios principales de los ejercicios de gimnasia en la primera infancia?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fomentan la competencia entre los niños.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejoran la coordinación, el equilibrio y la fuerza.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Limitan el movimiento libre de los niños.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducen la interacción social en el aula.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Según la OMS (2021), ¿qué característica define los ejercicios de gimnasia en la infancia?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se enfocan exclusivamente en la fuerza muscular.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Están adaptados a la edad y basados en el juego.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Son estrictamente reglamentados y competitivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se centran solo en el entrenamiento de resistencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes estrategias favorece la creación de ambientes educativos inclusivos en Educación Física?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar solo materiales estándar sin adaptaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar espacios con pocos elementos de exploración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar accesibilidad y adaptar actividades a todas las capacidades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Priorizar ejercicios individuales sobre los colectivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué se recomienda incluir en una rutina básica de gimnasia para niños?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejercicios con alto impacto y exigencia física.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actividades de fuerza extrema sin supervisión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Movimientos repetitivos sin variedad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Calentamiento, ejercicios básicos, juego activo y relajación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Por qué es importante la interacción social en la Educación Física?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para evitar el aprendizaje autónomo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque reemplaza la enseñanza teórica en la escuela.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para reducir el desarrollo motriz individual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque fomenta la cooperación, el respeto y el trabajo en equipo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
