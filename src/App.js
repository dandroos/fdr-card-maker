import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "./App.css";

function App() {
  const [dogData, setDogData] = useState({
    name: "",
    breed: "",
    dob: null,
    description: {
      eng: "",
      esp: "",
      deu: "",
      ita: "",
      fra: ""
    },
    photo: "",
    language: "eng"
  });

  const handleChange = e => {
    setDogData({
      ...dogData,
      [e.target.id]: e.target.value
    });
  };

  const handleDescriptionChange = e =>{

    const temp = `description.${}`
    setDogData({
      ...dogData,
      description: e.target.value
    })
  }

  const handleSelect = e => {
    //update the text area with the relevant language
    setDogData({
      ...dogData,
      language: e.target.value
    })
  };

  const updateImage = e =>{
    // crop the image with sharp and update the preview
    // store the img path in the data
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-5 text-center">Dog Profile Generator</h1>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              id="name"
              onChange={handleChange}
              value={dogData.name}
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label for="breed">Breed</Label>
            <Input
              type="text"
              id="breed"
              onChange={handleChange}
              value={dogData.breed}
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label for="dob">DOB</Label>
            <Input type="text" id="dob" onChange={handleChange} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> PPP
            </Label>
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Dogs
            </Label>
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Cats
            </Label>
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Children
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <Row className="m-3">
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <FormGroup>
          <Label for="file">Photo</Label>
          <Input id="file" type="file" />
          </FormGroup>
          <Button onClick={updateImage}>Update image</Button>
        </Col>
        <Col className="text-center">
        <img src="https://via.placeholder.com/468x468?text=Visit+Blogging.com+Now

C/O https://placeholder.com/" alt="placholder"/>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 4, offset: 4 }} className="text-center">
          <FormGroup className="mt-4">
            <Label for="language">Please select language to edit</Label>
            <Input type="select" id="language" onChange={handleSelect}>
              <option value="eng">English</option>
              <option value="esp">Espanol</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label for="language">Description</Label>
            <Input type="textarea" id="description" value={dogData.description[dogData.language]} onChange={handleDescriptionChange} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button block color="primary">
            Generate PDF
          </Button>
        </Col>
        <Col>
          <Button block color="danger">
            Save
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
