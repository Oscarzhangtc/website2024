import React, { useState, useEffect } from 'react';
import { type infProps, type posDict, InfDiv } from './infiniteCanvas/infiniteDiv'

import styles from '../styles/About.module.css'

const offsetx = -287.5
const pos : posDict = {
  overview: [offsetx, -200],
  credit: [offsetx, -45],
  adopted: [offsetx, 105],
  poweredby: [0, 250],
}

interface credit {
  name: string,
  link: string,
}


const Age = () => {
  const [age, setAge] = useState<number | undefined>(); // Specify the type as number | undefined
   
  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2000-02-23T09:24:00');
    setAge(((Date.now() - birthTime.getTime()) / divisor)); // Ensure to call getTime() to get the milliseconds
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const formattedAge = age !== undefined ? age.toFixed(10) : '';

  return <span style={{ width: '110px', display: 'inline-block' }}>{formattedAge}</span>;
};

const AboutContent = (props: infProps) => {


  const credits: credit[] = [
    {name: 'cmd k', link: 'https://cmdk.paco.me/'},
    {name: 'PLATZ', link: 'https://github.com/szgbo/platz'},
    {name: 'infinite canvas', link: 'https://github.com/ekzhang/dispict/tree/main/src/lib'},
    {name: 'cursor chat', link: 'https://github.com/jackyzha0/cursor-chat'}
    
  ]


  return (
    <>
      <InfDiv {...props} pos={pos.overview} align='left'>
        <h2 className={styles.title}>
           More About Me
        </h2>
        <p className={styles.mediumText} style={{marginTop: "1px"}}>
         I was born in Shanghai, raised in Hawaii, spent my teenagehood in Vancouver, and adult-hood in Boston. 
         <br />
         I am <Age /> years old. <br />
         I have also been a semi-professional dancer for over a decade. 
        </p>
      </InfDiv>
      <InfDiv {...props} pos={pos.credit} align='left'>
        <h2 className={styles.title}>
          More About This Site 
        </h2>
        <p className={styles.mediumText} style={{marginTop: "1px"}}>
          1. Cursor Chat: Press &ldquo;/&ldquo; to chat real-time with others on this site. <br />
          2. Search: CMD + K to search on this website. <br />
          3. Infinite Canvas: Drag/scroll to find out the background behind this site is borderless. <br />
        
          </p>

      
      </InfDiv>

      <br />
      <InfDiv {...props} pos={pos.adopted} align='left'>
        <h2 className={styles.titleAnnoying}>
          Credits
        </h2>
        <p className={styles.smallText} style={{marginTop: "-7px"}}>
          Components adopted from the following repo and modified/optimized for development
        </p>
        <div className={styles.creditList}>
          {credits.map((credit) => (
              <div key={credit.name}>
                <a href={credit.link} style={{textDecoration: "none", fontWeight: "300"}} target="_blank" rel="noopener noreferrer">{credit.name}</a>
              </div>
            ))}
        </div>
      </InfDiv>
      <InfDiv {...props} pos={pos.poweredby} align='center'>
        <div className={styles.adoptedList} style={{marginTop: "-2px"}}>
          <div style={{textAlign:"center"}}>
              <p style={{textDecoration: "none", fontWeight: "300", fontSize: "0.9rem", lineHeight: "1.2em"}}>
              
              </p>
          </div>
        </div>
      </InfDiv>
    </>
  )
}

export default AboutContent;