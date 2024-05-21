"use strict";
// Khởi tạo mảng chứa các đối tượng sinh viên
const students1 = [
    { id: 1, name: "Alice", class: "A" },
    { id: 2, name: "Bob", class: "B" },
    { id: 3, name: "Charlie", class: "A" },
    { id: 4, name: "David", class: "C" }
];
// Hàm để lọc sinh viên trong một lớp nhất định
function filterStudentsByClass(studentList, className) {
    return studentList.filter(student => student.class === className);
}
// Sử dụng hàm để lọc sinh viên trong lớp "A"
const classAStudents = filterStudentsByClass(students1, "A");
console.log("Danh sách sinh viên lớp A:", classAStudents);
