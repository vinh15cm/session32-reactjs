/*
1,union : kiểu kết hợp |

2,intersection:kiểu kết hợp &
*/
let a: number | string | undefined = 5;
a = "hồng";
//tham chiếu (array);
let numbers: (number | string)[] = [1, 2, 3, 5]
let b: number = 6;
//
type Student = {
    name: string,
    address: string,
    phone: string,
}
type A = {
    name: string,
    address: string,
    phone: string,
}
type B = {
    email: string,
}
type C = A & B;
let obj: A = {
    name: "hoa",
    address: "hà nội",
    phone: "709898070978"
}
let obj1: C = {
    name: "vinh",
    address: "hcm",
    phone: "835098238",
    email: "vinh@gmail.com",
}
//allias
let userName: string | number;//đây là union
type user = string | number;// kiểu alias(bí danh)
//tuple
let array: (number | string)[] = ["hoa", "binh"];
let array1: [number, string];
array1 = [2, "2"];
array1.push(7);


