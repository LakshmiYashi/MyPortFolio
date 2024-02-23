function Card(props)
{
    return (
        <div className="col-md-3">
            <div className="card">
               <img className="ProjectImage" src={`${process.env.PUBLIC_URL + props.img}`}></img>
               <div className="text">
               <h3><a rel="na" target="_blank" href={props.githubLink} className="text-muted">{props.text}</a></h3>
               <br></br>
               <p>{props.description}</p>
               </div>
            </div>
        </div>
    )
}
export default Card