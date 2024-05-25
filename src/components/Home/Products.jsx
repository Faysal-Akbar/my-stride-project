import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Products = () => {
    const shoes = useLoaderData();

    return (
        <div>
            <h1 className="text-center font-bold text-4xl my-6">Our Products</h1>
            <div className="flex flex-wrap">
            {
                shoes?.slice(0, 6)?.map(shoe => <SingleProduct
                key={shoe.id}
                shoe={shoe}
                ></SingleProduct>)
            }
            </div>
        </div>
    );
};

export default Products;