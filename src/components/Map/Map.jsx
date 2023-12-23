import mapboxgl from 'mapbox-gl';
import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xhdmthaGl0cml5IiwiYSI6ImNsYnpmNmV5cTBiMHIzbnFxejhibXJqd3MifQ.kaeD3uS6BI6qF1wV0w4lrw';

const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-71.03, 42.56],
            },
            properties: {
                borderColor: '#36B368',
                titleName: 'Drill Pipe',
                titleValue: 'Premium',
                titleNumber: '4.50',
                info: [
                    {
                        name: 'Joints',
                        value: 260,
                    },
                    {
                        name: 'Feet',
                        value: '8,190',
                    },
                    {
                        name: 'Ready',
                        codeValue: 1,
                    },
                ],
            },
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-71.3, 42.16],
            },
            properties: {
                borderColor: '#0875E1',
                titleName: 'OCTG',
                titleValue: 'Casing',
                titleNumber: '4.50',
                info: [
                    {
                        name: 'Joints',
                        value: 260,
                    },
                    {
                        name: 'Feet',
                        value: '8,190',
                    },
                    {
                        name: 'Transit',
                        codeValue: 1,
                    },
                ],
            },
        },
    ],
};

export const Map = ({ sx }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    const initMap = () => {
        if (!map.current && mapContainer.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/slavkahitriy/clbzh0yqj002d14nyss1sjga2/draft',
                center: [lng, lat],
                zoom: zoom,
            });

            map.current.on('move', () => {
                setLng(map.current.getCenter().lng.toFixed(4));
                setLat(map.current.getCenter().lat.toFixed(4));
                setZoom(map.current.getZoom().toFixed(2));
            });

            for (const feature of geojson.features) {
                // create a HTML element for each feature
                const el = document.createElement('div');
                el.className = 'marker';

                // make a marker for each feature and add it to the map
                new mapboxgl.Popup({ closeOnClick: false })
                    .setLngLat(feature.geometry.coordinates)
                    .setHTML(
                        `<div class='marker-wrapper' style='border: 2px solid ${feature.properties.borderColor}'>
                            <div class='marker-title-wrap'>
                                <h3 class='marker-title'>
                                    ${feature.properties.titleName}: <span>${feature.properties.titleValue}</span>
                                </h3>
                                <div class='marker-title-number'>${feature.properties.titleNumber}</div>
                            </div>
                            <div class='marker-bottom'>
                                <div class='marker-item'>
                                    <div class='marker-item-value'>${feature.properties.info[0].value}</div>
                                    <div class='marker-item-name'>${feature.properties.info[0].name}</div>
                                </div>
                                <div class='marker-item'>
                                   <div class='marker-item-value'>${feature.properties.info[1].value}</div>
                                    <div class='marker-item-name'>${feature.properties.info[1].name}</div>
                                </div>
                                <div class='marker-item'>
                                    <div class='marker-item-value marker-item-circle'></div>
                                    <div class='marker-item-name'>${feature.properties.info[2].name}</div>
                                </div>
                            </div>
                        </div>
                        `
                    )
                    .addTo(map.current);
            }
        }
    };

    useEffect(() => {
        const tempInterval = setInterval(() => {
            if (map.current) clearInterval(tempInterval);
            else initMap();
        }, 100);

        return () => clearInterval(tempInterval);
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                ...sx,
            }}
            ref={mapContainer}
        />
    );
};
