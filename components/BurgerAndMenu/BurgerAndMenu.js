import {useState, useRef} from "react";

const BurgerAndMenu = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const burgerClassNames = ["ham", "hamRotate", "ham4"];
  if (isMenuOpen) burgerClassNames.push("active");

  const menuRef = useRef();
  const menuLink1Ref = useRef();
  const menuLink2Ref = useRef();
  const menuLink3Ref = useRef();

  const burgerClickHandler = () => {
    if (!isMenuOpen) {
      setMenuOpen(true);
      setTimeout(()=>{
        menuLink1Ref.current.classList.remove("unactive-link");
        menuLink2Ref.current.classList.remove("unactive-link");
        menuLink3Ref.current.classList.remove("unactive-link");
      } ,500);
    }
    else {
      menuLink1Ref.current.classList.add("unactive-link");
      menuLink2Ref.current.classList.add("unactive-link");
      menuLink3Ref.current.classList.add("unactive-link");
      setTimeout(()=> setMenuOpen(false), 500);
    }
  }

  return(
    <>
    <div className="burger" onClick = {burgerClickHandler}>
            <svg className={burgerClassNames.join(" ")} viewBox="0 0 100 100" width="80">
            <path
                 className="line top"
                 d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path
                 className="line middle"
                 d="m 70,50 h -40" />
            <path
                 className="line bottom"
                 d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
            </svg>
    </div>


    <div className="menu" ref={menuRef}>
       <div className="menu__link menu__link1 unactive-link" ref={menuLink1Ref}>Главная</div>
       <div className="menu__link menu__link2 unactive-link" ref={menuLink2Ref}>О нас</div>
       <div className="menu__link menu__link3 unactive-link" ref={menuLink3Ref}>Контакты</div>
    </div>


    <style jsx>{`
         .burger{
            position:Relative;
            z-index:999;
            cursor:pointer;
         }

         .ham {
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            transition: transform 400ms;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .hamRotate.active {
            transform: rotate(45deg);
          }
          .hamRotate180.active {
            transform: rotate(180deg);
          }
          .line {
            fill:none;
            transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
            stroke:darkblue;
            stroke-width:5.5;
            stroke-linecap:round;
          }

          .ham4 .top {
            stroke-dasharray: 40 121;
          }
          .ham4 .bottom {
            stroke-dasharray: 40 121;
          }
          .ham4.active .top {
            stroke-dashoffset: -68px;
          }
          .ham4.active .bottom {
            stroke-dashoffset: -68px;
          }

          .menu{
            position:fixed;
            top:0;
            right:0;
            bottom:0;
            left:0;
            background: rgba(0, 0, 0, 0.9);
            z-index:998;
            transition:0.5s;
            transform-origin: right;
            transform:scaleX(${isMenuOpen ? "100%" : "0"});
            display:Flex;
            flex-direction:column;
            justify-content:space-around;
          }

          .openMenu{
            transform:scaleX(1);
          }

          .menu__link{
            color:#fff;
            font-size:50px;
            margin-left:10%;
            transition:0.3s;
          }

          .unactive-link{
            transform:translateY(50px);
            opacity:0;
          }

          .menu__link2{
            transition-delay:0.1s;
          }
          .menu__link3{
            transition-delay:0.2s;
          }

          @keyframes showMenu{
            from {
              transform: scaleX(0);
            }

            to {
              transform: scaleX(1);
            }
          }
      `}</style>
    </>
  )
}

export default BurgerAndMenu;
