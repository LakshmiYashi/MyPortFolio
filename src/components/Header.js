 import Logo from '../data/portfolioimage.png';
//import Button from '../components/Button';
import TypingEffect from './NameTyping';
function Header()
{
    return (
        <header className="header">
        <div className="row">
          <div className="col-md-6">
            <p className="white title">
              Hi, This is 
            </p>
            <TypingEffect />
            <p className="text-muted">
            A passionate and results-driven <span className="white text-sub-title" >Full-stack Web developer</span> with a knack for turning ideas into powerful, user-friendly web applications. 

            </p>
            <br></br>
            {/* <Button to="/contact/" text="Contact" class="btn" /> */}
          </div>
          <br></br>
          <br></br>

          <div className="col-md-6 logo-col">
            <img className="img-fluid logo" alt="burhan kocadağ" src={Logo}></img>
          </div>
        </div>
      </header>

    )
}
export default Header