import {Component, NgZone, OnInit} from '@angular/core';
import {DetailsPage} from '../page/details/details.page';
import {ModalController, Platform} from '@ionic/angular';
import {BirthdayService} from '../service/birthday.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public birthdays = [];

    constructor(private birthdayService: BirthdayService,
                private modalCtrl: ModalController,
                private platform: Platform,
                private zone: NgZone) {
    }

    ngOnInit() {

    }

    ionViewDidEnter() {
        this.init();
    }

    init() {
        this.platform.ready().then(() => {
            this.birthdayService.initDB();

            this.birthdayService.getAll().then(data => {
                this.zone.run(() => {
                    this.birthdays = data;
                });
            }).catch(console.error.bind(console));
        });
    }

    async showDetail(birthday) {
        // mudou https://ionicframework.com/docs/api/modal
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
