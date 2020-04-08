const { SQLDataSource } = require('datasource-sql');

class MuscleDatabase extends SQLDataSource {
  getMuscles() {
    return this.knex
      .select('*')
      .from('muscles');
  }
  getMuscleById(id) {
    return this.knex
      .select('*')
      .from('muscles AS muscle')
      .leftJoin('muscleVideos AS mv', 'mv.muscleId', 'muscle.id')
      .leftJoin('videos AS video', 'mv.videoId', 'video.id')
      .where('muscle.id', '=', id)
      .options({nestTables: true})
      .then(results => {
        return this.muscleReducer(results);
      });
  }
  getVideoById(id) {
    return this.knex
      .select('*')
      .from('videos AS video')
      .leftJoin('muscleVideos AS mv', 'mv.videoId', 'video.id' )
      .leftJoin('muscles AS muscle', 'mv.muscleId', 'muscle.id')
      .where('video.id', '=', id)
      .options({nestTables: true})
      .then(results => {
        return this.videoReducer(results);
      });
  }
  
  muscleReducer(muscles) {
    if(muscles.length > 0) {
      const videos = muscles.map(muscle => muscle.video)
      return {
        ...muscles[0].muscle,
        videos
      };
    }
    return null;
  }
  
  videoReducer(videos) {
    if(videos.length > 0) {
      const muscles = videos.map(video => video.muscle)
      return {
        ...videos[0].video,
        muscles
      };
    }
    return null;
  }
}

module.exports = MuscleDatabase;