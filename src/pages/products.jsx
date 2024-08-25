
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

import { Fragment, useEffect, useState } from "react";

//list dalam react atau hit api
const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        image: "/images/shoes-1.jpg",
        price: 1000000,
        desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Vero eaque voluptates ratione aperiam, minus commodi eos assumenda quas laboriosam quis omnis. 
        Iusto natus culpa, accusantium magni architecto sequi repudiandae harum.`
    },
    {
        id: 2,
        name: "Sepatu Lama",
        image: "/images/shoes-1.jpg",
        price: 500000,
        desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Vero eaque voluptates ratione aperiam, minus commodi eos assumenda quas laboriosam quis omnis.`
    },
    {
        id: 3,
        name: "Sepatu Nike",
        image: "/images/shoes-1.jpg",
        price: 800000,
        desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Vero eaque voluptates ratione aperiam, minus commodi eos assumenda quas laboriosam quis omnis. 
        Iusto natus culpa.`
    }
];

const email = localStorage.getItem("email");
const ProductsPage = () => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
            setCart(JSON.parse(localStorage.getItem("cart")) || []); 
    }, []);

    useEffect(() => {
        if(cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + (product.price * item.qty);
            } , 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]); 
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

    const handleAddToCart = (id) => {
        if(cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
        );
        }else {
            setCart([...cart, {id, qty: 1}])
        }
    }
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-gray-600 text-white items-center px-10">
                {email}
                <Button className="ml-5" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5 gap-5">
            <div className="w-3/4 flex flex-wrap">
            {products.map(product => (
                <CardProduct key={product.id}>
                    <CardProduct.CardHeader image={product.image}/>
                        <CardProduct.CardBody name={product.name}>
                            {product.desc}
                        </CardProduct.CardBody>
                <CardProduct.CardFooter 
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart} />
            </CardProduct>
            ))}
            </div>
                <div className="w-1/4 mr-10">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left border-separate table-auto border-spacing-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => {
                                const product = products.find((product) => product.id === item.id);
                                return(
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                        <td>{item.qty}</td>
                                        <td>{(item.qty * product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR'})}</td>
                                    </tr>
                                )
                            })}
                            <tr>   
                                <td colSpan="3">Total Price</td>
                                <td>{totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                            </tr>   
                        </tbody>
                    </table>    
                </div>
            </div>
        </Fragment>
    );
};

export default ProductsPage;