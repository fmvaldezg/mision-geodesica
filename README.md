# Medir la Tierra: la Misión Geodésica Francesa al Ecuador (1736–1743)

**Un mapa narrativo (*story map*) construido con software libre.**

[Ver la historia en línea](ENLACE-AL-SITIO-DESPLEGADO) · [Lección que acompaña, en *The Programming Historian en español*](ENLACE-A-LA-LECCION) · DOI: [10.5281/zenodo.XXXXXXX](https://doi.org/10.5281/zenodo.XXXXXXX)

---

## Sobre este proyecto

En 1734, la Academia Real de Ciencias de París enfrentaba una disputa que dividía a la ciencia europea: ¿es la Tierra un esferoide achatado en los polos, como sostenía Newton, o achatado en el ecuador, como defendía la escuela de Cassini? Para responder, la Academia envió dos expediciones a medir arcos de meridiano en los extremos del planeta. Una fue a Laponia. La otra —la Misión Geodésica Francesa— pasó ocho años, entre 1736 y 1743, midiendo montañas en el territorio de la Real Audiencia de Quito, en el actual Ecuador.

Este repositorio contiene el código, los datos y la cartografía de un mapa narrativo que recorre esa expedición en doce capítulos: desde el embarque en La Rochelle en 1735, la travesía por Cartagena de Indias y el istmo de Panamá, la llegada a Quito, la medición de la línea base en la llanura de Yarouquí y la cadena de triangulación por el callejón interandino, hasta el asesinato del médico Jean Seniergues en Cuenca, el desvío arqueológico a Ingapirca, el descenso de La Condamine por el Amazonas en 1743 y el legado de la misión: la confirmación de la teoría newtoniana, el precedente del metro como unidad universal y la palabra que daría nombre a un país.

La historia se lee desplazándose: cada capítulo mueve la cámara del mapa a un nuevo lugar y enciende las capas de datos que le corresponden —la red de triangulación entre cumbres, la ruta fluvial del Amazonas, el arco del meridiano medido— además de superponer sobre el territorio actual cinco mapas históricos del siglo XVIII georreferenciados para este proyecto.

## Fuentes

**Textos y grabados de época**

- Charles-Marie de La Condamine, *Relation abrégée d'un voyage fait dans l'intérieur de l'Amérique méridionale* (París, 1745) y *Journal du voyage fait par ordre du roi à l'équateur* (París, Imprimerie Royale, 1751). Ejemplares digitalizados en Gallica, Biblioteca Nacional de Francia.
- Charles-Marie de La Condamine, *Lettre à Madame *** sur l'émeute populaire excitée en la ville de Cuenca au Pérou, le 29 d'août 1739* (París, 1746).
- Jorge Juan y Antonio de Ulloa, *Relación histórica del viaje a la América Meridional* (Madrid: Antonio Marín, 1748). Ejemplares digitalizados en la Biblioteca Nacional de España y la Biodiversity Heritage Library.
- Pedro Vicente Maldonado, *Carta de la Provincia de Quito y de sus adyacentes* (1750).

Todas las obras citadas son de dominio público. La procedencia de cada imagen se indica en la leyenda del capítulo correspondiente.

**Mapas históricos georreferenciados**

Los planos y cartas superpuestos sobre el mapa base fueron georreferenciados para este proyecto y se sirven como teselas propias, sin depender de servicios externos en tiempo de ejecución. La georreferenciación se realizó con [Allmaps](https://allmaps.org/) y las teselas se generaron con [GDAL](https://gdal.org/) (`gdal2tiles`).

**Datos y servicios cartográficos**

- Mapa base: [OpenFreeMap](https://openfreemap.org/), estilo Liberty, sobre datos de [OpenStreetMap](https://www.openstreetmap.org/) (© colaboradores de OpenStreetMap, ODbL).
- Teselas de elevación para el terreno 3D: [Mapterhorn](https://mapterhorn.com/).
- Imágenes aéreas del capítulo sobre Ingapirca: Esri World Imagery (Esri, Maxar, Earthstar Geographics).

## Estructura del repositorio

```
config.js      Configuración general y los doce capítulos de la historia
sources.js     Fuentes de datos y capas (GeoJSON propio y mapas históricos)
index.html     Aplicación (plantilla con modificaciones, ver más abajo)
images/        Grabados y mapas del siglo XVIII usados en los capítulos
map/           Teselas de los mapas históricos georreferenciados
```

## Modificaciones a la plantilla original

`index.html` incorpora algunos cambios respecto a la plantilla de la que parte, documentados aquí para quien quiera reutilizarlos:

- Soporte para fuentes GeoJSON incrustadas y capas raster propias en `sources.js`.
- Terreno 3D activado por capítulo mediante la propiedad `callback`, con el cambio diferido hasta que termina el vuelo de la cámara.
- Control deslizante de opacidad para los mapas históricos superpuestos.
- Comprobación previa a modificar la opacidad de una capa, para que un nombre mal escrito produzca un aviso legible en lugar de un fallo silencioso.
- Correcciones de CSS para que la portada y los enlaces respeten el tema definido en `config.js`.


## Créditos y atribución

Historia, investigación, georreferenciación y desarrollo: **Felipe Valdez**.

Este proyecto parte de la plantilla [maplibre-storymap](https://github.com/digidem/maplibre-storymap) de [Digital Democracy](https://www.digital-democracy.org/), que a su vez es una adaptación a MapLibre GL JS de la plantilla [Storytelling with Mapbox](https://github.com/mapbox/storytelling) de Mapbox. Se agradece a ambos proyectos, sin los cuales este trabajo no existiría.

## Licencia

El código se distribuye bajo los términos de la licencia de la plantilla original (ver `LICENSE`). Los textos de los capítulos y la georreferenciación de los mapas históricos se comparten bajo [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es), salvo indicación en contrario en la leyenda de cada elemento. Los grabados y mapas del siglo XVIII son de dominio público.

## Cómo citar

> Valdez, Felipe. *Medir la Tierra: la Misión Geodésica Francesa al Ecuador (1736–1743)*. Mapa narrativo. AÑO. DOI: 10.5281/zenodo.XXXXXXX

---

# About this project (English)

**Measuring the Earth: the French Geodesic Mission to Ecuador (1736–1743)** is an interactive story map documenting the eight-year expedition sent by the Paris Academy of Sciences to measure an arc of the meridian at the equator, in what is now Ecuador, and settle the dispute over the shape of the Earth. Its twelve chapters follow the expedition from La Rochelle to the Amazon, combining eighteenth-century engravings and maps from Gallica (BnF), the Biblioteca Nacional de España and the Biodiversity Heritage Library with custom data layers and five historical maps georeferenced for this project.

It is the worked example accompanying the lesson "Narración de historias con mapas usando el software libre MapLibre" in *The Programming Historian en español*, and is built on Digital Democracy's [maplibre-storymap](https://github.com/digidem/maplibre-storymap) template, itself derived from Mapbox's [Storytelling](https://github.com/mapbox/storytelling) template. Built entirely with free and open-source software.

---

# Interactive Storytelling with MapLibre
Some stories are best told with a map. Data journalists covering changing conditions in a population's demographics, the environment, an international conflict, or telling a simple travel story frequently provide geographic context in their graphics.

This template is designed to accelerate building out a "scrollytelling" map story. The primary input is a story broken into sections (`chapters`), each hooked to a particular view of a map.

This template is based on Mapbox's storytelling template but has been customized to work with MapLibre instead. The template can be self-hosted with your own tiles, online or offline, either as static HTML or using Node. To work with gzipped vector tiles, you will need to use Node.

## Prerequisites
This template is for data journalists and digital storytellers of any kind. No coding experience is required. 

If you are planning to include some custom map layers, you will need some familiarity with the [MapLibre style specifications](https://maplibre.org/maplibre-gl-js-docs/style-spec/), or use [MapTiler](https://www.maptiler.com/) or [Maputnik](https://github.com/maputnik) to design your own style.

The template does not rely on any particular CSS framework or fonts. There are some basic styles in the `head` of the HTML file that can be changed, so feel free to adapt and add to these to match your site and story brand. You can place your own image assets in the `images/` directory.

## Getting Started

Download this repository as a ZIP file using the button above, and unzip it. If you are using `git`, clone this repository.

Make a copy of `config.js.template` and name it `config.js`. Open the new `config.js` file in your text editor.

### Steps

1. **Prepare your map tiles and design a MapLibre style**. This template looks for a map `style.json` in the `map/` directory. You could also place all of your map assets (tiles, sprites, font glyphs) here. You could change this, however. 

   * To test out the template, you could use the [MapLibre demo tiles](https://github.com/maplibre/demotiles). Download the repo and place it in this directory, and change the paths for `fonts`, `sprites` and `sources` to your hosting path.

2. **Set the configuration options** as described in the next section. 

3. **Add as many `chapters` in your template as needed.** You'll need a `,` between each section, but no comma at the end. Here is what a `chapter` looks like:

4. **Fill out your sections as needed.**  Give each section a unique name in the section `id` property. This will become the HTML `div` `id`, so avoid spaces in the name. Set the `location` properties for each chapter. The `title`, `description` properties are optional. The `description` supports HTML tags. If you have an image that goes with that section of the story, add the path to the image in the `image` property.

5. **Figure out how you are hosting the template.** If you are deploying it as static HTML, simply place the files somewhere, open the `index.html` file in a browser, and voila! If you are deploying it with Node, you will need to run some additional steps, as listed in **Deployment** below.

### Configuration Options

Please see [CONFIG.md](CONFIG.md).

## Deployment

Host the files in this repository in the same directory. You can either deploy this tool as static HTML, or as a server using Node and Express.js.

For both options, you have to set absolute paths in your `style.json` for the sources, sprites, and font glyphs. 

### As static HTML

This template will work as static HTML when hosted on a web-accessible location. Simply place the `dist/`, `images/`, `map/` (if you are hosting your own map and tiles), `config.js`, `index.html`, and `sources.js` (if you are using it) in the same directory. Accessing that directory in a browser should load the story map.

For hosting online, if you don't know where to start, look into GitHub Pages or Netlify.

### Using Node.js

You can deploy this template as a server using Node. 

First, make sure you have Node and npm (Node Package Manager) installed.

Next, in the directory, run `npm install` to set up your node packages. You can also run `npm run build` to bundle your scripts. (The repo comes with a pre-compiled `bundle.js` file, but this guarantees you bundle the latest versions of MapLibre etc.)

To initialize the server, run `npm run serve`. The default port is 5000; if you want to change the port, run `npm run serve -- <port_number>`, replacing `<port_number>` with your desired port number. For example, to use port 8080, you would run `npm run serve -- 8080`.

We are using Express.js to initialize the server and to handle gzipped vector tiles (with file extension `.vector.pbf`).

## Built with

- MapLibre GL JS
- Scrollama.js

## Storytelling with Maps using MapLibre Workshop

[@fmvaldezg](https://github.com/fmvaldezg) from Temple University Libraries created a [Storytelling with Maps using MapLibre Workshop](https://github.com/fmvaldezg/storytelling_maplibre_workshop), which could be helpful for learning how to use this template.

## Acknowledgment

This template is based on [Mapbox's Storytelling Template](https://github.com/mapbox/storytelling), which works great with maps designed in their Studio tool but requires a Mapbox access token.
