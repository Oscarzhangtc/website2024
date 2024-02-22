import React, {useState} from 'react';
import Center from './infiniteCanvas/center';
import DockSample from './dock/dockSmaple';
import Image from 'next/image'
import Link from 'next/link'


import styles from '../styles/Features.module.css'

import { type infProps, type posDict, InfDiv, InfClickDiv } from './infiniteCanvas/infiniteDiv'

const offsetX = 0
const pos : posDict = {
  firstTitle: [offsetX, -175],
  firstDisplay: [offsetX, 50],
  secondTitle: [offsetX, 330],
  secondDisplay: [offsetX, 490],
  thirdTitle: [offsetX, 730],
  thirdDisplay: [offsetX, 900],

  fourthTitle: [offsetX, 1300],
  fourthDisplay: [offsetX, 1420],
}






const featuresContent = (props: infProps) => {

  return (
    <>
      {/* <Center {...props} /> */}

      <InfDiv {...props} pos={pos.firstTitle} >
        <h2 className={styles.title}>
          This website.
        </h2>
      </InfDiv>
      <InfDiv {...props} pos={pos.firstDisplay} >
        <video autoPlay loop muted playsInline
          src={'/website.mov'}
          width={281} height={500}
          style={{
            height: "auto",
            width: "500px",
            objectFit: "contain",
          }}/>
      </InfDiv>


      <InfDiv {...props} pos={pos.secondTitle} >
      <h3 className={styles.title}>
          Image Steganography
        </h3>
      </InfDiv>
      <InfDiv {...props} pos={pos.secondDisplay} >

        <Link href="https://github.com/Oscarzhangtc/ImageSteganography"className={styles.hover} >

        <Image 
        src="/image.jpg"
        width={300} height={300}
        alt="Picture of the project"     
        />    

        </Link>
      </InfDiv>
        
      <InfDiv {...props} pos={pos.thirdTitle} >
        <h2 className={styles.title}>
          Computational Art
        </h2>
      </InfDiv>
      <InfDiv {...props} pos={pos.thirdDisplay} >

        <Link href="https://github.com/Oscarzhangtc/ComputationalArt"className={styles.hover} >
        
        <p className={styles.mediumText} style={{marginTop: "1px"}}>
        
        </p>

        <Image 
        src="/computationalart.jpg"
        width={300} height={300}
        alt="Picture of the project"     
        />    

        </Link>
      </InfDiv>

      {/* <InfDiv {...props} pos={pos.dockNavigation} >
        <h2 className={styles.title}>
          Dock Navigation
        </h2>
      </InfDiv>
      <InfClickDiv {...props} pos={pos.sampleDock} >
        <div className={styles.sampleDock}>
          <DockSample />
        </div>
      </InfClickDiv> */}
      <InfDiv {...props} pos={pos.fourthTitle} >
        <h2 className={styles.title}>
         Trench 
        </h2>
        <p className={styles.mediumsText}>   a decentralized social network that solves deep-fake and identity theft issues. Coming soon! </p>
        <br />

      </InfDiv>


    </>
  )
}

export default featuresContent;