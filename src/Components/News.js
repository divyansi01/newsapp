import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalArticles, setTotal] = useState(0)


    const update = async () => {
        props.setProgres(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a71d872d70064898b1c0e4cfa942f937&page=${page}&pagesize=${props.pageSize}`;

        setLoading(true)
        let data = await fetch(url);
        props.setProgres(30);
        let parsedData = await data.json();
        props.setProgres(70);
        console.log(parsedData);

        setArticles(parsedData.articles);
        setTotal(parsedData.totalArticles);
        setLoading(false);

        props.setProgres(100);

    }

    useEffect(() => {
        document.title = `${props.category} - NewsUpdates`;
        update();

    })

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a71d872d70064898b1c0e4cfa942f937&page=${page + 1}&pagesize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles));
        setTotal(parsedData.totalResults);
    };

    // handleNext = async () => {
    //     this.setState({ page: this.state.page + 1 });
    //     this.update();
    // }

    // handlePrevious = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.update();
    // }

    return (
        <div className="container my-3">
            <h1 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>
                <strong>Top {props.category} Headlines </strong>
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalArticles}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-3 mx-3 my-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePrevious}> &larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div> */}
        </div>
    )

}

News.defaultProps = {
    county: 'in',
    pageSize: 8,
    category: 'General'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
