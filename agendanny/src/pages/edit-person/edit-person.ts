import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonProvider} from '../../providers/person.provide';


@Component({
  selector: 'page-edit-person',
  templateUrl: 'edit-person.html',
})
export class EditPersonPage {

  frmPerson: FormGroup;
  person: Person;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public personProvider: PersonProvider) {

    this.frmPerson = this.definePersonForm();

    this.person = this.navParams.get('person');
    this.frmPerson.setValue(this.person);
  }

  ionViewDidLoad() {
  }

  definePersonForm(): FormGroup {
    return new FormGroup({
      hash: new FormControl(''),
      name: new FormControl('',
        Validators.compose(
          [Validators.required, Validators.max(50)])
      ),
      contact: new FormGroup({
        phone: new FormControl('', Validators.required),
        email: new FormControl('', Validators.email),
        type: new FormControl(''),
        dateNextContact: new FormControl(new Date().toISOString()),
        comentary: new FormControl('')
      })
    });
  }


  onSubmit({value, valid}: { value: any, valid: boolean }) {
    this.personProvider.save(value);
    this.navCtrl.goToRoot({});
  }

}
