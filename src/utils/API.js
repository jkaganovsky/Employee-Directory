/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {

  getRandomUser: function() {
    return axios.get("https://randomuser.me/api/");
  }

  // getName: function() {
  //   return axios.get("https://randomuser.me/api/?inc=name")
  // }

};