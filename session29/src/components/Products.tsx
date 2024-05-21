import React from 'react'
import Product from './Product'
interface Props {
    products: [];
}
interface Product {
    name: string,
    price: number,
    id: number,
}
export default function Products(props: Props) {
    // dùng destructoring
    const { products } = props
    return (
        <div>
            Products
            <ul>
                {products.map((item: any, index, arr) => {
                    return <li key={index}>tên sản phẩm :{item.name} giá :{item.price}</li>
                })}
            </ul>
            <Product></Product>
        </div>
    )
}
