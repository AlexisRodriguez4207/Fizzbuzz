const ExplorerService = require("./../lib/Services/ExplorerServices");
const ExplorerServices = require("./../lib/Services/ExplorerServices");

describe("Test para ExplorerServices", () => {
    test('Requerimiento 1: Calcular todos los Explorers en una mission', () => {
        const explorers = [{mission: "node" }];
        const explorerInNode = ExplorerService.filterByMission(explorers,"node");
        expect(explorerInNode.length).toBe(2);
     });
});