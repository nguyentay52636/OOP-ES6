import Person from './Person.js';
export default class Customer extends Person {
  //
  constructor(hoTen, diaChi, Ma, email, TenCongTy, GiaTriHoaDon, Danhgia) {
    super(hoTen, diaChi, Ma, email);
    this.TenCongTy = TenCongTy;
    this.GiaTriHoaDon = GiaTriHoaDon;
    this.Danhgia = Danhgia;
  }
}
