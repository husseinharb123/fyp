import React from 'react'
import image2 from './1.jpg'
import image3 from './2.jpg'
import './HeaderProfile.scoped.css'
export default function HeaderProfile() {
  return (
    <>
          <main>
              <div id="profile-upper">
                  <div id="profile-banner-image">
                      <img src={image2} alt="Banner " />
                  </div>
                  <div id="profile-d">
                      <div id="profile-pic">
                          <img src={image3} alt='dfd' />
                      </div>
                      <div id="u-name" >Store Name</div>
                  </div>
              </div>
          </main>
    </>
  )
}
