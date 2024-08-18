import { Formik, Form, Field, ErrorMessage } from 'formik';


const MAilBoxForm = ({onAddUsers}) => {

const handleSubmit = (event) => {
event.preventDefault();

const userEmail = event.currentTarget.elements.userEmail.value
const userName = event.currentTarget.elements.userName.value

const formData = {userEmail, userName}

onAddUsers(formData)

event.currentTarget.reset();
}

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
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