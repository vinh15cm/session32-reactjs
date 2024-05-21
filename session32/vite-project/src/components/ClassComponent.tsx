import React, { Component } from 'react'
interface Props { }
interface State {
    count: number;
    interval: null
}
export default class ClassComponent extends Component<Props, State> {
    intervalId: number | undefined;
    constructor(props: Props) {
        super(props)
        // khởi tạo state
        this.state = {
            count: 0,
            interval: null,

        };
    }
    componetDidMount(): void {
        this.intervalId = window.setInterval(() => {
            console.log("hàm interval được gọi !");
            this.setState(prevState => ({ count: prevState.count + 1 }))
        }, 2000)
    }
    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
    handleClick = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

    }
    render() {
        return (
            <div>
                ClassComponet
                <button onClick={this.handleClick}>dừng interval</button>
                <p>count:{this.state.count}</p>
            </div >
        )
    }
}
