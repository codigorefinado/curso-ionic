import {Component} from '@angular/core';
import {DetailsPage} from '../page/details/details.page';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public birthdays = [];

    constructor(private modalCtrl: ModalController) {
    }

    async showDetail(birthday) {
        // mudou https://ionicframework.com/docs/api/modal
        // não tem mais o método present()
        // parâmetro de entrada pra criar o modal mudou
        // o retorno agora é um promisse
        const modal = await this.modalCtrl.create({
            component: DetailsPage,
            componentProps: {
                birthday // é um atalho para birthday: birthday
            }
        });

        return await modal.present();

    }
}