"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  console.log(message);
  

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    const formData = new FormData(e.currentTarget);
  
    try {
      const res = await fetch("https://getform.io/f/bmdyxvpa", {
        method: "POST",
        body: formData,
      });
  
      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        e.currentTarget.reset();
      } else {
        setMessage("❌ Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 px-5 md:px-20">
      <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4">Contact Us</h3>
        <div className=" mb-3">
          <h3 className="text-center font-bold text-green-400 text-2xl ">Got tons of raw data?  We’ll turn it into gold.
          Contact us and unleash your business insights.</h3>
        {/* <p className=" text-center text-md my-3"> </p> */}
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Your Message"
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        {/* {message && <p className="text-center mt-4">{message}</p>} */}
      </div>
    </section>
  );
}
