const alertService = (mode: any, msg: any) => {
  const alertError = document.querySelector("#alert-error");
  const alertErrorMsg = document.querySelector("#alert-error-msg");
  const alertSuccess = document.querySelector("#alert-success");
  const alertSuccessMsg = document.querySelector("#alert-success-msg");

  console.log(alertError);

  if (mode == null) {
    alertSuccessMsg!.innerHTML = msg;
    alertSuccess?.classList.toggle("hidden");
    setTimeout(() => {
      alertSuccess?.classList.toggle("hidden");
    }, 2000);
  } else {
    alertErrorMsg!.innerHTML = msg;
    alertError?.classList.toggle("hidden");
    setTimeout(() => {
      alertError?.classList.toggle("hidden");
    }, 2000);
  }
};

export default alertService;
