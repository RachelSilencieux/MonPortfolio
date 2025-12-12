"use client";

import { useTheme } from "@/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ContactPage(){
      const { colors } = useTheme();

      const [form, setForm] = useState({
        email: "",
        subject: "",
        message: ""
      })

      const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value})
      }

      const handleSubmit = async (e: any) => {
        e.preventDefault();
      }


    return(
        <div
            className="min-h-screen transition-colors duration-500 px-6 md:px-12 lg:px-20 py-12"
                style={{
                    backgroundColor: colors.background2,
                    color: colors.text,
                }}
        >
            <section>
                <img 
                    src="/images/meSmiley.png"
                    className="w-[150px] h-[150px] rounded-full mb-5"
                />
            </section>
            <section>
                <form className="flex flex-col gap-4 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
                    À :
                    <label className="flex">
                        <input
                            type="email"
                            className="border px-3 py-2 rounded w-full"
                            placeholder="rachelsilencieux55@gmail.com"
                            disabled
                        />
                        <FontAwesomeIcon
                            icon={faLock}
                            className="text-2xl ml-10 mt-10"
                            style={{ color: colors.text }}
                        />
                    </label>
                    De:
                    <label>
                        <input
                            type="email"
                            name="email"
                            className="border px-3 py-2 rounded w-full"
                            placeholder="votre-email@hotmail.com"
                            onChange={handleChange}
                            required
                        />
                    </label>
                    Objet:
                    <label>
                        <input
                            type="text"
                            name="subject"
                            className="border px-3 py-2 rounded w-full"
                            placeholder="veuillez saisir un sujet"
                            onChange={handleChange}
                            required
                        />
                    </label>
                    Message:
                    <label>
                        <textarea
                            rows={5}
                            name="message"
                            className="border px-3 py-2 rounded w-full"
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button 
                    className="block mx-auto mt-10 px-6 py-3 text-lg font-semibold rounded-md transition-colors duration-300 cursor-pointer"
                    style={{
                        backgroundColor: colors.accent,
                        color: colors.buttonText,
                        border: `1px solid ${colors.border}`,
                    }}
                    >
                        Envoyer le message
                    </button>
                </form>
            </section>
        </div>
    )
}