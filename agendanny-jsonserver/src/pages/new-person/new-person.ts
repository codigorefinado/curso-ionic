import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonJsonProvider} from '../../providers/person-json/person-json.provider';

@Component({
  selector: 'page-new-person',
  templateUrl: 'new-person.html',
})
export class NewPersonPage {

  frmPerson: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public personProvider: PersonJsonProvider) {
    this.frmPerson = this.definePersonForm();
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
    this.personProvider.save(value).subscribe(() =>
      this.navCtrl.goToRoot({})
    );
  }

}
