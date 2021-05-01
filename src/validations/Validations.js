const regex = {
  email: new RegExp(
    '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
  ),
  contactNo: new RegExp("^[789]d{9}$"),
  password: new RegExp(
    "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$"
  ),
};

class Validators {
  static email(value, message) {
    if (value) {
      const result = regex.email.test(value);
      if (!result) return { error: true, message };
    }
    // return false;
  }
  static required(value, message) {
    if ( value && value.toString().length ? false : true) {
      return { error: true, message };
    }
    return false;
  }

  static contactNo(value, message) {
    const length = value ? value.toString().length : 0;
    if (length > 0) {
      const result = regex.contactNo.test(value);
      if (!result) {
        return { error: true, message };
      }
    }
    return false;
  }
  static password(value, message) {
    if (value) {
      const result = regex.password.test(value);
      if (!result) {
        return { error: true, message };
      }
    }
    return false;
  }
}
const validateInput = (validators, value) => {
  if (validators && validators.length) {
    for (let i = 0; i < validators.length; i++) {
      const error = validators[i].check(value, validators[i].message);
      if (error) {
        return error;
      }
    }
  }
  return false;
};

export { validateInput, Validators };
