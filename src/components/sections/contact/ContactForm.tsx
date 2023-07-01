"use client";
import './index.css'

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
	try {
		const request = new XMLHttpRequest();
		request.open(
			"POST",
			"https://discord.com/api/webhooks/1124596501084119040/Gw_GrayHKeEunQzNe58isLQeLlgyRNt2It-sN6_03L8rWSu_kHQ2A8eyKeYhdhG7hO1M"
		);
		request.setRequestHeader("Content-type", "application/json");
		const subject = formData.subject ? formData.subject : "None provided";
		const fieldsArr = [
			{
				name: "Name",
				value: formData.name,
			},
			{
				name: "Email",
				value: formData.email,
			},
			{
				name: "Message",
				value: formData.message,
			},
		];

		if (formData.company.trim()) {
			fieldsArr.splice(1, 0, {
				name: "Company",
				value: formData.company,
			});
		}

		const params = {
			username: "team2658.org",
			avatar_url:
				"https://avatars.githubusercontent.com/u/36017746?s=400&u=e55b83cf74c03119a931a08fb43d566f9087cfa0&v=4",
			content: "New form submission🚨🚨🚨🚨🚨🚨🚨",
			embeds: [
				{
					title: "Subject: " + subject,
					description:
						"Submitted on " +
						new Date().toDateString() +
						" at " +
						new Date().toLocaleTimeString(),
					color: 15985179,
					fields: fieldsArr,
				},
			],
		};
		request.send(JSON.stringify(params));
		console.log("submitted");
	} catch (err) {
		console.log(err);
	}
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
				className="text-center grid grid-cols-2 gap-6 bg-teamYellow-300 p-8 rounded-xl m-8"
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
					<h2 className='col-span-2 text-4xl font-semibold'>Get in Touch</h2>
					<div className="mb-3">
						<label htmlFor="name" className="block text-center">
							Full Name *
						</label>
						<input
							className="w-4/5"
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

					<div className="mb-3">
						<label htmlFor="company" className="block text-center">
							Company
						</label>
						<input
							className="w-4/5"
							type="text"
							name="company"
							id="company"
							value={company}
							onChange={(e) => {
								setCompany(e.target.value);
							}}
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="email" className="block text-center">
							Email *
						</label>
						<input
							className="w-4/5"
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

					<div className="mb-3">
						<label className="block text-center" htmlFor="subject">
							Subject *
						</label>
						<input
							name="subject"
							id="subject"
							required
							className="w-4/5"
							value={subject}
							onChange={(e) => {
								setSubject(e.target.value);
							}}
						/>
					</div>
				<div className="mb-3 col-span-2 flex flex-col justify-center items-center">
					<label htmlFor="message" className="block text-center">
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
						className="w-4/5"
					/>
				<button className="text-center bg-teamYellow-100 w-min m-8" type="submit">
					Submit
				</button>
				</div>
			</form>
			<dialog ref={submittedDialogRef}>
				<h2 className='font-bold text-6xl my-16'>Form Submitted</h2>
				<p className='font-semibold text-3xl mx-8 my-16'>Thank you for your submission!</p>
				<button onClick={()=>{submittedDialogRef.current?.close()}} className='absolute bottom-8 inset-x-[40%]'>Close</button>
			</dialog>
		</>
	);
}
