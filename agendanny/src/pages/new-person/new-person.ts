import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonProvider} from '../../providers/person.provider';
import {DatePicker} from '@ionic-native/date-picker';

@Component({
  selector: 'page-new-person',
  templateUrl: 'new-person.html',
})
export class NewPersonPage {

  person: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public personProvider: PersonProvider,
              private datePicker: DatePicker) {
    this.person = this.definePersonForm();
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

  ionViewDidLoad() {
  }

  selectDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.person.setValue({'contact.dateNextContact': date}),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  async onSubmit({value, valid}: { value: Person, valid: boolean }) {
    await this.personProvider.save(value);
    this.navCtrl.goToRoot({});
  }

  // processForm() {
  //   if (this.person.status === 'INVALID') {
  //     let alert = this.alertCtrl.create({
  //       title: "Preencha o formulário",
  //       message: "Preencha o formulário corretamente: ",
  //       // + this.form.value.name + " " + this.form.value.phone,
  //       buttons: [{text: 'Ok',}]
  //     });
  //     alert.present();
  //   }
  // }

}


/**
 https://toddmotto.com/angular-2-forms-reactive
 https://www.joshmorony.com/advanced-forms-validation-in-ionic-2/
 */
