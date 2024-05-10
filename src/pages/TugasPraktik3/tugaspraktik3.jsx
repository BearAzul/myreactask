import { useState, useEffect } from "react";
import Navbar from "../../components/NavbarPage.jsx";

const TaskThree = () => {
  const [isChange, setChange] = useState(false);

  const isTrue = {
    hello: "FrontEnd Dev.",
    isUpdate: true,
  };

  const isFalse = {
    hello: "Adya Abdu Azizul Hakim",
    isUpdate: false,
  };

  const currentArray = isChange ? isTrue : isFalse;

  useEffect(() => {
    console.log("Telah diperbarui:", currentArray);
  }, [isChange, currentArray]);

  const btnChange = () => {
    setChange(!isChange); 
  };
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-slate-800 pt-20">
        <div className="container max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto">
          <div className="pages flex items-center justify-start text-white text-sm gap-1">
            <button disabled>Home</button> /
            <button className="hover:underline">TugasPraktik#3</button>
          </div>

          <div className="grid place-content-center text-teal-400 py-10">
            <h1 className="text-center text-lg font-semibold mb-4">
              React JS Lifecycle Komponen
            </h1>
            <div className="min-w-[300px] text-center border border-teal-600 rounded-md shadow-md text-gray-50 py-6 px-3">
              <button
                className="w-max text-sm p-2 bg-teal-600 rounded-md"
                onClick={btnChange}
              >
                {isChange ? "Status Berganti" : "Ganti Status"}
              </button>


              <p className="mt-4">
                {currentArray.hello}
              </p>
              <p className="mt-2">
                {currentArray.isUpdate ? "ini Bidangnya" : "ini Orangnya"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskThree;
