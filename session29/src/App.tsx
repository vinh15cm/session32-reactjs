import React from 'react'
import Parent from './components/Parent'
import Products from './components/Products'
export default function App() {
  let products = [
    {
      name: "iphone15",
      id: 1,
      price: 5000,
    },
    {
      name: "iphone14",
      id: 2,
      price: 4000,
    },
    {
      name: "iphone16",
      id: 3,
      price: 6000,
    }
  ]
  return (
    <div>App
      <p>
        props:properties
        - dùng để truyền , gửi dữ liệu từ component cha xuống component con
        - thế nào component cha?
        - thế nào là component con ?
        - component cha chưas 1 component con
      </p>
      <p>state
        -
      </p>

      {/* <Parent  ></Parent>
      <Products></Products> */}
    </div>
  )
}
