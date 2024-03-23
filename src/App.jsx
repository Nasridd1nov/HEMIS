import Accordion from './Component/Accardion/Accardion'
import Register from './Register';
// import Main from "./Component/Main/Main";

function App() {
  const items = [
    {
      title: (
        <div className="reja w-[400px]">
          <h1 cursor-pointer>O'quv Rejasi</h1>
        </div>
      ),
      content: (
        <div className="input w-[100%] flex flex-col gap-2">
          <div className="input1 flex items-center gap-2 font-[600] cursor-pointer">
            <input type="radio" name="jins" />
            <h3 className="text-[15px]">O'quv reja</h3>
          </div>
          <div className="input1 flex items-center gap-2 font-[600] cursor-pointer">
            <input type="radio" name="jins" />
            <h3 className="text-[15px]">Dars Jadvali</h3>
          </div>
          <div className="input1 flex items-center gap-2 font-[600] cursor-pointer">
            <input type="radio" name="jins" />
            <h3 className="text-[15px]">Nazorat Jadvali</h3>
          </div>
          <div className="input1 flex items-center gap-2 font-[600] cursor-pointer">
            <input type="radio" name="jins" />
            <h3 className="text-[15px]">Fanlar Resurslari</h3>
          </div>
          <div className="input1 flex items-center gap-2 font-[600] cursor-pointer">
            <input type="radio" name="jins" />
            <h3 className="text-[15px]">Davomat</h3>
          </div>
          <div className="input1 flex items-center gap-2 font-[600] cursor-pointer">
            <input type="radio" name="jins" />
            <h3 className="text-[15px]">O'zlashtirish</h3>
          </div>
          <div className="input1 flex items-center gap-2 font-[600] cursor-pointer">
            <input type="radio" name="jins" />
            <h3 className="text-[15px]">Imtihonlar</h3>
          </div>
          <div className="input1 flex items-center gap-2 font-[600] cursor-pointer">
            <input type="radio" name="jins" />
            <h3 className="text-[15px]">Reting Daftarcha</h3>
          </div>
          <div className="input1 flex items-center gap-2 font-[600] cursor-pointer">
            <input type="radio" name="jins" />
            <h3 className="text-[15px]">Fanlar tanlovi</h3>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* <Header />
      <Main /> */}
   <Register/>
   <Accordion items={items}/>
    </>
  );
}

export default App;