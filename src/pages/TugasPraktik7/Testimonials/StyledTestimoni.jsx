import styled from "styled-components";

export const FormStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  background-color: #fff;
  flex-direction: column;
  width: 100%;
`;

export const InputStyle = styled.input`
  padding: 5px 10px;
  border-radius: 0.3rem;
  border: 1px solid #3887be;
  outline: none;
  font-size: 0.9rem;
  color: #3887be;
`;
export const TextareaStyle = styled.textarea`
  padding: 5px 10px;
  border-radius: 0.3rem;
  border: 1px solid #3887be;
  outline: none;
  font-size: 0.9rem;
  color: #3887be;
`;

export const ButtonSend = styled.button`
  width: max-content;
  padding: 0.4rem .6rem;
  background: #3887be;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.6s ease-out;

  &:hover {
    background: #003c43;
  }
`;

export const Testimonial = styled.section`
  display: grid;
  gap: 0.75rem;
  width: 100%;
  padding: 20px;
  background-color: #eee;
`;

export const CardStyle = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 0.5rem;
  text-align: left;
  width: 100%;
  transition: all 0.8s;
`;
