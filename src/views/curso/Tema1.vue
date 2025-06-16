<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. El cuerpo y el movimiento en relación consigo mismo.'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .d-flex.bg-azul-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-3.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 En la primera infancia, <b>el cuerpo</b> no es simplemente un receptáculo físico, sino el <b>principal medio de interacción con el mundo y de autodescubrimiento</b>, como afirman Gutiérrez y Castillo (2014). El <b>movimiento</b>, intrínsecamente vinculado al cuerpo, actúa como herramienta esencial para explorar, comprender y construir la identidad. Esta relación "consigo mismo" implica la conciencia corporal, la exploración sensorial interna y el desarrollo de la autonomía motriz, fundamentales para un desarrollo integral. 
        span Los estudios del desarrollo humano refuerzan esta visión <b>psicofísica</b> al reconocer la actividad motriz como pilar del crecimiento infantil. Teorías clásicas como la de Piaget destacan que el conocimiento se origina en la experiencia física, a través de interacciones intuitivas con los objetos, lo que lleva al desarrollo de formas de inteligencia mediante abstracción <i>reflexiva</i>. En la actualidad, la neurología respalda estos planteamientos al explicar cómo el cerebro integra información sensorial para producir respuestas adaptativas significativas (Gutiérrez y Castillo, 2014).

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Conciencia Corporal

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 La conciencia corporal es la capacidad de controlar el cuerpo y ejecutar movimientos coordinados y conscientes, permitiendo interactuar con el entorno de forma efectiva (Coaching, 2021). Esta habilidad es clave para el desarrollo motor, ya que forma el <b>esquema perceptivo-motriz</b>, base de la identidad personal.
        .mb-4.bg-amarillo.p-4(data-aos='fade-up') 
          span Gutiérrez y Castillo (2014) destacan la <b>integración sensorial</b>como el proceso cerebral inconsciente que organiza la información de los sentidos. Esta integración, mediada por el sistema nervioso central (SNC), permite generar <b>respuestas adaptativas</b>, esenciales para el aprendizaje y la conducta social. Incluso funciones como el lenguaje dependen de esta coordinación sensoriomotriz.
        span Durante la infancia, el desarrollo del control corporal se inicia con sensaciones básicas: tacto, movimiento, vista y oído. Los bebés comienzan a formar su esquema corporal identificando sus partes con ayuda del entorno (Coaching, 2021). Este proceso se estructura en dos fases principales:
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Esquema corporal', :icon="require('@/assets/curso/unidad/img-5.svg')")
        .row.bg-azul-claro
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-6.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Esquema corporal
            p(data-aos='fade-up') Representación mental del cuerpo en reposo y movimiento. Se forma mediante el reconocimiento de las partes del cuerpo y su nombramiento.
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Imagen corporal', :icon="require('@/assets/curso/unidad/img-5.svg')")
        .row.bg-azul-claro
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-7.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Imagen corporal
            p(data-aos='fade-up') Capacidad de visualizar mentalmente el cuerpo y sus funciones. Se consolida con el juego, la exploración y la interacción social. (Duarte, Rodríguez, y Castro-Martínez, 2017)

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 El descubrimiento del cuerpo como fuente de sensaciones permite construir el pensamiento infantil (Gil-Madrona et al., 2008; Vayer, 1973). Las actividades motrices, especialmente el juego, potencian el crecimiento emocional y permiten afrontar problemáticas como el sedentarismo o la obesidad infantil.
        .bg-gris-oscuro.p-4(data-aos='fade-up')
          span El desarrollo de la personalidad depende del <b>esquema corporal</b>, y se da por etapas, en interacción entre la función tónica (tono muscular) y la función motora (movimiento), que facilitan la comunicación, el conocimiento y la adaptación al entorno (Gutiérrez y Castillo, 2014).
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
      
        h2 Conexiones entre movimiento, cognición y lenguaje
        p.mb-4 El desarrollo intelectual y del lenguaje está profundamente conectado con la experiencia motora. Según Gutiérrez y Castillo (2014), el conocimiento se construye mediante tres dimensiones:
        .row.mb-4
          .col-6.col-lg-4.mx-auto(data-aos='fade-up')
            .d-flex.bg-amarillo-oscuro.p-3.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-9.svg', alt='Texto descriptivo de la imagen')
              .my-auto.p-4.p-xl-0
                p.pe-xl-3.mb-2.text-bold Psicofísico 
                span Basado en la experiencia sensorial y física directa.
          .col-6.col-lg-4(data-aos='fade-up')
            .d-flex.bg-amarillo-oscuro.p-3.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-10.svg', alt='Texto descriptivo de la imagen')
              .my-auto.p-4.p-xl-0
                p.pe-xl-3.mb-2.text-bold Espacio-temporal
                span Relacionado con la organización del cuerpo en el espacio y el tiempo.
          .col-6.col-lg-4(data-aos='fade-up')
            .d-flex.bg-amarillo-oscuro.p-3.h-100.flex-column.flex-md-row.mb-4(data-aos='fade-up')
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-11.svg', alt='Texto descriptivo de la imagen')
              .my-auto.p-4.p-xl-0
                p.pe-xl-3.mb-2.text-bold Lógico-formal
                span Vinculado a la abstracción y el razonamiento, desarrollados posteriormente.
        h2 Lateralidad y desarrollo neuromotor
        p.mb-4 Cañizares Márquez y Carbonero Celis (2016) definen la <b>lateralidad</b> como la preferencia por un lado del cuerpo al realizar actividades. Esta se desarrolla entre los 2 y los 7 años y se consolida hacia los 5-7 años. La lateralidad influye en habilidades escolares como la lectura y la escritura.

        .row.mb-4.justify-content-center
          .col-10.col-md-6.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Parte preferida del cuerpo
              p.px-1.text-small.mb-0.text-center Diestros, zurdos, ambidiestros, lateralidad cruzada
          .col-10.col-md-6.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Uso de herramientas
              p.px-1.text-small.mb-0.text-center Preferencia manual evidente o leve
          .col-10.col-md-6.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-14.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Grado de preferencia
              p.px-1.text-small.mb-0.text-center Fuerte o débil
          .col-10.col-md-6.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-15.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Origen
              p.px-1.text-small.mb-0.text-center Innato o por condicionantes (lesiones, adaptaciones)

    .d-flex.bg-azul.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-16.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.px-4.mb-0 El reconocimiento del lado dominante es clave para la orientación espacial. Padres y maestros deben observar y ofrecer oportunidades de exploración motriz para favorecer este desarrollo.

    h2 Percepción y sentido del cuerpo

    .row.bg-fondo-1.bg-full-width.pt-4.mb-4
      div.px-5
      
        p.mb-4 La percepción, entendida como la interpretación cerebral de los estímulos sensoriales (Cañizares Márquez y Carbonero Celis, 2016), permite dar significado a la experiencia y regular la acción. Para ello, se emplean dos tipos de información:
        
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen').mb-4

        p.mb-4 Durante la educación primaria, se consolidan las capacidades <b>perceptivo-motrices</b>, esenciales para interpretar el mundo y el propio cuerpo. El proceso perceptivo ocurre en dos etapas:

        .row
          .col-10.col-md-6.mx-auto.mb-4(data-aos='zoom-in')
            .d-flex.bg-amarillo-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-18.svg', alt='Texto descriptivo de la imagen')
              .my-auto.p-4.p-xl-0
                p.pe-xl-3.mb-2.text-bold Captación sensorial
                span Los sentidos detectan estímulos del entorno.
          .col-10.col-md-6.mx-auto(data-aos='zoom-in')
            .d-flex.bg-amarillo-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-19.svg', alt='Texto descriptivo de la imagen')
              .my-auto.p-4.p-xl-0
                p.pe-xl-3.mb-2.text-bold Procesamiento cerebral
                span El cerebro interpreta estos datos, asignándoles un significado útil para la acción.
    .row.bg-gris-oscuro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto La Relevancia de la Percepción en el Movimiento
          p.mb-5(data-aos="fade-up") Se invita a leer el documento La Relevancia de la Percepción en el Movimiento, donde se analiza cómo la percepción sensorial influye directamente en la ejecución de los movimientos durante la primera infancia.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> La Relevancia de la Percepción en el Movimiento
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Autopercepción

    .row.mb-4
      .col-12.col-xl-9
        p.mb-4 La <b>autopercepción</b> en la primera infancia, según Campo Ternera, (2014), es un proceso dinámico mediante el cual los niños comienzan a verse y entenderse a sí mismos. Este proceso es clave en la construcción de la identidad, la confianza en sí mismos y el conocimiento de sus propias capacidades. La autopercepción se alimenta principalmente de las interacciones con el entorno y figuras significativas como padres o cuidadores.
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Reconocimiento del "Yo" corporal
              p Identificación del cuerpo como entidad propia; se evidencia cuando los niños se refieren a sí mismos por su nombre.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen') 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Identificación con otros
              p Interiorización de roles, valores culturales y familiares a través de la imitación.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen') 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Narrativa del "Yo"
              p Desarrollo de relatos personales simples sobre sus vivencias, fundamentales para estructurar una identidad coherente.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen') 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Conciencia de la individualidad
              p Reconocimiento de pensamientos, deseos y sentimientos propios; expresiones como rabietas reflejan esta conciencia emergente.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen') 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Comparación social temprana
              p Comparaciones rudimentarias en habilidades o posesiones con otros niños.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen') 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Reconocimiento de atributos personales
              p A través del entorno, los niños reciben etiquetas ("tímido", "cariñoso") que construyen su autoconcepto.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen') 

    h2 Confianza en sí mismos y conocimiento de las propias capacidades
    p.mb-4 Según Campo Ternera, (2014),  la <b>confianza en sí mismo</b> se fortalece a partir del logro de tareas, el refuerzo positivo y un ambiente emocionalmente seguro. La autopercepción también implica el reconocimiento de lo que se puede o no se puede hacer.

    .row.bg-fondo-2.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        .row
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-29.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Sentimiento de competencia
                p.px-1.text-small.mb-0.text-center Se desarrolla cuando los niños logran tareas por sí mismos, como abotonarse o resolver un rompecabezas.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-30.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Apoyo del entorno
                p.px-1.text-small.mb-0.text-center Celebrar esfuerzos y brindar aliento fortalece la autoestima; la crítica o sobreprotección pueden dañarla.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-31.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Tolerancia a la frustración
                p.px-1.text-small.mb-0.text-center El manejo de la frustración se cultiva junto con la confianza.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-32.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Exploración motriz y sensorial
                p.px-1.text-small.mb-0.text-center A través del juego, los niños descubren habilidades físicas y sensoriales.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-33.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Reconocimiento de fortalezas y debilidades
                p.px-1.text-small.mb-0.text-center Permite establecer metas realistas y adaptarse mejor a los desafíos.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-34.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Influencia del entorno
                p.px-1.text-small.mb-0.text-center Las oportunidades y expectativas del adulto influyen directamente en la percepción de capacidades.
    
    h2 Autoconcepto, autoestima y desarrollo de la personalidad
    p.mb-4 Según Quintero y Montenegro (2015), la <b>personalidad</b> se construye a partir de una serie de factores interrelacionados que se desarrollan en los primeros años de vida, con un fuerte componente socioafectivo.

    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-35.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='17.5%' y='20%' numero='+')
        .h5.mb-2 Autoconcepto
        p Imagen mental que el niño tiene de sí mismo, basada en rasgos concretos observables. Se enriquece con la retroalimentación del entorno.
      .tarjeta.bg-white.p-4(x='71.6%' y='14%' numero='+')
        .h5.mb-2 Autonomía
        p Capacidad de tomar decisiones y realizar tareas por cuenta propia. Se desarrolla con oportunidades adecuadas según la edad.
      .tarjeta.bg-white.p-4(x='82.5%' y='38.4%' numero='+')
        .h5.mb-2 Autorregulación
        p Habilidad para gestionar emociones, impulsos y conductas. Se evidencia en la capacidad de esperar turnos o seguir instrucciones.
      .tarjeta.bg-white.p-4(x='78%' y='54.2%' numero='+')
        .h5.mb-2 Empatía
        p Capacidad de comprender y compartir emociones ajenas. Se desarrolla gracias a interacciones sociales positivas y modelado adulto.
      .tarjeta.bg-white.p-4(x='17.5%' y='62%' numero='+')
        .h5.mb-2 Autoestima
        p Valoración afectiva que el niño hace de sí mismo. Depende de la aceptación, afecto y reconocimiento del entorno cercano.
    
    h2 Desarrollo cognitivo y corporal: una conexión integral
    p.mb-4 Duarte, Rodríguez y Castro-Martínez (2017), citando a Lení y Wey (2015), sostienen que el desarrollo corporal y del movimiento es <b>fundamental para el desarrollo cognitivo infantil</b>. Los retrasos motores pueden afectar negativamente funciones cognitivas, e incluso derivar en discapacidades intelectuales.

    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Movimiento mejora funciones cognitivas")
            p Atención, memoria, concentración. El movimiento estimula habilidades de planificación y orientación.
          .div(titulo="Exploración corporal cotidiana")
            p Favorece el aprendizaje por ensayo y error. Mejora el control postural y la coordinación.
          .div(titulo="Conceptos espaciales adquiridos corporalmente")
            p A través del movimiento se aprenden conceptos como “arriba”, “abajo”, “cerca”.
          .div(titulo="Coordinación y ritmo")
            p Habilidades necesarias para tareas físicas que también se reflejan en el aprendizaje cognitivo.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

    h2 Cuerpo, salud y hábitos

    .row.mb-5
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Finalmente, el cuerpo en la infancia no solo es un vehículo de identidad y cognición, sino también de <b>bienestar físico y mental</b>. El cuidado del cuerpo a través de la higiene, la alimentación y el descanso son pilares esenciales del desarrollo integral.
        .bg-amarillo.p-4(data-aos='fade-up')
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Hábitos saludables. </b> Inculcan responsabilidad sobre el cuerpo y promueven un crecimiento equilibrado.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Autocuidado. </b> Enseña a los niños a proteger y mantener su bienestar físico. Se fomenta desde el ejemplo adulto.
    
    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/194803?page=29") González, L. E. & Gómez, J. (1985). La educación física en la primera infancia
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=6EBKNkUo0ho") [Vídeo] Identidad de género en la infancia
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/67082?page=1") Porstein, A. M. (2016). Cuerpo, juego y movimiento en el Nivel Inicial
          
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
