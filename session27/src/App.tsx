import Bai1 from "./components/Bai1"
import Bai2 from "./components/Bai2"
import Bai3 from "./components/Bai3"
import Bai4 from "./components/Bai4"
import Bai5 from "./components/Bai5"
import Bai6 from "./components/Bai6"

export default function App() {
  return (
    <div>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>

    </div>
    /*
    repository : chia làm 2
    1, repo local : kho chứa trên máy tính của mình
    2, repo remote : kho chưa trên git
    các bước đẩy lên git
    B1: tạo kho chưa trên git
    + new repo
    B2: git init
    + tạo kho chưa trên local (trên máy tính của mình)
    B3: git add Bai1.tsx , Bai2.tsx
    git add .(đầỷ tất cả các thư mục lên)
    B4: git commit -m"bai tap session27"
    b5: git remote add ỏrigin
    B6: git push -u origin master
    */
  )
}
