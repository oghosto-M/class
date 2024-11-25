import React from 'react'
import './Footer.css'
import boxLight from '../../assets/box-light.svg'
import nesdaqLight from '../../assets/nasdaq-light.svg'
import volkswagenLight from '../../assets/volkswagen-light.svg'
import netappLight from '../../assets/netapp-light.svg'
import eventbriteLight from '../../assets/eventbrite-light.svg'
import { AiOutlineGlobal } from "react-icons/ai";

const Footer = () => {

  let iconStyle = {color : '#fff' , fontSize: '25px'}

  let images =[
    {id: 1, img: nesdaqLight},
    {id: 2, img: volkswagenLight},
    {id: 3, img: boxLight},
    {id: 4, img: netappLight},
    {id: 5, img: eventbriteLight},
  ]

  let variables = [
    { id: 1, input: 'radio1' ,title: 'Certifications by Issuer', link1: 'Amazon Web Services (AWS) Certifications', link2: 'Six Sigma Certifications', link3: 'Microsoft Certifications', link4: 'Cisco Certifications', link5: 'Tableau Certifications', link6: 'See all Certifications' },

    {id: 2, input: 'radio2' ,  title: 'Web Development', link1: 'Web Development', link2: 'JavaScript', link3: 'ReactJS', link4: 'Angular', link5: 'Java' },

    {id: 3, input: 'radio3' , title: 'IT Certifications', link1: 'Amazon AWS', link2: 'AWS Certified Cloud Practitioner', link3: 'AZ-900: Microsoft Azure Fundamentals', link4: 'AWS Certified Solutions Architect - Associate', link5: 'Kubernetes' },

    {id: 4, input: 'radio4' , title: 'Leadership', link1: 'Leadership', link2: 'Management Skills', link3: 'Project Management', link4: 'Personal Productivity', link5: 'Emotional Intelligence' },

    {id: 5, input: 'radio5' , title: 'Certifications by Skill', link1: 'Cybersecurity Certification', link2: 'Project Management Certification', link3: 'Cloud Certification', link4: 'Data Analytics Certification;', link5: 'HR Management Certification', link6: 'See all Certifications' },

    {id: 6, input: 'radio6' , title: 'Data Science', link1: 'Data Science', link2: 'Python', link3: 'Machine Learning', link4: 'ChatGPT', link5: 'Deep Learning'},

    {id: 7, input: 'radio1=7' , title: 'Communication', link1: 'Communication Skills', link2: 'Presentation Skills', link3: 'Public Speaking', link4: 'Writting', link5: 'PowerPoing'},

    {id: 8, input: 'radio8' , title: 'Business Analytics & Intelligence', link1: 'Microsift Excel', link2: 'SQL', link3: 'Microsoft Power BI', link4: 'Data Analysis', link5: 'Business Analysis'},

  ]

  let variables2 = [
    {id: 1, title: 'About', link1: 'About Us', link2: 'Careers', link3: 'Contact us', link4: 'Blog', link5: 'Investors'},

    {id: 2, title: 'Discovery Udemy', link1: 'Get the app', link2: 'Teach on Udemy', link3: 'Plans and Pricing', link3: 'Affiliate', link4: 'Help and Support'},

    {id: 3, title: 'Udemy For Business', link1: 'Udemy Business'},

    {id: 4, title: 'Legal & Accessibility', link1: 'Accessibility statement', link2: 'Privacy policy', link3: 'Sitemap', link4: 'Terms'}
  ]



  return (

  <footer className='footer'>
    <div className="section1">
        
      <div className="top-footer">
        <div className="top-footer__left">
          <p className="top-footer__left-desc">Top companies choose <a href="" className='top-footer__left-link'>Udemy Business</a> to build in-demand career skills.</p>
        </div>
        <div className="top-footer__right">
          {
            images.map((image) => {
              return (
                <React.Fragment key={image.id}>

                  <div className="top-footer__right-logo">
                    <img src={image.img} alt="" />
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      </div>
      <div className="bottom-footer">
        <h3 className="bottom-footer__title">
        Explore top skills and certifications
        </h3>
        <div className="bottom-footer__content">
          {
            variables.map((item) => {
              return(
                <React.Fragment>
                <div className="section-accordion">
                <div className="row-accordion">
                  <input type="checkbox" id={item.input} hidden/>
                  <label htmlFor={item.input} className='header-accordion'>
                    <span>{item.title}</span>
                    <span></span>
                  </label>
                  <ul className="bottom-footer__content__items-list">
                      <li className="bottom-footer__content__items-link"><a href="">{item.link1}</a></li>
                      <li className="bottom-footer__content__items-link"><a href="">{item.link2}</a></li>
                      <li className="bottom-footer__content__items-link"><a href="">{item.link3}</a></li>
                      <li className="bottom-footer__content__items-link"><a href="">{item.link4}</a></li>
                      <li className="bottom-footer__content__items-link"><a href="">{item.link5}</a></li>
                      <li className="bottom-footer__content__items-link"><a href="">{item.link6}</a></li>
                    </ul>
                </div>
              </div>
                </React.Fragment>

              )
            })

          }

          {
            variables.map((item) => {
              return(
                <React.Fragment key={item.id}>
                  <div className="bottom-footer__content-items">
                    <div className="bottom-footer__content__items-title">
                      <h3>{item.title}
                      </h3>
                    </div>
                    <ul className="bottom-footer__content__items-list">
                      <li className="bottom-footer__content__items-link"><a href="">{item.link1}</a></li>
                      <li className="bottom-footer__content__items-link"><a href="">{item.link2}</a></li>
                      <li className="bottom-footer__content__items-link"><a href="">{item.link3}</a></li>
                      <li className="bottom-footer__content__items-link"><a href="">{item.link4}</a></li>
                      <li className="bottom-footer__content__items-link"><a href="">{item.link5}</a></li>
                      <li className="bottom-footer__content__items-link"><a href="">{item.link6}</a></li>
                    </ul>
                  </div>
                </React.Fragment>
              )
            })
          }

        </div>
      </div>
    </div>

    <div className="section2">
      <div className="bottom-footer__content">
        {
          variables2.map((item2) => {
            return(
              <React.Fragment key={item2.id}>
              <div className="bottom-footer__content-items">
                <div className="bottom-footer__content__items-title">
                  <h3>{item2.title}</h3>
                </div>
              
              <ul className="bottom-footer__content__items-list">
                <li className="bottom-footer__content__items-link"><a href="">{item2.link1}</a></li>
                <li className="bottom-footer__content__items-link"><a href="">{item2.link2}</a></li>
                <li className="bottom-footer__content__items-link"><a href="">{item2.link3}</a></li>
                <li className="bottom-footer__content__items-link"><a href="">{item2.link4}</a></li>
                <li className="bottom-footer__content__items-link"><a href="">{item2.link5}</a></li>
              </ul>
              </div>
              </React.Fragment>
            )

          })
        }

         
      </div>
      <div className="bottom-footer__more-details">
        <div className="bottom-footer__more-details__icon">
          <h1>Udemy</h1>
          <p>© 2024 Udemy, Inc.
          </p>
        </div>
        <div className="bottom-footer__more-details__setting">
          <a href="">Cookie settings</a>
        </div>
        <div className="bottom-footer__more-details__language">
          <AiOutlineGlobal  style={iconStyle}/>
          <p>English</p>

        </div>
      </div>
    </div>
  </footer>


  )
}

export default Footer