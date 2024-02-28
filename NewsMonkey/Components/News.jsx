import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        this.state = {
           articles: [],
           loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ff8ac88c401c429abb7bc74d2fe203b3"
        let data = await fetch(url);
        let parsedData =await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
        
    }
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=> {
        return <div className="col md-4" key={element.url} >
             <NewsItem title={element.title? element.title: ""} description={element.title? element.description: ""} imageUrl={element.urlToImage} newsUrl={element.url} />
         </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
