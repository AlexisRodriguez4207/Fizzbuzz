const Reader = require("../utils/Reader");

class ExplorerService{
    static filterByMission(explorers,mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){

    }
    getExplorersUsernamesByMission(explorers, mission){

    }

}

module.exports = ExplorerService;