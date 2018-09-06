export default class {
    constructor() { }

    initMap() {
        return new Promise((resolve, reject) => ymaps.ready(resolve))
            .then(() => {
                this.map = new ymaps.Map("map", {
                    // Координаты центра карты.
                    // Порядок по умолчнию: «широта, долгота».
                    // Чтобы не определять координаты центра карты вручную,
                    // воспользуйтесь инструментом Определение координат.
                    center: [55.76, 37.64],
                    // Уровень масштабирования. Допустимые значения:
                    // от 0 (весь мир) до 19.
                    zoom: 7
                });

                this.cluster = new ymaps.Clusterer({
                    clusterDisableClickZoom: true,
                    clusterOpenBalloonOnClick: true,
                    // Устанавливаем стандартный макет балуна кластера "Карусель".
                    clusterBalloonContentLayout: 'cluster#balloonCarousel',
                    // Устанавливаем собственный макет.
                    //clusterBalloonItemContentLayout: customItemContentLayout,
                    // Устанавливаем режим открытия балуна. 
                    // В данном примере балун никогда не будет открываться в режиме панели.
                    clusterBalloonPanelMaxMapArea: 0,
                    // Устанавливаем размеры макета контента балуна (в пикселях).
                    clusterBalloonContentLayoutWidth: 320,
                    clusterBalloonContentLayoutHeight: 500,
                    // Устанавливаем максимальное количество элементов в нижней панели на одной странице
                    clusterBalloonPagerSize: 5,
                    // Настройка внешего вида нижней панели.
                    // Режим marker рекомендуется использовать с небольшим количеством элементов.
                    // clusterBalloonPagerType: 'marker',
                    // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
                    // clusterBalloonCycling: false,
                    // Можно отключить отображение меню навигации.
                    clusterBalloonPagerVisible: false
                });

                this.map.geoObjects.add(this.cluster)

                return this.map
            })
    }

    async getMapPosition(e) {
        const coords = e.get('coords');
        const geocode = await ymaps.geocode(coords)
        const address = geocode.geoObjects.get(0).properties.get('text')

        return {
            address,
            coords
        }
    }

    createPlacemark(pos) {
        const myPlacemark = new ymaps.Placemark(pos.coords, {
            hintContent: pos.address,
            balloonContent: `МЫ кликнули на адресс: ${pos.address}`
        });

        this.cluster.add(myPlacemark)
    }
}