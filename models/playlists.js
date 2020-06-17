'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlists = sequelize.define('Playlists', {
    playlist_name: DataTypes.STRING,
    id: DataTypes.INTEGER
  }, {});
  Playlists.associate = function(models) {
    Playlists.belongsToMany(models.Songs, {
      through: 'Songs_Playlists',
      foreignKey: 'playlistId',
      otherKey: 'songid'
    })
    // associations can be defined here
  };
  return Playlists;
};