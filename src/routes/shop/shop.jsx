import React, { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductsContext } from "../../contexts/productContext";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
