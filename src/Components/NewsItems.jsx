import image from '../assets/react.svg';

function NewsItem({title, description, src, url}) {
  return (
    <div className="d-inline-block ">
    <div className="card bg-dark  text-light mb-3  my-3 mx-3 px-2 py-2 " style={{ height:"450px", width:"370px"}}>
            <img src={src? src:image} style={{height:"200px", width:"350px"}}  className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{description ? description.slice(0,90) :" This news item has no given title..read the description and  get the idea."}</p>
                <a href={url} className="btn btn-primary">Read more...</a>
            </div>
    </div>
    </div>
 
  )
}

export default NewsItem