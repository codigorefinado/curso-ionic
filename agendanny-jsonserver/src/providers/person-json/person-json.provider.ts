import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class PersonJsonProvider {

  url = 'http://localhost:3000/persons';

  constructor(public http: HttpClient) {
  }

  save(person: Person): Observable<Object> {
    return this.http.post(this.url, person);
  }

  patch(person: Person): Observable<Object> {
    return this.http.patch(this.url + '/' + person.id, person);
  }

  remove(person: Person): Observable<Object> {
    return this.http.delete(this.url + '/' + person.id);
  }

  allPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }
}
