import Button from "../Elements/Button";
const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 my-2 mx-2 rounded-lg shadow flex flex-col justify-between">
            { children }
        </div>
    )
}

const CardHeader = (props) => {
    const { image } = props;
    return (
        <a href="#">
            <img className="p-7 rounded-t-lg"
            src={image} alt="product image" />
        </a>
    )
}

const CardFooter = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
                    <span className="text-xl font-bold text-white">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
                    <Button classname="bg-green-500" onClick={() => handleAddToCart(id)}>Add to cart</Button>
                </div>
    )
}

const CardBody = (props) => {
    const { name, children } = props;
    return (
        <div className="px-5 pb-5 h-full">
                    <a href="">
                        <h5 className="text-xl font-semibold tracking-tight text-white mb-2">{name}</h5>
                        <p className="text-s text-white">
                            {children}
                        </p>
                    </a>
                </div>
    );
};

CardProduct.CardHeader = CardHeader;
CardProduct.CardFooter = CardFooter;
CardProduct.CardBody = CardBody;

export default CardProduct;