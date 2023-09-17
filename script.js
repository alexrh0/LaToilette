const totalImages = 86;
const totalTexts = [
    "Se tiene la impresión de que una parte del arte actual contribuye a un trabajo de disuasión, a un trabajo de duelo de la imagen y de lo imaginario, a un trabajo de duelo estético casi siempre fallido.",
    "Y esto trae como consecuencia una melancolía general de la esfera artística, que parece sobrevivirse a sí misma en el reciclado de su historia y de sus vestigios (aunque ni el arte ni la estética son los únicos en verse condenados a este destino melancólico de vivir, no por encima de sus medios, sino más allá de sus propios fines).",
    "Al parecer, se nos habría reservado para la retrospectiva infinita de cuanto nos precedió.",
    "Así sucede con la política, con la historia y con la moral, pero también con el arte, que no disfruta aquí de ningún privilegio.",
    "Todo el movimiento de la pintura se ha retirado del futuro para orientarse hacia el pasado.",
    "Cita, simulación, reapropiación, el arte actual se dedica a reapropiarse de manera más o menos lúdica, más o menos kitsch, de todas las formas y obras del pasado, cercano, lejano y hasta contemporáneo.",
    "Russell Connor llama a esto «el rapto del arte moderno». Esta remake y este reciclaje pretenden ser irónicos, pero aquí la ironía es como la trama gastada de una tela; es resultado de la desilusión de las cosas, una ironía fósil.",
    "El guiño de yuxtaponer el desnudo del Almuerzo sobre la hierba al Jugador de cartas de Cézanne es nada más que un gag publicitario, humor, ironía, crítica en trompe-l'œil que caracteriza hoy a la publicidad e inunda al mundo artístico.",
    "Ironía del arrepentimiento y del resentimiento para con la propia cultura.",
    "Tal vez lo uno y lo otro constituyan el último estadio de la historia del arte, así como constituyen, según Nietzsche, el último estadio de la genealogía de la moral.",
    "Se trata de una parodia, y al mismo tiempo es una palinodia del arte y de la historia del arte, una parodia de la cultura por sí misma en forma de venganza, característica de una desilusión radical.",
    "Es como si el arte, a semejanza de la historia, fabricara sus propios cestos de basura y quisiera redimirse en sus detritos.",
    "Si existe hoy una gran dificultad para hablar de la pintura, es porque existe una gran dificultad para verla.",
    "Pues la mayoría de las veces ella no quiere exactamente ser mirada, sino absorbida visualmente, y circular sin dejar rastros.",
    "La pintura sería, en cierto modo, la forma estética simplificada del intercambio imposible.",
    "Tanto es así, que el discurso que mejor podría dar cuenta de ella sería aquel en el cual no hay nada que decir. El equivalente de un objeto que no es un objeto.",
    "Pero un objeto que no es un objeto no es justamente nada, es un objeto que no cesa de obsesionar con su inmanencia, con su presencia vacía e inmaterial.",
    "Todo el problema reside en materializar esta nada en los confines de la nada, trazar la filigrana del vacío en los confines del vacío, jugar según las reglas misteriosas de la indiferencia en los confines de la indiferencia.",
    "El arte nunca es el reflejo mecánico de las condiciones positivas o negativas del mundo: es su ilusión exacerbada, su espejo hiperbólico.",
    "En un mundo consagrado a la indiferencia, el arte no puede más que acrecentarla.",
    "Girar alrededor del vacío de la imagen, del objeto que ya no lo es.",
    "De este modo, el cine de autores como Wenders, Jarmush, Antonioni, Altman, Godard, Warhol, explora por medio de la imagen la insignificancia del mundo; estos autores contribuyen con sus imágenes a la insignificancia del mundo, incrementan su ilusión real, o hiperreal.",
    "En cambio, un cine como el de los últimos Scorsese, Greenaway, etc., no hace más que llenar el vacío de la imagen en forma de maquinación barroca y high-tech, con una agitación frenética y ecléctica, aumentando así nuestra desilusión imaginaria.",
    "Igual que esos Simulacionistas de Nueva York que, hipostasiado el simulacro, no hacen más que hipostasiar la pintura como simulacro, como máquina enfrentada consigo misma.",
    "En muchos casos (Bad Painting, New Paint- ing, instalaciones y performances), la pintura se reniega, se parodia, se vomita a sí misma.",
    "Deyecciones plastificadas, vitrificadas, congeladas.",
    "Gestión de desechos, inmortalización de desechos.",
    "Ya no existe siquiera la posibilidad de una mirada: aquello ya ni siquiera suscita una mirada porque, simplemente, ya no nos concierne.",
    "Si ya no nos concierne, nos deja completamente indiferentes.",
    "Y esa pintura se ha vuelto, en efecto, completamente indiferente a ella misma como pintura, como arte, como ilusión más poderosa que lo real.",
    "Ya no cree en su propia ilusión y cae en la simulación de sí misma y en lo grotesco.",
    "Todo el dilema es este: o bien la simulación es irreversible y no hay nada más allá de ella, no se trata ni siquiera de un acontecimiento, sino de ¡nuestra banalidad absoluta, de una obscenidad cotidiana, con lo cual estamos en el nihilismo definitivo y nos preparamos para la repetición insensata de todas las formas de nuestra cultura, a la espera de algún otro acontecimiento imprevisible —¿pero de dónde podría venir?—; o bien existe, de todos modos, un arte de la simulación, una cualidad irónica que resucita una y otra vez las apariencias del mundo para destruirlas.",
    "De lo contrario, el arte no haría otra cosa, como suele suceder hoy, que encarnarse sobre su propio cadáver.",
    "No hay que sumar lo mismo a lo mismo, y así sucesivamente, en abismo: esto es la simulación pobre.",
    "Hay que arrancar lo mismo de lo mismo.",
    "Es preciso que cada imagen le quite algo a la realidad del mundo; es preciso que en cada imagen algo desaparezca, pero no se debe ceder a la tentación del aniquilamiento, de la entropía definitiva; es preciso que la desaparición continúe viva: este es el secreto del arte y de la seducción.",
    "Hay en el arte —y esto, sin duda, tanto en el contemporáneo como en el clásico— una doble postulación y, por lo tanto, una doble estrategia.",
    "Una pulsión de aniquilamiento, borrar todas las huellas del mundo y de la realidad, y una resistencia contra esta pulsión.",
    "Según palabras de Michaux, el artista es «aquel que resiste con todas sus fuerzas a la pulsión fundamental de no dejar huellas».",
    "El arte se ha vuelto iconoclasta. La iconoclastia moderna ya no consiste en romper las imágenes, sino en fabricarlas —profusión de imágenes en las que no hay nada que ver—.",
    "Son literalmente imágenes que no dejan huellas. Carecen, hablando con propiedad, de consecuencias estéticas.",
    "Pero, detrás de cada una de ellas, algo ha desaparecido. Tal es su secreto, si es que tienen alguno, y tal es el secreto de la simulación.",
    "En el horizonte de la simulación no solamente ha desaparecido el mundo real, sino que la cuestión misma de su existencia ya no tiene sentido.",
    "Así se realiza la profecía: vivimos en un mundo de simulación, en un mundo donde la más alta función del signo es hacer desaparecer la realidad y, al mismo tiempo, enmascarar esta desaparición.",
    "El arte no hace otra cosa. Hoy, los medios masivos no hacen otra cosa. Por eso están condenados al mismo destino.",
    "Algo se esconde detrás de la orgía de las imágenes. El mundo que se sustrae tras la profusión de imágenes es, tal vez, otra forma de ilusión, una forma irónica.",
    "La ilusión que procedía de la capacidad de arrancarse de lo real mediante la invención de formas —capacidad de ponerle otra escena, de pasar al otro lado del espejo—, la que inventaba otro juego y otra regla del juego, es ahora imposible porque las imágenes han pasado a las cosas.",
    "Ya no son el espejo de la realidad: han ocupado el corazón de la realidad transformándola en una hiperrealidad en la cual, de pantalla en pantalla, ya no hay para la imagen más destino que la imagen.",
    "La imagen ya no puede imaginar lo real, puesto que ella es lo real; ya no puede trascenderlo, transfigurarlo ni soñarlo, puesto que ella es su realidad virtual.",
    "En la realidad virtual, es como si las cosas se hubieran tragado su espejo.",
    "Al haberse tragado su espejo, se han vuelto transparentes a sí mismas, ya no tienen secretos, ya no pueden ilusionar (porque la ilusión está ligada al secreto, al hecho de que las cosas están ausentes de sí mismas, se retiran de sí mismas en sus apariencias):",
    "aquí no hay más que transparencia, y las cosas, enteramente presen- tes para sí en su visibilidad, en su virtualidad, en su transcripción despiadada (en términos numéricos para las más recientes tecnologías), sólo se inscriben en una pantalla, en los miles de millones de pantallas en cuyo horizonte lo real, pero también la imagen estrictamente hablando, han desaparecido.",
    "Todas las utopías de los siglos XIX y XX, al realizarse, expulsaron a la realidad de la realidad y nos dejaron en una hiperrealidad vaciada de sentido, puesto que toda perspectiva final quedó como absorbida, digerida, y no dejó otro residuo que una superficie carente de profundidad.",
    "Tal vez la tecnología sea la única fuerza que vuelve a enlazar aún fragmentos dispersos de lo real, pero, ¿qué ha sido de la constelación del sentido? ¿Qué ha sido de la constelación del secreto?",
    "Fin de la representación, entonces; fin de la estética, fin de la imagen misma en la virtualidad superficial de las pantallas.",
    "Pero —y hay aquí un efecto perverso y paradójico, tal vez po- sitivo— todo indica que, al mismo tiempo que la ilusión y la utopía han sido expulsadas de lo real por la fuerza de todas nuestras tecnologías, la ironía, en cambio, por la virtud de estas mismas tecnologías, ha pasado a las cosas.",
    "Habría así una contrapartida para la pérdida de la ilusión del mundo: la aparición de la ironía objetiva de este mundo.",
    "La ironía como forma universal y espiritual de la desilusión del mundo.",
    "Espiritual, en el sentido del espíritu agudo surgiendo del corazón de la banalidad técnica de nuestros objetos e imágenes.",
    "Los japoneses presienten una deidad en cada objeto industrial. Entre nosotros, esa presencia divina se ha reducido a un pequeño fulgor irónico, pero aun así es todavía una forma espiritual.",
    "Ella ha dejado de ser una función del sujeto, un espejo crítico en el que se refleja la incertidumbre, la sinrazón del mundo; es el espejo del mundo mismo, del mundo objetal y artificial que nos rodea y en el que se reflejan la ausencia y la transparencia del sujeto.",
    "A la función crítica del sujeto le sucedió la función irónica del objeto ironía objetiva y ya no subjetiva.",
    "Desde el momento en que son productos fabricados, artefactos, signos, mercancías, las cosas ejercen, por su propia existencia, una función artificial e irónica.",
    "Ya no se necesita proyectar la ironía sobre el mundo real, ya no se necesita ningún espejo exterior que tienda al mundo la imagen de su do- ble: nuestro propio universo se ha tragado a su doble, y por consiguiente se ha vuelto espectral, transparente, ha perdido su sombra, y la ironía de este doble incorporado estalla a cada instan- te, en cada fragmento de nuestros signos, de nuestros objetos, de nuestras imágenes, de nuestros modelos.",
    "Ni siquiera se necesita, como lo hicieron los surrealistas, exagerar la funcionalidad, confrontar los objetos con lo absurdo de su función en una irrealidad poética: las cosas se encargan ellas solas de explicarse irónicamente y se descartan de su sentido sin esfuerzo; ya no se necesita acentuar su artificio o su sinsentido: todo esto forma parte de su representación, de su encadenamiento visible, demasiado visible, de su superfluidad, que crea por sí misma un efecto de parodia.",
    "Después de la física y la metafísica, estamos en una patafísica de los objetos y la mercancía, en una patafísica de los signos y lo operacional.",
    "Privadas de su secreto y de su ilusión, todas las cosas están condenadas a la existencia, a la apariencia visible; están condenadas a la publicidad, al hacer-creer, al hacer-ver, al hacer-valer.",
    "Nuestro mundo moderno es publicitario por esencia. Tal como es, se diría que fue inventado nada más que para publicitarlo en otro mundo.",
    "No se piense que la publicidad vino des- pués de la mercancía: hay en el corazón de esta (y, por extensión, en el de nuestro íntegro universo de signos) un genio maligno publicitario, un trickster que ha integrado la bufonería de la mercancía y de su puesta en escena.",
    "Un libretista genial (tal vez el capital mismo) arrastró al mundo hacia una fantasmagoría de la que todos somos víctimas fascinadas.",
    "Hoy, todas las cosas quieren manifestarse. Los objetos técnicos, industriales, mediáticos, los artefactos de toda clase, quieren significar, ser vistos, ser leídos, ser grabados, ser fotografiados.",
    "Creemos fotografiar tal o cual cosa por placer y en realidad es ella la que quiere ser fotografiada; somos nada más que la figura de su puesta en escena, secretamente movidos por la perversión auto publicitaria de todo este mundo circundante.",
    "Aquí está la ironía patafísica de la situación. En efecto: toda metafísica es barrida por ese vuelco de situación en que el sujeto deja de ser origen del proceso para convertirse en agente u operador de la ironía objetiva del mundo.",
    "Ya no es el sujeto el que se representa el mundo (I will be your mirror!): es el objeto el que refracta al sujeto y, sutilmente, por medio de todas nuestras tecnologías, le impone su presencia y su forma aleatoria.",
    "Por lo tanto, ya no es el sujeto el amo del jue- go; la relación parece haber dado un vuelco. La potencia del objeto se abre camino a través de todo el juego de simulación y simulacros, a través del artificio mismo que le hemos impuesto.",
    "Hay aquí una especie de revancha irónica: el objeto deviene un atractor extraño.",
    "Y aquí se encuentra el límite de la aventura estética, del dominio estético del mundo por el sujeto (aunque es también el fin de la aventura de la representación), pues el objeto como atractor extraño ya no es un objeto estético.",
    "Despojado por la técnica de todo secreto, de toda ilusión; despojado de su origen por haberse generado en modelos; despojado de toda connotación de sentido y valor, exorbitado, es decir, soltado de la órbita del sujeto al mismo tiempo que del preciso modo de visión que forma parte de la definición estética del mundo, deviene entonces, de alguna manera, un objeto puro y recupera algo de la fuerza y la inmediatez de las formas anteriores o posteriores a la estetización general de nuestra cultura.",
    "Todos esos artefactos, todos esos objetos e imágenes artificiales, ejercen sobre nosotros una suerte de irradiación artificial, de fascinación; los simulacros dejan de ser simulacros y pasan a tener una evidencia material; pasan a ser fetiches quizás, a la vez completamente despersonalizados, desimbolizados y, sin embargo, de intensidad máxima, investidos directamente como médium, del mismo modo en que lo es el objeto fetiche, sin mediación estética.",
    "Es aquí donde nuestros objetos más superficiales y estereotipados recuperan tal vez un poder exorcizante similar al de las máscaras sacrificiales.",
    "Exactamente como estas, que absorben la identidad de los actores, danzarines y espectadores, y cuya función es provocar con ello una suerte de vértigo taumatúrgico (¿trauma- túrgico?), así creo que todos esos artefactos modernos, de lo publicitario a lo electrónico, de lo mediático a lo virtual —objetos, imágenes, modelos, redes—, cumplen una función de absorción y vértigo del interlocutor (nosotros, los suje- tos, los actuantes supuestos), mucho más que de comunicación o información; y, al mismo tiempo, de eyección y rechazo, exactamente como en las formas exorcísticas y paroxísticas anteriores.",
    "We shall be your favorite disappearing act!",
    "Mucho más allá de la forma estética, estos objetos adoptan las formas de juego aleatorio y de vértigo a que aludía Caillois y que se oponían a los juegos de representación, miméticos y estéticos.",
    "Ilustran así nuestro tipo de sociedad, que es una sociedad de paroxismo y exorcismo, es decir, una sociedad en la que hemos absorbido hasta el vértigo nuestra propia realidad, nuestra propia identidad, y procuramos rechazarla con la misma fuerza, una sociedad donde la realidad entera ha absorbido hasta el vértigo a su propio doble y quiere expulsarlo cualesquiera que sean sus formas.",
    "Esos objetos triviales, esos objetos técnicos, esos objetos virtuales, serían, pues, los nuevos atractores extraños, los nuevos objetos más allá de lo estético, trans estéticos, objetos-fetiche carentes de significación, de ilusión, sin aura, sin valor, y que serían el espejo de nuestra desilusión radical del mundo.",
    "Objetos irónicamente puros, tal como son las imágenes de Warhol."
    
];

// Selecciona una imagen aleatoria
const randomIndexImage = Math.floor(Math.random() * totalImages) + 1;
const randomImage = `imagen${randomIndexImage}.jpg`;

// Selecciona una frase aleatoria
const randomIndexText = Math.floor(Math.random() * totalTexts.length);
const randomText = totalTexts[randomIndexText];

// Configura la imagen y el texto
document.getElementById('random-image').src = randomImage;
document.getElementById('random-text').textContent = randomText;

// Estiliza el párrafo con la tipografía y el color
document.getElementById('random-text').style.fontFamily = 'Univers';
document.getElementById('random-text').style.fontSize = '30px';
document.getElementById('random-text').style.color = 'blue';
