export const regNumber = /^\d+$/;
export const regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
export const regEmail =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regPhoneNumber = /^\d{8,13}$/;
export const regAccountNumber = /^\d{6,10}$/;
export const regBSBNumber = /^\d{6}$/;
export const regOTP = /^\d{4}$/;
export const regUserName = /^[a-zA-Z]+$/;
export const regPassword = /^[1-9a-zA-Z]{4,}$/;
export const createPassword =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
export const zipCode = /^[0-9]{5}$/;
export const cardNumber = /^[0-9]{16}$/;
export const mm = /^(0[1-9]|10|11|12)$/;
export const yyyy = /^20[0-9]{2}$/;
export const mobileNumber = /^[1-9]{3}-[0-9]{3}-[0-9]{4}/;
export const priceCheck = /^[1-9]+(,\d{1,})*(\.\d{1,2})?$/;
export const specialCharacterForgotPassword = /^[a-zA-Z0-9\\@]+$/;
export const miles = /^[0-9]{2,5}$/;
