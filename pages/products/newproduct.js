import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useState } from "react";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productProperties, setProductProperties] = useState({});
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [goToProducts, setGoToProducts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {title,description,price}
    const product = await axios.post('/api/products',data)

  }
  return (
    <Layout>
      <form className="flex flex-col items-start" onSubmit={handleSubmit}>
        <h1>New Product</h1>
        <label>Product Name</label>
        <input type="text" placeholder="product Name" onChange={(e) => setTitle(e.target.value)} value={title}/>
        <label>Description</label>
        <textarea placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <label>Price</label>
        <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <button className="btn-primary"  type="submit">Save</button>
      </form>

      {/* <ProductForm /> */}
    </Layout>
  );
}
