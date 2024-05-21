import React, { Component } from 'react'
interface Props {

}
interface State {
    name: string,
    age: number,
    loading: boolean,
    count: number,
}
export default class ClassComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        // khi khai báo state trong component
        this.state = {
            name: "hoa",
            age: 25,
            loading: true,
            count: 0,

        }
    }
    componetDidMount(): void {
        console.log("chạy sau khi component được render lần đầu");
        /**
         * phương thức componentDidMount được chạy sau khi component render
         * các UI được cập nhật vào DOM
         * đây là nơi lí tưởng để thực hiện các việc xử lí như calss API lấy dữ liệu
         * và hiển thị
         */
    }
    // dùng các phương thức mặc định react cung cấp
    componentWillMount(): void {
        console.log(" chạy sau khi constructor khởi tạo xong giá trị state");
        /**
         * trong phương thức componentWillMount có thể tính toán lại State
         * nhưng lưu ý cái thời gian chuyển từ phương thức componentƯillMount 
         * đến phương thức render rất nhanh nên lưu ý việc cập nhật state
         */
    }
    handleClick = () => {
        // khi cần cập nhật State
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        this.setState({
            name: "hồng",
        })
        console.log("component được render lần đầu");
        return (
            <div>
                <p>ClassComponent</p>
                <p>Xin chào {this.state.name}</p>
                <p>giá trị count:{this.state.count}</p>
            </div>
        )
    }
}
