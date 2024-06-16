"use client";
import Image from "next/image";
import React, { FormEvent, useEffect, useRef } from "react";
import linkedIn from "@/assets/linkedin.png";
import github from "@/assets/github.png";
import twitter from "@/assets/twitter.png";
import email from "@/assets/mail.png";
import phone from "@/assets/telephone.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import Aos from "aos";

const Contact: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const userName = formData.get("user_name")?.toString().trim();
      const userLastName = formData.get("user_name")?.toString().trim();
      const userEmail = formData.get("user_email")?.toString().trim();
      const message = formData.get("message")?.toString().trim();

      if (!userName || !userLastName || !userEmail || !message) {
        toast.error("Please fill in all fields.");
        return;
      }

      emailjs
        .sendForm(
          "service_wxh2k5a",
          "template_kkdqind",
          form.current,
          "nBJrRpoE8BDwEWUjm"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast("Your message has been sent successfully");
            form.current?.reset(); // Clear the form fields
          },
          (error) => {
            console.log(error.text);
            toast.error("There was an error sending your message");
          }
        );
    }
  };

  return (
    <div id="contact">
      <ToastContainer />
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-5 md:gap-20 mt-20 md:pt-14 items-center">
        <div className="w-full" data-aos="zoom-in">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
              <input
                type="text"
                placeholder="First name *"
                name="user_name"
                className="py-3 px-5 w-full border border-slate-400 rounded-md"
              />
              <input
                type="text"
                placeholder="Last name *"
                name="user_name"
                className="py-3 px-5 w-full border border-slate-400 rounded-md"
              />
            </div>
            <div className="mt-5">
              <input
                type="email"
                placeholder="Email address *"
                name="user_email"
                className="py-3 px-5 w-full border border-slate-400 rounded-md"
              />
            </div>
            <div className="mt-5">
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Your message *"
                className="py-3 px-5 border border-slate-400 w-full rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-[#224e89] text-white w-full py-4 rounded-md mt-5 font-medium"
            >
              Send Email
            </button>
          </form>
        </div>

        <div className="w-full" data-aos="zoom-in">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#224e89]">
              Get In Touch
              <br />
              Or Just say Hello!
            </h1>
            <p className="mt-5 text-[#3f3f46]">
              Looking to collaborate on a project or simply want to say hi? I am
              always open to new ideas and conversations. Lets work together to
              craft exceptional and innovative user experiences that stand out.
            </p>
          </div>

          <div className="mt-4 font-medium">
            <div className="flex flex-row items-center gap-3">
              <Image
                className="w-4 mt-1"
                src={email}
                alt="email"
                loading="lazy"
              />
              <p>veervrushabh@gmail.com</p>
            </div>
            <div className="flex flex-row items-center gap-3 mt-3">
              <Image className="w-4" src={phone} alt="phone" loading="lazy" />
              <p>+91 9767428263</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-5 mt-7">
            <div>
              <a
                href="https://www.linkedin.com/in/vrushabh-veer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="w-8"
                  src={linkedIn}
                  alt="linkedIn"
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/VrushabhVeer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="w-8"
                  src={github}
                  alt="github"
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Image
                  className="w-7"
                  src={twitter}
                  alt="twitter"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
