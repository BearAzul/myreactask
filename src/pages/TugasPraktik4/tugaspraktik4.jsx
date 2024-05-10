import { useState } from "react";
import { PropTypes } from "prop-types";
import Navbar from "../../components/NavbarPage.jsx";
// Jangan Lupa Baca readme
const Header = () => {
  return (
    <>
      <header className="w-full py-4">
        <div className="container max-w-[16rem] md:max-w-xl lg:max-w-4xl mx-auto flex items-center justify-between">
          <img
            src="https://www.gamelab.id/img/Logo_GameLab_Landscape_White.png?v=3.10?v=3.1?v=1.1"
            alt="logo GameLab"
            className="block w-[150px]"
          />
          <button className="md:hidden block text-white">
            <i className="fa-solid fa-bars"></i>
          </button>
          <nav className="hidden md:flex items-center gap-2 md:gap-6 text-[.6rem] md:text-sm text-white">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
};

const Body = () => {
  return (
    <>
      <main className="w-full py-4">
        <div className="container max-w-[16rem] md:max-w-xl lg:max-w-4xl mx-auto">
          <div className="flex items-center md:flex-row flex-col justify-between text-white gap-4">
            <div className="col w-full">
              <h1 className="md:text-lg lg:text-2xl font-bold mb-4">
                Optimasi Skill dan Kompetensi, Lebih Siap Kerja dan Wirausaha
              </h1>
              <p className="md:text-xs lg:text-sm mb-4">
                GAMELAB menghadirkan platform lengkap untuk meningkatkan
                kompetensi lulusan yang siap kerja dan siap wirausaha melalui
                program pelatihan berbasis proyek (PBL), magang online
                bersertifikat, dan sertifikasi industri.
              </p>

              <div className="flex gap-2 items-center text-slate-800">
                <button className="p-2 text-xs lg:text-sm bg-yellow-400 font-semibold rounded-md">
                  Jelajahi Program
                </button>
                <button className="p-2 text-xs lg:text-sm bg-sky-300 font-semibold rounded-md">
                  Menjadi Mitra
                </button>
              </div>
            </div>
            <div className="col w-full">
              <div className="w-[250px] md:w-[350px] md:ms-auto">
                <img
                  src="https://www.gamelab.id/img/home/Hero.png?v=1.4"
                  alt="jumbotron gamelab"
                  className="block mx-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const Footer = ({ onKirimPesan }) => {
  return (
    <>
      <footer className="w-full pt-4 bg-gray-100">
        <div className="container">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-slate-800 font-semibold text-sm lg:text-base">
              Punya pertanyaan atau butuh bantuan?
            </h1>
            <div className="flex items-center gap-2 my-4 font-semibold text-xs lg:text-sm">
              <button
                className="bg-green-600 hover:bg-green-800 text-white p-2 rounded-md"
                onClick={onKirimPesan}
              >
                <i className="fa-brands fa-whatsapp me-2"></i>
                Hubungi Kami
              </button>
              <button className="bg-[#03AED2] text-white p-2 rounded-md">
                Lihat Daftar FAQ
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
          <div className="flex py-4 bg-slate-950 items-center justify-center gap-1 md:gap-8 text-gray-100 text-[.5rem] lg:text-xs">
            <p>© 2018-2024. All Rights Reserved.</p>
            <button className="hover:underline">Term and Condition</button>
            <button className="hover:underline">Privacy Policy</button>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.propTypes = {
  onKirimPesan: PropTypes.func.isRequired,
}

const TaskFour = () => {
  const [isPesan, setPesan] = useState(false);
  const kirimPesan = () => {
    setPesan(!isPesan);
    if (!isPesan) {
      console.log("Hallo Gamelab Indonesia")
    } else {
      console.log("Nothing")
    }

  };
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-slate-800 pt-20 pb-10">
        <div className="container max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto">
          <div className="pages flex items-center justify-start text-white text-sm gap-1">
            <button disabled>Home</button> /
            <button className="hover:underline">TugasPraktik#4</button>
          </div>
          <div className="title text-center mt-6 font-semibold text-teal-400">
            Penerapan Component Communication
          </div>
          <p className="text-center text-white mt-4 text-sm"> Pesan dariku: 
            {isPesan ? " Hallo Gamelab Indonesia" : ""}
          </p>
          <div className="text-teal-400 min-h-max bg-[#03AED2] mt-6">
            <Header />
            <Body />
            <Footer onKirimPesan={kirimPesan} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskFour;
