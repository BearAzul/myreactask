import styled from "styled-components";
import BgBenner from "/src/assets/img/bgBanner.jpg";

// Benner
export const BennerStyle = styled.section`
  width: auto;
  height: max-contents;
  background: url(${BgBenner}) no-repeat center / cover;
  display: grid;
  align-items: center;
`;

export const ButtonStyle = styled.button`
  padding: 5px 20px;
  border-radius: 0.3rem;
  background: #3887be;
  font-weight: 500;
  font-size: 16px;
  border: none;
  color: #fff;
  transition: all 0.6s ease-out;
  &:hover {
    cursor: pointer;
    background: #ffffff;
    color: #3887be;
    border-color: #3887be;
    border: 2px solid;
  }
`;

export const BennerText = styled.div`
  font-size: 3rem;
  color: #3887be;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
`;

export const BennerImg = styled.div`
  font-size: 3.4rem;
  color: #3887be;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// About
export const AboutStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
  align-items: center;
  gap: 1.5rem;
  padding: 20px 40px;
  background: #fff;
`;

export const AboutImg = styled.div`
  border-radius: 0.5rem;
`;

export const AboutHeading = styled.h2`
  font-size: 1rem;
  margin: 0.5rem 0 1.1rem;
`;

export const AboutText = styled.div`
  font-size: 0.9rem;
  margin: 0.5rem 0 1.1rem;

  p {
    margin-bottom: 1rem;
  }
`;

