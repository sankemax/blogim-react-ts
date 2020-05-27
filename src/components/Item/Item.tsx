import React from 'react';
import moment from 'moment';
import { ItemType } from './ItemType';
import "./Item.css";

moment.locale('he');

export function ItemComponent({
    id,
    title,
    blogTitle,
    domain,
    description,
    link,
    feedUrl,
    author,
    pubdate,
    categories,
    comments,
}: ItemType) {
    const formattedDate = moment(pubdate).format('DD MMMM YYYY HH:mm');
    return (
        <div className="Item">
            <div className="ItemHeader">
                <div className="ItemDate">{formattedDate}</div>
                <div className="BlogTitleAndFav">
                    <div className="BlogTitle">{blogTitle}</div>
                    <div className="FeedDiv">(<a className="FeedLink" href={feedUrl}>Feed</a>)</div>
                    <img className="ItemFav" alt={`favicon for ${title} post`} src={`https://www.google.com/s2/favicons?sz=16&domain_url=${domain}`} />
                </div>
            </div>
            <a className="ItemLink" href={link}>{title}</a>
            <div className="CardContent">
                <div className="ItemDescription">
                    <p>{description?.replace(/<\/?[^>]+(>|$)/g, '') ?? ''}</p>
                </div>
                <div className="Hashtags">
                    <p>{categories?.map(category => `#${category}`)?.join(" ") ?? ""}</p>
                </div>
            </div>
        </div>
    )
}
