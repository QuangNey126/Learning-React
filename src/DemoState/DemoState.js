import React, { Component } from 'react'

export default class DemoState extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAuthendicated: false
        }

        // Thuộc tính username
        this.username = "Thoi"
    };

    // Login method
    onLogin = () => {
        // (setState) Hàm bất đồng bộ (không đợi hàm setState chị xong mới chạy hàm bên dưới)
        this.setState({
            isAuthendicated: true,
        },
        // () => {
        //     console.log("State sau khi set: ", this.state.isAuthendicated);
        // }
        );

    };

    // Logout method
    onLogout = () => {
        this.setState({
            isAuthendicated: false,
        });
    };

    render() {
        return (
            <div>
                {this.state.isAuthendicated ? 
                    (
                    <div>
                        <p>Hello {this.username}</p>
                        <button onClick={this.onLogout}>Logout</button>
                    </div>
                ) : (
                    <button onClick={this.onLogin}>Click me log in</button>)}
            </div>
        )
    }
}