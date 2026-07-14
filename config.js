// =============================================================================
// config.js — La Misión Geodésica Francesa al Ecuador (1736–1743)
// Story map de ejemplo para la lección de Programming Historian en español:
// "Narración de historias con mapas usando el software libre MapLibre"
// Basado en la plantilla: https://github.com/digidem/maplibre-storymap
// Autor: Felipe Valdez
//
// Los diez capítulos están completamente redactados. Este es el ejemplo
// terminado que acompaña a la lección; la versión simplificada de tres
// capítulos, que la lección construye paso a paso, se distribuye aparte.
// =============================================================================

var config = {
    // Estilo del mapa base: OpenFreeMap no requiere registro ni clave de API.
    // Otros estilos disponibles: 'liberty', 'positron', 'fiord'.
    style: 'https://tiles.openfreemap.org/styles/bright',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true, // si inset es true, legend se desactiva
    legend: false,
    theme: 'light',
    use3dTerrain: true, // ver sección avanzada de la lección: puede activarse
                         // con las teselas abiertas de https://mapterhorn.com
                         // (sin clave de API), ajustando 'terrainSource' en index.html
    useCustomLayers: true, // habilita las capas definidas en sources.js
    bookmarks: false,
    chapterReturn: false,
    title: 'Medir la Tierra',
    logo: '',
    subtitle: 'La Misión Geodésica Francesa al Ecuador (1736–1743)',
    byline: 'Por: <a href="https://felipevaldez.com/" target="_blank">Felipe Valdez</a>',
    mobileview: '<div id="rotate-mobile"><em>Para una mejor experiencia en dispositivos móviles, gira tu dispositivo a orientación horizontal.</em><br><br><img src="images/device.png">',
    footer: 'Fuentes: Charles-Marie de La Condamine, <em>Relation abrégée d\'un voyage fait dans l\'intérieur de l\'Amérique méridionale</em> (1745) y <em>Journal du voyage fait par ordre du roi à l\'équateur</em> (1751), Gallica, Biblioteca Nacional de Francia; Jorge Juan y Antonio de Ulloa, <em>Relación histórica del viaje a la América Meridional</em> (1748), Biblioteca Digital Hispánica, BNE. <br> Hernández Asensio, R. (2008). El matemático impaciente. Lima: Institut français d’études andines, Instituto de estudios peruanos, Universidad andina Simón Bolívar. https://doi.org/10.4000/books.ifea.6132 <br> Creado con la plantilla <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> y datos de <a href="https://openfreemap.org" target="_blank">OpenFreeMap</a>.',
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
            caption: 'Maupertuis achatando el globo terráqueo. Grabado de Jean Daullé (1741) según el retrato de Robert Levrac-Tournières. <a href="https://wellcomecollection.org/works/gq5pnpvj" target="_blank">Wellcome Collection</a>, dominio público.',
            description: 'En 1734, la Academia Real de Ciencias de París enfrentaba una disputa que dividía a la ciencia europea: ¿es la Tierra un esferoide achatado en los polos, como sostenía Isaac Newton, o achatado en el ecuador, como defendía la escuela de Jacques Cassini? La única forma de resolverlo era medir.<br> La Academia decidió enviar dos expediciones simultáneas a los extremos del planeta: una a Laponia, dirigida por Maupertuis (1736–1737), y <a href="https://es.wikipedia.org/wiki/Misi%C3%B3n_geod%C3%A9sica_francesa" target="blank">otra</a> al territorio de la Real Audiencia de Quito, en el actual Ecuador. Esta última se convertiría en la expedición científica más larga realizada hasta entonces: ocho años midiendo un arco del meridiano terrestre entre montañas, páramos y ciudades coloniales.',
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
            caption: 'Retrato de Charles-Marie de La Condamine por Carmontelle. <a href="https://commons.wikimedia.org/wiki/File:Carmontelle,_Monsieur_de_la_Condamine_(1760).jpg" target="_blank">Wikimedia Commons</a>, dominio público.',
            description: 'El 16 de mayo de 1735 zarpa del puerto de La Rochelle el navío <em>Portefaix</em>. A bordo viaja un equipo singular: los académicos <a href="https://es.wikipedia.org/wiki/Charles_Marie_de_La_Condamine#" target="_blank">Charles-Marie de La Condamine</a>, <a href="https://es.wikipedia.org/wiki/Pierre_Bouguer" target="_blank">Pierre Bouguer</a> y <a href="https://es.wikipedia.org/wiki/Louis_Godin" target="_blank">Louis Godin</a>; el botánico <a href="https://es.wikipedia.org/wiki/Joseph_de_Jussieu" target="_blank">Joseph de Jussieu</a>; el médico Jean Seniergues; el cartógrafo Jean-Baptiste Verguin; el dibujante Jean-Louis de Morainville; y Hugot, el relojero encargado de mantener los instrumentos. Llevan consigo cuadrantes, relojes de péndulo y toesas de hierro: instrumentos de precisión nunca antes embarcados hacia América. En Cartagena de Indias se les unirán los oficiales españoles <a href="https://es.wikipedia.org/wiki/Jorge_Juan" target="_blank">Jorge Juan</a> y <a href="https://es.wikipedia.org/wiki/Antonio_de_Ulloa" target="_blank">Antonio de Ulloa</a>, comisionados por Felipe V, oficialmente para colaborar; extraoficialmente, para vigilar.',
            location: {
                center: [-1.1517, 46.1591], // puerto de La Rochelle
                zoom: 12,
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
            caption: 'Mapa del istmo de Panamá, siglo XVIII. <a href="https://gallica.bnf.fr/ark:/12148/btv1b8596410d#" target="_blank">Gallica</a>, BnF. Dominio público.',
            description: 'En noviembre de 1735 el <em>Portefaix</em> fondea en <a href="https://es.wikipedia.org/wiki/Cartagena_de_Indias" target="_blank">Cartagena de Indias</a>, donde se incorporan Jorge Juan y Antonio de Ulloa, los dos oficiales de la Armada comisionados por Felipe V. Su presencia es el precio, y la garantía, de una concesión diplomática excepcional: España rara vez permite la entrada de científicos extranjeros a sus colonias.<br> Como el canal de Panamá no existe, la ruta al Pacífico es un rompecabezas: navegar hasta Portobelo, cruzar el istmo por tierra, embarcar de nuevo hacia Guayaquil y remontar la sierra por el Camino de Bodegas. En la travesía surgen las primeras tensiones entre La Condamine, Bouguer y Godin, que marcarán la expedición durante años. <div class="control-opacidad">Opacidad del plano de 1748<br><input type="range" min="0" max="1" step="0.05" value="0.77" oninput="ajustarOpacidad(\'plano-cartagena\', this.value)"></div>',
            location: {
                center: [-75.5441, 10.4308], 
                zoom: 13.5,
                pitch: 0,
                bearing: 125
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                { layer: 'plano-cartagena', opacity: 0.77, duration: 1500 }
            ],
            onChapterExit: [
                { layer: 'plano-cartagena', opacity: 0 }
            ]
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
            caption: 'Plano de la ciudad de San Francisco de Quito, grabado por Juan Bernabé Palomino para la <em>Relación histórica</em> de Juan y Ulloa (1748), lámina XII. <a href="https://bnedigital.bne.es/bd/es/card?id=08f55a6a-8c29-47b2-bb99-1955b2f70b23&page=1" target="_blank">Biblioteca Nacional de España</a>. Dominio público.',
            description: 'El 29 de mayo de 1736 la expedición llega por fin a <a href="https://es.wikipedia.org/wiki/Quito" target="_blank">Quito</a>, a 2.850 metros de altitud, y los europeos descubren con asombro un clima templado de altura sobre la mismísima línea equinoccial.<br> La recepción es fría en otro sentido: el presidente de la <a href="https://es.wikipedia.org/wiki/Real_Audiencia_de_Quito" target="_blank">Real Audiencia</a>, Dionisio de Alcedo, desconfía de los recién llegados, y la élite local los observa con recelo. Entre los criollos surge, sin embargo, un aliado decisivo: <a href="https://es.wikipedia.org/wiki/Pedro_Vicente_Maldonado" target="_blank">Pedro Vicente Maldonado</a>, que se convertirá en colaborador clave de la misión y, con el tiempo, en cartógrafo notable por mérito propio.<br> Quito, rodeada de volcanes, será la base de operaciones de los años siguientes.<div class="control-opacidad">Opacidad del plano de 1748<br><input type="range" min="0" max="1" step="0.05" value="0.75" oninput="ajustarOpacidad(\'plano-quito\', this.value)"></div>',
            location: {
                center: [-78.5185, -0.2296], // centro histórico de Quito
                zoom: 13.4, // el terreno está desactivado en este capítulo: puedes subir a 14 si prefieres el encuadre original
                pitch: 0,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                { layer: 'plano-quito', opacity: 0.75, duration: 1500 }
            ],
            onChapterExit: [
                { layer: 'plano-quito', opacity: 0 }
            ]
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
            image: './images/cap4_piramides_la_condamine.jpeg',
            caption: 'Planta, perfil y elevación de las dos pirámides. <em>Journal du voyage</em> de La Condamine (1751), lámina V. <a href="https://gallica.bnf.fr/ark:/12148/bpt6k96103k/f58.item#" target="_blank">Gallica</a> Dominio público.',
            description: 'Toda la geodesia de la expedición depende de una sola medida hecha a mano: la <strong style="color: #B22222;">línea base</strong> <span style="display:inline-block; width:22px; height:4px; background-color:#B22222; border-radius:2px; vertical-align:middle;"></span>.<br> En la llanura de Yaruquí, al noreste de Quito, el equipo pasa semanas midiendo sobre el terreno una distancia exacta con <a href="https://es.wikipedia.org/wiki/Toesa_francesa" target="_blank">toesas</a> de hierro calibradas, colocadas una tras otra bajo el sol y la lluvia del <a href="https://es.wikipedia.org/wiki/P%C3%A1ramo_(biogeograf%C3%ADa)" target="_blank">páramo</a>. De esa línea se derivarán, por trigonometría, todas las triangulaciones posteriores.<br> Al terminar, levantan dos pirámides de mampostería para marcar los extremos: el primer monumento científico del actual Ecuador. Las pirámides serían destruidas en 1747 por orden de la Corona española, en una disputa diplomática sobre sus inscripciones; es la primera vez que un símbolo científico se convierte en objeto de tensión imperial. Hoy se conservan reconstruidas.<br></br> <img src="./images/cap4_1_vista_de_yaruqui.jpg"><span class="caption" style="display:block; font-size:13px; line-height:1.3em;"><em>Vista de la planicie de Yaruquí por La Condamine 1751. <a href="https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~346862~90114356:Vue-de-la-Base-mesuree-dans-la-plai?JSESSIONID=a7909f67-e146-4739-8d01-bca20eac89c0#" target="_blank">David Rumsey Collection</a>.</em></span>',
            location: {
                center: [-78.3554, -0.1705], // llanura de Yarouquí (aproximado)
                zoom: 12.31, // el terreno está desactivado en este capítulo: puedes restaurar zoom: 15 si prefieres el encuadre original
                pitch: 55, // idem: puedes restaurar pitch: 60
                bearing: 270
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, // rotación lenta: evoca la medición paciente
            spinGlobe: false,
            mapInteractive: true,
            callback: 'desactivarTerreno',
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
            image: './images/cap5_cotopaxi_relacion.jpg',
            caption: 'El Cotopaxi en la <em>Relación histórica</em> (1748). <a href="https://bnedigital.bne.es/bd/es/viewer?id=eb164900-fd32-4b00-8a82-50bec7c0c705&page=684" target="_blank">BNE</a>. Dominio público.',
            description: 'Desde la línea base, el equipo extiende hacia el sur una cadena de triángulos a lo largo del callejón interandino. Para medir los ángulos hay que subir a las cumbres: Bouguer y La Condamine acampan durante semanas a más de 4.000 metros, entre el frío, el hambre, las miras robadas por curiosos y los instrumentos descalibrados por el clima.<br> En el <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_Chimborazo" target="_blank">Chimborazo</a>, Bouguer realiza un experimento pionero al medir la desviación gravitatoria que provoca la masa de la montaña, precursor de la geodesia gravimétrica.<br> En 1743 y 1744 el equipo es testigo de erupciones del <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_Cotopaxi" target="_blank">Cotopaxi</a>, registrando observaciones vulcanológicas tempranas.<br> La ciencia avanza; la concordia no: en diciembre de 1741 Bouguer detecta un error de cálculo de La Condamine, dejan de hablarse y trabajan por separado el resto de la expedición.',
            location: {
                center: [-78.79014, -1.41221], // entre Cotopaxi y Chimborazo
                zoom: 10,
                pitch: 60,
                bearing: -42.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            spinGlobe: false,
            mapInteractive: false,
            callback: 'activarTerreno',
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
        // CAPÍTULO 5.1 (vacío) — Superposición de la meridiana
        // Capítulo sin texto/imagen: solo sirve como disparador de scroll para
        // revelar la capa raster "meridiana" (sources.js) sobre el mapa.
        // hidden:true oculta la caja de texto (vacía) pero conserva su alto en
        // el flujo, para que scrollama lo siga usando como disparador.
        // Ajusta location según el área real cubierta por el tileset.
        // ---------------------------------------------------------------------
        {
            id: 'cap-5-1-meridiana',
            alignment: 'left',
            hidden: true,
            description: '<div class="control-opacidad">Opacidad del plano de 1748<br><input type="range" min="0" max="1" step="0.05" value="0.75" oninput="ajustarOpacidad(\'meridiana\', this.value)"></div>',
            location: {
                center: [-78.55329, -1.11027], // mismo centro que cap-4-yarouqui; ajustar si procede
                zoom: 9,
                pitch: 0,
                bearing: 95
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: 'desactivarTerreno',
            onChapterEnter: [
                { layer: 'meridiana', opacity: 0.75, duration: 1500 }
            ],
            onChapterExit: [
                { layer: 'meridiana', opacity: 0 }
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
            caption: 'La plaza de Cuenca durante la corrida de toros del 29 de agosto de 1739, grabado de J.-B. Tardieu en la <em>Lettre à Madame ***</em> de La Condamine (1746). <a href="http://catalogue.bnf.fr/ark:/12148/cb30709059d" target="_blank">Gallica, BnF</a>. Dominio público.',
            description: 'El extremo sur del arco se mide cerca de <a href="https://es.wikipedia.org/wiki/Cuenca_(Ecuador)" target="_blank">Cuenca</a>, en la llanura de Tarqui, donde se realizan también las observaciones astronómicas que cierran la medición. Pero Cuenca es además el escenario del episodio más oscuro de la expedición: el 29 de agosto de 1739, durante una corrida de toros, el médico Jean Seniergues es atacado mortalmente en la plaza, en medio de un motín popular alimentado por meses de tensiones con la élite local. El proceso judicial que sigue paraliza el trabajo durante meses. El episodio humaniza la empresa: la misión no fue solo una hazaña científica abstracta, sino una experiencia atravesada por los conflictos reales de la sociedad colonial.',
            location: {
                center: [-79.0045, -2.9001], // Cuenca, plaza de San Sebastián
                zoom: 12.5, // el terreno está desactivado en este capítulo: puedes subir a 14 si prefieres el encuadre original
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: 'desactivarTerreno',
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
            description: 'No todo fue geodesia. En 1739, desplazándose entre triangulaciones, La Condamine visita las ruinas incas de Ingapirca y produce la primera descripción científica europea del sitio; Ulloa, por su parte, dibuja San Agustín de Callo. Es el nacimiento —involuntario— de la arqueología andina europea. La expedición deja también contribuciones botánicas (Jussieu describe la chinchona, el árbol de la quina del que se extrae la quinina, y el caucho), vocabularios quechuas y agudas observaciones de la sociedad colonial. En Ingapirca, una sección del sitio todavía se llama \'La Condamine\' en señal de reconocimiento.',
            location: {
                center: [-78.87513, -2.54027], 
                zoom: 17,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                { layer: 'satelite-ingapirca', opacity: 0.9, duration: 1500 }
            ],
            onChapterExit: [
                { layer: 'satelite-ingapirca', opacity: 0 }
            ]
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
            caption: 'Mapa del curso del Amazonas por La Condamine (1745). <a href="https://gallica.bnf.fr/ark:/12148/btv1b84910834.r=Carte%20du%20cours%20du%20Maragnon%20ou%20de%20la%20grande%20rivi%C3%A8re%20des%20Amazones%2C%20dans%20sa%20partie%20navigable%20depuis%20Jaen%20de%20Bracamoros%20jusqu%27%C3%A0%20son%20embouchure?rk=42918;4" target="_blank">Gallica, BnF</a>. Dominio público.',
            description: 'Concluidas las mediciones en mayo de 1743, La Condamine toma una decisión audaz: en lugar de regresar por el Pacífico, volverá a Europa descendiendo el Amazonas. Es la primera exploración científica del río. Parte de Cuenca hacia Loja y Jaén de Bracamoros, embarca en el Marañón, atraviesa el temible Pongo de Manseriche y navega durante cuatro meses hasta alcanzar el Atlántico el 19 de septiembre de 1743. En el camino realiza observaciones astronómicas y etnográficas, recolecta muestras de caucho y levanta el primer mapa científico del Amazonas, publicado en 1745. El final es accidentado: una canoa zozobra y gran parte de sus muestras se pierde. Mientras tanto, Bouguer ha regresado por la ruta tradicional vía Cartagena y llega a París antes que él, reavivando la disputa pública sobre quién merecía el crédito.',
            location: {
                center: [-60.0, -3.0], // Amazonas medio, vista panorámica de la cuenca
                zoom: 4.5,
                pitch: 0,
                bearing: 90, // vista hacia el este: la salida al Atlántico
                speed: 0.6 // ralentiza el flyTo para dramatizar la distancia
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ruta-cuenca-jaen',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'rio-amazonas-maranon',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'ruta-cuenca-jaen',
                    opacity: 0
                },
                {
                    layer: 'rio-amazonas-maranon',
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
            description: 'Los resultados, cotejados con los de Laponia, dan la razón a Newton: la Tierra es un esferoide achatado en los polos. La Condamine publica en 1751 su <em>Journal du voyage fait par ordre du roi à l\'équateur</em>, y esa palabra, \'équateur\', puesta en circulación europea por la expedición, bautizará en 1830 a la república independiente del Ecuador. La toesa del Perú se convierte en patrón de referencia y la misión sienta un precedente del metro como unidad universal. Pedro Vicente Maldonado publica en 1750 su gran mapa de la Provincia de Quito, uno de los hitos cartográficos americanos del siglo XVIII. En 1901, Francia enviará una Segunda Misión Geodésica al Ecuador para confirmar y refinar los resultados. Todo había comenzado con una pregunta sobre la forma del mundo; terminó dándole nombre a un país.',
            location: {
                center: [-78.7000, -1.5000], // centro aproximado del arco medido
                zoom: 6,
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
        },
        // ---------------------------------------------------------------------
        // CAPÍTULO 9.1 (vacío) — El legado
        // Capítulo sin texto/imagen: solo sirve como disparador de scroll para
        // revelar la capa raster "carta-quito" (sources.js) sobre el mapa.
        // hidden:true oculta la caja de texto (vacía) pero conserva su alto en
        // el flujo, para que scrollama lo siga usando como disparador.
        // Ajusta location según el área real cubierta por el tileset.
        // ---------------------------------------------------------------------
        {
            id: 'cap-9-1-carta-quito',
            alignment: 'left',
            hidden: true,
            location: {
                center: [-78.7000, -1.5000],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: 'desactivarTerreno',
            onChapterEnter: [
                { layer: 'carta-quito', opacity: 0.86, duration: 1500 }
            ],
            onChapterExit: [
                { layer: 'carta-quito', opacity: 0 }
            ]
        }
    ]
};
