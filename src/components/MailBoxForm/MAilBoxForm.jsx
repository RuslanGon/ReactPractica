import { Formik, Form, Field, ErrorMessage } from 'formik';

const FORM_INITIAL_VALUES = {
  userEmail: '',
  userName: ''
}

const MAilBoxForm = ({onAddUsers}) => {

const handleSubmit = (event) => {


onAddUsers(formData)


}

  return (
    <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={handleSubmit}>
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

export default MAilBoxForm