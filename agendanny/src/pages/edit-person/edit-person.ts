import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonProvider} from '../../providers/person.provider';
import {DatePicker} from '@ionic-native/date-picker';


@Component({
  selector: 'page-edit-person',
  templateUrl: 'edit-person.html',
})
export class EditPersonPage {

  person: Person;
  formPerson: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public personProvider: PersonProvider,
              private datePicker: DatePicker) {

    this.person = this.navParams.get('person');
    this.formPerson = this.definePersonForm();
    this.formPerson.setValue(this.person);
  }

  definePersonForm(): FormGroup {
    return new FormGroup({
      hash: new FormControl(),
      name: new FormControl('',
        Validators.compose([Validators.maxLength(50), Validators.required])),
      contact: new FormGroup({
        phone: new FormControl('', Validators.required),
        email: new FormControl(''),
        type: new FormControl(''),
        dateNextContact: new FormControl(''),
        comentary: new FormControl('')
      })
    });
  }

  async onSubmit({value, valid}: { value: Person, valid: boolean }) {
    await this.personProvider.save(value);
    this.navCtrl.goToRoot({});
  }

  selectDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.formPerson.setValue({'contact.dateNextContact': date}),
      err => console.log('Erro: ', err)
    );
  }
}
