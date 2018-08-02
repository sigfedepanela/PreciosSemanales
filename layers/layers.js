var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental'
            });var format_PreciosporDepartamento_1 = new ol.format.GeoJSON();
var features_PreciosporDepartamento_1 = format_PreciosporDepartamento_1.readFeatures(json_PreciosporDepartamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PreciosporDepartamento_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PreciosporDepartamento_1.addFeatures(features_PreciosporDepartamento_1);var lyr_PreciosporDepartamento_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PreciosporDepartamento_1, 
                style: style_PreciosporDepartamento_1,
    title: 'Precios por Departamento<br />\
    <img src="styles/legend/PreciosporDepartamento_1_0.png" />  1376 - 1697 <br />\
    <img src="styles/legend/PreciosporDepartamento_1_1.png" />  1697 - 2018 <br />\
    <img src="styles/legend/PreciosporDepartamento_1_2.png" />  2018 - 2340 <br />\
    <img src="styles/legend/PreciosporDepartamento_1_3.png" />  2340 - 2661 <br />\
    <img src="styles/legend/PreciosporDepartamento_1_4.png" />  2661 - 2982 <br />'
        });var format_MunicipiosTomadePrecios_2 = new ol.format.GeoJSON();
var features_MunicipiosTomadePrecios_2 = format_MunicipiosTomadePrecios_2.readFeatures(json_MunicipiosTomadePrecios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosTomadePrecios_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MunicipiosTomadePrecios_2.addFeatures(features_MunicipiosTomadePrecios_2);var lyr_MunicipiosTomadePrecios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosTomadePrecios_2, 
                style: style_MunicipiosTomadePrecios_2,
                title: '<img src="styles/legend/MunicipiosTomadePrecios_2.png" /> Municipios Toma de Precios'
            });var format_PreciosCuartaSemanadeJuliode2018_3 = new ol.format.GeoJSON();
var features_PreciosCuartaSemanadeJuliode2018_3 = format_PreciosCuartaSemanadeJuliode2018_3.readFeatures(json_PreciosCuartaSemanadeJuliode2018_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PreciosCuartaSemanadeJuliode2018_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PreciosCuartaSemanadeJuliode2018_3.addFeatures(features_PreciosCuartaSemanadeJuliode2018_3);var lyr_PreciosCuartaSemanadeJuliode2018_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PreciosCuartaSemanadeJuliode2018_3, 
                style: style_PreciosCuartaSemanadeJuliode2018_3,
                title: '<img src="styles/legend/PreciosCuartaSemanadeJuliode2018_3.png" /> Precios Cuarta Semana de Julio de 2018'
            });

lyr_LimiteDepartamental_0.setVisible(true);lyr_PreciosporDepartamento_1.setVisible(true);lyr_MunicipiosTomadePrecios_2.setVisible(true);lyr_PreciosCuartaSemanadeJuliode2018_3.setVisible(false);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_PreciosporDepartamento_1,lyr_MunicipiosTomadePrecios_2,lyr_PreciosCuartaSemanadeJuliode2018_3];
lyr_LimiteDepartamental_0.set('fieldAliases', {'DEPT': 'DEPT', });
lyr_PreciosporDepartamento_1.set('fieldAliases', {'Departamen': 'Departamen', 'Año': 'Año', 'MES': 'MES', 'SEMANA': 'SEMANA', '$ por Kg': '$ por Kg', '$ Prom Año': '$ Prom Año', 'Prom_ Pais': 'Prom_ Pais', });
lyr_MunicipiosTomadePrecios_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', });
lyr_PreciosCuartaSemanadeJuliode2018_3.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', });
lyr_LimiteDepartamental_0.set('fieldImages', {'DEPT': 'TextEdit', });
lyr_PreciosporDepartamento_1.set('fieldImages', {'Departamen': 'TextEdit', 'Año': 'TextEdit', 'MES': 'TextEdit', 'SEMANA': 'TextEdit', '$ por Kg': 'TextEdit', '$ Prom Año': 'TextEdit', 'Prom_ Pais': 'TextEdit', });
lyr_MunicipiosTomadePrecios_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_PreciosCuartaSemanadeJuliode2018_3.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'DEPT': 'inline label', });
lyr_PreciosporDepartamento_1.set('fieldLabels', {'Departamen': 'inline label', 'Año': 'inline label', 'MES': 'inline label', 'SEMANA': 'inline label', '$ por Kg': 'inline label', '$ Prom Año': 'inline label', 'Prom_ Pais': 'inline label', });
lyr_MunicipiosTomadePrecios_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', });
lyr_PreciosCuartaSemanadeJuliode2018_3.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', });
lyr_PreciosCuartaSemanadeJuliode2018_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});