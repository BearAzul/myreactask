import {
  FormStyle,
  InputStyle,
  TextareaStyle,
  ButtonSend,
  Testimonial,
  CardStyle,
} from "./StyledTestimoni.jsx";
import { useState } from "react";

const Testimonials = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name || !email || !message) { 
      alert("Form tidak boleh kosong");
      return;
    }
    
    const newTestimonial = {
      name: name,
      email: email,
      message: message,
    };

    setTestimonials([...testimonials, newTestimonial]);

    setName("");
    setEmail("");
    setMessage("");
  };

  const removeTestimonial = (index) => {
    setTestimonials(testimonials.filter((_, i) => i !== index));
  };
  return (
    <>
      <FormStyle>
        <h3 className="my-3 text-xl font-semibold text-center text-sky-600">
          Form Testimonials
        </h3>
        <form
          action="#"
          className="grid items-start justify-center w-full gap-3"
          onSubmit={handleSubmit}
        >
          <InputStyle
            type="text"
            placeholder="Masukkan Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="md:w-[500px]"
          />
          <InputStyle
            type="text"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-[500px]"
          />
          <TextareaStyle
            name="message"
            id="message"
            placeholder="Masukkan Pesan"
            rows="4"
            cols="30"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="md:w-[500px]"
          ></TextareaStyle>
          <ButtonSend type="submit">Tambah Testimoni</ButtonSend>
        </form>
      </FormStyle>

      {/* Penerapan Hook berupa card testimoni */}
      <Testimonial className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimoni, index) => (
          <CardStyle key={index} className="shadow-md">
            <div className="flex items-start justify-between">
              <p className="mb-4 text-sm text-slate-800">{testimoni.message}</p>
              <button
                className="px-1 text-white rounded bg-rose-500 h-max w-max"
                onClick={() => removeTestimonial(index)}
              >
                &times;
              </button>
            </div>
            <hr />
            <div className="flex items-center justify-between mt-2">
              <div>
                <h2 className="text-base font-semibold capitalize text-sky-600">
                  {testimoni.name}
                </h2>
                <h4 className="mb-3 text-xs text-gray-500">
                  {testimoni.email}
                </h4>
              </div>
              <div className="w-[35px]">
                <img
                  src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </CardStyle>
        ))}
      </Testimonial>
    </>
  );
};

export default Testimonials;
