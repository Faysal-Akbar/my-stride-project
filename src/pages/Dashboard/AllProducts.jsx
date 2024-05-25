import { useLoaderData } from "react-router-dom";
import SingleProductCard from "./SingleProductCard";

const AllProducts = () => {

    const shoes = useLoaderData();
    
    return (
        <div>
           <h1 className="text-bold text-center text-5xl my-5">All Products</h1>
           <div className="flex flex-wrap">
            {
                shoes.map(shoe => 
                <SingleProductCard 
                    key={shoe.id}
                    shoe={shoe}>
                </SingleProductCard>)
            }
           </div>
        </div>
    );
};

export default AllProducts;