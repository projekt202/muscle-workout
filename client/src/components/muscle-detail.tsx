import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Muscle } from '../types/muscle';
import { VideoMeta } from './index';

export const GET_MUSCLE_DETAIL = gql`
  query MuscleDetail($muscleId: ID!) {
    muscle(id: $muscleId) {
      name
      description 
      videos {
        id
        name
        imageLink
        videoLink
      }
    }
  }
`;

interface MuscleId {
  muscleId?: number
}

interface MuscleRespond {
  muscle: Muscle
}

const MuscleDetail: React.FC<MuscleId> = ({muscleId}) => {
  const { 
    data, 
    loading, 
    error 
  } = useQuery<
    MuscleRespond , MuscleId
    >(GET_MUSCLE_DETAIL,
    { variables: { muscleId } }
  );
  
  let videoDom;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data || !data.muscle) return <p>Not found</p>;
  if (data.muscle && data.muscle.videos) {
    videoDom = 
    <div className="videos-list">
      <p><b>Videos</b></p>
      {data.muscle.videos.map((value) => {
        return <VideoMeta {...value}></VideoMeta>
      })}
    </div>
  }

  return (
    <Fragment>
      <h2>{ data.muscle.name }</h2>
      <p>{ data.muscle.description}</p>
      {videoDom}
    </Fragment>
  )
}

export default MuscleDetail;