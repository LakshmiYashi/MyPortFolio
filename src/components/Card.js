function Card(props)
{
    console.log("each card", props)
    return (
        <div className="col-md-3">
            <div className="card">
               <img className="ProjectImage" src={props.img} alt="props.text"></img>
               <div className="text">
               <h3><a rel="noreferrer" target="_blank" href={props.githubLink} className="text-muted">{props.text}</a></h3>
               <br></br>
               <p>{props.description}</p>
               </div>
            </div>
        </div>
    )
}
export default Card