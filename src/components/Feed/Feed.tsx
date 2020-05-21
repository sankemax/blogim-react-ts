import React from 'react';
import moment from 'moment';
import { FeedType } from './FeedType';
import Grid, { GridSpacing, GridSize } from '@material-ui/core/Grid';
import "./Feed.css";

moment.locale('he');

type FeedTypeExtension = FeedType & {
  spacing: GridSpacing
  mainXs: GridSize
  secondaryXs: GridSize
  classes: Record<"grid" | "title", string>
}

export function FeedComponent({
  id,
  blogTitle,
  author,
  linkToWebPage,
  lastPostDate,
  numberOfItems,
  spacing,
  mainXs,
  secondaryXs,
  classes,
}: FeedTypeExtension) {
  const formattedDate = moment(lastPostDate).format('DD/MM');
  return (
    <Grid container spacing={spacing}>
      <Grid className={classes.grid} item xs={mainXs}>
        <img className="FeedFav" alt={`favicon for blog`} src={`https://www.google.com/s2/favicons?sz=16&domain_url=${linkToWebPage}`} />
        <a className="FeedLink" href={linkToWebPage}>{blogTitle}</a>
      </Grid>
      <Grid className={classes.grid} item xs={mainXs as number - 2 as GridSize}>
        {author}
      </Grid>
      <Grid className={classes.grid} item xs={secondaryXs}>
        {numberOfItems}
      </Grid>
      <Grid className={classes.grid} item xs={secondaryXs}>
        {formattedDate}
      </Grid>
    </Grid>
  );
}
