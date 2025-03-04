import formikForm from './components/formikForm';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Schéma de validation avec Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Le nom d'utilisateur est requis."),
  email: Yup.string().email("Email invalide").required("L'email est requis."),
  password: Yup.string().required("Le mot de passe est requis."),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }} // Valeurs initiales
      validationSchema={validationSchema} // Validation via Yup
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form Submitted", values); // Afficher les valeurs soumises
        setSubmitting(false); // Définir la soumission à terminée
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {/* Champ Username */}
          <div>
            <label>Nom d'utilisateur:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>

          {/* Champ Email */}
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label>Mot de passe:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>

          {/* Bouton de soumission */}
          <button type="submit" disabled={isSubmitting}>
            S'inscrire
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
