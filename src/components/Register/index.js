import React from 'react';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  Container
} from 'reactstrap';
import { getValidationSchemaRegister } from '../../utils/validationSchema';
import RegisterMutation from '../../grapql/registerMutation';

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};
const LoginFormContainer = () => (
  <Container className="App">
    <Mutation mutation={RegisterMutation}>
      {(register, { loading, error, data }) => {
        if (data) {
          const { firstName, lastName, email } = data.register;
          return (
            <Form>
              <h3>
                Register successfully. Here is your registered information
              </h3>
              <Col>
                <FormGroup>
                  <Label>FirstName : {firstName}</Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>LastName : {lastName}</Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Email : {email}</Label>
                </FormGroup>
              </Col>
            </Form>
          );
        }
        return (
          <div>
            {error && (
              <pre>
                {error.graphQLErrors.map(({ message }, i) => (
                  <span key={i}>{message}</span>
                ))}
              </pre>
            )}
            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={getValidationSchemaRegister()}
              onSubmit={values =>
                register({
                  variables: {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password
                  }
                })
              }
            >
              {props => {
                const {
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit
                } = props;
                const isValidFirstName =
                  !errors.firstName && values.firstName !== '';
                const isInvalidFirstName = errors.firstName && true;
                const isValidLastName =
                  !errors.lastName && values.lastName !== '';
                const isInvalidLastName = errors.email && true;
                const isValidEmail = !errors.email && values.email !== '';
                const isInvalidEmail = errors.email && true;
                const isValidPassword =
                  !errors.password && values.password !== '';
                const isInvalidPassword = errors.password && true;
                return (
                  <Form className="form" onSubmit={handleSubmit}>
                    <Col>
                      <FormGroup>
                        <Label>FirstName</Label>
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Enter your firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          valid={isValidFirstName}
                          invalid={isInvalidFirstName}
                        />
                        <FormFeedback valid>Valid firstName</FormFeedback>
                        {errors.firstName && (
                          <FormFeedback>{errors.firstName}</FormFeedback>
                        )}
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label>Lastname</Label>
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Enter your lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          valid={isValidLastName}
                          invalid={isInvalidLastName}
                        />
                        <FormFeedback valid>Valid lastName</FormFeedback>
                        {errors.lastName && (
                          <FormFeedback>{errors.lastName}</FormFeedback>
                        )}
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          valid={isValidEmail}
                          invalid={isInvalidEmail}
                        />
                        <FormFeedback valid>Valid email</FormFeedback>
                        {errors.email && (
                          <FormFeedback>{errors.email}</FormFeedback>
                        )}
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter your password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          valid={isValidPassword}
                          invalid={isInvalidPassword}
                        />
                        {errors.password && (
                          <FormFeedback>{errors.password}</FormFeedback>
                        )}
                      </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        );
      }}
    </Mutation>
  </Container>
);

export default LoginFormContainer;
