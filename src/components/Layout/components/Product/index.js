import classNames from 'classnames/bind';

import styles from './Product.module.scss'

import { useState, useEffect } from 'react'
import axios from "axios";

const cx = classNames.bind(styles)
function Product() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        loadProduct();
    }, [])
    const loadProduct = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/employees");
        setProduct(result.data);
    };

    return (
        <div className={cx('wrapper')}>
            {product.map((product) => (
                <ul key={product.id}>
                    <li>{product.firstName}</li>
                    <li>{product.lastName}</li>
                </ul>
            ))}
        </div>
    );
}

export default Product;