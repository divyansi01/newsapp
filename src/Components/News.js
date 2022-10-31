import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        // console.log("Hi I am a constructor from news component.");
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }
    //runs after render
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a71d872d70064898b1c0e4cfa942f937";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults
        })
    }

    handleNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a71d872d70064898b1c0e4cfa942f937&page=${this.state.page + 1}&pagesize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    handlePrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a71d872d70064898b1c0e4cfa942f937&page=${this.state.page - 1}&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    render() {
        return (
            <div>
                <h1 className='text-center'>
                    <strong>Top Headlines</strong>
                </h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3 mx-3 my-3" key={element.url}>
                            <NewsItem title={element.title} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePrevious}> &larr; Prev</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
