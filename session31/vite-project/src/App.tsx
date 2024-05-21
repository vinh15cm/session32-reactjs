
import React from 'react'
import ClassComponent from './components/ClassComponent'
export default function App() {
  return (
    <div>
      {/* App
      lifecycle: vòng đời của classComponent
      functionalComponet không có vòng đời
      VD: 1 con người có vòng đời:
      Sinh ra => trưởng thành => lập nghiệp => già => chết
      class componet cũng có vòng đời riêng cảu nó
      4 giai đoạn : 
      I, khởi tạo (initial)
      đi khởi tạo với props và state
      II, mounting (gắn vào UI)
      - thì chạy phương thức sau
      -1,componentWillMount()
      -2,render
      3,componentDidMount: thực thi 1 lần
      không nên setState trong phương thức này vì sao ?
      --3,ComponentDidMount()
      III, updating (cập nhật)
      - có thể thực hiện nhiều lần
      khi nào xảy ra update:
      -khi dữ liệu props nhận về thay đỏi hoặc dữ liệu state thay đổi

      IV, unmounting (gỡ khỏi UI)
      
      */
        <ClassComponent></ClassComponent>}
    </div>
  )
}
