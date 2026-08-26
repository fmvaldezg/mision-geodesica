[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.22113891.svg)](https://doi.org/10.5281/zenodo.22113891)
# Medir la Tierra: la Misión Geodésica Francesa al Ecuador (1736–1743)

**Un mapa narrativo (*story map*) construido con software libre.**

[Ver la historia en línea](https://felipevaldez.com/mision-geodesica/) · DOI: [10.5281/zenodo.22113891](https://doi.org/10.5281/zenodo.22113891) · 


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

> Valdez, Felipe. *Medir la Tierra: la Misión Geodésica Francesa al Ecuador (1736–1743)*. Mapa narrativo. 2026. DOI: 10.5281/zenodo.22113891

---

# About this project (English)

**Measuring the Earth: the French Geodesic Mission to Ecuador (1736–1743)** is an interactive story map documenting the eight-year expedition sent by the Paris Academy of Sciences to measure an arc of the meridian at the equator, in what is now Ecuador, and settle the dispute over the shape of the Earth. Its twelve chapters follow the expedition from La Rochelle to the Amazon, combining eighteenth-century engravings and maps from Gallica (BnF), the Biblioteca Nacional de España and the Biodiversity Heritage Library with custom data layers and five historical maps georeferenced for this project.

It is the worked example accompanying the lesson "Narración de historias con mapas usando el software libre MapLibre" in *The Programming Historian en español*, and is built on Digital Democracy's [maplibre-storymap](https://github.com/digidem/maplibre-storymap) template, itself derived from Mapbox's [Storytelling](https://github.com/mapbox/storytelling) template. Built entirely with free and open-source software.

---

