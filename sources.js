var externalData = {
    sources: [
        {
            "name": "triangulacion",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [
                        { "type": "Feature", "properties": { "nombre": "Pichincha" },
                          "geometry": { "type": "Point", "coordinates": [-78.5980, -0.1710] } },
                        { "type": "Feature", "properties": { "nombre": "Chimborazo" },
                          "geometry": { "type": "Point", "coordinates": [-78.8170, -1.4690] } },
                        {
                            "type": "Feature",
                            "properties": { "nombre": "Cadena de triángulos" },
                            "geometry": {
                                "type": "MultiLineString",
                                "coordinates": [
                                    [[-78.5980, -0.1710], [-78.8170, -1.4690]]
                                ]
                            }
                        }
                    ]
                }
            }
        }
    ],
    layers: [
        {
            "id": "triangulacion-lineas",
            "type": "line",
            "source": "triangulacion",
            "filter": ["==", "$type", "LineString"],
            "paint": {
                "line-color": "#1c4587",
                "line-width": 1.5,
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
        }
    ]
};