import style from "./NextModal.module.css";

const NextModal = ({children, css, setModalOpen, animation}) => {
  return(
      <div className={style.overlay} onClick ={() => setModalOpen(false)}>
        <div onClick ={e => e.stopPropagation()}
             className={style.modal}
             style={{padding:css.padding || "0",
                     maxWidth:css.maxWidth || "100%"
                    }}
           >
           {children}
        </div>
      </div>
  )
}

export default NextModal;
