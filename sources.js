// =============================================================================
// sources.js — Fuentes y capas personalizadas para el story map
// "Medir la Tierra: La Misión Geodésica Francesa al Ecuador (1736–1743)"
//
// IMPORTANTE: para usar fuentes GeoJSON en línea como las de este archivo,
// hay que hacer un pequeño ajuste en index.html (ver la sección
// "Agregar capas personalizadas" de la lección). El bloque original:
//
//     let sourceObj = { "type": currentSource.type, "url": currentSource.url };
//     map.addSource(currentSource.name, sourceObj);
//     ...
//     map.addLayer(externalData.layers[i], 'your-layer');
//
// debe reemplazarse por:
//
//     map.addSource(currentSource.name, currentSource.source);
//     ...
//     map.addLayer(externalData.layers[i]);
//
// Todas las coordenadas históricas son aproximadas y tienen un propósito
// ilustrativo. Todas las capas comienzan con opacidad 0: se encienden y
// apagan desde config.js con onChapterEnter y onChapterExit.
// =============================================================================

var externalData = {
    sources: [
        // ---------------------------------------------------------------
        // 1. La línea base de Yarouquí y sus dos pirámides (capítulo 4)
        // ---------------------------------------------------------------
        {
            "name": "linea-base-yarouqui",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "properties": { "nombre": "Línea base (1736)" },
                            "geometry": {
                                "type": "LineString",
                                "coordinates": [
                                    [-78.36494734751827, -0.09918780320726477],
                                    [-78.3284349641601, -0.20339204333629463] , 
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": { "nombre": "Pirámide de Caraburo" },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-78.36494734751827, -0.09918780320726477]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": { "nombre": "Pirámide de Oyambaro" },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-78.3284349641601, -0.20339204333629463]
                            }
                        }
                    ]
                }
            }
        },
        // ---------------------------------------------------------------
        // 2. La red de triangulación del arco meridiano (capítulo 5)
        //    Cumbres usadas como vértices y líneas de visión entre ellas.
        // ---------------------------------------------------------------
        {
            "name": "triangulacion",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [
                        { "type": "Feature", "properties": { "nombre": "Pambamarca" }, "geometry": { "type": "Point", "coordinates": [-78.20880055649536, -0.07982802784916773] } },
                        { "type": "Feature", "properties": { "nombre": "Pichincha" }, "geometry": { "type": "Point", "coordinates": [-78.5980, -0.1710] } },
                        { "type": "Feature", "properties": { "nombre": "El Corazón" }, "geometry": { "type": "Point", "coordinates": [-78.6790, -0.5330] } },
                        { "type": "Feature", "properties": { "nombre": "Cotopaxi" }, "geometry": { "type": "Point", "coordinates": [-78.4360, -0.6800] } },
                        { "type": "Feature", "properties": { "nombre": "Tungurahua" }, "geometry": { "type": "Point", "coordinates": [-78.4420, -1.4670] } },
                        { "type": "Feature", "properties": { "nombre": "Chimborazo" }, "geometry": { "type": "Point", "coordinates": [-78.8170, -1.4690] } },
                        { "type": "Feature", "properties": { "nombre": "Buerán" }, "geometry": { "type": "Point", "coordinates": [-78.9500, -2.6800] } },
                        {
                            "type": "Feature",
                            "properties": { "nombre": "Cadena de triángulos" },
                            "geometry": {
                                "type": "MultiLineString",
                                "coordinates": [
                                    [[-78.20880055649536, -0.07982802784916773], [-78.5980, -0.1710]],
                                    [[-78.20880055649536, -0.07982802784916773], [-78.6790, -0.5330]],
                                    [[-78.5980, -0.1710], [-78.6790, -0.5330]],
                                    [[-78.5980, -0.1710], [-78.4360, -0.6800]],
                                    [[-78.6790, -0.5330], [-78.4360, -0.6800]],
                                    [[-78.6790, -0.5330], [-78.4420, -1.4670]],
                                    [[-78.4360, -0.6800], [-78.4420, -1.4670]],
                                    [[-78.4360, -0.6800], [-78.8170, -1.4690]],
                                    [[-78.4420, -1.4670], [-78.8170, -1.4690]],
                                    [[-78.4420, -1.4670], [-78.9500, -2.6800]],
                                    [[-78.8170, -1.4690], [-78.9500, -2.6800]]
                                ]
                            }
                        }
                    ]
                }
            }
        },
        // ---------------------------------------------------------------
        // 3. El viaje de Cuenca al Atlántico (capítulo 8), mayo–sept. 1743.
        //    Datos OSM reales (no aproximados), curados en map/merged.geojson
        //    y separados/depurados en dos archivos:
        //    - ruta-cuenca-jaen.geojson: tramo terrestre Cuenca→Loja→Jaén de
        //      Bracamoros (relaciones "Carretera Panamericana (ECUADOR)",
        //      "Longitudinal de la Selva Norte" y "Loja-La Balsa").
        //    - rio-amazonas-maranon.geojson: descenso fluvial real, río
        //      Marañón hasta su confluencia y luego el Amazonas.
        // ---------------------------------------------------------------
        {
            "name": "ruta-cuenca-jaen-fuente",
            "source": {
                "type": "geojson",
                "data": "./map/ruta-cuenca-jaen.geojson"
            }
        },
        {
            "name": "rio-amazonas-maranon-fuente",
            "source": {
                "type": "geojson",
                "data": "./map/rio-amazonas-maranon.geojson"
            }
        },
        // ---------------------------------------------------------------
        // 4. El arco meridiano completo y los hitos de la expedición
        //    (capítulo 9, síntesis final)
        // ---------------------------------------------------------------
        {
            "name": "arco-meridiano-fuente",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "properties": { "nombre": "Arco del meridiano medido (Quito–Tarqui)" },
                            "geometry": {
                                "type": "LineString",
                                "coordinates": [
                                    [-78.3167, -0.1500],
                                    [-78.5249, -0.2299],
                                    [-78.6500, -1.5000],
                                    [-79.0400, -3.0100]
                                ]
                            }
                        },
                        { "type": "Feature", "properties": { "nombre": "Quito" }, "geometry": { "type": "Point", "coordinates": [-78.5249, -0.2299] } },
                        { "type": "Feature", "properties": { "nombre": "Yarouquí" }, "geometry": { "type": "Point", "coordinates": [-78.3167, -0.1500] } },
                        { "type": "Feature", "properties": { "nombre": "Ingapirca" }, "geometry": { "type": "Point", "coordinates": [-78.8728, -2.5453] } },
                        { "type": "Feature", "properties": { "nombre": "Cuenca / Tarqui" }, "geometry": { "type": "Point", "coordinates": [-79.0045, -2.9001] } }
                    ]
                }
            }
        },
        // ---------------------------------------------------------------
        // 5. Mapa de la ciudad de Cartagena por Ulloa en formato raster
        //    (capítulo 2)
        // ---------------------------------------------------------------
        {
            "name": "plano-cartagena-fuente",
            "source": {
                "type": "raster",
                "tiles": ["./map/tiles-cartagena/{z}/{x}/{y}.png"],
                "tileSize": 256,
                "minzoom": 12,
                "maxzoom": 17,
                "bounds": [-75.560528, 10.408734, -75.528827, 10.439570]
            }
        },
        // ---------------------------------------------------------------
        // 6. Mapa de la ciudad de Quito por Ulloa en formato raster
        //    (capítulo 3)
        // ---------------------------------------------------------------
        {
            "name": "plano-quito-fuente",
            "source": {
                "type": "raster",
                "tiles": ["./map/tiles-quito/{z}/{x}/{y}.png"],
                "tileSize": 256,
                "minzoom": 12,
                "maxzoom": 17,
                "bounds": [-78.526916, -0.234973, -78.496210, -0.203024]
            }
        },
        // ---------------------------------------------------------------
        // 7. Superposición de la meridiana (capítulo 4.1, entre Yarouquí
        //    y la triangulación). Tiles alojados en S3.
        //    TODO: agregar "bounds": [oeste, sur, este, norte] aquí si se
        //    conoce el área exacta cubierta por el tileset, para evitar
        //    solicitudes de tiles fuera de rango.
        // ---------------------------------------------------------------
        {
            "name": "meridiana-fuente",
            "source": {
                "type": "raster",
                "tiles": ["https://my-map-cogs.s3.us-east-2.amazonaws.com/tiles-meridiana/{z}/{x}/{y}.png"],
                "tileSize": 256,
                "minzoom": 7,
                "maxzoom": 13,
                "bounds": [-79.137665, -3.249650, -77.923352, 0.681390],
                "attribution": "Carta de la meridiana de Quito (s. XVIII). Georref.: Felipe Valdez"
            }
        },
        // ---------------------------------------------------------------
        // 8. Superposición de la Carta de la Provincia de Quito por Maldonado
        //    TODO: agregar "bounds": [oeste, sur, este, norte] aquí si se
        //    conoce el área exacta cubierta por el tileset, para evitar
        //    solicitudes de tiles fuera de rango.
        // ---------------------------------------------------------------
        {
            "name": "carta-quito-fuente",
            "source": {
                "type": "raster",
                "tiles": ["https://allmaps.xyz/images/4f882e7baa52cad2/{z}/{x}/{y}@2x.png"],
                "tileSize": 256,
                "minzoom": 4,
                "maxzoom": 10,
                "bounds": [-81.282259, -6.158790, -75.902062, 2.614856]
            //    "attribution": "Carta de la Provincia de Quito, obra póstuma de Pedro Vicente Maldonado (1750). Georref.: Felipe Valdez vía Allmaps"
            }
        },
        // ---------------------------------------------------------------
        // 9. Imágenes de satelite de ESRI para mostrar el complejo arqueologico de Ingapirca en
        // el capítulo 7
        // ---------------------------------------------------------------
        {
            "name": "satelite-ingapirca-fuente",
            "source": {
                "type": "raster",
                "tiles": ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
                "tileSize": 256,
                "minzoom": 13,
                "maxzoom": 19,
                "bounds": [-78.885, -2.555, -78.865, -2.535],
                "attribution": "Imagery: Esri, Maxar, Earthstar Geographics"
            }
        }
    ],
    layers: [
        // --------------------- Capítulo 3: Quito ---------------------
        {
            "id": "plano-quito",
            "type": "raster",
            "source": "plano-quito-fuente",
            "paint": {
                "raster-opacity": 0
            }
        },        
        // --------------------- Capítulo 2: Cartagena ---------------------
        {
            "id": "plano-cartagena",
            "type": "raster",
            "source": "plano-cartagena-fuente",
            "paint": {
                "raster-opacity": 0
            }
        },
        // --------------------- Capítulo 4: Yarouquí ---------------------
        {
            "id": "linea-base",
            "type": "line",
            "source": "linea-base-yarouqui",
            "filter": ["==", "$type", "LineString"],
            "layout": { "line-cap": "round" },
            "paint": {
                "line-color": "#B22222",
                "line-width": 4,
                "line-opacity": 0
            }
        },
        {
            "id": "piramides-puntos",
            "type": "circle",
            "source": "linea-base-yarouqui",
            "filter": ["==", "$type", "Point"],
            "paint": {
                "circle-radius": 8,
                "circle-color": "#B22222",
                "circle-stroke-color": "#ffffff",
                "circle-stroke-width": 2,
                "circle-opacity": 0,
                "circle-stroke-opacity": 0
            }
        },
        {
            "id": "piramides-etiquetas",
            "type": "symbol",
            "source": "linea-base-yarouqui",
            "filter": ["==", "$type", "Point"],
            "layout": {
                "text-field": ["get", "nombre"],
                "text-font": ["Noto Sans Regular"],
                "text-size": 13,
                "text-offset": [0, 1.4],
                "text-anchor": "top"
            },
            "paint": {
                "text-color": "#7a1616",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.5,
                "text-opacity": 0
            }
        },
        // ------------------- Capítulo 4.1: La meridiana ------------------
        {
            "id": "meridiana",
            "type": "raster",
            "source": "meridiana-fuente",
            "paint": {
                "raster-opacity": 0
            }
        },
        // ------------------ Capítulo 5: Triangulación -------------------
        {
            "id": "triangulacion-lineas",
            "type": "line",
            "source": "triangulacion",
            "filter": ["==", "$type", "LineString"],
            "paint": {
                "line-color": "#1c4587",
                "line-width": 2.5,
                "line-dasharray": [2, 2],
                "line-opacity": 0
            }
        },
        {
            "id": "triangulacion-cumbres",
            "type": "circle",
            "source": "triangulacion",
            "filter": ["==", "$type", "Point"],
            "paint": {
                "circle-radius": 6,
                "circle-color": "#1c4587",
                "circle-stroke-color": "#ffffff",
                "circle-stroke-width": 2,
                "circle-opacity": 0,
                "circle-stroke-opacity": 0
            }
        },
        {
            "id": "triangulacion-etiquetas",
            "type": "symbol",
            "source": "triangulacion",
            "filter": ["==", "$type", "Point"],
            "layout": {
                "text-field": ["get", "nombre"],
                "text-font": ["Noto Sans Regular"],
                "text-size": 12,
                "text-offset": [0, 1.2],
                "text-anchor": "top"
            },
            "paint": {
                "text-color": "#10294f",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.5,
                "text-opacity": 0
            }
        },        
        // -------------------- Capítulo 7: Ingapirca ----------------------
        {
            "id": "satelite-ingapirca",
            "type": "raster",
            "source": "satelite-ingapirca-fuente",
            "paint": {
                "raster-opacity": 0
            }
        },
        // -------------------- Capítulo 8: Amazonas ----------------------
        {
            "id": "ruta-cuenca-jaen",
            "type": "line",
            "source": "ruta-cuenca-jaen-fuente",
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-color": "#8B5A2B",
                "line-width": 3,
                "line-dasharray": [1, 2],
                "line-opacity": 0
            }
        },
        {
            "id": "rio-amazonas-maranon",
            "type": "line",
            "source": "rio-amazonas-maranon-fuente",
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-color": "#0b6e4f",
                "line-width": 3,
                "line-opacity": 0
            }
        },
        // ------------------ Capítulo 9: Arco meridiano ------------------
        {
            "id": "arco-meridiano",
            "type": "line",
            "source": "arco-meridiano-fuente",
            "filter": ["==", "$type", "LineString"],
            "layout": { "line-cap": "round" },
            "paint": {
                "line-color": "#B22222",
                "line-width": 3,
                "line-opacity": 0
            }
        },
        {
            "id": "hitos-expedicion",
            "type": "circle",
            "source": "arco-meridiano-fuente",
            "filter": ["==", "$type", "Point"],
            "paint": {
                "circle-radius": 5,
                "circle-color": "#B22222",
                "circle-stroke-color": "#ffffff",
                "circle-stroke-width": 1,
                "circle-opacity": 0,
                "circle-stroke-opacity": 0
            }
        },
        {
            "id": "hitos-etiquetas",
            "type": "symbol",
            "source": "arco-meridiano-fuente",
            "filter": ["==", "$type", "Point"],
            "layout": {
                "text-field": ["get", "nombre"],
                "text-font": ["Noto Sans Regular"],
                "text-size": 12,
                "text-offset": [0, 0.5],
                "text-anchor": "top"
            },
            "paint": {
                "text-color": "#7a1616",
                "text-halo-color": "#ffffff",
                "text-halo-width": 1.5,
                "text-opacity": 0
            }
        },
        // ------------------- Capítulo 9.1: Legado ------------------
        {
            "id": "carta-quito",
            "type": "raster",
            "source": "carta-quito-fuente",
            "paint": {
                "raster-opacity": 0
            }
        }
    ]
};