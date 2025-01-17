'use client'

import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'], preload: true })
const montserrat = Montserrat({ weight: ["400", "500", "700"], subsets: ['latin'], preload: true  });

export default function Contact() {
    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formElement = event.currentTarget as HTMLFormElement; // Type assertion
        const formData = new FormData(formElement);

        formData.append("access_key", "b44ada9d-7f6a-4b65-8a53-127b792ef183");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              }).then(() => {
                window.location.reload();
              });
        }
    }
  return (
    <section id="Contact" className={`${poppins.className} py-16 md:py-24 bg-gray-900 text-white`}>
        <form action="" onSubmit={handleSubmit}>
            <div className="px-10 sm:px-24 text-center flex flex-col items-center">
                <h2 className={`text-3xl md:text-5xl font-extrabold mb-12 md:mb-20 text-white ${montserrat.className} tracking-wide`}> Contact Me</h2>
                <div className={`flex flex-col w-full max-w-2xl space-y-6 lg:space-y-10 ${montserrat.className} items-center md:text-xl`}>

                    <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-6 lg:space-y-0 w-full">
                        <div className="flex flex-col w-full">
                        <label htmlFor="fullName" className="mb-1 font-medium text-left">Enter Fullname</label>
                        <input
                            name="fullName"
                            id="fullName"
                            type="text"
                            placeholder="Enter Name"
                            className="text-black w-full focus:outline-none rounded-md focus:border-orange-400 border-2 p-2 font-medium"
                        />
                        </div>
                        {/* Email Input */}
                        <div className="flex flex-col w-full">
                        <label
                            htmlFor="email"
                            className="mb-1 font-medium text-left"
                        >
                            Enter Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            className="text-black w-full focus:outline-none rounded-md focus:border-orange-400 border-2 p-2 font-medium"
                        />
                        </div>
                    </div>

                    {/* Message Section */}
                    <div className="flex flex-col items-start w-full">
                        <label
                        htmlFor="message"
                        className="mb-1 font-medium text-left"
                        >
                        Enter Message
                        </label>
                        <textarea
                        name="message"
                        id="message"
                        placeholder="Enter Message"
                        className="text-black h-48 text-start focus:outline-none rounded-md focus:border-orange-400 border-2 p-2 font-medium w-full"
                        ></textarea>
                    </div>

                    {/* Contact Button */}
                    <button type="submit" className="uppercase px-6 py-3 mt-4 md:mt-8 text-lg font-semibold text-gray-900 bg-orange-400 rounded-md shadow-lg hover:bg-orange-300 transition w-full sm:w-4/6">
                        Contact
                    </button>
                </div>
            </div>
        </form>
      
    </section>
  );
}
