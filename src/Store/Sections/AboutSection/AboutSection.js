import React from 'react'
import './AboutSection.scoped.css'
export default function AboutSection() {
  return (
    <>
    
    
          <body>
              <main className="main-grid">
                  <div className="head">
                      <h1 className="page-title">About us</h1>
                      <p className="subtitle">We are specialsts in web development. Creativity and fun are our ingredients for awesome work.</p>
                  </div>
                  <img className="main-image" src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="two men in a coworking space"/>

                      <div className="main-text">
                          <h2 className="section-title">We're really great guys</h2>
                          <p>Coding is a passion, and our team is the best you can get to thrive in your project. Our strengths are HTML, CSS & Javascript. If you want to learn more, please have a look at our Portfolio. </p>
                          <p>We have learned everything from scratch and spend sleepless nights to learn all the fundamentals es well as the advanced stuff to create projects. We love to work in a co-working space and that´s why you will not find us a "normal" office.</p>

                          <h2 className="section-title sub">We can do all sorts of great stuff </h2>
                          <p>Honestly, we would like to support you with your project. We will get results together and at the end of the day, what else matters?</p>
                          <p>So sure, maybe we're a bit different from what you'd expect, but if you want to get a professional Web presence we're the guy´s for you.</p>
                      </div>

              </main>

              <footer className="footer main-grid">
                  <div className="footer-text">
                      <p className="end">Awesome, you studied our page. Please follow us on our social media accounts. They are linked on the right site. You can`t miss the icons. If you liked our projects we would be more than happy to work for you.</p>
                      <p className="copyright">© example2020</p>
                  </div>
                  <div className="social">
                      <a href="#" className="facebook icon"><i className="fab fa-facebook-f"></i></a>
                      <a href="#" className="twitter icon"><i className="fab fa-twitter"></i></a>
                      <a href="#" className="instagram icon"><i className="fab fa-instagram"></i></a>
                  </div>
              </footer>
          </body>

    
    
    
    
    </>
  )
}
