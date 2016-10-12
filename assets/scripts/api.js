'use strict';

const app = require('./app.js');

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

let user;
let host;
const signIn = (data) => {
  console.log(data);
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
    success: (res) => {
      user = res.user;
      host = res.host;
    }
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};
//
const getDex = (data) => {
  return $.ajax({
    url: app.host + '/poke-pc/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const showTeams = (data) => {
  console.log('this is the data from show teams');
  return $.ajax({
    url: app.host + '/draftings',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

//NOTE NOTE NOTE  NOT working
const updateNicknames = (data) => {
  console.log();
  return $.ajax({
    url: app.host + '/draftings/' /*+ some id maybe Depending on html..id */,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

//NOTE NOTE NOTE  NOT working

const addPokemonToTeam = (data) => {
  console.log(data);
  return $.ajax({
    url: app.host + '/draftings/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data:   { "pokemon": {
        "number": "1",
        "name": "bulbasaur",
        "pokemontype": "grass/poison"
      }
    },
  });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getDex,
  showTeams,
  updateNicknames,
  addPokemonToTeam
};
