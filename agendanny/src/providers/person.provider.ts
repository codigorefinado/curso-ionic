import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';


@Injectable()
export class PersonProvider {

  constructor(private storage: Storage) {
  }

  async save(person: Person): Promise<any> {
    let persons: Array<Person> = await this.allPersons();

    if (!persons) {
      persons = new Array<Person>(0);
    }

    if (!person.hash) {
      person.hash = this.hash(person.nome + person.contact.phone);
    }
    persons = this.remove(person, persons);

    persons.push(person);
    return this.storage.set('persons', persons);
  }

  remove(person: Person, persons: Array<Person>): Array<Person> {
    return persons.filter((p: Person) => p.hash != person.hash);
  }

  hash(str: String): string {
    let hash = 0;
    if (str.length == 0) return '' + hash;
    for (let i: number = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return '' + hash;
  }


  async allPersons(): Promise<Array<Person>> {
    return this.storage.get('persons');
  }

}
