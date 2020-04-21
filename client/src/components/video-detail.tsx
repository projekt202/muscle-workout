import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Video } from '../types/video';

export const GET_VIDEO_DETAIL = gql`
  query VideoDetail($videoId: ID!) {
    video(id: $videoId) {
      id
      name
      description
      videoLink
    }
  }
`;

interface VideoId {
  videoId?: number
}

interface VideoRespond {
  video: Video
}

const VideoDetail: React.FC<VideoId> = ({videoId}) => {
  const { 
    data, 
    loading, 
    error 
  } = useQuery<
    VideoRespond , VideoId
    >(GET_VIDEO_DETAIL,
    { variables: { videoId } }
  );
  
  if(!videoId) return <h2>Please select a video to start</h2>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data || !data.video) return <p>Not found</p>;

  return (
    <Fragment>
      <h1>{ data.video.name }</h1>
      <p>{ data.video.description }</p>
      <iframe title={data.video.name} width="576" height="315"
        src={ data.video.videoLink }>
      </iframe>
    </Fragment>
  )
}

export default VideoDetail;