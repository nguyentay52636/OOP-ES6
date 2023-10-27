import Person from './Person.js';
export default class Student extends Person {
  constructor(hoTen, diaChi, Ma, email, Toan, Ly, Hoa) {
    //
    super(hoTen, diaChi, Ma, email);
    this.Toan = Toan;
    this.Ly = Ly;
    this.Hoa = Hoa;
  }
  diemTrungBinh() {
    let DTB = (Number(this.Toan) + Number(this.Ly) + Number(this.Hoa)) / 3;
    return DTB.toFixed(2);
    //
  }
  renderForm() {}
}
// switch (typePerson.value) {
//     case 'sinhvien':
//       const SinhVien = [
//         { field: 'diemToan' },
//         { field: 'diemLy' },
//         { field: 'diemHoa' },
//         { field: 'Diem TB' },
//         { field: ' <em class="fa fa-cog"></em> ' },
//       ];
//       const students = listPerson.getStudent();
//       let content = ' ';
//       content = SinhVien.reduce((prev, item) => {
//         return (
//           prev +
//           `<th>${item.field}</th>
//             `
//         );
//       }, '');
//       console.log(content);
//       document.querySelector('.table thead').innerHTML = originalTH + content;

//       const renderPerson = (arr) => {
//         const content = arr.reduce((prev, item, index) => {
//           return (
//             prev +
//             `
//                   <tr>
//                   <td>${index + 1}</td>
//                   <td>${item.Ma}</td>
//                   <td>${item.hoTen}</td>
//                   <td>${item.diaChi}</td>
//                   <td>${item.email}</td>
//                       <td>${item.Toan}</td>
//                       <td>${item.Ly}</td>
//                       <td>${item.Hoa}</td>
//                       <td>${item.DiemTb}</td>

//                   </tr>
//               `
//           );
//         }, '');

//         document.getElementById('tableDanhSach').innerHTML = content;
//       };
//       renderPerson(listPerson.persons);
