import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ContactForm() {
  return (
    <Form name="contact-form" action="/success" method="POST" data-netlify="true">
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
        <Form.Control as="textarea" rows={5} name="message" id="message" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
