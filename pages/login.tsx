import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import styled from 'styled-components';

type Inputs = {
  username: string,
  password: string,
};

const Form = styled.form`
  & input {
    margin: 16px 0;
    display: block;
    padding: 4px;
    &+span {
      color: red;
    }
  }
`;

const Login = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = data => alert(`Username: ${data.username}, Password: ${data.password}`);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="username"
        ref={register({
          required: 'This filed is required.',
          maxLength: {
            value: 12,
            message: 'Max length is 12',
          },
        })}
      />
      {errors.username && <span>{errors.username.message}</span>}
      <input
        name="password"
        ref={register({
          required: 'This filed is required.',
          maxLength: {
            value: 10,
            message: 'Max length is 10',
          },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <input type="submit" />
    </Form>
  );
};

Login.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Login;
