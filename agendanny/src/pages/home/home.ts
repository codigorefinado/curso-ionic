import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';
import {PersonProvider} from '../../providers/person.provide';
import {EditPersonPage} from '../edit-person/edit-person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  persons: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController,
              private callNumber: CallNumber,
              private personProvider: PersonProvider) {
  }

  // ngOnInit(): void {
  //   this.personProvider.allPersons()
  //     .then((persons: Array<Person>) => this.persons = this.persons);
  // }

  ionViewWillEnter() {
    this.personProvider.allPersons()
      .then((persons: Array<Person>) => {

        this.persons = persons;
        console.log(this.persons);
      });
  }

  callContact(contact: any) {
    this.callNumber.callNumber(contact.phone, true);
  }

  editPerson(person: Person) {
    this.navCtrl.push(EditPersonPage, {'person': person});
  }

}
