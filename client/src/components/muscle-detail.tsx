import React from 'react';
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

  if (loading) return <h2 className="fade-in">Loading...</h2>;
  if (error) return <h2 className="fade-in">ERROR: {error.message}</h2>;
  if (!data || !data.muscle) return <h2 className="fade-in">Not found</h2>;
  if (data.muscle && data.muscle.videos) {
    videoDom = 
    <div className="videos-list">
      <h4><b>Videos</b></h4>
      {data.muscle.videos.map((value) => {
        return <VideoMeta {...value} key={value.id}></VideoMeta>
      })}
    </div>
  }

  return (
    <div className="muscle-detail">
      <h2>{ data.muscle.name }</h2>
      <p>{ data.muscle.description}</p>
      {videoDom}
    </div>
  )
}

export default MuscleDetail;