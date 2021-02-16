import { Form, FormControl, Button } from "react-bootstrap";

function HikeForm() {
  return (
    <Form className="flex-container">
      <h4>Let's go hiking!</h4>
      <FormControl
        type="text"
        placeholder="Search for hike trails"
        className="mr-sm-2 searchBar"
      />
      <Button variant="light" className="button">
        Search
      </Button>
    </Form>
  );
}

export default HikeForm;
