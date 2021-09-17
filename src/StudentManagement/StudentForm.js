import React, { Component } from 'react'

const initialState = {
        id: '',
        fullname: '',
        phoneNumber: '',
        email: '',
        math: '',
        chem: '',
        phy: '',
};

export default class StudentForm extends Component {
    state = initialState;

    onChangeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    onResetForm = () => {
        this.setState(initialState);
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        // Đưa cái object student ra component cha
        this.props.onAddStudent(this.state);
        this.onResetForm();
    };


    render() {
        const {id, fullname, phoneNumber, email, math, chem, phy} = this.state; 
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="id">Mã SV</label>
                                <input type="text" value={id} name="id" id="id" className="form-control" placeholder aria-describedby="helpId" onChange={this.onChangeHandler} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="fullname">Họ tên</label>
                                <input type="text" value={fullname} name="fullname" id="fullname" className="form-control" placeholder aria-describedby="helpId" onChange={this.onChangeHandler} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="phoneNumber">SĐT</label>
                                <input type="text" value={phoneNumber} name="phoneNumber" id="phoneNumber" className="form-control" placeholder aria-describedby="helpId" onChange={this.onChangeHandler} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" value={email} name="email" id="email" className="form-control" placeholder aria-describedby="helpId" onChange={this.onChangeHandler} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="math">Điểm toán</label>
                                <input type="text" value={math} name="math" id="math" className="form-control" placeholder aria-describedby="helpId" onChange={this.onChangeHandler} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="chem">Điểm hoá</label>
                                <input type="text" value={chem} name="chem" id="chem" className="form-control" placeholder aria-describedby="helpId" onChange={this.onChangeHandler} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="phy">Điểm lý</label>
                                <input type="text" value={phy} name="phy" id="phy" className="form-control" placeholder aria-describedby="helpId" onChange={this.onChangeHandler} />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="mt-4 btn btn-primary">Thêm sinh viên</button>
                </form>
            </div>
        )
    }
}