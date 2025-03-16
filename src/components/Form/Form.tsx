import { Container } from './styles'; 
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import validator from 'validator';

export function Form() {
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validPhone, setValidPhone] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const verifyEmail = (email: string) => {
    setValidEmail(validator.isEmail(email));
    setEmail(email);
  };

  const verifyPhone = (phone: string) => {
    const isValid = validator.isMobilePhone(phone, "any", { strictMode: false });
    setValidPhone(isValid);
    setPhone(phone);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget; // Store form reference before async call
    const formData = new FormData(form);
    formData.append("access_key", "0f0b0cc6-16a6-4548-8e66-b0df999b17fe"); // Your Web3Forms Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("✅ Form Submitted Successfully!", { autoClose: 3000 });
        setEmail('');
        setPhone('');
        setMessage('');
        if (form) form.reset(); // ✅ Ensuring form exists before calling reset()
      } else {
        throw new Error(data.message); // ✅ Forces error to be caught
      }
    } catch (error) {
      toast.error(`❌ ${error instanceof Error ? error.message : "Something went wrong!"}`, { autoClose: 3000 });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />

        <input
          placeholder="Phone Number"
          id="phone"
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => verifyPhone(e.target.value)}
          required
        />

        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" disabled={submitting || !validEmail || !validPhone || !message}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      <ToastContainer />
    </Container>
  );
}
