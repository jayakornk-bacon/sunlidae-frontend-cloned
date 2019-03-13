import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Button } from '../../theme';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// const Label = styled.label`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1.5rem;

//   > span {
//     flex: 0 1 20%;
//     text-align: right;
//   }

//   > input,
//   > textarea {
//     flex: 0 1 calc(80% - 3rem);
//     margin-left: auto;
//     margin-bottom: 0;
//   }
// `;

const InputWrapper = styled.div`
  margin-bottom: 1.5rem;

  > input,
  > textarea {
    width: 100%;
  }
`;

const SelectWrapper = styled.div`
  display: inline-block;
`;

const Submit = styled(Button)`
  max-width: 15rem;
`;

const EditProfile = () => {
  const [name, setName] = useState('');
  const nameChangeHandler = e => setName(e.target.value);

  const [username, setUsername] = useState('');
  const usernameChangeHandler = e => setUsername(e.target.value);

  const [website, setWebsite] = useState('');
  const websiteChangeHandler = e => setWebsite(e.target.value);

  const [description, setDescription] = useState('');
  const descChangeHandler = e => setDescription(e.target.value);

  const [email, setEmail] = useState('');
  const emailChangeHandler = e => setEmail(e.target.value);

  const [phone, setPhone] = useState('');
  const phoneChangeHandler = e => setPhone(e.target.value);

  const [gender, setGender] = useState('');
  const genderChangeHandler = e => setGender(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`A name was submitted: ${name}`);
  };

  return (
    <Container>
      <Row>
        <Col col="3" />
        <Col col="9">
          <h1>Edit Profile</h1>
          <Form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-header">Edit Profile</div>
              <div className="card-body">
                <div className="row align-items-start">
                  <label htmlFor="name" className="col-sm-3 text-sm-right">Name</label>
                  <InputWrapper className="col-sm-9">
                    <input type="text" id="name" value={name} onChange={nameChangeHandler} />
                  </InputWrapper>
                </div>
                <div className="row align-items-start">
                  <label htmlFor="username" className="col-sm-3 text-sm-right">Username</label>
                  <InputWrapper className="col-sm-9">
                    <input type="text" id="username" value={username} onChange={usernameChangeHandler} />
                  </InputWrapper>
                </div>
                <div className="row align-items-start">
                  <label htmlFor="website" className="col-sm-3 text-sm-right">Website</label>
                  <InputWrapper className="col-sm-9">
                    <input type="text" id="website" value={website} onChange={websiteChangeHandler} />
                  </InputWrapper>
                </div>
                <div className="row align-items-start">
                  <label htmlFor="description" className="col-sm-3 text-sm-right">Description</label>
                  <InputWrapper className="col-sm-9">
                    <textarea id="description" value={description} onChange={descChangeHandler} />
                  </InputWrapper>
                </div>
                <div className="row mb-4"><strong className="text-muted col-sm-9 offset-sm-3">Private Information</strong></div>
                <div className="row align-items-start">
                  <label htmlFor="email" className="col-sm-3 text-sm-right">Email</label>
                  <InputWrapper className="col-sm-9">
                    <input type="email" id="email" value={email} onChange={emailChangeHandler} />
                  </InputWrapper>
                </div>
                <div className="row align-items-start">
                  <label htmlFor="gender" className="col-sm-3 text-sm-right">Gender</label>
                  <InputWrapper className="col-sm-9">
                    <SelectWrapper className="select">
                      <select id="gender" value={gender} onChange={genderChangeHandler}>
                        <option value="0">Not Specified</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                    </SelectWrapper>
                  </InputWrapper>
                </div>
                <div className="row align-items-start">
                  <label htmlFor="phone" className="col-sm-3 text-sm-right">Phone Numbers</label>
                  <InputWrapper className="col-sm-9">
                    <input type="text" id="phone" value={phone} onChange={phoneChangeHandler} />
                  </InputWrapper>
                </div>
              </div>
            </div>
            <Submit contrast type="submit" className="mt-4">Save</Submit>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfile;
