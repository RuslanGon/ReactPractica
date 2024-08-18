import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const mailBoxSchema = Yup.object({
  userEmail: Yup.string().email("Invalid email format").required("Email is required"),
  userName: Yup.string().required("Name is required"),
});


const FORM_INITIAL_VALUES = {
  userEmail: "",
  userName: "",
};

const MAilBoxForm = ({ onAddUsers }) => {
  const handleSubmit = (values, actions) => {
    onAddUsers(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={mailBoxSchema}
    >
      <Form>
        <h2>Add new MailBox user</h2>
        <label>
          <span>User email:</span>
          <br />
          <Field type="email" name="userEmail" placeholder="email" />
          <ErrorMessage name="userEmail" component="span" />
        </label>
        <br />
        <label>
          <span>User name:</span>
          <br />
          <Field type="text" name="userName" placeholder="name" />
          <ErrorMessage name="userName" component="span" />
          <br />
          <button type="submit">Create new user 👱</button>
        </label>
      </Form>
    </Formik>
  );
};

export default MAilBoxForm;