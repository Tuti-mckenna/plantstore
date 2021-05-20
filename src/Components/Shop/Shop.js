import React, { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { FeaturedProduct } from "../Shared/FeaturedProduct";
import { Layout } from "../Shared/Layout";

import "./Shop.css";

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map((product) => (
    <FeaturedProduct {...product} key={product.id} />
  ));
  // const allProducts = products.map((product) => (
  //   <FeaturedProduct {...product} key={product.id} />
  // ));
  return (
    <>
      <Layout>
        <div className="tiendaContainer">
          <h2 className="tiendaTitle">Tienda</h2>
          <div className="tiendaList">{allProducts}</div>
        </div>
      </Layout>
    </>
  );
};
