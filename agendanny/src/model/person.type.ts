class Person {
  hash?: string;
  nome: string;
  contact?: Contact;
}

class Contact {
  phone: string;
  email?: string;
  type?: string | 'Quente' | 'Morno' | 'Frio'; // Quente, Morno, Frio
  dateNextContact?: Date;
  comentary?: string;
}
