import Student from '../models/Student.js';
import Employee from '../models/Employee.js';
import Customer from '../models/Customer.js';

import ListPerson from '../models/List.js';

const listPerson = new ListPerson();

const student1 = new Student(
  'taymom',
  'quan7',
  '001',
  'taymom@gmail.com',
  10,
  10,
  10
);
const student2 = new Student(
  'taymom2',
  'quan7',
  '001',
  'taymom@gmail.com',
  10,
  10,
  100
);
//
const employee1 = new Employee(
  'taymom1',
  'quan7',
  '0004',
  'tay@gmail.cm',
  30,
  12000
);
//
const customer1 = new Customer('taymom2', 'quan7', 'abc', 1300, 'nice');

listPerson.persons.push(student1, student2, employee1, customer1);

console.log(listPerson.persons);

const renderPerson = (arr) => {
  const content = arr.reduce((prev, item, index) => {
    return (
      prev +
      `
            <tr>
                <td>${index + 1}</td>
                <td>${item.Ma}</td>
                <td>${item.hoTen}</td>
                <td>${item.diaChi}</td>
                <td>${item.email}</td>

            </tr>
        `
    );
  }, '');

  document.getElementById('tableDanhSach').innerHTML = content;
};
renderPerson(listPerson.persons);
const typePerson = document.querySelector('#typeForm1');

const handleRender = () => {
  const originalTH = `<tr>
    <th class="nowrap">
      <span class="mr-1">Index</span>
      <i class="fa fa-arrow-up" id="SapXepTang"></i>
      <i class="fa fa-arrow-down" id="SapXepGiam"></i>
    </th>

    <th>ID</th>

    <th>First and last name</th>
    <th>Address</th>
    <th>Email</th>

`;

  switch (typePerson.value) {
    case 'sinhvien':
      const SinhVien = [
        { field: 'diemToan' },
        { field: 'diemLy' },
        { field: 'diemHoa' },
        { field: 'Diem TB' },
        { field: ' <em class="fa fa-cog"></em> ' },
      ];
      const students = listPerson.getStudent();
      let content = ' ';
      content = SinhVien.reduce((prev, item) => {
        return (
          prev +
          `<th>${item.field}</th>
            `
        );
      }, '');
      console.log(content);
      document.querySelector('.table thead').innerHTML = originalTH + content;

      const renderPerson = (arr) => {
        const content = arr.reduce((prev, item, index) => {
          return (
            prev +
            `
                  <tr>
                  <td>${index + 1}</td>
                  <td>${item.Ma}</td>
                  <td>${item.hoTen}</td>
                  <td>${item.diaChi}</td>
                  <td>${item.email}</td>
                      <td>${item.Toan}</td>
                      <td>${item.Ly}</td>
                      <td>${item.Hoa}</td>
                      <td>${item.DiemTb}</td>
      
                  </tr>
              `
          );
        }, '');

        document.getElementById('tableDanhSach').innerHTML = content;
      };
      renderPerson(listPerson.persons);
      break;
    case 'nhanvien': {
      const NhanVien = [
        { field: 'So ngay lam viec ' },
        { field: 'Luong theo ngay' },
        { field: 'Sum Salary' },
        { field: ' <em class="fa fa-cog"></em> ' },
      ];
      const employees = listPerson.getEmployee();
      let content1 = '';
      content1 = NhanVien.reduce((prev, item) => {
        return prev + `<th>${item.field}</th>`;
      }, '');
      document.querySelector('.table thead').innerHTML = originalTH + content1;
      const renderPerson = (arr) => {
        const content1 = arr.reduce((prev, item, index) => {
          return (
            prev +
            `
                  <tr>
                  <td>${index + 1}</td>
                  <td>${item.Ma}</td>
                  <td>${item.hoTen}</td>
                  <td>${item.diaChi}</td>
                  <td>${item.email}</td>
                      <td>${item.soNgayLamViec}</td>
                      <td>${item.luongTheoThang}</td>
                      <td>${item.Employee.Salary}</td>
            
                  </tr>
              `
          );
        }, '');

        document.getElementById('tableDanhSach').innerHTML = content1;
        renderPerson(listPerson.persons);
      };
    }
  }
};
// typePerson.onchange = handleRender;
typePerson.addEventListener('change', handleRender);
