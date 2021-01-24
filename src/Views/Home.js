import React from "react";
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import useAxiosGet from '../Hooks/HttpRequests'


function Home(){
    //   const url = `https://fakestoreapi.com/products/${id}`;
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
    let products = useAxiosGet(url);
    let content = null;

      if (products.loading) {
        content = <Loader />;
      }
    
      if(products.error){
          content = <p>
              Please refresh or try again later.
          </p>
      }

      if (products.data) {
            content = 
            products.data.map((product, key) =>
                <div key={key}>
                    <ProductCard 
                    product={product}
                    />
                </div>
            )
      };

    return(
        <div>
            <h1 className="font-bold text-2xl">Best Sellers</h1>
            { content }
        </div>
    )
}

export default Home