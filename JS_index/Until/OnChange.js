/*import {
  List,
  StudentList,
  EmployeeList,
  CustomerList,
} from '../models/List.js';
*/

const Student = [
  { field: 'diemToan', label: 'Điểm Toán' },
  { field: 'diemLy', label: 'Điểm Lý' },
  { field: 'diemHoa', label: 'Điểm Hóa' },
];
const Employee = [
  { field: 'workingDay', label: 'Số ngày làm việc' },
  { field: 'salaryDay', label: 'Luong ngay' },
];
const Customer = [
  { field: 'nameCompany', label: 'Ten cong ty' },
  { field: 'invoiceValue', label: 'Gia tri hoa don' },
  { field: 'valuate', label: 'đánh giá' },
];

const selectEle = document.querySelector('#typeForm');

selectEle.addEventListener('change', handleChange);
function handleChange() {
  const selectValue = document.querySelector('#typeForm').value;
  // console.log(selectValue);

  let originalContent = `
  <div class="form-group">
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text"></span>
									<!-- <i class="fa fa-briefcase"></i> -->
								</div>
								<select class="form-control" id="typeForm" >
									<option>Select user</option>
									<option>Student</option>
									<option>Employee</option>
									<option>Customer</option>
								</select>
							</div>

							<span class="pForm_noti" id="notiType"></span>
						</div>

						<div class="form-group">
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text"></span>
									<!-- <i class="fa-regular fa-user"></i> -->
								</div>
								<input type="name" name="name" id="name" class="form-control input-sm"
									placeholder="First and last name">
							</div>
							<span class="pForm_noti" id="notiName"></span>
						</div>
					
						<div class="form-group">
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text"></span>
								<!-- i class="fa-regular fa-address-card"></i> -->
							</div>
							<input type="text" name="id" id="id" class="form-control"
								placeholder="ID">
						</div>
						<span class="pForm_noti" id="notiID"></span>
					</div>
						
						<div class="form-group">
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text"></span>
									<!-- <i class="fa fa-envelope"></i> -->
								</div>
								<input type="email" name="emai" id="email" class="form-control input-sm"
									placeholder="Email">
							</div>

							<span class="pForm_noti" id="notiEmail"></span>
						</div>
						<div class="form-group">
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text"></span>
									<!-- <i class="fa-solid fa-house"></i> -->
								</div>
								<input type="text" name="address" id="address" class="form-control"
									placeholder="Address">
							</div>
							<span class="pForm_noti" id="tbAddress"></span>
						</div>`;
  let content = '';

  switch (selectValue) {
    case 'Student':
      console.log(123);
      content = Student.reduce((prev, item) => {
        return (
          prev +
          `
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"></span>

                </div>
                <input type="text" name="${item.field}" id="${item.field}" class="form-control"
                  placeholder="${item.label}">
              </div>
              <span class="pForm_noti" id="noti${item.field}"></span>
            </div>
          `
        );
      }, '');
      document.querySelector('.modal-body #modalPerson').innerHTML =
        originalContent + content;
      break;
    case 'Employee':
      content = Employee.reduce((prev, item) => {
        return (
          prev +
          `
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"></span>

              </div>
              <input type="text" name="${item.field}" id="${item.field}" class="form-control"
                placeholder="${item.label}">
            </div>
            <span class="pForm_noti" id="noti${item.field}"></span>
          </div>
          `
        );
      }, '');
      document.querySelector('.modal-body #modalPerson').innerHTML =
        originalContent + content;
      break;

    case 'Customer':
      content = Customer.reduce((prev, item) => {
        return (
          prev +
          `<div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"></span>

        </div>
        <input type="text" name="${item.field}" id="${item.field}" class="form-control"
          placeholder="${item.label}">
      </div>
      <span class="pForm_noti" id="noti${item.field}"></span>
    </div>`
        );
      }, '');
      document.querySelector('.modal-body #modalPerson').innerHTML =
        originalContent + content;
  }
}
