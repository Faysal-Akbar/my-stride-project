import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const shoe = useLoaderData();

    const {model, brand, color, price, image_url, stock} = shoe;
    return (
        <div className="mx-5 my-10">
           <div className="mb-5">
           <h1 className="text-4xl text-red-400 font-bold">{model}</h1>
           <hr />
           </div>
           <div>
           <div className="">
            <img src={image_url} className="w-2/4 h-2/4" alt="" />
           </div>
           <div className="my-5">
                <h2 className="text-purple-500 font-bold text-2xl">Brand: {brand}</h2>
                <h3 className="font-bold">Selling Price: {price} $</h3>
                <h3> Color: {color}</h3>
                <h3>Available Stock: {stock}</h3>
           </div>
           </div>
        </div>
    );
};

export default ProductDetails;