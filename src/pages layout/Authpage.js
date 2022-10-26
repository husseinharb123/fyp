import React from 'react'
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Signin from '../components/sign in/Signin.js';
import Signup from '../components/sign up/Signup.js';

export default function HomeLayout() {
  return (
    <>
<Header/>
<Signin/>
<Footer/>

    </>
  );
}
