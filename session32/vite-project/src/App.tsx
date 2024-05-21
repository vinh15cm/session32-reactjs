
import React from 'react'
import ClassComponent from './components/ClassComponent'
import Form from './components/Form'
export default function App() {
  // setTimeout(() => {
  //   console.log("hàm setTimeout được gọi !")
  // }, 5000)
  // let interval = setInterval(() => {
  //   console.log("hàm setInterval được gọi !")
  // }, 1000)
  // // khi viết setInterval và setItimeout nên viết trong component disMount
  // const handleClick = () => {
  //   clearInterval(interval);
  // }

  /**
   * setInterval được gọi nhiều lần khi muốn dừng setInterval thì phải clearInterval
   */
  return (
    <div>App
      <ClassComponent></ClassComponent>
      <Form></Form>
    </div>
  )
}
