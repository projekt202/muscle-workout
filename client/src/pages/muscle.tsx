import React, { Component } from 'react';

import { MuscleDetail, BodyImage, AddMuscleModal } from '../components'; 
import Grid from '@material-ui/core/Grid';

interface MusclePageProps {}
interface MusclePageState {
  muscleId?: number;
}

class MusclePage extends Component<MusclePageProps, MusclePageState> {
  constructor(props: MusclePageProps) {
    super(props);
    this.state = {}
    this.onMuscleClick = this.onMuscleClick.bind(this);
  }
  component = this;
 
  onMuscleClick(muscleId: number) {
    this.setState( state => (
      {
        muscleId: muscleId
      }
    ));
  }

  render() {
    return (
      <Grid container className="muscle-page-container">
        <Grid item xs={12} sm={12} md={6} classes={{ root: 'body-image-container' }}> 
          <AddMuscleModal></AddMuscleModal>
          <BodyImage {...{muscleId: this.state.muscleId, onMuscleClick: this.onMuscleClick}}></BodyImage>
        </Grid>
        <Grid item xs={12} sm={12} md={6} classes={{ root: 'muscle-detail-container' }}>
          {this.state.muscleId && <MuscleDetail  {... {muscleId: this.state.muscleId}} />}
          {!this.state.muscleId && <h2>Please select a muscle to start</h2> }
        </Grid>
      </Grid>
    )
  }
}

export default MusclePage