const { urlencoded } = require("express");
const express = require("express");
const Game = require("../models/game");
const User = require("../models/user");
const axios = require('axios');
const urlencode = require("urlencode");
const champions = require('../champion.json');

const router = express.Router();

const api_key = "RGAPI-b51c0d9e-3fde-4063-b605-2d633994d1b8";

router.get('/', async (req, res, next) => {
    try{
        console.log("[GAME]");
        res.send('Hello, Game');
    } catch(err){
        console.error(err);
        next(err);
    }
});

let summonerDict;
router.get('/getData', async (req, res, next) => {
    try{
        console.log("[GETDATABYSUMMONERNAME]");
//        let name = "hide on bush";
//        let position = "미드";
        const {name} = req.body.name;
        const {position} = req.body.position;
        let encodedName = urlencode(name);
        console.log(encodedName);
        let url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodedName}?api_key=${api_key}`;
//        let url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/hide%20on%20bush?api_key=RGAPI-9c43cfbe-a610-4d19-8f93-82a99adb5887";
        const summonerIdData = await axios.get(url);
        let summonerId = summonerIdData["data"]["id"];
        console.log(summonerId);
        url = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${api_key}`;
//        url = "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/4A-r8LyUHnKR-eLYeDDRpcOGTy9q9Rpv-M-F3F1_DcxI7A?api_key=RGAPI-9c43cfbe-a610-4d19-8f93-82a99adb5887";
        const summonerStatusData = await axios.get(url);

        url = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}/top?count=5&api_key=${api_key}`;
        const championData = await axios.get(url);
        let champion = JSON.parse(JSON.stringify(champions));
        console.log(name, "'s champion list");
        champList = [];
        for (let i = 0; i < 5; i++){
            console.log(champion[0][championData['data'][i]['championId'].toString()]);
            champList.push(champion[0][championData['data'][i]['championId'].toString()]);
        }
        console.log(champList);

        summonerDict = {};
        summonerDict['summonerName'] = summonerStatusData['data'][0]['summonerName'];
        summonerDict['position'] = position;
        summonerDict['tier'] = summonerStatusData['data'][0]['tier'] + summonerStatusData['data'][0]['rank'];
        summonerDict['win'] = summonerStatusData['data'][0]['wins'];
        summonerDict['loss'] = summonerStatusData['data'][0]['losses'];
        summonerDict['win_rates'] = Math.round(100 * summonerDict['win'] / (summonerDict['win'] + summonerDict['loss']))/100;
        summonerDict['champions'] = champList;
        console.log(summonerDict);

        const game = await Game.create({
            summonerName: summonerDict['summonerName'],
            encryptedSummonerId: summonerId,
            tier: summonerDict['tier'],
            win: summonerDict['win'],
            loss: summonerDict['loss'],
            win_rates: summonerDict['win_rates'],
            position: summonerDict['position']
        });

        return res.json(summonerDict);
        
    } catch (err) {
        console.error(err);
        next(err);
    }
})


module.exports = router;
