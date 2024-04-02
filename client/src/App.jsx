import Categosires from "./component/cateories/Categosires";
import Header from "./component/header/Header";

function App() {
  return (
    <>
    <Header />
    <div className="home px-6 flex justify-between gap-10">
      <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-103px)] pb-64">
        <Categosires />
      </div>
      <div className="products flex-[8]">
        <div className="">products</div>
      </div>
      <div className="">
        <div>cart totals</div>
      </div>
    </div>
  </>
  );
}

export default App;
