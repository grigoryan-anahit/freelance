import code_main from '../images/code_main.svg';
import git from '../images/git.png';
import insta from '../images/insta.png';
import link from '../images/link.png';
import vector from '../images/Vector.png';
import twitter from '../images/twitter.png';
import email from '../images/email.png';
import {Link} from "react-router-dom";
const Portfolio=()=>{
 
    return (
        <div className='portfolio' >
            <div className="rect">
                <p className="laurate"> Laurate<span className="dott">.</span></p>
                <p className="blogText">Blog</p>
            </div>

             <div className='textPart'>
                 <pre className="normalPre">
Hi! 
I'm <span>Laurate</span>
                </pre>
                 <pre className="responsivePre">
        Hi! I'm <span>Laurate</span>
                 </pre>
                 <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, vitae id diam morbi. Eu euismod volutpat pulvinar insit egestas senectus. <br/><br/>

            Tincidunt et nisl odio tellus. Sit a sollicitudin diam interdum semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, vitae id diam morbi. Eu euismod volutpat pulvinar insit egestas senectus.Tincidunt et nisl odio tellus.  <br/><br/>
            
            Sit a sollicitudin diam interdum semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, vitae id diam morbi. Eu euismod volutpat pulvinar insit egestas senectus.  <br/><br/>
                </p>
             </div>
             <div className="imgPart">
                <img src={code_main} alt='mainImg' className="rect2"/> 
            </div>


            <div className="icons">
              <Link to="#" >  <img src={git} alt='git' className="iconGit icon" /></Link>
              <Link to="#" > <img src={insta} alt='insta' className="iconInsta icon" /></Link>
              <Link to="#" > <img src={link} alt='linkedIn' className="iconLink icon" /></Link>
              <Link to="#" > <img src={vector} alt='ko-fi' className="iconVector icon" /></Link>
              <Link to="#" >  <img src={twitter} alt='twitter' className="iconTwitter icon" /></Link>
              <Link to="#" > <img src={email} alt='email' className="iconEmail icon" /></Link>
            </div>
  
         
        </div>
    )
}
export default Portfolio