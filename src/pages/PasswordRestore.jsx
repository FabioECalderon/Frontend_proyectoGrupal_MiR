import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Formik, ErrorMessage } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useNavigate } from 'react-router-dom';

const signInSchema = z.object({
  email: z.string().email('El email no es válido'),
});

export default function PasswordRestore() {
  const [formSent, setFormSent] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: '',
  };

  function handleOK() {
    setTimeout(() => {
      navigate('/login');
    }, 100);
  }

  return (
    <>
      <Row className="Container">
        <Col />
        <Col md={6} lg={5} xl={4}>
          <h1 className="fs-4 my-5 mx-3">Introduce tu dirección de email</h1>
          {!formSent ? (
            <h4 className="fs-6 my-5 mx-3">
              Te enviaremos un mensaje con un enlace para que puedas crear tu
              nueva contraseña.
            </h4>
          ) : (
            <>
              <h4 className="text-danger fs-6 my-5 mx-3">
                Hemos enviado un mensaje con un enlace para que puedas crear tu
                nueva contraseña.
              </h4>
              <Form.Group className="m-3 d-flex">
                <Button
                  variant="primary"
                  type="button"
                  className="text-white px-4 mb-5 flex-grow-1"
                  onClick={handleOK}
                >
                  OK
                </Button>
              </Form.Group>
            </>
          )}
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              setTimeout(() => {
                setFormSent(true);
              }, 100);
            }}
            validationSchema={toFormikValidationSchema(signInSchema)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form className="m-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Ingresa tu email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={
                      touched.email && errors.email ? 'is-invalid' : ''
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
                <Form.Group className="d-flex">
                  <Button
                    variant="primary"
                    type="submit"
                    className="text-white px-4 mb-5 flex-grow-1"
                    disabled={isSubmitting}
                  >
                    Enviar
                  </Button>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Col>
        <Col />
      </Row>
    </>
  );
}
