import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import useAxiosGet from "../Hooks/HttpRequests";

function Product() {
  const { id } = useParams();
//   const url = `https://fakestoreapi.com/products/${id}`;
const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
let product = useAxiosGet(url);

  let content = null;

  if (product.loading) {
    content = <Loader />;
  }

  //The first fake api doesn't return a error.
  if(product.error){
      content = <p>
          Please refresh or try again later.
      </p>
  }

  if (product.data) {
    return (content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.title}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.title} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    ));
  }
  return <div>{content}</div>;
}

export default Product;
