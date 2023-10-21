import { Send, XCircle } from "lucide-react";
import React, { useState, useRef } from "react";
import styled from "styled-components";

import emailjs from "@emailjs/browser";

const PopupBoxContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    background-color: rgb(32, 32, 32);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 14px;
    z-index: 9999;
`;

const ContactFormContainer = styled.div`
    padding: 16px;
`;

const Label = styled.label`
    margin-bottom: 8px;
    color: #f2f2f2;
`;

const InputField = styled.input`
    margin-bottom: 16px;
    padding: 8px;
    width: 100%;
    border-radius: 4px;
    // border: 1px solid #ccc;
    background-color: #fff;
    color: rgb(32, 32, 32);
    outline-color: #ffcd6d;
    transition: all 0.2s ease-in-out;
    ::placeholder {
        color: rgb(32, 32, 32, 0.5);
    }
`;

const TextArea = styled.textarea`
    margin-bottom: 16px;
    padding: 8px;
    width: 100%;
    border-radius: 4px;
    // border: 1px solid #ccc;
    outline-color: #ffcd6d;
    background-color: #fff;
    color: rgb(32, 32, 32);
    ::placeholder {
        color: rgba(32, 32, 32, 0.5);
    }
`;

const SubmitButton = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    background-color: #ffcd6d;
    color: rgb(32, 32, 32);
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    z-index: 9999;

    /* :hover {
        background-color: red;
    } */
`;

const CloseButton = styled.button`
    position: absolute;
    top: -30px;
    right: 10px;
    // bottom: 10px;
    padding: 4px;
    border: none;
    background-color: transparent;
    color: #f2f2f2;
    font-size: 16px;
    cursor: pointer;

    :hover {
        color: #ffcd6d;
        transition: all 0.3s ease;
    }
`;

const Contact = ({ onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [isSent, setIsSent] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform the necessary actions with the form data (e.g., send email, store in database)

        emailjs
            .sendForm(
                "service_1lawyoh",
                "template_lpw7uh3",
                form.current,
                "zHGUpt4DCaixhk0i5"
            )
            .then(
                (result) => {
                    document.getElementById("contact_form").reset();
                    setIsSent(true);
                    alert("Message sent successfully! 😄");
                },
                (error) => {
                    console.error(error);
                    setIsSent(false);
                }
            );

        // Clear the form fields
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <PopupBoxContainer>
            <CloseButton onClick={onClose}>
                {" "}
                <XCircle size={48} />{" "}
            </CloseButton>
            <ContactFormContainer>
                <form
                    onSubmit={handleSubmit}
                    id="contact_form"
                    ref={form}
                    method="POST"
                    target="_blank">
                    <Label htmlFor="name">Name</Label>
                    <InputField
                        type="text"
                        id="name"
                        name="from_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />

                    <Label htmlFor="email">Email</Label>
                    <InputField
                        type="email"
                        id="email"
                        name="from_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />

                    <Label htmlFor="message">Message</Label>
                    <TextArea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message"
                        required></TextArea>

                    <SubmitButton type="submit">
                        <p>Send</p>
                        <Send size={22} />
                    </SubmitButton>
                </form>
            </ContactFormContainer>
        </PopupBoxContainer>
    );
};

export default Contact;
