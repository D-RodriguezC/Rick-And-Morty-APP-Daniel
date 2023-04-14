export const validation = ({ email, password }) => {
  let validEmail = 'Email incorrecto'
  let validPassword = 'Contraseña incorrecta'
  const EMAIL = 'daniel@gmail.com'
  const PASSWORD = 'asd123!@#'

  if (!email.match(/^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    validEmail = 'El nombre de usuario tiene que ser un email valido'
  }
  if (!email.length) {
    validEmail = 'El nombre de usuario no puede estar vacío.'
  }
  if (email.length > 35) {
    validEmail = 'El nombre de usuario no puede tener más de 35 caracteres.'
  }

  if (password.length < 6 || password.length >= 10) {
    validPassword =
      'La contraseña tiene que tener una longitud entre 6 y 10 caracteres.'
  }
  if (!password.length) {
    validPassword = 'La contraseña tiene que tener al menos un número.'
  }

  if (email === EMAIL) validEmail = ''
  if (password === PASSWORD) validPassword = ''

  return { validEmail, validPassword }
}
