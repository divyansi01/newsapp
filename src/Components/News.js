import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("Hi I am a constructor.");
    }
    render() {
        return (
            <div className='mx-3'>
                <h2>
                    <strong>
                        Top headlines
                    </strong>
                </h2>
                <div className="row">
                    <div className="col-md-3">
                        <NewsItem title="TITLE" description="desc" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="T1" description="desc1" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title=" t2" description="desc2" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
