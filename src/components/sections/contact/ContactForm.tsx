"use client";
// import api from "@/utils/api";
import "./index.scss";
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.team2658.org/api/notifications',
    headers: {
        'Content-Type': 'application/json',
    },
});

import { FormEvent, useRef, useState } from "react";

type formData = {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
};

function submitForm(e: FormEvent<HTMLFormElement>, formData: formData) {
    
    e.preventDefault();
    console.log("Form submitted");
    const subForm = async (data: { name: string; email: string; message: string; company: string; }) => {
        try {
            const response = await api.post('/webhook', data);
            console.log(response.status)
            if (response.status === 200) {
            } else {
                // Handle unexpected status codes
                alert(response.data.message || 'Submission failed.');
            }
        } catch (error: any) {
            console.error('Submission error:', error);
            alert(error.response?.data?.message || 'Submission failed.');
        }
    };
    subForm(formData);
}
    

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const submittedDialogRef = useRef<HTMLDialogElement>(null);

    function submissionCleanup() {
        setName("");
        setEmail("");
        setCompany("");
        setSubject("");
        setMessage("");
        submittedDialogRef.current?.showModal();
    }

    return (
        <>
            <form
                className="text-center flex flex-col gap-6 bg-neutral-900 text-white p-4 rounded-xl my-8 mx-6"
                name="contact-form"
                onSubmit={(e) => {
                    submitForm(e, {
                        name: name,
                        email: email,
                        company: company,
                        subject: subject,
                        message: message,
                    });
                    submissionCleanup();
                }}
            >
                <h2 className="col-span-2 text-r3xl font-semibold my-4">
                    Get in Touch
                </h2>
                <div className="formSection">
                    <label htmlFor="name" className="">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        required
                    />
                </div>

                <div className="formSection">
                    <label htmlFor="company" className="">
                        Company
                    </label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        value={company}
                        onChange={(e) => {
                            setCompany(e.target.value);
                        }}
                    />
                </div>

                <div className="formSection">
                    <label htmlFor="email" className="">
                        Email *
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>

                <div className="formSection">
                    <label className="" htmlFor="subject">
                        Subject *
                    </label>
                    <input
                        name="subject"
                        id="subject"
                        required
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                    />
                </div>
                <div className="formSection flex flex-col">
                    <label htmlFor="message" className="">
                        Message *
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />
                    <button
                        className="text-center w-min bg-neutral-800"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <dialog ref={submittedDialogRef}>
                <h2 className="font-bold text-6xl my-16">Form Submitted</h2>
                <p className="font-semibold text-3xl mx-8 my-16">
                    Thank you for your submission!
                </p>
                <button
                    onClick={() => {
                        submittedDialogRef.current?.close();
                    }}
                    className="relative inset-x-[45%]"
                >
                    Close
                </button>
            </dialog>
        </>
    );
}
