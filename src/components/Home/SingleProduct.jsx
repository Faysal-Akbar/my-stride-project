import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProduct = ({shoe}) => {
  // eslint-disable-next-line react/prop-types
  const {id, model, brand, color, price, image_url, stock} = shoe;

    return (
      <div className="card w-72 shadow-xl mb-12 ml-12 my-5">
      <img className="w-full h-2/4" src={image_url} alt="shoe" />
<div className="mt-4 ml-4">
<h2 className="">
{model}
<div className="badge badge-secondary ml-2">NEW</div>
</h2>
<p>{color}</p>
<div className="card-actions justify-start">
<div className="badge badge-outline">{brand}</div> 
<div className="badge badge-outline">Stock Available: {stock}</div>
<div className="badge badge-outline">Selling Price: {price} $</div>
</div>
<button className="btn bg-rose-400 rounded-xl w-[100px] p-3 mt-4 text-white">
      <Link to={`/products/${id}`}>See Details</Link>
    </button>
</div>
</div>
    );
};

export default SingleProduct;