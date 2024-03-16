import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Footer(){
    return(
        <div className='footer'>
           
           <div className="footer-contact">
                <p><strong>Adress:</strong> Järva skjutbaneväg, Solna</p>
                <p><strong>Phone number:</strong> +46760820510</p>
                <p><strong>E-mail:</strong> Parmis.morshedi@chasacadmey.se</p>
            </div>
            <div id="text-socialmedia">
                <p><strong>Social Media</strong></p>
                <div className="button-socialmedia">
                    <a className="linkedin" href="https://www.linkedin.com/in/parmis-morshedi-6a8263291/">
                         <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: ' rgba(255, 255, 255, 0.623)' }} />
                    </a>
                    <a className="github" href="https://github.com/ParmisMorshedi?tab=repositories">
                        <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: ' rgba(255, 255, 255, 0.623)'  }} />
                    </a>
                </div>
            </div>
            
        </div>
      

    )
}