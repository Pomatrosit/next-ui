const InputSuccessIcon = () => {
  return(
    <>
      <svg width="26" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C15.5229 0 20 4.47745 20 10C20 15.5225 15.5229 20 10 20C4.47779 20 0 15.5222 0 10C0 4.47779 4.47779 0 10 0ZM10 1.5C5.30621 1.5 1.5 5.30621 1.5 10C1.5 14.6938 5.30621 18.5 10 18.5C14.6944 18.5 18.5 14.6941 18.5 10C18.5 5.30585 14.6944 1.5 10 1.5Z" fill="#1C8238"/>
        <rect x="6.88867" y="9.51782" width="2.74318" height="0.914393" transform="rotate(45 6.88867 9.51782)" fill="#1C8238"/>
        <rect x="14" y="7.57812" width="7.31514" height="0.914392" transform="rotate(135 14 7.57812)" fill="#1C8238"/>
      </svg>

      <style jsx>{`
        svg{
          position:absolute;
          right:10px;
          top:12px;
        }
      `}</style>
    </>
  )
}

export default InputSuccessIcon
