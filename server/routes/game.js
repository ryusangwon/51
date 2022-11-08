const { urlencoded } = require("express");
const express = require("express");
const Game = require("../models/game");
const axios = require('axios');
const router = express.Router();

const api_key = "RGAPI-2f9a6903-4d27-4e07-b279-294d43b8b705";


router.get('/', async (req, res, next) => {
    try{
        console.log("[GAME]");
        res.send('Hello, Game');
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.route('/getlolid')
.get(async (req, res, next) => {
    try{
        console.log("[GETDATABYSUMMONERNAME]");
        let name = "hide on bush";
        // console.log(urlencode(name));
        // let name = req.body.name;
        // let url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + urlencode(name)+"?api_key="+key;
        let url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/hide%20on%20bush?api_key=RGAPI-2f9a6903-4d27-4e07-b279-294d43b8b705";
        const summonerIdData = await axios.get(url);
        let summonerId = summonerIdData["data"]["id"];
        console.log(summonerId);
        // url = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/{summonerId}?api_key={api_key}`;
        url = "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/4A-r8LyUHnKR-eLYeDDRpcOGTy9q9Rpv-M-F3F1_DcxI7A?api_key=RGAPI-2f9a6903-4d27-4e07-b279-294d43b8b705";
        const summonerStatusData = await axios.get(url);
        summonerDict = {};
        summonerDict['summonerName'] = summonerStatusData['data'][0]['summonerName'];
        summonerDict['tier'] = summonerStatusData['data'][0]['tier'];
        summonerDict['rank'] = summonerStatusData['data'][0]['rank'];
        summonerDict['win'] = summonerStatusData['data'][0]['wins'];
        summonerDict['loss'] = summonerStatusData['data'][0]['losses'];
        summonerDict['win_rates'] = Math.round(100 * summonerDict['win'] / (summonerDict['win'] + summonerDict['loss']))/100;
        console.log(summonerDict);
        res.send("DONE");

        const game = await Game.create({
            summonerName: summonerDict['summonerName'],
            tier: summonerDict['tier'],
            rank: summonerDict['rank'],
            win: summonerDict['win'],
            loss: summonerDict['loss'],
        });
        
    } catch (err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;
