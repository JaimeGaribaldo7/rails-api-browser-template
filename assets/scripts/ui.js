'use strict';

const app = require('./app.js');

const success = (data) => {
  console.log(data);
};

const changePasswordSuccess = () => {
  console.log('password successfully changed');
};

const failure = (error) => {
  console.log(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
};

const signOutSuccess = () => {

  app.user = null;
};

const getDexSuccess = (data) => {
  console.log("GETTING DEX HERE");
  console.log("THIS IS ALL DEX DATA ****", data);
};

const showTeamsSuccess = (data) => {
  console.log("GETTING TEAMS HERE");
  console.log("THIS IS TEAMS DATA>>", data);
};

const updateNicknamesSuccess = (data) => {
  console.log("GETTING NICKNAME DATA HERE");
  console.log("THIS IS the DATA>>", data);
};

const addPokemonToTeamSuccess = (data) => {
  console.log("Here's an added Pokemon????", data);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  getDexSuccess,
  showTeamsSuccess,
  updateNicknamesSuccess,
  addPokemonToTeamSuccess
};
