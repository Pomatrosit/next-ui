import {useRef} from "react";

const Button = ({css, text, clickHandler}) => {
  const buttonBackgroundRef = useRef();
  const buttonCircleRef = useRef();

  const onMouseEnter = () => {
    if (document.documentElement.clientWidth > 768){
      buttonBackgroundRef.current.style.animation = "button-background-open-animation 1s linear forwards";
      buttonCircleRef.current.style.animation = "button-circle-animation 0.25s ease-in";
    }
  }

  const onMouseLeave = () => {
    buttonBackgroundRef.current.style.animation = "button-background-close-animation 1s linear forwards";
    buttonCircleRef.current.style.animation = "none";
  }

  return(
    <>
    <div className="button" onClick = {clickHandler} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

       <div ref = {buttonBackgroundRef} className="button-background">
         <div className="circle-wrapper">
           <div ref = {buttonCircleRef} className="button-circle"></div>
         </div>
       </div>

       <span>{text}</span>
    </div>

    <style jsx>{`
      .button{
        width:${css.width || '250px'};
        height:${css.height || '50px'};
        margin:${css.margin || '0'};
        font-family:${css.fontFamily || "Gilroy"};
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
      }

      .button-background{
        background:${css.background || "#684289"};
        box-shadow:${css.boxShadow || "4px 4px 5px rgba(0, 0, 0, 0.25)"};
        border-radius:8px;
        position:absolute;
        top:0;left:0;right:0;bottom:0;
        z-index:0;
        cursor:pointer;
      }

      .button-circle{
        position:absolute;
        z-index:1;
        background:black;
        height:50px;
        width:50px;
        opacity:0.06;
        transform:scale(0);
        border-radius:50%;
      }

      .circle-wrapper{
        position:absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        border:5px soldi red;
        overflow:hidden;
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .button span{
        font-size:${css.fontSize || "19px"};
        font-weight:${css.fontWeight || "500"};
        color:${css.color || "#fff"};
        text-transform:${css.textTransform || "none"};
        position:relative;
        z-index:10;
      }
      `}</style>
    </>
  )
}

export default Button;
