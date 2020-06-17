'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlists = sequelize.define('Playlists', {
    playlist_name: DataTypes.STRING,
    id: DataTypes.INTEGER
  }, {});
  Playlists.associate = function(models) {
      Playlists.belongsTo(models.Users, {foreignKey: 'userid'})
  };
  return Playlists;
};