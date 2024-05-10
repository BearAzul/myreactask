import React, { useState } from "react";
import PropTypes from "prop-types"
import NavBar from "../../components/NavbarPage";
import "../../style.css";


const TextDisplay = ({ isVisible }) => {
  if (isVisible) {
    return (
      <>
        <p>Teks yang Ditampilkan</p>
        <p className="text-center text-">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque nostrum sit dignissimos accusantium aliquid eius dolores cumque ullam temporibus, hic provident! Exercitationem harum quam nobis error et repudiandae quis! Sequi et dicta, ipsa doloremque provident recusandae voluptatem nostrum reiciendis aspernatur!</p>
      </>
    );
  } else {
    return <p>Teks yang disembunyikan</p>;
  }
};

TextDisplay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

const Task = () => {
  const [showText, setShowText ] = useState(true);
  const hide = () => {
    setShowText(!showText);
  }
  return (
    <>
      <NavBar />
      <section className="w-full min-h-screen bg-slate-800 pt-20">
        <div className="container max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto">
          <div className="pages flex items-center justify-start text-white text-sm gap-1">
            <button disabled>Home</button>/
            <button className="hover:underline">TugasPraktik#2</button>
          </div>

          <div className="content flex flex-col items-center justify-center gap-5 text-white">
            <h1 className="text-center font-semibold text-lg mt-6 !text-teal-400">
              Penerapan Props, State, dan ReactComponent
            </h1>

            <button
              onClick={hide}
              className={`p-2 text-sm rounded w-max  text-white ${
                showText ? "bg-green-500" : "bg-rose-500"
              }`}
            >
              {showText ? "Tampilkan Teks" : "Sembunyikan Teks"}
            </button>

            <TextDisplay isVisible={showText} />
          </div>
        </div>
      </section>
    </>
  );
};

class TaskTwo extends React.Component {
  render() {
    return (
      <>
        <Task />
      </>
    );
  }
}

export default TaskTwo;
