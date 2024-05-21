/*
1,array
*/
let numbers: number[] = [1, 2, 3, 4];
// khai báo mảng numbers các phần tử trong mảng numbers phải là numbers
let students: string[] = ["hoa", "hồng", "huệ",];
/*
2,object
*/
let obj = {
    name: "minh thu",
    address: "hà nội",
    id: 1
}
let obj1: {
    name: string,
    address: string,
    id: number,
} = {
    name: "minh thu",
    address: "hcm",
    id: 15,
}
/*
3,enum
*/
enum Role {
    ADMIN = 5,
    USER,
}
let person: {
    name: string,
    address: string,
    role: Role.ADMIN
} = {
    name: "ngọc",
    address: "hn",
    role: 5
}
/*
void: áp dụng với function
-khi hàm không trả về kết quả gì?
-khi hàm trả về thì phải khai báo kiểu dữ liệu trả về của hàm
*/
function sayHello(): void {
    console.log("hello");
}
sayHello()
function sum(a: number, b: number): number {
    return a + b
}
sum(3, 4)
console.log(sum(3, 4));
/*kiểu unknow
tương tự kiểu dữ liệu any nhưng chật hơn
khi dùng any thì kiểu dữ liệu truyền vào là gì cũng đcs */
function test(a: any) {
    console.log(a.toUpperCase());// viết hoa từ đó lên

}
test("text")
function test1(a: unknown) {
    //bắt buộc phải kiểm tra kiểu dữ liêu trước khi đi thực hiện phép tính
    if (typeof (a) === "string") {
        console.log(a.toUpperCase());
    }
}
test1("text")
/*
6, type never
-thường dùng trong các vòng lặp vô tận , ko có điểm dừng
- để đo giá trị:
*/
function typeNever(): never {
    let a: number = 1;
    while (true) {
        console.log("giá trị của a:", a++)
    }
}
typeNever()