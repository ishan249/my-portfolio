import React from 'react'
import githubLogo from "../../images/github-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import twitterLogo from "../../images/twitter.png";
import gmailImg from "../../images/gmail.png"
function Footer() {
  return (
    <div className='flex justify-center font-AlbertSans'> 
      <a className='mx-4 mb-2' rel="noreferrer" href="https://www.linkedin.com/in/ishan-patel-2b7062201/" target="_blank"> <img src={linkedinLogo} alt="" height="24px" width="24px" /></a>
      <a className='mx-4 mb-2' rel="noreferrer" href="https://twitter.com/Ishanp249" target="_blank"> <img src={twitterLogo} alt="" height="24px" width="24px" /></a>
      <a className='mx-4 mb-2'rel="noreferrer" href="https://github.com/ishan249" target="_blank"> <img src={githubLogo} alt="" height="24px" width="24px" /></a>
      <a className='mx-4 mb-2'rel="noreferrer" href="mailto:249patelishan@gmail.com" target="_blank"> <img src={gmailImg} alt="" height="24px" width="24px" /></a>
    </div>
  )
}

export default Footer