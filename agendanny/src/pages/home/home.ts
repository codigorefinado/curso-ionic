import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PersonProvider} from '../../providers/person.provider';
import {CallNumber} from '@ionic-native/call-number';
import {EditPersonPage} from '../edit-person/edit-person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  persons: Array<Person> = new Array<Person>();

  constructor(public navCtrl: NavController,
              public personProvider: PersonProvider,
              private callNumber: CallNumber) {


    this.personProvider.allPersons()
      .then((persons: Array<Person>) => this.persons = persons);
  }

  callContact(contact: Contact) {
    this.callNumber.callNumber(contact.phone, false);
  }

  editPerson(person: Person) {
    this.navCtrl.push(EditPersonPage, {'person': person});
  }

}
