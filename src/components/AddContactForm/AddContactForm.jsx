import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { apiLogin } from "../../redux/auth/operation.js";
import * as Yup from "yup";

const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("password is required"),
  });
  
  const FORM_INITIAL_VALUES = {
    email: '',
    password: ''
  };


const AddContactForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
      dispatch(apiLogin(values))
      actions.resetForm();
    };
  
    return (
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
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
}

export default AddContactForm