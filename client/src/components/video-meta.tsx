import React from 'react';
import { Video } from '../types/video';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const VideoMeta: React.FC<Video> = (video) => {
  return (
    <Grid container className="video-meta">
      <Grid item sm={4} xs={12} md={4}>
        <Link to={'/video/'+video.id}><img src={video.imageLink} alt={video.name}></img></Link>
      </Grid>
      <Grid item sm={8} xs={12} md={8}>
        <h3><Link to={'/video/'+video.id}>{video.name}</Link></h3>
        <p>{video.description}</p>
      </Grid>
    </Grid>
  )
}

export default VideoMeta;
