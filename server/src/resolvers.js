module.exports = {
  Query: {
    muscles:(_, {}, { dataSources }) => 
      dataSources.muscleDatabase.getMuscles(),
    muscle: (_, { id }, { dataSources }) =>
      dataSources.muscleDatabase.getMuscleById(id),
    video: (_, { id }, { dataSources }) =>
      dataSources.muscleDatabase.getVideoById(id),
  }
};