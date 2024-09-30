import { Button, ButtonGroup, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { LOGIN_URL } from "../common/endpoints.js";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const locales = useIntl();

  const clearInputs = () => {
    setUsername("");
    setPassword("");
    setError(false);
  };

  const tryLogin = () => {
    axios
      .post(LOGIN_URL, { login: username, password })
      .then((res) => {
        const data = res.data;
        if (data.status !== "success") {
          setError(true);
        } else {
          navigate("/home");
        }
      })
      .catch(() => setError(true));
  };

  return (
    <Form className="mt-3 mx-auto w-50 border p-5 rounded-2">
      <h2 className="text-center">
        <FormattedMessage id="login-title" />
      </h2>
      <Form.Group controlId="username" className="my-3">
        <Form.Label className="fw-bold">
          <FormattedMessage id="login-username" />
        </Form.Label>
        <Form.Control
          type="text"
          placeholder={locales.formatMessage({ id: "login-username" })}
          aria-label="username"
          value={username}
          isInvalid={error}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="password" className="my-3">
        <Form.Label className="fw-bold">
          <FormattedMessage id="login-password" />
        </Form.Label>
        <Form.Control
          type="password"
          placeholder={locales.formatMessage({ id: "login-password" })}
          aria-label="password"
          value={password}
          isInvalid={error}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      {error && (
        <p className="fw-bold text-danger">
          <FormattedMessage id="login-error" />
        </p>
      )}
      <ButtonGroup className="w-100">
        <Button variant="primary" onClick={tryLogin}>
          <FormattedMessage id="login-enter" />
        </Button>
        <Button variant="danger" onClick={clearInputs}>
          <FormattedMessage id="login-cancel" />
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default LoginForm;
