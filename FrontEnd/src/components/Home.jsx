import React from 'react'
import './CSS/About.css'
import './CSS/landingPage.css'
import './CSS/Contact.css'
import './CSS/Experience.css'
import './CSS/navbar.css'
import './CSS/footer.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd'


function Home() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9nth5yq', 'template_ckdzhgz', form.current, {
        publicKey: 'VbKRiCFnnTr49B1kK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          message.success("Message Sent Succesfully")
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const {  loading , data  } = useSelector(state => state.root)

  // console.log(data)

  const HomeData = data.home; 
  const AboutData = data.about;
  const ExperienceData = data.experience
  // console.log(HomeData)

    const [menuVisible, setMenuVisible] = useState(false);
    const [hamburgerClose, setHamburgerClose] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
      setHamburgerClose(!hamburgerClose);
    };

  return (
          <>
    <nav>
      <div className="navbar">
        <div className="navbar-left">
          <img src="https://res.cloudinary.com/utkarashcloud/image/upload/v1719674567/Logo_e0pxdq.png" alt="" />
        </div>
        <div className="navbar-mid">
          <a href="#Home">
            <h1>Home</h1>
          </a>
          <a href="#about">
            <h1>About</h1>
          </a>
          <a href="#contact">
            <h1>Contact</h1>
          </a>
          <a href="#experience">
            <h1>Experience</h1>
          </a>
        </div>
        <div className="navbar-end">
          <div className="social-link">
            <a href="https://www.facebook.com/profile.php?id=100052951899235&mibextid=ZbWKwL">
              <i className="ri-facebook-circle-fill" />
            </a>
            <a href="https://in.linkedin.com/in/deepak-srivastava-482477314?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile">
              <i className="ri-linkedin-box-fill" />
            </a>
            <a href="https://www.instagram.com/adv_deepak_srivastava?igsh=bmg0NGpoNDM2bjRz">
              <i className="ri-instagram-line" />
            </a>
          </div>
          <div className={hamburgerClose ? 'hamburger close' : 'hamburger'}
            onClick={toggleMenu} id="hamburger">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <div className={menuVisible ? 'menu visible' : 'menu'} id="menu">
            <ul>
              <li className="cl1" onClick={toggleMenu}>
                <i className="ri-home-7-fill" />
                <a href="#Home">Home</a>
              </li>
              <li className="cl2" onClick={toggleMenu}>
                <i className="ri-timeline-view" />
                <a href="#about">About</a>
              </li>
              <li className="cl3" onClick={toggleMenu}>
                <i className="ri-contacts-book-2-line" />
                <a href="#contact">Contact</a>
              </li>
              <li className="cl4" onClick={toggleMenu}>
                <i className="ri-history-line" />
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100052951899235&mibextid=ZbWKwL">
                  <i className="ri-facebook-circle-fill" />
                </a>
                <a href="https://in.linkedin.com/in/deepak-srivastava-482477314?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile">
                  <i className="ri-linkedin-box-fill" />
                </a>
                <a href="https://www.instagram.com/adv_deepak_srivastava?igsh=bmg0NGpoNDM2bjRz">
                  <i className="ri-instagram-line" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div className="main-body" id="Home">
        <div className="main-left">
          <div className="name">
            <h1>Deepak</h1>
            <h1>
              <span>S</span>rivastava
            </h1>
            <h4>Income-Tax Professional</h4>
          </div>
          <div className="profile">
            <h2>Expert in</h2>
            <p id="displayHomepageContent">
              {HomeData.discription}
            </p>
          </div>
          <a href="#contact">
          <div className="contact-button">
              <h3>Contact</h3>
          </div>
          </a>
        </div>
        <div className="main-right">
          <img id="displayHomepagePhoto" src={`${HomeData.image}`} alt="" />
        </div>
      </div>
      <div className="main-body-about" id="about">
        <div className="about">
          <section className="about-me" id="about-me">
            <div className="container">
              <div className="about-me-container">
                <div className="about-me-title">
                  About <br /> Deepak Srivastava
                </div>
                <div className="about-me-flex-container">
                  <div className="about-me-image">
                    <div className="back-div" />
                    <div className="black-image">
                      <img src={`${AboutData.image1}`} alt="black" />
                    </div>
                    <div className="main-image">
                      <img src={`${AboutData.image2}`} alt="color" />
                    </div>
                  </div>
                  <div className="about-me-content">
                    <div className="logo">
                      <img
                        src="https://res.cloudinary.com/utkarashcloud/image/upload/v1719674569/signature_qb4mzz.png"
                        alt="signature"
                      />
                    </div>
                    <div className="text">
                      {AboutData.discription1}
                      <br />
                      <br />
                      {AboutData.discription2}
                    </div>
                  </div>
                </div>
                <div className="mail-button mail-button2">
                  <a href="mailto:lawfirmsrivastava@gmail.com">
                    <img src="https://res.cloudinary.com/utkarashcloud/image/upload/v1719674567/mail_x2msgb.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="main-body-experience" id="experience">
        <div className="container-2">
          <p className="text-blur">Experience</p>
        </div>
        <section className="design-section">
          <div className="timeline">
            <div className="timeline-empty"></div>
            <div className="timeline-middle">
              <div className="timeline-circle" />
            </div>
            <div className="timeline-component timeline-content">
              <h3>{ExperienceData.time1}</h3>
              <p>
              {ExperienceData.discription1}
              </p>
            </div>
            <div className="timeline-component timeline-content">
              <h3>{ExperienceData.time2}</h3>
              <p>
              {ExperienceData.discription2}
              </p>
            </div>
            <div className="timeline-middle">
              <div className="timeline-circle" />
            </div>
            <div className="timeline-empty"></div>
            <div className="timeline-empty"></div>
            <div className="timeline-middle">
              <div className="timeline-circle" />
            </div>
            <div className=" timeline-component timeline-content">
              <h3>{ExperienceData.time3}</h3>
              <p>
              {ExperienceData.discription3}
              </p>
            </div>
            <div className="timeline-component timeline-content">
              <h3>{ExperienceData.time4}</h3>
              <p>
              {ExperienceData.discription4}
              </p>
            </div>
            <div className="timeline-middle">
              <div className="timeline-circle" />
            </div>
          </div>
        </section>
      </div>
      <div className="main-body-contact" id="contact">
        <h1>Contact Us</h1>
        <p>
          Please take a moment to get in touch, we will get back to you shortly.
        </p>
        <form  ref={form} onSubmit={sendEmail}>
        <img src="https://res.cloudinary.com/utkarashcloud/image/upload/v1719674565/contact-mail_osnraw.png" alt="mail" />
          <div className="column">
            <label htmlFor="the-name">Your Name</label>
            <input type="text" name="from_name" id="the-name" />
            <label htmlFor="the-email">Email Address</label>
            <input type="email" name="Email" id="the-email" />
            <label htmlFor="the-phone">Phone Number</label>
            <input type="tel" name="PhoneNo" id="the-phone" />
          </div>
          <div className="column">
            <label htmlFor="the-message">Message</label>
            <textarea name="message" id="the-message" defaultValue={""} />
            <input type="submit" defaultValue="Send Message" />
          </div>
        </form>
      </div>
    </main>
    <footer>
      <div className="footer-container">
        <div className="social-links">
          <div className="link">
            <a href="https://www.facebook.com/profile.php?id=100052951899235&mibextid=ZbWKwL">
              <i className="ri-facebook-circle-fill" />
            </a>
          </div>
          <div className="link">
            {" "}
            <a href="https://in.linkedin.com/in/deepak-srivastava-482477314?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile">
              <i className="ri-linkedin-box-fill" />
            </a>
          </div>
          <div className="link">
            <a href="https://www.instagram.com/adv_deepak_srivastava?igsh=bmg0NGpoNDM2bjRz">
              <i className="ri-instagram-line" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>© Copyright, 2024 - taxexpert</p>
        </div>
      </div>
    </footer>
  </>
  )
}

export default Home