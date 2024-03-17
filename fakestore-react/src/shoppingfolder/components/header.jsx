import React from 'react'

const header = () => {
  return (
    <div className='headerSection'>

      <div className="left">
        <div className="title">
          <h2>Shopping Cart</h2>
        </div>
      </div>
      <div className="center">
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>

        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search ......"  />
      </div>
      <div className="right">
        <div className="signIn">
          SignIn / SignUp
        </div>
        <div className="cart">
          Cart
        </div>
      </div>

    </div>
  )
}

export default header
