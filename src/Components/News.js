import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": { "id": "news-com-au", "name": "News.com.au" },
            "author": "Nic Savage",
            "title": "‘Ridiculous’: Kiwi cricketer’s SCG masterclass",
            "description": "New Zealand&rsquo;s Glenn Phillips has rescued the Black Caps after an early collapse against Sri Lanka threatened to derail their T20 World Cup campaign on Saturday evening.",
            "url": "https://www.news.com.au/sport/cricket/ridiculous-hitting-glenn-phillips-rescues-new-zealand-in-t20-world-cup-masterclass/news-story/958f75a298c7254eca9bd4fa84dec8c2",
            "urlToImage": "https://content.api.news/v3/images/bin/3967253744ef98b529d2a9c5f36de039",
            "publishedAt": "2022-10-29T11:25:00Z",
            "content": "New Zealand’s Glenn Phillips has rescued the Black Caps after an early collapse against Sri Lanka threatened to derail their T20 World Cup campaign on Saturday evening.\r\nThe 25-year-old became just t… [+2891 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Hi I am a constructor from news component.");
        this.state = {
            articles: this.articles,
            loading: false
        }
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
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title} description={element.description.slice(0, 90)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default News
