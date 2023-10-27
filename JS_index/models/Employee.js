import Person from './Person.js';

export default class Employee extends Person {
  constructor(hoTen, diaChi, Ma, email, soNgayLamViec, luongTheoThang) {
    //
    super(hoTen, diaChi, Ma, email);
    this.soNgayLamViec = soNgayLamViec;
    this.luongTheoThang = luongTheoThang;
  }
  Salary() {
    let salary = Number(this.luongTheoThang) * Number(this.soNgayLamViec);
    return salary.toFixed(2);
  }
}
Number;
