export default class ListPerson {
  constructor() {
    this.persons = [];
  }
  getStudent() {
    return this.persons.filter((person) => {
      if (person.diemTrungBinh) {
        return person;
      }
    });
  }
  getEmployee() {
    return this.persons.filter((person) => {
      if (person.Salary) {
        return person;
      }
    });
  }
  getCustomer() {
    return this.persons.filter((person) => {
      if (person.TenCongTy) {
        return person;
      }
    });
  }
}
