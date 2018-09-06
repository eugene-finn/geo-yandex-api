import Model from './model';
import View from './view';
import Map from '../modules/api.yandex.map'

export default class {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.myMapApi = new Map()

        this.init()
    }

    async init() {
        this.yandexApi = await this.myMapApi.initMap()

        this.yandexApi.events.add('click', async (e) => {
            const position = await this.myMapApi.getMapPosition(e)

            this.myMapApi.createPlacemark(position)
        });
    }
}