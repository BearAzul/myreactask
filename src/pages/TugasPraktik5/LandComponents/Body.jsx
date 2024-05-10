import {
  BennerStyle,
  ButtonStyle,
  BennerText,
  AboutStyle,
  AboutImg,
  AboutHeading,
  AboutText,
} from "../Styled/StyledBody.jsx";
import ImgAbout from "/src/assets/img/Logo_GameLab_Portrait.png";

const Body = () => {
  const handleDash = () => {
    window.location.href = "https://www.gamelab.id/dashboard";
  };

  const handleHome = () => {
    window.location.href = "https://www.gamelab.id";
  };

  return (
    <>
      {/* Tugas Praktik #6 - Event Handling button Click */}
      <BennerStyle>
        <BennerText className="p-10 md:p-20 lg:p-[100px]">
          <h3 className="text-xl md:text-3xl lg:text-5xl">Raih Masa Depan Brilian dengan Optimasi Skill Digital</h3>
          <ButtonStyle onClick={handleHome}>Gamelab.ID</ButtonStyle>
        </BennerText>
      </BennerStyle>
      <AboutStyle>
        <AboutImg>
          <img src={ImgAbout} style={{ height: "200px", width: "200px" }} />
        </AboutImg>
        <AboutText>
          <AboutHeading>GAMELAB.ID</AboutHeading>
          <p>
            GAMELAB.ID membantumu mengoptimalkan skill agar siap kerja melalui
            program pelatihan, magang online, dan kelas intensif yang diampu
            oleh para profesional di bidangnya.
          </p>
          <ButtonStyle onClick={handleDash}>Dashboard</ButtonStyle>
        </AboutText>
      </AboutStyle>
    </>
  );
};

export default Body;
