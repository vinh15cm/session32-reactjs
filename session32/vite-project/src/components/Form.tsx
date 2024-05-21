import React from 'react'

export default function Form() {
    const [name, setName] = useState
    const handleClick = () => {
        console.log("đã gọi vào hàm");
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("đã ăn vào handleChange!", e.target.value);
        // cập nhật state
        setName(e.target.value);
    }
    return (
        <div>
            {/**
       * các kĩ thuật xử lý trong form
       * có 2 kĩ thuật xử lí chính
       * 1,controler
       * +lấy dữ liệu người dùng đăng nhập ô input
       * + lấy dữ liệu khi người dùng nhập vào tẽt area
       * + chọn select option
       * 2,uncontroller
       */}
            <div>
                <label htmlFor="">tên</label>
                <input onChange={handleChange} type="text"></input>
                <p>tên người dùng đăng nhập :{name}</p>
                <label htmlFor="">Email</label>
                <input type="text"></input>
                <p>email người đăng nhập :</p>
                <button onClick={handleClick}>login</button>
            </div>
        </div>
    )
}
