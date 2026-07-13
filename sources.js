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
        // 3. El descenso de La Condamine por el Amazonas (capítulo 8)
        //    De Cuenca al Atlántico, mayo–septiembre de 1743.
        // ---------------------------------------------------------------
        {
            "name": "descenso-amazonas",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "properties": { "nombre": "Descenso del Amazonas (1743)" },
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-79.0045, -2.9001],
                            [-79.2000, -3.9900],
                            [-78.8100, -5.7100],
                            [-77.5500, -4.4700],
                            [-76.1000, -4.5000],
                            [-73.5000, -4.4500],
                            [-73.2500, -3.7500],
                            [-69.9400, -4.2500],
                            [-64.7000, -3.4000],
                            [-60.0200, -3.1000],
                            [-55.5000, -1.9000],
                            [-52.5000, -1.7000],
                            [-48.5000, -1.4500],
                            [-48.0000, -0.5000]
                        ]
                    }
                }
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
        // -------------------- Capítulo 8: Amazonas ----------------------
        {
            "id": "ruta-amazonas",
            "type": "line",
            "source": "descenso-amazonas",
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
        }
    ]
};