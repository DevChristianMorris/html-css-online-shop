import { React, useEffect, useState } from "react";
import "./App.css";
import Product from "./Product.js";
import formatAmount from "./formatAmount.js";
// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    loadData();
  }, []);

  const myProducts = products.map((product) => {
    console.log(product);
    return (
      <Product
        key={product.id}
        name={product.name}
        image={product.images[0]}
        description={product.description}
        price={formatAmount(product.prices[0].unit_amount)}
      />
    );
  });

  return (
    <div className="container">
      <div className="header">
        <img src="./logoimg.jpg" alt="logoimg" />
        <h1 className="title">Quali-Tea</h1>
      </div>
      <div className="banner">
        <img src="./backgroundimg.jpg" alt="bannerimg" />
      </div>
      <main className="products">{myProducts}</main>
    </div>
  );
}

export default App;
