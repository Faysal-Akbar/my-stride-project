const AddProduct = () => {
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
        
        //Evaluating POST method to Add Product
        await fetch("http://localhost:3000/shoes", {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(productData),
        })
        .then(res => res.json())
        .then(data => { 
            console.log(data);
            form.reset();
        })
    }
    return (
        <div>
           <div className="my-10">
           <h1 className="text-rose-500 text-3xl font-bold">Add New Product</h1>
           <hr />
           <hr />
           </div>
            <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
            <input type="number" name="id" className="grow" placeholder="Id" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" name="model" className="grow" placeholder="Model" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" name="brand" className="grow" placeholder="Brand" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="number" name="price" className="grow" placeholder="Price" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" name="stock" className="grow" placeholder="Stock" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" name="color" className="grow" placeholder="Color" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" name="image_url" className="grow" placeholder="Image URL" />
            </label>   
            <div className="rounded bg-rose-800 text-white text-center p-2 mt-2 w-2/4">
            <input type="submit" value='Add Product' className="grow" />
            </div> 
            </form>
        </div>
    );
};

export default AddProduct;