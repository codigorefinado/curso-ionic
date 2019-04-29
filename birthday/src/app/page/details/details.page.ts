import {Component, OnInit} from '@angular/core';
import {BirthdayService} from '../../service/birthday.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    public birthday: any = {};

    constructor(private birthdayService: BirthdayService) {
    }

    ngOnInit() {
    }

    save() {
        this.birthdayService.add(this.birthday);

    }

    delete() {
        this.birthdayService.delete(this.birthday);

    }

}
