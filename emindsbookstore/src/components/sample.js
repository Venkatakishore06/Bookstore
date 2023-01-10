const validateForm =()=> {


    const formIsValid = true;
   

    if (! userName) {
      formIsValid = false;
      errors.username = "*Please enter your username.";
    }

    if (typeof (userName) !== "undefined") {
      if (userName.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors.username = "*Please enter alphabet characters only.";
      }
    }

    if (! emailId) {
      formIsValid = false;
      errors.emailid = "*Please enter your email-ID.";
    }

    if (typeof (emailId) !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (! pattern.test(emailId)) {
        formIsValid = false;
        errors.emailid = "*Please enter valid email-ID.";
      }
    }

    if (! mobileNo) {
      formIsValid = false;
      errors.mobileno = "*Please enter your mobile no.";
    }

    if (typeof (mobileNo) !== "undefined") {
      if (! mobileNo.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors.mobileno = "*Please enter valid mobile no.";
      }
    }

    if (! password) {
      formIsValid = false;
      errors.password = "*Please enter your password.";
    }

    if (typeof (password) !== "undefined") {
      if (! password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors.password = "*Please enter secure and strong password.";
      }
    }



  }
