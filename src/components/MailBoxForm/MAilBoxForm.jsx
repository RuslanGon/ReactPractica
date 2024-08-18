import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const mailBoxSchema = yup.object({
  userEmail: yup.string().defined(),
  userName: yup.string().default("").nullable(),
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
    <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={handleSubmit}>
      validationSchema={mailBoxSchema}
      <Form>
        <h2>Add new MailBox user</h2>
        <label>
          <span>User email:</span>
          <br />
          <Field type="email" name="userEmail" placeholder="email" required />
          <ErrorMessage name="userEmail" component="span" />
        </label>
        <br />
        <label>
          <span>User name:</span>
          <br />
          <Field type="text" name="userName" placeholder="name" required />
          <ErrorMessage name="userName" component="span" />
          <br />
          <button type="submit">Create new user 👱</button>
        </label>
      </Form>
    </Formik>
  );
};

export default MAilBoxForm;
