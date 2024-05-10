import Navbar from '../../components/NavbarPage.jsx';
import Header from "../TugasPraktik5/LandComponents/Header.jsx";
import Body from "../TugasPraktik5/LandComponents/Body.jsx";
import Footer from "../TugasPraktik5/LandComponents/Footer.jsx";

// semua ada di folder tugas praktik #5

const TaskSix = () => {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-slate-800 pt-20 pb-10">
        <div className="container max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto">
          <div className="pages flex items-center justify-start text-white text-sm gap-1">
            <button disabled>Home</button> /
            <button className="hover:underline">TugasPraktik#6</button>
          </div>
          <div className="title text-center mt-6 font-semibold text-teal-400">
            Penerapan Event Handling
          </div>
          <div className="min-h-max mt-6">
            <Header />
            <Body />
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}

export default TaskSix