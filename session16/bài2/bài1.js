"use strict";
/*
Định nghĩa lớp abstract Job có thuộc tính type, phương thức printType để in ra loại công việc
và phương thức abstract calculateSalary để tính lương khi làm công việc đó.
Định nghĩa lớp PartimeJob và lớp FulltimeJob kế thừa lớp Job. Lớp PartimeJob có thêm thuộc
tính workingHour.
Xây dựng phương thức printType để in ra loại công việc trong lớp cha, phương thức
calculateSalary để tính lương công việc. Lương fulltime sẽ mặc định là 10.000.000, lương
partime sẽ được tính theo công thức 30.000 * workingHour.
*/
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log("Job Type:", this.type);
    }
}
class PartimeJob extends Job {
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary() {
        return 10000000; // 10,000,000 VND
    }
}
// Khởi tạo đối tượng từ lớp PartimeJob và tính lương
const partTime = new PartimeJob(40); // làm việc 40 giờ mỗi tuần
partTime.printType();
console.log("Salary:", partTime.calculateSalary());
// Khởi tạo đối tượng từ lớp FulltimeJob và tính lương
const fullTime = new FulltimeJob();
fullTime.printType();
console.log("Salary:", fullTime.calculateSalary());
