import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
    const editableData = useLoaderData();

    const [id, setId] = useState(editableData.id);
    const [model, setModel] = useState(editableData.model);
    const [brand, setBrand] = useState(editableData.brand);
    const [price, setPrice] = useState(editableData.price);
    const [stock, setStock] = useState(editableData.stock);
    const [color, setColor] = useState(editableData.color);
    const [imageURL, setImageURL] = useState(editableData.image_url);


    const handleSubmit = async (e)=> {
        e.preventDefault();

        const form = e.target;
        const id = form.id.value;
        const model = form.model.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const stock = form.stock.value;
        const color = form.color.value;
        const image_url = form.image_url.value;

        const productData = {id, model, brand, price, stock, color, image_url};
        
        //Evaluating PATCH method to edit Product
        await fetch(`http://localhost:3000/shoes/${editableData.id}`,{
            method: "PATCH",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => console.log(data, "is successfully edited"))
    }
    return (
        <div>
           <div className="my-10">
           <h1 className="text-rose-500 text-3xl font-bold">Edit Product</h1>
           <hr />
           <hr />
           </div>
            <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
            <input type="number" value={id} onChange={(e)=> setId(e.target.value)} name="id" className="grow" placeholder="Id" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" value={model} onChange={(e)=> setModel(e.target.value)} name="model" className="grow" placeholder="Model" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" value={brand} onChange={(e)=> setBrand(e.target.value)} name="brand" className="grow" placeholder="Brand" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="number" value={price} onChange={(e)=> setPrice(e.target.value)}name="price" className="grow" placeholder="Price" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" value={stock} onChange={(e)=> setStock(e.target.value)} name="stock" className="grow" placeholder="Stock" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" value={color} onChange={(e)=> setColor(e.target.value)} name="color" className="grow" placeholder="Color" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" value={imageURL} onChange={(e)=> setImageURL(e.target.value)} name="image_url" className="grow" placeholder="Image URL" />
            </label>   
            <div className="rounded bg-rose-800 text-white text-center p-2 mt-2 w-2/4">
            <input type="submit" value='Edit Product' className="grow" />
            </div> 
            </form>
        </div>
    );
};

export default EditProduct;