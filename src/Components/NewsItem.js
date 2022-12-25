// import { getByTitle } from '@testing-library/react'ss
import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (

        <div className='container mx-5 my-5'>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={!imageUrl ? "logo512.png" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More...</a>
                </div>
            </div>
        </div>



        // <div className="container mx-5 my-5">
        //     <div class="card mb-3" >
        //         <div class="row g-0">
        //             <div class="col-md-4">
        //                 <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
        //                     <span className="badge rounded-pill bg-danger">{source}</span>
        //                 </div>
        //                 <img src={!imageUrl ? "logo512.png" : imageUrl} className="card-img-top" alt="..." />
        //             </div>
        //             <div class="col-md-8">
        //                 <div class="card-body">
        //                     <h5 class="card-title">{title}</h5>
        //                     <p class="card-text">{description}</p>
        //                     <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
        //                     <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More...</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )

}

export default NewsItem
