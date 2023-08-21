import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_k23t5an',
        'template_ize8qsn',
        form.current,
        'NXlR9ZImSxSJ6wr6o'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast('Email sent successfully');
          setUsername('');
          setEmail('');
          setMessage('');
          console.log('message send');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <ToastContainer />
      <form ref={form} onSubmit={sendEmail}>
        <label className="Name">Enter Your Name</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="user_name"
        />
        <label className="Name"> Enter Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="user_email"
        />
        <label className="Name"> Write Your Message</label>
        <textarea
          rows={4}
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
        />
        <button className="btn" value="send">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
