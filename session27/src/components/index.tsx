import React from 'react'
interface Product {
    name: string,
    price: number,
    id: number
}
interface student {
    name: string,
    address: string,
    age: number
}
export default function Bai1() {
    let fullName: string = "renekton"
    let age: number = 25;
    let student = {
        name: "hoa",
        age: 20,
        address: "ha noi",
    }
    let numbers: number[] = [1, 4, 7, 9];
    let student1: string[] = ["trương", "mỹ", "lan"]
    let products: Product[] = [
        {
            name: "iphone5",
            price: 5000,
            id: 1
        },
        {
            name: "iphone6",
            price: 6000,
            id: 2
        },
        {
            name: "iphone7",
            price: 7000,
            id: 3,
        },


    ]
    return (
        <>
            <div>Bài tập 1</div>
            <div>bài tập 2</div>
            <p> hiển thị fullname : {fullName}</p>
            <p>{fullName} năm nay {age} tuổi</p>
            <p>gơn phố tên là {student.name} hiện đang sống tại {student.address} và năm nay {student.age} tuổi</p>
            <p>{fullName} có mã số nhà là {numbers}</p>
            <p>chuyển sang dạng JSON để hiển thị</p>
            <p>{JSON.stringify(student)}</p>
            <p>hiển thị mảng (array)</p>
            {numbers.map((item, index, arr) => {
                return <li> key ={index} : {item}</li>
            })}
            {student1.map((item, index, arr) => {
                return <li key={index} > {item}</li>
            })}
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>tên sp</th>
                        <th>giá</th>
                        <th>mã SP</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index, arr) => {
                        return <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.id}</td>

                        </tr>
                    })}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </>

        /*
            khi return các element thì phải có thẻ fragment bọc bên ngoài
            */
    )
}
