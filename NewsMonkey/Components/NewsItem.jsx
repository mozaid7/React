import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
