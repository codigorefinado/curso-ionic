import {Component, OnInit} from '@angular/core';
import {BirthdayService} from '../../service/birthday.service';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    public birthday: any = {};
    public isNew = true;
    public action = 'Add';
    public isoDate = '';

    constructor(private birthdayService: BirthdayService,
                private navParams: NavParams,
                private modalCtrl: ModalController) {
    }


    ngOnInit() {
        this.birthday = {};
        const editBirthday = this.navParams.get('birthday');

        if (editBirthday) {
            this.birthday = editBirthday;
            this.isNew = false;
            this.action = 'Edit';
            this.isoDate = new Date(this.birthday.date).toISOString().slice(0, 10);
        }
    }

    save() {
        this.birthday.date = new Date(this.isoDate);

        if (this.isNew) {
            this.birthdayService.add(this.birthday)
                .catch(console.error.bind(console));
        } else {
            this.birthdayService.update(this.birthday)
                .catch(console.error.bind(console));
        }

        this.modalCtrl.dismiss(this.birthday);

    }

    delete() {
        this.birthdayService.delete(this.birthday)
            .catch(console.error.bind(console));
        this.modalCtrl.dismiss(this.birthday);
    }

}
