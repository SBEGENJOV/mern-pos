import CartTotals from "../component/cart/CartTotals";
import Categosires from "../component/cateories/Categosires";
import Header from "../component/header/Header";
import Products from "../component/product/Products";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
        <div className="categories  overflow-auto max-h-[calc(100vh_-_103px)] md:pb-10 md:mr-0 -mr-[20px] ">
          <Categosires />
        </div>
        <div className="products flex-[8] overflow-auto max-h-[calc(100vh_-_103px)]">
          <div className="">
            <Products />
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
