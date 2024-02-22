import React, {useState} from 'react';
import Center from './infiniteCanvas/center';
import EmailLink from '../components/EmailLink';


import { type infProps, type posDict, InfDiv, InfClickDiv } from './infiniteCanvas/infiniteDiv'

// Adjust offsets based on screen size or use relative units like percentages
const offsetX = -300; // Adjusted for better mobile visibility
const offsetY = 0; // Adjusted for better mobile visibility
const pos : posDict = {
  title: [offsetX, -160 + offsetY], // Adjusted offset for better mobile visibility
  subtitle: [offsetX, -60 + offsetY], // Adjusted offset for better mobile visibility
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

      Hi, I&apos;m Oscar. I am passionate about building net-postive products. <br />
      I am currently a Product Manager at <a href={"https://www.capitalonecareers.com/full-time-programs"} target="_blank" rel="noopener noreferrer">Capital One</a>.
      <br />
      Previously, I worked as product manager on <a href="https://www.microsoft.com/en-us/microsoft-viva/topics" target="_blank" rel="noopener noreferrer" >Viva Topics</a> at Microsoft,  <a href="https://www.binance.us/downloadApp" target="_blank" rel="noopener noreferrer">Mobile App platform</a> at Binance, and <a href="https://aws.amazon.com/partners/saas-boost/" target="_blank" rel="noopener noreferrer">Boost</a> at AWS. <br />
    
      Prior to becoming a PM I did software engineering and machine learning at <a href={"https://en.wikipedia.org/wiki/JD.com"} target="_blank" rel="noopener noreferrer" >JD.com</a>, and dabbled <br /> into venture capital at <a href={"https://sosv.com/" } target="_blank" rel="noopener noreferrer" >SOSV</a>. 
      <br />

      You can find me on <a href="https://www.linkedin.com/in/oscarzhangtc/" target="_blank" rel="noopener noreferrer" >Linkedin</a>. Or email me at: <EmailLink />
      
      </h4>
      
      </InfClickDiv>
    </>
  )
}

export default HomeContent;