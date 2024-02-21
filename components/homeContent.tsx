import React, {useState} from 'react';
import Center from './infiniteCanvas/center';
import EmailLink from '../components/EmailLink';


import { type infProps, type posDict, InfDiv, InfClickDiv } from './infiniteCanvas/infiniteDiv'

const offsetX = -275
const pos : posDict = {
  title: [offsetX, -60],
  subtitle: [offsetX, 40],
}

const HomeContent = (props: infProps) => {

  return (
    <>
      {/* <Center {...props} /> */}
      <InfDiv {...props} pos={pos.title} align='left' >
        <h2>
          Oscar Zhang 
        </h2>
      </InfDiv>
      <InfClickDiv {...props} pos={pos.subtitle} align='left'>
      
      <h4>
      <br />

      Hi, I'm Oscar. I am passionate about building net-postive products. <br />
      I am currently a Product Manager at <a href={"https://www.capitalonecareers.com/full-time-programs"} target="_blank" rel="noopener noreferrer">Capital One</a>.
      <br />
      Previously, I worked as product manager on <a href="https://www.microsoft.com/en-us/microsoft-viva/topics">Viva Topics</a> at Microsoft, and <a href="https://aws.amazon.com/partners/saas-boost/">Boost</a> at AWS. <br />
      Prior to becoming a PM I did software engineering and machine learning at <a href={"https://en.wikipedia.org/wiki/JD.com"} target="_blank" >JD.com</a>, and dabbled <br /> into venture capital at <a href={"https://sosv.com/"}>SOSV</a>. 
      <br />

      This is my CV, and you can also find me on Linkedin. Or email me at: <EmailLink />
      
      </h4>
      
      </InfClickDiv>
    </>
  )
}

export default HomeContent;