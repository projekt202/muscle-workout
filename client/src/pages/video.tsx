import React, { Component } from 'react';

import { VideoDetail } from '../components'; 
import Grid from '@material-ui/core/Grid';

interface VideoPageProps {
  match? :any
}
interface VideoPageState {}

class VideoPage extends Component<VideoPageProps, VideoPageState> {
  render() {
    const videoId = this.props.match.params.id;
    return (
      <Grid container className="video-page-container">
        <Grid item xs={12} sm={12} md={12}> 
          <VideoDetail {...{videoId: videoId }} />
        </Grid>
      </Grid>
    )
  }
}

export default VideoPage