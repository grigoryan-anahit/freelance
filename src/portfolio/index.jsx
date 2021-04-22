import code_main from '../images/code_main.svg';
import git from '../images/git.png';
import insta from '../images/insta.png';
import link from '../images/link.png';
import vector from '../images/Vector.png';
import twitter from '../images/twitter.png';
import email from '../images/email.png';
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
                <img src={code_main} alt='image' className="rect2"/> 
            </div>


            <div className="icons">
                <img src={git} alt='ko-fi' className="iconGit icon" />
                <img src={insta} alt='ko-fi' className="iconInsta icon" />
                <img src={link} alt='ko-fi' className="iconLink icon" />
                <img src={vector} alt='ko-fi' className="iconVector icon" />
                <img src={twitter} alt='ko-fi' className="iconTwitter icon" />
                <img src={email} alt='ko-fi' className="iconEmail icon" />
            </div>
  
            <div className="fbPlugin" >
                <svg width="59" height="55" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="fbPluginImg">
                    <path d="M0.43273 26.6615C0.43273 11.7915 13.096 0.793121 29.4437 0.793121C45.7914 0.793121 58.4547 11.7915 58.4547 26.6615C58.4547 41.5231 45.7914 52.5298 29.4437 52.5298C26.5154 52.5298 23.6923 52.1731 21.0577 51.5048C20.5429 51.376 19.9954 51.4161 19.5093 51.6181L13.7288 53.9531C13.3801 54.0956 12.9985 54.1569 12.6178 54.1316C12.2372 54.1064 11.8691 53.9954 11.5462 53.8084C11.2232 53.6215 10.9554 53.3643 10.7662 53.0596C10.577 52.7549 10.4724 52.4121 10.4615 52.0615L10.291 47.3048C10.2801 47.0188 10.2067 46.7378 10.0753 46.4784C9.94382 46.219 9.75698 45.9865 9.52586 45.7948C6.61727 43.3835 4.30156 40.4298 2.73322 37.1308C1.16489 33.8317 0.379995 30.2631 0.430917 26.6631L0.43273 26.6615ZM20.5482 21.7915L12.0389 34.2398C11.1886 35.4115 12.8132 36.7748 14.0226 35.9065L23.1828 29.5265C23.4835 29.3109 23.854 29.1938 24.2353 29.1938C24.6167 29.1938 24.9872 29.3109 25.2879 29.5265L32.0493 34.1965C32.5312 34.5252 33.0816 34.7591 33.6662 34.8837C34.2508 35.0083 34.8571 35.0209 35.4472 34.9206C36.0373 34.8204 36.5987 34.6095 37.0962 34.3011C37.5938 33.9927 38.0169 33.5934 38.3392 33.1281L46.8485 20.6798C47.6989 19.5081 46.0743 18.1715 44.8649 19.0131L35.7047 25.3931C35.409 25.6083 35.0429 25.7255 34.6657 25.7255C34.2885 25.7255 33.9224 25.6083 33.6267 25.3931L26.8563 20.7231C26.3751 20.3887 25.8234 20.15 25.2363 20.0222C24.6493 19.8944 24.0397 19.8803 23.4464 19.9808C22.8531 20.0813 22.289 20.2941 21.7901 20.6059C21.2911 20.9176 20.8682 21.3213 20.5482 21.7915Z" fill="white"/>
                </svg>
            </div>     
        </div>
    )
}
export default Portfolio