import React from 'react';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';
import '../../App.css';
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
import { getValidationSchemaLogin } from '../../utils/validationSchema';
import LoginMutation from '../../grapql/loginMutation';

const INITIAL_VALUES = {
  email: '',
  password: ''
};

const LoginFormContainer = () => (
  <Container className="App">
    <Mutation mutation={LoginMutation}>
      {(login, { loading, error, data }) => {
        if (data) {
          return <pre>{data.login}</pre>;
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
              validationSchema={getValidationSchemaLogin()}
              onSubmit={values =>
                login({
                  variables: {
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
                const isValidEmail = !errors.email && values.email !== '';
                const isInvalidEmail = errors.email && true;
                const isValidPassword =
                  !errors.password && values.password !== '';
                const isInvalidPassword = errors.password && true;
                return (
                  <Form className="form" onSubmit={handleSubmit}>
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
