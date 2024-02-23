import { NavLink } from 'react-router-dom';
  
function Footer()
{    
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-muted footer-title">Lakshmi Shree</p>
                        <p className="text-muted">
                        Bringing Ideas to Life with React/Angular Magic!!
            </p>
                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">Important Pages</p>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About Me</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">Contact Information</p>

                    <a href="mailto:lakshmishreess@gmail.com" className="text-muted">Mail: lakshmishreess@gmail.com</a>

                    </div>
                    <div className="col-md-3">
                    <p className="text-muted footer-title">Social Media</p>

                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/lakshmissubrahmanyam/" className="text-muted">Linkedin</a><br></br>
                    <a rel="noreferrer" target="_blank" href="https://github.com/LakshmiYashi" className="text-muted">Github</a><br></br>

                    </div>
                </div>
            </div>

        </footer>
    );
}
export default Footer