import React, { useState, useEffect, useRef } from 'react';
import Center from './infiniteCanvas/center';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/Tutorial.module.css'
import EmailLink from '../components/EmailLink';

import { type infProps, type posDict, InfDiv, InfClickDiv } from './infiniteCanvas/infiniteDiv'

const offsetX = -350;
const pos : posDict = {
  message: [offsetX, -50],
  terms: [offsetX, 30],
  link: [offsetX, 200],
}



const TutorialContent = (props: infProps) => {

  return (
    <>
      {/* <Center {...props} /> */}
      <InfDiv {...props} pos={pos.message} align='left'>
        <h3 className={styles.message}>
          Feel free to get in touch, you can email me at: <EmailLink />
        </h3>
      </InfDiv>
      <InfDiv {...props} pos={pos.terms} align='left'>
        <a className={styles.icons} href="mailto:oscarzhang@3279.com" target='_blank' rel="noopener">       
         <FontAwesomeIcon icon={faEnvelope as IconProp}/>
        </a>

        <a className={styles.icons} href="https://www.linkedin.com/in/oscarzhangtc" target='_blank'rel="noopener">
        <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
        </a>

        <a className={styles.icons} href="https://github.com/oscarzhangtc" target='_blank' rel="noopener">
        <FontAwesomeIcon icon={faGithub as IconProp} />
        </a>



        
      </InfDiv>

        
    </>
  )
}

export default TutorialContent;