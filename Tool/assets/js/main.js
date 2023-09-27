ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [60.166892, 24.943592],
        zoom: 12,
    }, {
    }),
    myPlacemark = new ymaps.Placemark([60.166892, 24.943592],{
        balloonContentHeader: "",
        balloonContentBody: "",
        balloonContentFooter: "",
        hintContent: "Мы тут"
    });

myMap.geoObjects.add(myPlacemark); 

}
