// Khai báo và gán giá trị cho các biến
let name1: string = "John";
let age: number = 30;
let job: string = "Teacher";

// Xây dựng hàm nhận vào 3 tham số và in ra các giá trị của chúng
function printInfo(name: string, age: number, job: string): void {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Job:", job);
}

// Gọi hàm với các biến đã khai báo
printInfo(name1, age, job);