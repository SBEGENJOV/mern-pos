
import React from "react";
import Edit from "../component/product/Edit";
import Header from "../component/header/Header";

const ProductPage = () => {
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Ürünler</h1>
        <Edit />
      </div>
    </>
  );
};

export default ProductPage;