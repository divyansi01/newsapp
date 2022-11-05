import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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
    constructor(props) {
        super(props);
        // console.log("Hi I am a constructor from news component.");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalArticles: 0
        }
        document.title = `${this.props.category} - NewsUpdates`;
    }

    async update() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a71d872d70064898b1c0e4cfa942f937&page=${this.state.page}&pagesize=${this.props.pageSize}`;
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
    //runs after render
    async componentDidMount() {
        this.update();
    }
    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a71d872d70064898b1c0e4cfa942f937&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalArticles: parsedData.totalResults
        })
    };
    // handleNext = async () => {
    //     this.setState({ page: this.state.page + 1 });
    //     this.update();
    // }

    // handlePrevious = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.update();
    // }


    render() {
        return (
            <div className="container my-3">
                <h1 className='text-center'>
                    <strong>Top {this.props.category} Headlines </strong>
                </h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalArticles}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-3 mx-3 my-3" key={element.url}>
                                    <NewsItem title={element.title} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePrevious}> &larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}

export default News
