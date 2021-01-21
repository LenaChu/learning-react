import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const url = "https://fakestoreapi.com/products/1";
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);
  let content = null;

  if (product) {
    return (
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.title}
            </h1>
            <div>
                <img
                    src={product.image}
                    alt={product.title}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.price}
            </div>
            <div>
                {product.description}
            </div>
        </div>
      )
  }
  return(
      <div>
          {content}
      </div>
  )

}

export default Product;
