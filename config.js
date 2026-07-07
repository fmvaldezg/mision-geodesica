// =============================================================================
// config.js — La Misión Geodésica Francesa al Ecuador (1736–1743)
// Story map de ejemplo para la lección de Programming Historian en español:
// "Narración de historias con mapas usando el software libre MapLibre"
// Basado en la plantilla: https://github.com/digidem/maplibre-storymap
// Autor: Felipe Valdez
//
// NOTA SOBRE CAPÍTULOS:
// Los capítulos 0, 1, 4 y 8 están completamente desarrollados y sirven como
// modelo. Los capítulos 2, 3, 5, 6, 7 y 9 incluyen la configuración de cámara
// definitiva y una descripción breve marcada con [COMPLETAR] para ser
// redactada siguiendo el mismo patrón.
// =============================================================================

var config = {
    // Estilo del mapa base: OpenFreeMap no requiere registro ni clave de API.
    // Otros estilos disponibles: 'bright', 'positron', 'fiord'.
    style: 'https://tiles.openfreemap.org/styles/liberty',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true, // si inset es true, legend se desactiva
    legend: false,
    theme: 'light',
    use3dTerrain: false, // ver sección avanzada de la lección: puede activarse
                         // con las teselas abiertas de https://mapterhorn.com
                         // (sin clave de API), ajustando 'terrainSource' en index.html
    useCustomLayers: true, // habilita las capas definidas en sources.js
    bookmarks: false,
    chapterReturn: false,
    title: 'Medir la Tierra',
    logo: '',
    subtitle: 'La Misión Geodésica Francesa al Ecuador (1736–1743)',
    byline: 'Por Felipe Valdez',
    mobileview: '<div id="rotate-mobile"><em>Para una mejor experiencia en dispositivos móviles, gira tu dispositivo a orientación horizontal.</em><br><br><img src="images/device.png">',
    footer: 'Fuentes: Charles-Marie de La Condamine, <em>Relation abrégée d\'un voyage fait dans l\'intérieur de l\'Amérique méridionale</em> (1745) y <em>Journal du voyage fait par ordre du roi à l\'équateur</em> (1751), Gallica, Biblioteca Nacional de Francia; Jorge Juan y Antonio de Ulloa, <em>Relación histórica del viaje a la América Meridional</em> (1748), Biblioteca Digital Hispánica, BNE. <br> Creado con la plantilla <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> y datos de <a href="https://openfreemap.org" target="_blank">OpenFreeMap</a>.',
    chapters: [
        // ---------------------------------------------------------------------
        // CAPÍTULO 0 (modelo) — Apertura: la disputa por la forma de la Tierra
        // Técnica: zoom planetario (1.6) y pitch 0 para transmitir abstracción
        // y escala global. jumpTo porque es la vista inicial: no hay transición.
        // ---------------------------------------------------------------------
        {
            id: 'cap-0-apertura',
            alignment: 'left',
            hidden: false,
            title: '¿Qué forma tiene la Tierra?',
            image: './images/cap0_esferoide_newton.jpg',
            caption: 'Comparación de los dos modelos del esferoide terrestre, siglo XVIII. Dominio público.',
            description: 'En 1734, la Academia Real de Ciencias de París enfrentaba una disputa que dividía a la ciencia europea: ¿es la Tierra un esferoide achatado en los polos, como sostenía Isaac Newton, o achatado en el ecuador, como defendía la escuela de Jacques Cassini? La única forma de resolverlo era medir. La Academia decidió enviar dos expediciones simultáneas a los extremos del planeta: una a Laponia, dirigida por Maupertuis (1736–1737), y otra al territorio de la Real Audiencia de Quito, en el actual Ecuador. Esta última se convertiría en la expedición científica más larga realizada hasta entonces: ocho años midiendo un arco del meridiano terrestre entre montañas, páramos y ciudades coloniales.',
            location: {
                center: [0.0, 0.0], // intersección del ecuador y el meridiano de Greenwich
                zoom: 1.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // ---------------------------------------------------------------------
        // CAPÍTULO 1 (modelo) — La Rochelle: el embarque (mayo de 1735)
        // Técnica: bearing 270 orienta la vista hacia el Atlántico, insinuando
        // el destino del viaje. Primer flyTo largo: del planeta a un puerto.
        // ---------------------------------------------------------------------
        {
            id: 'cap-1-la-rochelle',
            alignment: 'left',
            hidden: false,
            title: 'La Rochelle: el embarque',
            image: './images/cap1_la_condamine_carmontelle.jpg',
            caption: 'Retrato de Charles-Marie de La Condamine por Carmontelle. Wikimedia Commons, dominio público.',
            description: 'El 16 de mayo de 1735 zarpa del puerto de La Rochelle el navío <em>Portefaix</em>. A bordo viaja un equipo singular: los académicos Charles-Marie de La Condamine, Pierre Bouguer y Louis Godin; el botánico Joseph de Jussieu; el médico Jean Seniergues; el cartógrafo Jean-Baptiste Verguin; el dibujante Jean-Louis de Morainville; y Hugot, el relojero encargado de mantener vivos los instrumentos. Llevan consigo cuadrantes, relojes de péndulo y toesas de hierro: instrumentos de precisión nunca antes embarcados hacia América. En Cartagena de Indias se les unirán los jóvenes oficiales españoles Jorge Juan y Antonio de Ulloa, comisionados por Felipe V, oficialmente para colaborar; extraoficialmente, para vigilar.',
            location: {
                center: [-1.1517, 46.1591], // puerto de La Rochelle
                zoom: 13,
                pitch: 30,
                bearing: 270 // vista hacia el Atlántico: la dirección del viaje
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // ---------------------------------------------------------------------
        // CAPÍTULO 2 (esqueleto) — Cartagena de Indias y la travesía al Pacífico
        // Técnica: zoom regional intermedio (5) para narrar una trayectoria
        // compleja (Cartagena–Panamá–Guayaquil) sin un capítulo por cada parada.
        // ---------------------------------------------------------------------
        {
            id: 'cap-2-cartagena',
            alignment: 'left',
            hidden: false,
            title: 'Cartagena y el camino al Pacífico',
            image: './images/cap2_istmo_panama.jpg',
            caption: 'Mapa del istmo de Panamá, siglo XVIII. Gallica, BnF. Dominio público.',
            description: '[COMPLETAR: llegada a Cartagena en noviembre de 1735; unión con Jorge Juan y Antonio de Ulloa; cruce del istmo de Panamá por tierra; embarque hacia Guayaquil y ascenso a la sierra por el Camino de Bodegas. La concesión diplomática excepcional de España y las primeras tensiones entre La Condamine, Bouguer y Godin.]',
            location: {
                center: [-78.5, 5.0], // vista regional: Cartagena, Panamá y Guayaquil
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // ---------------------------------------------------------------------
        // CAPÍTULO 3 (esqueleto) — Quito: la llegada (29 de mayo de 1736)
        // Técnica: pitch 45 con justificación visual: Quito está rodeada de
        // volcanes y la inclinación de la cámara los hace perceptibles.
        // ---------------------------------------------------------------------
        {
            id: 'cap-3-quito',
            alignment: 'left',
            hidden: false,
            title: 'Quito, a 2.850 metros',
            image: './images/cap3_vista_quito_ulloa.jpg',
            caption: 'Vista de Quito en la <em>Relación histórica</em> de Jorge Juan y Antonio de Ulloa (1748). BNE. Dominio público.',
            description: '[COMPLETAR: llegada el 29 de mayo de 1736; la sorpresa europea ante el clima de altura; la recepción hostil de la Real Audiencia y su presidente Dionisio de Alsedo; el encuentro con Pedro Vicente Maldonado, el sabio criollo de Riobamba que se convertirá en colaborador clave.]',
            location: {
                center: [-78.5249, -0.2299], // centro histórico de Quito
                zoom: 14,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // ---------------------------------------------------------------------
        // CAPÍTULO 4 (modelo) — Yarouquí: la línea base (octubre de 1736)
        // Técnica: pitch 60 y bearing 15 orientan la vista en la dirección de la
        // línea base medida; rotateAnimation evoca el proceso lento de medición;
        // onChapterEnter enciende las capas de la línea base y las pirámides.
        // ---------------------------------------------------------------------
        {
            id: 'cap-4-yarouqui',
            alignment: 'left',
            hidden: false,
            title: 'Yarouquí: la línea base',
            image: './images/cap4_piramides_la_condamine.jpg',
            caption: 'Las pirámides de la línea base en la <em>Relation abrégée</em> de La Condamine (1745). Gallica, BnF. Dominio público.',
            description: 'Toda la geodesia de la expedición depende de una sola medida hecha a mano: la <strong>línea base</strong>. En la llanura de Yarouquí, al noreste de Quito, el equipo pasa semanas midiendo sobre el terreno una distancia exacta con toesas de hierro calibradas, colocadas una tras otra bajo el sol y la lluvia del páramo. De esa línea se derivarán, por trigonometría, todas las triangulaciones posteriores. Al terminar, levantan dos pirámides de mampostería para marcar los extremos: el primer monumento científico del actual Ecuador. Las pirámides serían destruidas en 1747 por orden de la Corona española, en una disputa diplomática sobre sus inscripciones; es la primera vez que un símbolo científico se convierte en objeto de tensión imperial. Hoy se conservan reconstruidas.',
            location: {
                center: [-78.3167, -0.1500], // llanura de Yarouquí (aproximado)
                zoom: 15,
                pitch: 60,
                bearing: 15 // orientación aproximada de la línea base
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, // rotación lenta: evoca la medición paciente
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'linea-base',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'piramides-puntos',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'piramides-etiquetas',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'linea-base',
                    opacity: 0
                },
                {
                    layer: 'piramides-puntos',
                    opacity: 0
                },
                {
                    layer: 'piramides-etiquetas',
                    opacity: 0
                }
            ]
        },
        // ---------------------------------------------------------------------
        // CAPÍTULO 5 (esqueleto) — La cadena de triangulación (1737–1741)
        // Técnica: zoom 8 + pitch 60 para el clímax visual andino. La capa de
        // triangulación reproduce en pantalla lo que el equipo dibujaba en papel.
        // Sección avanzada de la lección: activar terreno 3D aquí.
        // ---------------------------------------------------------------------
        {
            id: 'cap-5-triangulacion',
            alignment: 'left',
            hidden: false,
            title: 'Triangular los Andes',
            image: './images/cap5_chimborazo_relacion.jpg',
            caption: 'El Chimborazo en la <em>Relación histórica</em> (1748). BNE. Dominio público.',
            description: '[COMPLETAR: la extensión de la triangulación hacia el sur por el callejón interandino; campamentos de semanas a más de 4.000 metros; frío, hambre, miras robadas e instrumentos descalibrados; el experimento de Bouguer sobre la atracción gravitatoria del Chimborazo; las erupciones del Cotopaxi de 1743–1744; y la ruptura entre Bouguer y La Condamine en diciembre de 1741.]',
            location: {
                center: [-78.6500, -1.5000], // entre Cotopaxi y Chimborazo
                zoom: 8,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'triangulacion-lineas',
                    opacity: 0.8,
                    duration: 1500
                },
                {
                    layer: 'triangulacion-cumbres',
                    opacity: 1,
                    duration: 1500
                },
                {
                    layer: 'triangulacion-etiquetas',
                    opacity: 1,
                    duration: 1500
                }
            ],
            onChapterExit: [
                {
                    layer: 'triangulacion-lineas',
                    opacity: 0
                },
                {
                    layer: 'triangulacion-cumbres',
                    opacity: 0
                },
                {
                    layer: 'triangulacion-etiquetas',
                    opacity: 0
                }
            ]
        },
        // ---------------------------------------------------------------------
        // CAPÍTULO 6 (esqueleto) — Cuenca: el extremo sur y el caso Seniergues
        // Técnica: la description puede sostener narrativa densa y episodios
        // moralmente complejos, no solo descripción geográfica.
        // ---------------------------------------------------------------------
        {
            id: 'cap-6-cuenca',
            alignment: 'left',
            hidden: false,
            title: 'Cuenca: ciencia y conflicto',
            image: './images/cap6_cuenca_colonial.jpg',
            caption: 'Vista de Cuenca colonial, siglo XVIII. Dominio público.',
            description: '[COMPLETAR: el extremo sur del arco en la llanura de Tarqui y las mediciones astronómicas asociadas; el asesinato del médico Jean Seniergues en la plaza de Cuenca el 29 de agosto de 1739, durante una corrida de toros y en medio de un motín popular; el proceso judicial que paralizó el trabajo durante meses; las tensiones entre la expedición ilustrada y la sociedad colonial.]',
            location: {
                center: [-79.0045, -2.9001], // Cuenca, plaza de San Sebastián
                zoom: 14,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // ---------------------------------------------------------------------
        // CAPÍTULO 7 (esqueleto) — Ingapirca: el desvío arqueológico (1739)
        // Técnica: capítulo bisagra; un story map puede manejar digresiones
        // temáticas sin perder la línea narrativa principal.
        // ---------------------------------------------------------------------
        {
            id: 'cap-7-ingapirca',
            alignment: 'left',
            hidden: false,
            title: 'Ingapirca: un desvío hacia el pasado',
            image: './images/cap7_ingapirca_relacion.jpg',
            caption: 'Grabado de Ingapirca en la <em>Relación histórica</em> (1748). BNE. Dominio público.',
            description: '[COMPLETAR: la visita de La Condamine a las ruinas incas de Ingapirca en 1739 y la primera descripción científica europea del sitio; el dibujo de San Agustín de Callo por Ulloa; las contribuciones no geodésicas de la expedición: botánica (la quina y el caucho descritos por Jussieu), lingüística y observación de la sociedad colonial.]',
            location: {
                center: [-78.8728, -2.5453], // Ingapirca, Cañar
                zoom: 16,
                pitch: 45,
                bearing: 30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // ---------------------------------------------------------------------
        // CAPÍTULO 8 (modelo) — El descenso por el Amazonas (mayo–sept. 1743)
        // Técnica: el flyTo más largo y dramático de la lección, complemento del
        // cruce atlántico del capítulo 1. bearing 90 mira hacia el este: la
        // dirección del viaje. onChapterEnter dibuja la ruta fluvial completa.
        // ---------------------------------------------------------------------
        {
            id: 'cap-8-amazonas',
            alignment: 'left',
            hidden: false,
            title: 'El descenso por el Amazonas',
            image: './images/cap8_mapa_amazonas_1745.jpg',
            caption: 'Mapa del curso del Amazonas por La Condamine (1745). Gallica, BnF. Dominio público.',
            description: 'Concluidas las mediciones en mayo de 1743, La Condamine toma una decisión audaz: en lugar de regresar por el Pacífico, volverá a Europa descendiendo el Amazonas. Es la primera exploración científica del río. Parte de Cuenca hacia Loja y Jaén de Bracamoros, embarca en el Marañón, atraviesa el temible Pongo de Manseriche y navega durante cuatro meses hasta alcanzar el Atlántico el 19 de septiembre de 1743. En el camino realiza observaciones astronómicas y etnográficas, recolecta muestras de caucho y levanta el primer mapa científico del Amazonas, publicado en 1745. El final es accidentado: una canoa zozobra y gran parte de sus muestras se pierde. Mientras tanto, Bouguer ha regresado por la ruta tradicional vía Cartagena y llega a París antes que él, reavivando la disputa pública sobre quién merecía el crédito.',
            location: {
                center: [-60.0, -3.0], // Amazonas medio, vista panorámica de la cuenca
                zoom: 4.5,
                pitch: 0,
                bearing: 90, // vista hacia el este: la salida al Atlántico
                speed: 0.5 // ralentiza el flyTo para dramatizar la distancia
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ruta-amazonas',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'ruta-amazonas',
                    opacity: 0
                }
            ]
        },
        // ---------------------------------------------------------------------
        // CAPÍTULO 9 (esqueleto) — El legado: un país llamado Ecuador
        // Técnica: capítulo síntesis; la capa final muestra el arco completo
        // Quito–Cuenca, el equivalente visual de "todo el recorrido de un vistazo".
        // ---------------------------------------------------------------------
        {
            id: 'cap-9-legado',
            alignment: 'left',
            hidden: false,
            title: 'Un país llamado Ecuador',
            image: './images/cap9_mapa_maldonado_1750.jpg',
            caption: 'Mapa de la Provincia de Quito por Pedro Vicente Maldonado (1750). Dominio público.',
            description: '[COMPLETAR: los resultados confirman la teoría newtoniana; La Condamine publica su <em>Journal du voyage fait par ordre du roi à l\'équateur</em> (1751) y la palabra "équateur" bautizará a la república independiente en 1830; la toesa del Perú como patrón; el mapa de Pedro Vicente Maldonado de 1750; el precedente del metro como unidad universal; la Segunda Misión Geodésica de 1901.]',
            location: {
                center: [-78.7000, -1.5000], // centro aproximado del arco medido
                zoom: 7,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'arco-meridiano',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'hitos-expedicion',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'hitos-etiquetas',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'arco-meridiano',
                    opacity: 0
                },
                {
                    layer: 'hitos-expedicion',
                    opacity: 0
                },
                {
                    layer: 'hitos-etiquetas',
                    opacity: 0
                }
            ]
        }
    ]
};