
import "../../style.css";
import NavBar from "../../components/NavbarPage";

const HomePage = () =>{
  return (
    <>
      <NavBar  />
      <section
        className="w-full bg-gray-100 flex items-center min-h-screen"
      >
        <div className="container max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt="react-icon"
            className="block mx-auto w-[160px] md:w-[200px] mb-8 drop-shadow-lg rotate-animation"
          />
          <h1 className="text-2xl md:text-4xl font-bold mb-3 text-slate-800 drop-shadow-md">
            Selamat Datang di Tugas React
          </h1>
          <p className="text-slate-800 text-sm md:text-base mb-2">
            Website ini merupakan web yang berisi semua tugas dari belajar react
            js selama di Gamelab.
          </p>
          <p className="text-slate-800 text-xs md:text-base">
            Tertera pembuat web{" "}
            <span className="italic font-semibold text-teal-400">
              Adya Abdu Azizul Hakim
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
