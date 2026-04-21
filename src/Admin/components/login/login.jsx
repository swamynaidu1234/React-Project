import React from 'react'
import Button from '../../export.modules';
import Textbox from '../../shared/Textbox';
import  "../../styles/common.scss";

export default function Login() {
  function funLogin() {
    alert("Login called");
  }

  return (
    <div className="login">
      <div className="login-box">
        <div className="login-title">Login Page</div>

        <Textbox style="textbox" value="User Name" />
        <Textbox style="textbox" value="Password" />

        <Button text="Login" style="button button__large mt-10" click={funLogin} />

        <span className='fs-12 color_grey'>Forgot Password? <a className='link_blue fs-12' href='#'>Click Here</a></span>
        <span className='fs-12 color_grey'>Don't have an account? <a className='link_blue fs-12' href='#'>Sign Up</a></span>
      </div>
    </div>
  )
}