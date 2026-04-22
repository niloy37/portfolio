import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { personalInfo } from '@/data/personal';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitState = 'success' | 'error' | null;

const initialFormState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>(null);
  const shouldReduceMotion = useReducedMotion();
  const rowHover = shouldReduceMotion ? undefined : { x: 10, y: -2 };
  const cardHover = shouldReduceMotion ? undefined : { y: -6 };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/movlwlno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitState('success');
      setFormData(initialFormState);
    } catch (error) {
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
      window.setTimeout(() => setSubmitState(null), 4500);
    }
  };

  return (
    <section id="contact" className="section-block">
      <div className="section-shell grid gap-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(320px,1.12fr)]">
        <motion.div
          className="surface-card"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="eyebrow">Contact</div>
          <h2 className="section-title mt-4">
            If the work needs experimentation, iteration, and clear execution, let's talk.
          </h2>
          <p className="section-copy mt-5">{personalInfo.availability}</p>

          <div className="mt-8 space-y-4">
            <motion.a
              href={personalInfo.socials.email}
              className="contact-row"
              whileHover={rowHover}
            >
              <span className="contact-icon">
                <FiMail size={18} />
              </span>
              <span>
                <span className="contact-label">Email</span>
                <span className="contact-value">{personalInfo.email}</span>
              </span>
            </motion.a>

            <motion.div className="contact-row" whileHover={rowHover}>
              <span className="contact-icon">
                <FiPhone size={18} />
              </span>
              <span>
                <span className="contact-label">Phone</span>
                <span className="contact-value">{personalInfo.phone}</span>
              </span>
            </motion.div>

            <motion.div className="contact-row" whileHover={rowHover}>
              <span className="contact-icon">
                <FiMapPin size={18} />
              </span>
              <span>
                <span className="contact-label">Location</span>
                <span className="contact-value">{personalInfo.location}</span>
              </span>
            </motion.div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <motion.a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary justify-center"
              whileHover={cardHover}
            >
              <FiGithub />
              GitHub
            </motion.a>
            <motion.a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary justify-center"
              whileHover={cardHover}
            >
              <FiLinkedin />
              LinkedIn
            </motion.a>
          </div>

          <motion.div
            className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-6"
            whileHover={cardHover}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Good fit</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal-300" />
                <span>Applied AI and ML engineering roles</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember-300" />
                <span>Research assistantships, labs, and benchmark-heavy projects</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-300" />
                <span>Teams that value both experimentation and production readiness</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.25 }}
          onSubmit={handleSubmit}
          className="surface-card"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Formspree contact form
              </p>
              <h3 className="mt-3 font-display text-3xl text-white">Send a message</h3>
            </div>
            <span className="label">GitHub Pages-safe</span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="field-shell">
              <span className="field-label">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Your name"
              />
            </label>

            <label className="field-shell">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="field-shell mt-4 block">
            <span className="field-label">Subject</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="Role, collaboration, or project context"
            />
          </label>

          <label className="field-shell mt-4 block">
            <span className="field-label">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={7}
              className="field-input min-h-[180px] resize-none"
              placeholder="Tell me what you're building or what kind of role you have in mind."
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-primary justify-center disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="spinner" />
                  Sending
                </>
              ) : (
                <>
                  <FiSend />
                  Send message
                </>
              )}
            </button>

            {submitState === 'success' && (
              <p className="text-sm text-emerald-300">
                Message sent successfully. Thanks for reaching out.
              </p>
            )}
            {submitState === 'error' && (
              <p className="text-sm text-rose-300">
                The form could not be sent. Email or LinkedIn also work well.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
