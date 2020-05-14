import React from 'react';
import moment from 'moment';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Item } from './ItemType';
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
}: Item) {
    const formattedDate = moment(pubdate).format('LLLL'); //.format('YYYY-MM-DD HH:mm:ssZ');
    return (
        <Card className="Item">
            <CardHeader
                className="ItemHeader"
                avatar={
                    <Avatar
                        className="Avatar"
                        alt={`favicon for ${title} post`}
                        src={`https://www.google.com/s2/favicons?sz=32&domain_url=${domain}`}
                    />
                }
                title={`${blogTitle} - ${author}`}
                subheader={formattedDate}
            />
            <a className="ItemLink" href={link}>{title}</a>
            <div className="CardContent">
                <div className="ItemDescription">
                    <p>{description}</p>
                </div>
                <div className="Hashtags">
                    <p>{categories?.map(category => `#${category}`)?.join(", ") ?? ""}</p>
                </div>
            </div>
        </Card>
    )
}
