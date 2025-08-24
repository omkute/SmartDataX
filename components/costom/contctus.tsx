"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        form.reset();
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (err) {
        console.log(err);
        
      setMessage("❌ Something went wrong.",);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 px-5 md:px-20">
      <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold text-center mb-4">Contact Us</h3>
        <p className=" text-center my-3">If you have huge raw data and need insights for your business Contact Us</p>
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
        {message && <p className="text-center mt-4">{message}</p>}
      </div>
    </section>
  );
}
