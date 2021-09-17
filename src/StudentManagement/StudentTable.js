import React, { Component } from 'react';

const DEFAULT = 1;
const GPA_UP = 2;
const GPA_DOWN = 3;
const NAME = 4;

export default class StudentTable extends Component {

    state = {
        sortType: 
    }

    render() {
        // Destructering mảng students
        const { students } = this.props;
        let newStudents = [];

        // Tính GPA dựa vào mảng students ban đầu
        newStudents = students.map((student) => {
            const { id, email, fullname, phoneNumber, math, chem, phy } = student;
            const gpa = (parseFloat(math) + parseFloat(chem) + parseFloat(phy))/3;

            return {
                id,
                email,
                fullname,
                phoneNumber,
                gpa: parseFloat(gpa.toFixed(1))
            };
        });

        console.log(newStudents);
        return (
            <div className="mt-5">

                <div>
                    <div className="form-group">
                        <label htmlFor="filter" />
                        <select className="form-control" name="sortType" id="filter" ononChange={this.onChangeSortType}>
                            <option>Default</option>
                            <option>GPA Up</option>
                            <option>GPA Down</option>
                            <option>Fullname</option>
                        </select>
                    </div>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th>Mã SV</th>
                            <th>Họ tên</th>
                            <th>SĐT</th>
                            <th>Email</th>
                            <th>GPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newStudents.length > 0 ? (
                            newStudents.map((studentItem, index) => {
                                const { email, fullname, phoneNumber, id, gpa} = studentItem;
                                return (
                                    <tr key={index}>
                                        <td scope="row">
                                            {id}
                                        </td>
                                        <td>{fullname}</td>
                                        <td>{phoneNumber}</td>
                                        <td>{email}</td>
                                        <td>{gpa}</td>
                                    </tr>
                                )
                            })
                        ) : <tr>
                            <td colSpan="5" className="text-center">
                                <p>Chưa có học sinh, vui lòng thêm học sinh!</p>
                            </td>
                        </tr> }
                    </tbody>
                </table>
            </div>
        )
    }
}