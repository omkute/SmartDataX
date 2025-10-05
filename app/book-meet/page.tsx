'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, {  useState } from 'react'

function BookMeet() {
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
    <div className="min-h-screen flex flex-col justify-center items-center  p-6">
        <h1 className="text-3xl font-bold mb-4">Book a Meeting with Us</h1>
        <p className="text-gray-600 mb-6">
          Interested in learning more about our SmartDataX ? Schedule a meeting to discuss your Requirements, or explore Growth opportunities. We&apos;re excited to connect with you!
        </p>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
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
    </div>
  )
}

export default BookMeet