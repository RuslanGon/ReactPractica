import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const registorSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("password is required"),
});

const FORM_INITIAL_VALUES = {
  email: '',
  password: ''
};

const LoginPage = ({ onAddUsers }) => {
  const handleSubmit = (values, actions) => {
    onAddUsers(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={registorSchema}
    >
      <Form>
        <h2>Login user</h2>
        <label>
          <span>email:</span>
          <br />
          <Field type="email" name="email" placeholder="email" />
          <ErrorMessage name="email" component="span" />
          <br />
        </label>
        <label>
          <span>password:</span>
          <br />
          <Field type="password" name="password" placeholder="password" />
          <ErrorMessage name="password" component="span" />
          <br />
        </label>
      <br />
      <button type="submit">Login user 🏃</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;