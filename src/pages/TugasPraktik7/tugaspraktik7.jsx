import Navbar from "../../components/NavbarPage.jsx";
import Header from "../TugasPraktik5/LandComponents/Header.jsx";
import Body from "../TugasPraktik5/LandComponents/Body.jsx";
import Testimonials from "./Testimonials/Testimonial.jsx";
import Footer from "../TugasPraktik5/LandComponents/Footer.jsx";


const TaskSix = () => {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen pt-20 pb-10 bg-slate-800">
        <div className="container max-w-xs mx-auto md:max-w-2xl lg:max-w-5xl">
          <div className="flex items-center justify-start gap-1 text-sm text-white pages">
            <button disabled>Home</button> /
            <button className="hover:underline">TugasPraktik#7</button>
          </div>
          <div className="mt-6 font-semibold text-center text-teal-400 title">
            Penerapan Hook
          </div>
          <div className="mt-6 min-h-max">
            <Header />
            <Body />
            <Testimonials  />
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskSix;
