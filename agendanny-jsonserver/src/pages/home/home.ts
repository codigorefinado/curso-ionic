import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';
import {EditPersonPage} from '../edit-person/edit-person';
import {PersonJsonProvider} from '../../providers/person-json/person-json.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  persons: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController,
              private callNumber: CallNumber,
              private personProvider: PersonJsonProvider) {
  }

  // ngOnInit(): void {
  //   this.personProvider.allPersons()
  //     .then((persons: Array<Person>) => this.persons = this.persons);
  // }

  ionViewWillEnter() {
    this.personProvider.allPersons().subscribe((persons: Array<Person>) => {
      this.persons = persons;
    });
  }

  callContact(contact: any) {
    this.callNumber.callNumber(contact.phone, true);
  }

  editPerson(person: Person) {
    this.navCtrl.push(EditPersonPage, {'person': person});
  }

}
