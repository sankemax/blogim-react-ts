import React from 'react';
import moment from 'moment';
import { FeedType } from './FeedType';

moment.locale('he');

export function FeedComponent({
    id,
    blogTitle,
    author,
    linkToWebPage,
    lastPostDate,
}: FeedType) {
    const formattedDate = moment(lastPostDate).format('DD MMMM YYYY HH:mm');
    return (
        <div>
            {id}, {blogTitle}, {author}, {linkToWebPage}, {formattedDate}
        </div>
    );
}
