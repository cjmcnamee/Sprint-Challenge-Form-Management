import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

function Login({ values, errors, touched, handleSubmit, status }) {
  const [loginData, setLoginData] = useState([])
  console.log(loginData);

  useEffect(() => {
    if (status) {
      setLoginData([...status]);
    }
  }, [status]);

  return(
    <Form>
      <div>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && ( <p>{errors.username}</p> )}
      </div>
      <div>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && ( <p>{errors.password}</p> )}
      </div>
      <button data-testid="login" type="submit">Login</button>

      {loginData.map(log => (
        <p key={log.id}>{log.username}</p>
      ))}
    </Form>
  );
}

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
      .min(6, "password must have at least 6 characters.")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('http://localhost:5000/api/register', values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response))
    axios
      .get('http://localhost:5000/api/restricted/users')
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response))
  }
})(Login);

export default FormikLogin;
