export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ON_AUTH_FORM_FIELD_CHANGE = 'ON_AUTH_FORM_FIELD_CHANGE';

const FORM_FIELD_MAX_LENGTH = 100;

export function onAuthFormFieldChange({target: {name, value}}) {
  value = value.slice(0, FORM_FIELD_MAX_LENGTH);
  return {
    type: ON_AUTH_FORM_FIELD_CHANGE,
    payload: {name, value}
  };
}

export function login(fields) {
  const getPromise = async ({fetch, validate}) => {
    try {
      await validate(fields)
        .prop('email').required().email()
        .prop('password').required().simplePassword()
        .promise;
      // In the real app, we would use fetch wrapper.
      const response = await fetch(`/api/v1/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fields)
      });
      if (response.status !== 200) throw response;
      return response.json();
    } catch (error) {
      // We can handle different password/username server errors here.
      if (error.status === 401)
        throw validate.wrongPassword('password');
      throw error;
    }
  };

  return (deps) => ({
    type: 'LOGIN',
    payload: {
      promise: getPromise(deps)
    }
  });
}
