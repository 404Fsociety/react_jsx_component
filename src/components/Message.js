import React from 'react'
const firstName = 'Nizar'; 
const Message = () => {
  return (
    <div>
      {firstName ? (
        <div>
          <h1>Hello, {firstName}!</h1>
          <img style={{width:"600px",height:"200px"}} src={"https://static.vecteezy.com/ti/vecteur-libre/p3/10925820-modele-de-conception-de-bienvenue-colore-gratuit-vectoriel.jpg"} alt="Profile" />
        </div>
      ) : (
        <h1>Hello, there!</h1>
      )}
    </div>
  )
}

export default Message