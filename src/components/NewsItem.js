import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl , newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
             <span className=" badge rounded-pill bg-danger" >{source}</span>
          </div>
            <img src={!imageUrl?"data:image/jpeg;base64,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":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href= {newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
               
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem