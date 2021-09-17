import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        const { name, img, info, ram, rom } = this.props.productDetail;
        const { backCamera, frontCamera, os, screen } = info;
        return (
            <div className="mt-5">
                <h1>Product Detail</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h3>{name}</h3>
                        <img src={img} className="card-img-top" />
                    </div>
                    <div className="col-md-8">
                        <div className="table">
                            <thead>
                                <tr>
                                    <td colSpan="2">
                                        <h3>Thông số kĩ thuật</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{screen}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{os}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{frontCamera}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{backCamera}</td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <td>Rom</td>
                                    <td>{rom}</td>
                                </tr>
                            </thead>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
