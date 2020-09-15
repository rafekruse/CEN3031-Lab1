"use strict";

import * as http from "http";
import { readJsonFile } from "./readFile.js";

let footballClub;
// https://www.npmjs.com/package/node-fetch
// Get the length of a json file

const checkfileLoaded = (route) =>
  new Promise((resolve, reject) => {
    http
      .get(`http://localhost:5000/${route}`, (res) => {
        res.once("error", reject);
        let data = "";
        res.on("data", (c) => {
          data += c;
        });
        res.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .once("error", reject)
      .end();
  });

  const checkErrPage = (route) =>
  new Promise((resolve, reject) => {
    http
      .get(`http://localhost:5000/${route}`, (res) => {
        res.once("error", reject);
        let data = "";
        res.on("data", (c) => {
          data += c;
        });
        res.on("end", () => {
          resolve(data);
        });
      })
      .once("error", reject)
      .end();
  });

const getFootballClubData = (_footballClub_) => {
  footballClub = _footballClub_;
};

const test = async (callback, route, expected) => {
  const r = await callback(route);
  return [
    r.length == expected,
    JSON.stringify(r) == JSON.stringify(footballClub),
  ];
};


const main = async () => {
  readJsonFile("schools", getFootballClubData);
  const r = await test(checkfileLoaded, "footballClub", 54);
  const err_page_data = await checkErrPage("coconut")
  console.log('test(checkfileLoaded, "footballClub", 54)', r);
  console.log('checkErrPage("coconut")', [err_page_data.includes("Bad gateway error")]);
};
main();
