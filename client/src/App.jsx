import CartTotals from "./component/cart/CartTotals";
import Categosires from "./component/cateories/Categosires";
import Header from "./component/header/Header";
import Products from "./component/product/Products";

function App() {
  return (
    <>
      <Header />
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories  overflow-auto max-h-[calc(100vh-_-103px)] pb-64">
          <Categosires />
        </div>
        <div className="products flex-[8]">
          <div className="">
            <Products />
          </div>
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </>
  );
}

export default App;
