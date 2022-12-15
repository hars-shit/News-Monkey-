import React from 'react'

const NewsIteam =(props)=> {
  
    let { title, description, imageurl, url, author, publishedAt, source } = props;
    return (
      <div>
        <div className="card" >
          <img src={imageurl ? imageurl : "https://media.zenfs.com/en/moneywise_327/1260b4506340b252f2b097c2c849972b"}
            className="card-img-top" alt=" " />
          <div className="card-body">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1' }}>
              {source} </span>
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "None"} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={url} target="blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsIteam
