import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="SignUp Form"
      desc1="SignUp here to Login the form using Nav components."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
