import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastAction } from "@radix-ui/react-toast";
export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dxfxxdu",  // Replace with your EmailJS Service ID
        "template_p4f72vp",  // Replace with your EmailJS Template ID
        form.current,
        "jFraNX4sG0vVHAFBg"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
                toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
          
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };


  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 flex flex-col items-center">
              {/* Email */}


              <div className="flex flex-col items-center space-y-2 text-center">
                {/* Icon + Title in one row */}
                <div className="flex items-center space-x-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />

                  </div>
                  <h4 className="font-medium">Email</h4>
                </div>

                {/* Location text */}
                <span className="text-muted-foreground hover:text-primary transition-colors">
                  atharvninave18@gmail.com
                </span>
              </div>


              <div className="flex flex-col items-center space-y-2 text-center">
                {/* Icon + Title in one row */}
                <div className="flex items-center space-x-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Phone</h4>
                </div>

                {/* Location text */}
                <span className="text-muted-foreground hover:text-primary transition-colors">
                  +91 7999803623
                </span>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center space-y-2 text-center">
                {/* Icon + Title in one row */}
                <div className="flex items-center space-x-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Location</h4>
                </div>

                {/* Location text */}
                <span className="text-muted-foreground hover:text-primary transition-colors">
                  Indore, India
                </span>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/atharv-ninave-3604b31b8" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://x.com/atharvv1809" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/direct/t/17847392655208548" target="_blank">
                  <Instagram />
                </a>
                <a
                  href="https://github.com/atharvninave18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
          // onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Your Name.."
                />
              </div>

              <div>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Your Email..."
                />
              </div>
              <div>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Subject"
                />
              </div>

              <div>

                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus              :ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
