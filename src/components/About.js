// import Logo from '../data/img/manfirst.png';
import Button from '../components/Button';
function About()
{
    return (

    <div className="about">
        <div className="row">
          <div className="col-md-6">

            <h2 className="sub-title text-muted leftAlign">ABOUT ME</h2>
            <p className="white text-sub-title">Web Developer | Code Enthusiast | Creative Explorer</p>
            <p className="text-muted textCenter" >
            Experienced full-stack developer skilled in both front-end and back-end technologies. Passionate about crafting innovative solutions and delivering exceptional user experiences across diverse projects.
            </p>
            <br></br>
            <div className="about-buttons">
            <Button to="/Skills/" text="Skill Set" class="btn mr-1" />
            <Button to="/about/" text="Read more..." class="btn-outline" />
            </div>

          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>

    )
}
export default About