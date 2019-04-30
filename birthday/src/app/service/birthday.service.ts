import {Injectable} from '@angular/core';
import PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

@Injectable({
    providedIn: 'root'
})
export class BirthdayService {
    private db: PouchDB;

    private birthdays: any;

    constructor() {
    }

    initDB() {
        PouchDB.plugin(cordovaSqlitePlugin);
        this.db = new PouchDB('birthdays.db', {adapter: 'cordova-sqlite'});
    }

    add(birthday) {
        return this.db.post(birthday);
    }

    update(birthday) {
        return this.db.put(birthday);
    }

    delete(birthday) {
        return this.db.remove(birthday);
    }

    getAll() {

        if (!this.birthdays) {
            return this.db.allDocs({include_docs: true})
                .then(docs => {

                    // Cada linha tem um objeto .doc, nós queremos apenas um array dos aniversários,
                    // por isto vamos pegar apenas as informações dentro do .doc, e vamos converter  data,
                    // que não é convertida automaticamente.

                    this.birthdays = docs.rows.map(row => {
                        // Dates are not automatically converted from a string.
                        row.doc.date = new Date(row.doc.date);
                        return row.doc;
                    });

                    // ouve mudanças no banco de dados, se haver executa onDatabaseChange
                    this.db.changes({live: true, since: 'now', include_docs: true})
                        .on('change', this.onDatabaseChange);

                    return this.birthdays;
                });
        } else {
            // Retorna o cache como uma promise
            return Promise.resolve(this.birthdays);
        }
    }

    private onDatabaseChange = (change) => {
        const index = this.findIndex(this.birthdays, change.id);
        const birthday = this.birthdays[index];

        if (change.deleted) {
            if (birthday) {
                this.birthdays.splice(index, 1); // delete
            }
        } else {
            change.doc.date = new Date(change.doc.date);
            if (birthday && birthday._id === change.id) {
                this.birthdays[index] = change.doc; // update
            } else {
                this.birthdays.splice(index, 0, change.doc); // insert
            }
        }
    };

    // Busca binária, o array é por padrão ordenado por _id
    // https://pouchdb.com/2015/02/28/efficiently-managing-ui-state-in-pouchdb.html
    private findIndex(array, id) {
        let low = 0, high = array.length, mid;
        while (low < high) {
            mid = (low + high) >>> 1;
            array[mid]._id < id ? low = mid + 1 : high = mid;
        }
        return low;
    }


}
