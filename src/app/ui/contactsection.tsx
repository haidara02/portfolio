"use client";

import React, { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
// import GitHubIcon from '../../../public/github.svg';
// import LinkedInIcon from '../../../public/linkedin.svg';
import {
  CheckCircleIcon,
  // XCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import clsx from "clsx";

const ContactSection: React.FC = () => {
  const [mailSent, setMailSent] = useState(false);
  const [message, setMessage] = useState("");

  const [token, setToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      setMessage("Please complete the CAPTCHA");
      setMailSent(true);
      return;
    }

    const form = e.currentTarget;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "041c2d82-ea82-4418-8f00-9b34b9758ea5",
        name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
        email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement)
          ?.value,
        "h-captcha-response": token,
      }),
    })
      .then(async (res) => {
        const json = await res.json();
        if (json.success) {
          setMessage("Form is sent successfully!");
        } else {
          setMessage("Error sending form");
        }
        setMailSent(true);
        setTimeout(() => {
          setMailSent(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setMessage("Form host is not currently available");
        setMailSent(true);
      });
    void response;
  };

  //   const handleSubmit = async (
  //     e: React.FormEvent<HTMLFormElement>
  //   ): Promise<void> => {
  //     e.preventDefault();
  //     const data: FormData = {
  //       email: (e.target as any).email.value,
  //       name: (e.target as any).name.value,
  //       message: (e.target as any).message.value,
  //     };
  //     const JSONdata = JSON.stringify(data);
  //     const endpoint = '/api/send';

  //     const options: FetchOptions = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSONdata,
  //     };

  //     const res = await fetch(endpoint, options);
  //     const resData = await res.json();
  //     if (res.status === 200) {
  //       setMailSent(true);
  //       setTimeout(() => {
  //         setMailSent(false);
  //       }, 3000);
  //     }
  //   };
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center p-20 gap-2 text-clay-darkBrown bg-clay-cream"
    >
      <div className="text-center flex-col flex gap-3">
        <h2 className="text-xl md:text-4xl md:leading-normal font-extrabold">
          Contact
        </h2>
        <div className="text-md md:leading-normal">
          Feel free to share any suggestions to help me improve, or just say
          hi—I&apos;d love to hear from you!
        </div>
      </div>
      <div className="w-[90%] max-w-[600px] mt-5 lg:w-1/2 relative">
        <div
          className={clsx(
            "absolute w-full h-full flex items-center justify-center z-10",
            !mailSent && "hidden"
          )}
        >
          <div className="flex items-center justify-center gap-2 bg-opacity-80 bg-clay-darkBrown rounded-lg p-2 text-white">
            <h2 className="text-sm font-bold m-5">{message}</h2>
            <CheckCircleIcon className="w-20 h-20 text-green-700" />
          </div>
        </div>
        <form
          className={clsx("flex flex-col gap-5", mailSent && "blur-sm")}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-md font-medium">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name..."
              required
              className="border-0 bg-clay-shadeCream shadow-sm placeholder-clay-darkCream rounded-lg block w-full p-3
              focus:outline-none focus:border-clay-darkBrown focus:ring-2 focus:ring-clay-darkBrown transition-all ease-in-out duration-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-md font-medium">
              Email *
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email address..."
              required
              className="border-0 bg-clay-shadeCream shadow-sm placeholder-clay-darkCream rounded-lg block w-full p-3
              focus:outline-none focus:border-clay-darkBrown focus:ring-2 focus:ring-clay-darkBrown transition-all ease-in-out duration-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-md font-medium">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Hi Khoi.."
              required
              className="border-0 bg-clay-shadeCream shadow-sm placeholder-clay-darkCream rounded-lg block w-full p-3
              focus:outline-none focus:border-clay-darkBrown focus:ring-2 focus:ring-clay-darkBrown transition-all ease-in-out duration-100"
            />
          </div>
          <button
            type="submit"
            className="bg-clay-darkBrown transition-colors text-clay-cream hover:bg-clay-brown md:text-base font-bold py-2.5 px-5 rounded-lg max-w-[200px]"
          >
            Send Message
          </button>
          <HCaptcha
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            reCaptchaCompat={false}
            ref={captchaRef}
            onVerify={setToken}
          />
        </form>
      </div>
      <div className="socials flex flew-row gap-2 py-5">
        <Link
          href="mailto:nguyentuankhoi@gmail.com"
          className="bg-clay-darkBrown hover:bg-clay-brown rounded-full p-3 scale-100 hover:scale-110 transition-transform ease-in-out duration-100"
        >
          <EnvelopeIcon className="h-[25px] w-[25px] text-clay-cream" />
        </Link>
        <Link
          href="http://github.com/haidara02"
          target="_blank"
          className="bg-clay-darkBrown hover:bg-clay-brown rounded-full p-3 scale-100 hover:scale-110 transition-transform ease-in-out duration-100"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-clay-cream"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
              transform="scale(64)"
            />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/khoi-tn/"
          target="_blank"
          className="bg-clay-darkBrown hover:bg-clay-brown rounded-full p-3 scale-100 hover:scale-110 transition-transform ease-in-out duration-100"
        >
          <svg
            fill="none"
            width="25"
            height="25"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 260.366 260.366"
            className="fill-clay-cream"
          >
            <g>
              <path
                d="M34.703,0.183C15.582,0.183,0.014,15.748,0,34.884C0,54.02,15.568,69.588,34.703,69.588
		c19.128,0,34.688-15.568,34.688-34.704C69.391,15.75,53.83,0.183,34.703,0.183z"
              />
              <path
                d="M60.748,83.531H8.654c-2.478,0-4.488,2.009-4.488,4.489v167.675c0,2.479,2.01,4.488,4.488,4.488h52.093
		c2.479,0,4.489-2.01,4.489-4.488V88.02C65.237,85.539,63.227,83.531,60.748,83.531z"
              />
              <path
                d="M193.924,81.557c-19.064,0-35.817,5.805-46.04,15.271V88.02c0-2.48-2.01-4.489-4.489-4.489H93.424
		c-2.479,0-4.489,2.009-4.489,4.489v167.675c0,2.479,2.01,4.488,4.489,4.488h52.044c2.479,0,4.489-2.01,4.489-4.488v-82.957
		c0-23.802,4.378-38.555,26.227-38.555c21.526,0.026,23.137,15.846,23.137,39.977v81.535c0,2.479,2.01,4.488,4.49,4.488h52.068
		c2.478,0,4.488-2.01,4.488-4.488v-91.977C260.366,125.465,252.814,81.557,193.924,81.557z"
              />
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
