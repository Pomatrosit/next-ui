import style from "./NextForm.module.css";
import {useState, useRef} from "react";
import InputErrorIcon from "./errorIcon";
import InputSuccessIcon from "./successIcon";
import Loader from "./loader";

const NextForm = ({css, title}) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [policy, setPolicy] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [translate, setTranslate] = useState("translateX(0%)");

  const [nameSuccess, setNameSuccess] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneSuccess, setPhoneSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);

  let borderNameColor;
  if (!nameSuccess && !nameError) borderNameColor = "#f1f1f1";
  else if (nameSuccess) borderNameColor = "green";
  else borderNameColor = "red";
  let borderPhoneColor;
  if (!phoneSuccess && !phoneError) borderPhoneColor = "#f1f1f1";
  else if (phoneSuccess) borderPhoneColor = "green";
  else borderPhoneColor = "red";
  let borderEmailColor;
  if (!emailSuccess && !emailError) borderEmailColor = "#f1f1f1";
  else if (emailSuccess) borderEmailColor = "green";
  else borderEmailColor = "red";

  const isEmail = email => {
    let pattern  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern .test(String(email).toLowerCase());
  }

  const isPhone = phone => {
    let pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return pattern .test(String(phone).toLowerCase());
  }

  const setErrorFields = () => {
    if (name.length < 2) {
      setNameError(true);
      setNameSuccess(false);
    }
    if (!isPhone(phone)) {
      setPhoneError(true);
      setPhoneSuccess(false);
    }
    if (!isEmail(email)) {
      setEmailError(true);
      setEmailSuccess(false);
    }
  }

  const isFormValid = () => {
    if (name.length >= 2 && policy && isEmail(email) && isPhone(phone)) return true;
    return false;
  }

  const submitHandler = () => {
    if (isFormValid()) {
      setLoading(true);
      /// КАКОЙ ТО ФЕТЧИНГ ВМЕСТО ТАЙМАУТА
      setTimeout(() => {
          setTranslate("translateX(-50%)");
      },3000);
    } else{
      setErrorFields();
      setError(true);
      setTimeout(() => setError(false),2500);
    }
  }

  return(
    <form className={style.form}
         style={{maxWidth:css.maxWidth || "100%"}}
    >

       <div style={{transform:translate}} className={style.formTrack}>
           <div style = {{padding:css.padding || "0"}} className={style.step1}>
               <p className={style.formTitle}>{title}</p>

               <p className={style.inputLabel}>Ваше имя</p>

               <div className={style.inputWrapper}>
                   <input

                     style={{border:`1px solid ${borderNameColor}`}}
                     placeholder="Введите имя"
                     type="text"
                     name="name"
                     className={style.inputName}
                     value = {name}
                     onChange={e => {
                       setName(e.target.value);
                       if (e.target.value.length >= 2) {setNameSuccess(true);setNameError(false);}
                       else setNameSuccess(false);
                     }}
                   />

                   {nameError && <InputErrorIcon />}
                   {nameSuccess && <InputSuccessIcon />}
              </div>


               <p className={style.inputLabel}>Ваш номер телефона</p>

               <div className={style.inputWrapper}>
                   <input
                     style={{border:`1px solid ${borderPhoneColor}`}}
                     placeholder="Введите номер телефона"
                     type="tel"
                     name="phone"
                     className={style.inputPhone}
                     value = {phone}
                     onChange={e => {
                       setPhone(e.target.value);
                       if (isPhone(e.target.value)) {setPhoneSuccess(true);setPhoneError(false);}
                       else setPhoneSuccess(false);
                     }}
                   />

                   {phoneError && <InputErrorIcon />}
                   {phoneSuccess && <InputSuccessIcon />}
              </div>

                <p className={style.inputLabel}>Ваш email</p>

                <div className={style.inputWrapper}>
                    <input
                      style={{border:`1px solid ${borderEmailColor}`}}
                      placeholder="example@gmail.com"
                      type="email"
                      name="email"
                      className={style.inputEmail}
                      value = {email}
                      onChange={e => {
                        setEmail(e.target.value);
                        if (isEmail(e.target.value)) {setEmailSuccess(true);setEmailError(false);}
                        else setEmailSuccess(false);
                      }}
                    />

                    {emailError && <InputErrorIcon />}
                    {emailSuccess && <InputSuccessIcon />}
               </div>

               <div className={style.policy} onClick = {() => setPolicy(prev => !prev)}>
                  <div className={style.policyCheckbox}>
                       {
                          policy && <svg className="policy-checkbox__inner" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.23882 7.05748L1.41653 4.223L0 5.63473L4.23387 9.88625L12.7359 1.41779L11.3243 0L4.23882 7.05748Z" fill="#004990"/>
                          </svg>
                        }
                  </div>
                  <p className={style.policyLabel}>Даю свое согласие на обработку персональных данных</p>
               </div>

                { !loading
                     ? <div className={style.submitBtn} onClick={submitHandler}>Отправить
                        {
                          error && <div className={style.error}>Корректно заполните все поля и согласитесь с политикой конфиденциальности</div>
                        }
                     </div>
                     : <Loader margin="0 auto" color="#04DEC5"/>
                }

           </div>

           <div style = {{padding:css.padding || "0"}} className={style.step2}>
              Спасибо, ваши данные упешно отправлены, мы свяжемся с вами через несколько минут.
           </div>
       </div>

    </form>
  )
}

export default NextForm;
