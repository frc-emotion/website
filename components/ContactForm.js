import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const submitForm = async (e) => {
  e.preventDefault();
  console.log("Form submitted");
  try {
    const request = new XMLHttpRequest();
    request.open("POST", process.env.WEBHOOK_URL);
    request.setRequestHeader("Content-type", "application/json");
    const fieldsArr = [
      {
        name: "Name",
        value: String(document.getElementById("name").value),
      },
      {
        name: "Email",
        value: String(document.getElementById("email").value),
      },
      {
        name: "Message",
        value: String(document.getElementById("message").value),
      },
    ];

    if (document.getElementById("company").value !== "") {
      fieldsArr.splice(1, 0, {
        name: "Company",
        value: String(document.getElementById("company").value),
      });
    }

    const params = {
      username: "team2658.org",
      avatar_url:
        "https://avatars.githubusercontent.com/u/36017746?s=400&u=e55b83cf74c03119a931a08fb43d566f9087cfa0&v=4",
      content: "New form submission",
      embeds: [
        {
          title: "contact-form",
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
    <Form name="contact-form" onSubmit={submitForm}>
      <Form.Control type="hidden" name="form-name" value="contact-form" />

      <Form.Group className="mb-3">
        <Form.Label>Full Name *</Form.Label>
        <Form.Control type="text" name="name" id="name" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" name="company" id="company" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email *</Form.Label>
        <Form.Control type="email" name="email" id="email" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message *</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="message"
          id="message"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
