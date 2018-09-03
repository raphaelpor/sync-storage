// @flow

function handleError(func: string, param: ?string): Promise<string> {
  let message;
  if (!param) {
    message = func;
  } else {
    message = `${func}() requires at least ${param} as its first parameter.`;
  }
  console.warn(message); // eslint-disable-line no-console
  return Promise.reject(message);
}

export default handleError;
