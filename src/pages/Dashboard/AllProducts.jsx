import { useLoaderData } from "react-router-dom";
import SingleProductDashboard from "./SingleProductDashboard";

const AllProducts = () => {

    const shoes = useLoaderData();
    
    return (
        <div>
           <h1 className="text-bold text-center text-5xl my-5">All Products</h1>
           <div className="flex flex-wrap">
            {
                shoes.map(shoe => 
                <SingleProductDashboard
                    key={shoe.id}
                    shoe={shoe}>
                </SingleProductDashboard>)
            }
           </div>
        </div>
    );
};

export default AllProducts;