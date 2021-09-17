import React, { Component } from 'react'

export default class DemoForm extends Component {
    state = {
        username: "",
        password: "",
    };

    // ES6: Object Literals
    onChangeHandler = (e) => {
        const { name, value } = e.target;

        // Dynamic key
        // Xem cái name nào trùng với cái name nào trong []
        this.setState({
            [name]: value,
        });
    };
    
    // onChangeUsername = (e) => {
    //     const { name, value } = e.target;
    //     this.setState({
    //         username: value
    //     })
    // }

    // onChangePassword = (e) => {
    //     const { name, value } = e.target;
    //     this.setState({
    //         password: value
    //     })
    // }

    onSubmitHandler = (e) => {
        // Muốn xử lý cái gì đó thì mình dùng hàm e.preventDefault() để nó không bị submit
        e.preventDefault();
        // Gọi API thêm sản phẩm vào giỏ hàng
        console.log(this.state);
        

        // POST API
        // Logic
    }

    render() {
        return (
            <div>
                <h1>Demo Form</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={this.onChangeHandler} value={this.state.username} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" onChange={this.onChangeHandler} value={this.state.password} />
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        )
    }
}