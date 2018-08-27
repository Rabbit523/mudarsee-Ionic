import moment from 'moment';

const PWD_MIN_LENGTH = 5;
const NAME_MAX_LENGTH = 20;
const MOBILE_NO_LENGTH = 10;


export class ValidationService {
  constructor() {

  }
  /* Field Validators */

  /** Email validator */
  public static emailValidator(control) {
    var emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if (emailPattern.test(control.value)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  /** Password validator */
  public static passwordValidator(control) {
    var password = "" + control.value;

    if (password.length >= PWD_MIN_LENGTH) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  /**
   * Confirm Password Valiator
   */

  public static passwordMatchValidator(control) {
    if (control.value == control.root.value['password']) {
      return null;
    } else {
      return { 'Password does not math': true };
    }
  }


  /** User name validator */
  public static nameValidator(control) {
    var name = "" + control.value;

    if (name.length >= NAME_MAX_LENGTH) {
      return null;
    } else {
      return { 'invalidName': true };
    }
  }

  /** Mobile number validator */
  public static mobileValidator(control) {
    var mobile = "" + control.value;

    if (mobile.length == MOBILE_NO_LENGTH) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }
  /* Method Validators*/

  /** This returns the form is validate or not */
  validate(form) {
    if (form.valid) {
      return true;
    } else {
      return false;
    }
  }
  public static toDateValidate(control) {
    var to_date = moment(control.value);
    var from_date = moment(control.root.value['from_date']);
    if (to_date > from_date) {
      return null;
    } else {
      return { 'To date should be greater than from date': true };
    }

  }

}

