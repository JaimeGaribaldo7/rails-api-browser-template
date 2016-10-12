'use strict';

const getFormFields = require('../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  console.log('CONSOLE LOG HERE *****');
  let data = getFormFields(event.target);

  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
.done(ui.signInSuccess)
.fail(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

// DEX FUNCTIONS

const onGetPokedex = () => {
  event.preventDefault();
  api.getDex()
  .done(ui.getDexSuccess)
  .fail(ui.failure);
};

const onShowTeams = () => {
  event.preventDefault();
  api.showTeams()
  .done(ui.showTeamsSuccess)
  .fail(ui.failure);
};

const onAddPokemonToTeam = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.addPokemonToTeam(data)
  .done(ui.addPokemonToTeamSuccess)
  .fail(ui.failure);
};

const onUpdateNicknames = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateNicknames(data)
  .done(ui.updateNicknamesSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {

  // FORMS PORTION STARTS HERE
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#get-dex').on('click', onGetPokedex);
  $('#view-teams').on('click', onShowTeams);
  $('#change-nicknames').on('submit', onUpdateNicknames);
  $('#add-pokemon').on('click', onAddPokemonToTeam);
};

module.exports = {
addHandlers
};
