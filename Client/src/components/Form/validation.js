const validation = (userData) => {
  let error = {};

  //? errores de UseName
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
    error.username = "el nombre de usuario tiene que ser un email";
  }

  if (!userData.email) {
    error.username = "el nombre de usuario no puede estar vacío";
  }

  if (userData.email.length > 35) {
    error.username = "el nombre de usuario no puede tener más de 35 caractere";
  }

  //? errores de Pasword
  if (!userData.password.match(/\d/)) {
    error.password = "La contraseña debe contener un numero";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    error.password = "La password debe contener entre 6 y 10 caracteres";
  }

  return error;
};

export default validation;
