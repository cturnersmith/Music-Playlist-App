'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Playlists, {foreignKey: 'userid'})
  };
  return Users;
};