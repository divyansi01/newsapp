import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (

            <div className='container mx-3 my-5'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://pixabay.com/get/gfa47dcbbee094d0f1bf3186edd4c66945b995579a8310931ed2891c26e1d934d9706253826eefe2e8cd08c595f32e7899a1ee4ce9214c2871c811d8d434a5bc52fb33afc672e3ab5ce862e3e6770b1e0_1920.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
