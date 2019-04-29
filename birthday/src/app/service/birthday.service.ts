import {Injectable, OnInit} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BirthdayService implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    add(birthday) {
        console.log('add ' + birthday);
    }

    update(birthday) {
        console.log('update ' + birthday);
    }

    delete(birthday) {
        console.log('delete ' + birthday);
    }

    getAll() {
        console.log('getAll ');
    }


}
