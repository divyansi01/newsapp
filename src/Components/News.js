import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

// business
// entertainment
// general 
// health 
// science
// sports
// technology

export class News extends Component {
    static defaultProps = {
        county: 'in',
        pageSize: 8,
        category: 'General'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        // console.log("Hi I am a constructor from news component.");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    //runs after render
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a71d872d70064898b1c0e4cfa942f937&pagesize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        })
    }

    handleNext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a71d872d70064898b1c0e4cfa942f937&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({
                loading: true
            })
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                loading: false,
                page: this.state.page + 1
            })
        }
    }

    handlePrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a71d872d70064898b1c0e4cfa942f937&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.setState({
            loading: true
        })
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            articles: parsedData.articles,
            loading: false,
            page: this.state.page - 1
        })
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className='text-center'>
                    <strong>Top Headlines</strong>
                </h1>
                {this.state.loading && <Spinner />}

                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3 mx-3 my-3" key={element.url}>
                            <NewsItem title={element.title} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePrevious}> &larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
