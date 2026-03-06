import { useState, type FormEvent } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cotton-blue-light">
      <div className="container max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Get in touch
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Questions, event inquiries, or interested in hosting a machine at your
          venue? Send us a note.
        </p>

        {submitted ? (
          <div className="text-center bg-background rounded-2xl p-10 shadow">
            <p className="text-lg font-semibold text-primary">Thanks for reaching out!</p>
            <p className="text-muted-foreground text-sm mt-2">
              We'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                Phone (optional)
              </label>
              <input
                id="phone"
                type="tel"
                maxLength={20}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="555-000-0000"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                I'm reaching out about
              </label>
              <select
                id="subject"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>Select a topic</option>
                <option value="general">General question</option>
                <option value="event">Event rental</option>
                <option value="venue">Add a machine to our venue</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                maxLength={1000}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
