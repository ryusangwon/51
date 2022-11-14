const { urlencoded } = require("express");
const express = require("express");
const Game = require("../models/game");
const axios = require('axios');
const urlencode = require("urlencode");
const champions = require('../champion.json');

const router = express.Router();

const api_key = "RGAPI-9c43cfbe-a610-4d19-8f93-82a99adb5887";


router.get('/', async (req, res, next) => {
    try{
        console.log("[GAME]");
        res.send('Hello, Game');
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.get('/getData', async (req, res, next) => {
    try{
        console.log("[GETDATABYSUMMONERNAME]");
        let name = "hide on bush";
//        let name = req.body.name;
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
        summonerDict = {};
        summonerDict['summonerName'] = summonerStatusData['data'][0]['summonerName'];
        summonerDict['tier'] = summonerStatusData['data'][0]['tier'];
        summonerDict['rank'] = summonerStatusData['data'][0]['rank'];
        summonerDict['win'] = summonerStatusData['data'][0]['wins'];
        summonerDict['loss'] = summonerStatusData['data'][0]['losses'];
        summonerDict['win_rates'] = Math.round(100 * summonerDict['win'] / (summonerDict['win'] + summonerDict['loss']))/100;
        console.log(summonerDict);

        const game = await Game.create({
            summonerName: summonerDict['summonerName'],
            tier: summonerDict['tier'],
            rank: summonerDict['rank'],
            win: summonerDict['win'],
            loss: summonerDict['loss'],
        });
        res.send("DONE");
        
    } catch (err) {
        console.error(err);
        next(err);
    }
})

router.get('/getChampion', async (req, res) => {
    try{
        console.log('[GETCHAMPION]');
        let summonerName = req.body.name;
        let url = 'https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/4A-r8LyUHnKR-eLYeDDRpcOGTy9q9Rpv-M-F3F1_DcxI7A/top?count=5&api_key=RGAPI-9c43cfbe-a610-4d19-8f93-82a99adb5887';
//        let url = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/4A-r8LyUHnKR-eLYeDDRpcOGTy9q9Rpv-M-F3F1_DcxI7A/top?count=5&api_key=${api_key}`;
        const championData = await axios.get(url);
        let champion = JSON.parse(champions);
        for (let i = 0; i < 5; i++){
            console.log(i+1, ":", championData['data'][i]['championId']);
            console.log(champion[championData['data'][i]['championId']]);
            console.log(champion[1]);
            console.log(champion['1']);
//            console.log(champions.1);
        }

        res.send("DONE");

    } catch (err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;
