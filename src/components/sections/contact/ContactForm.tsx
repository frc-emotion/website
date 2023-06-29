'use client';
const submitForm = async (e: { preventDefault: () => void; }) => {
	e.preventDefault();
	console.log("Form submitted");
	try {
	  const request = new XMLHttpRequest();
	  request.open("POST", 'https://discord.com/api/webhooks/1119817808285536286/UYnwohzS2BLwrTT8L3LYKKdv_XaR6mUucPB4oIqkzt4K-MTh0PnO03iITJnCpVISEYkC');
	  request.setRequestHeader("Content-type", "application/json");
	  let subject = String((document.getElementById("subject") as HTMLInputElement).value);
	  if (subject == undefined || subject == "" || subject == " ") {
		subject = "None provided";
	  }
	  const fieldsArr = [
		{
		  name: "Name",
		  value: String((document.getElementById("name") as HTMLInputElement).value),
		},
		{
		  name: "Email",
		  value: String((document.getElementById("email") as HTMLInputElement).value),
		},
		{
		  name: "Message",
		  value: String((document.getElementById("message") as HTMLInputElement).value),
		},
	  ];
  
	  if ((document.getElementById("company") as HTMLInputElement).value !== "") {
		fieldsArr.splice(1, 0, {
		  name: "Company",
		  value: String((document.getElementById("company") as HTMLInputElement).value),
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
  };

export default function ContactForm() {
    return (
		<form className="text-center" name="contact-form" onSubmit={submitForm}>
			<div className="grid gap-4 grid-cols-2">
				<input type="hidden" name="form-name" value="contact-form" />
		
				<div className="mb-3">
					<p className="text-center">Full Name *</p>
					<input className="w-4/5" type="text" name="name" id="name" required />
				</div>

				<div className="mb-3">
					<p className="text-center">Company</p>
					<input className="w-4/5" type="text" name="company" id="company" />
				</div>

				<div className="mb-3">
					<p className="text-center">Email *</p>
					<input className="w-4/5" type="email" name="email" id="email" required />
				</div>
		
				<div className="mb-3">
					<p className="text-center">Subject</p>
					<input
						name="subject"
						id="subject"
						required
						className="w-4/5" 
					/>
				</div>
			</div>
				<div className="mb-3">
					<p className="text-center">Message *</p>
					<textarea
						name="message"
						id="message"
						required
						className="w-4/5" 
					/>
					</div>
				<button className="text-center" type="submit">Submit</button>
				
		</form>
    );
  }