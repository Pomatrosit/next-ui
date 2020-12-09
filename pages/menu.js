import BurgerAndMenu from "../components/BurgerAndMenu/BurgerAndMenu";
import {useState} from "react";

export default function menu(){
  return(
    <>
    <div className="wrapper">
        <p className="logo">ЛОГО</p>
        <BurgerAndMenu />
    </div>


    <style jsx>{`
      .wrapper{
        padding-top:20px;
        width:90%;
        max-width:1200px;
        margin:0 auto;
        display:flex;
        align-items:center;
        justify-content:space-between;
      }
    `}</style>
    </>

  )
}
