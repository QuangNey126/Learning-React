import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { name, img, price, id } = this.props.product;
        const { onSelectedProduct, onAddToCart } = this.props;

        return (
            <div className="card p-2" style={{width: '24rem'}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mb-3">{name}</h5>
                    <p>{price}</p>
                    <div className="d-flex justify-content-between">
                        <a onClick={() => onSelectedProduct(id)} className="btn btn-success">
                            Xem chi tiết
                        </a>
                        <a onClick={() => onAddToCart(this.props.product)} className="btn btn-danger">
                            Thêm sản phẩm
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}