import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const searchFormSchema = Yup.object({
    searchTerm: Yup.string().required("Search term is required"),
});


const FORM_INITIAL_VALUES = {
  searchTerm: ""
};

const SearchForm = ({ onAddUsers }) => {
  const handleSubmit = (values) => {
    onAddUsers(values);

  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={searchFormSchema}
    >
      <Form>
        <h2>Search product by brand or name</h2>
        <label>
          <Field type="text" name="searchTerm" placeholder="search" />
          <ErrorMessage name="searchTerm" component="span" />
        </label>
        <br />
      <button type="submit" aria-label="Search">🔎</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;