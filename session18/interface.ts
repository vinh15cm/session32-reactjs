/*
interface:giao diện
trong interface gồm có thuộc tính và phương thức
đối với phương thứcv thì không có phần thân --> chỉ có định nghĩa thôi
đối cới interface thì không thể dùng kiểu dữ liệu kết hợp union và intersection được như đối với type
có thể khởi tạo đối tượng từ interface đuọc ko --> không thể khởi tạo từ interface được
interface sinh ra nhằm mục đích gì --> interface là một cái khuôn dành cho các class khác kế thừa phải tuân theo
các class con khi kế thừa interface bắt buộc phải triển khai tất cả các thuộc tihs và phương thức interface(implement)
1 class có thể triển khai nhiều interface đc ko --> có thể đc 
interface có kế thừa interface được không
==> interface có thể kế thừa interface
-- trong interface thì không thể đặt access modifier được
*/
interface Sales {
    name: string;
    sale(): string;
    sale1(): string;
}
interface Sales1 {
    name: string;
    address: string;
}
class Person implements Sales {
    name: string;
    constructor(name: string,address:string) {
        this.name = name;
    }

    //bắt buộc phải triển khai phương thức sale trong interface
    sale(): string {
        return "sale 5%"
    }
    sale1(): string {
        return "sale 15%"
    }
}
