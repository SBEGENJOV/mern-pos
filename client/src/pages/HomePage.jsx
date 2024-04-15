import { useEffect, useState } from "react";
import CartTotals from "../component/cart/CartTotals";
import Categosires from "../component/cateories/Categosires";
import Header from "../component/header/Header";
import Products from "../component/product/Products";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/category/get-category"
        );
        const data = await res.json();
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  return (
    <>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24 h-screen">
        <div className="categories  overflow-auto max-h-[calc(100vh_-_103px)] md:pb-10 md:mr-0 -mr-[20px] ">
          <Categosires categories={categories} setCategories={setCategories} />
        </div>
        <div className="products flex-[8] overflow-auto max-h-[calc(100vh_-_103px)]">
          <div className="">
            <Products categories={categories} />
          </div>
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border ">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default HomePage;
