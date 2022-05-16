const FizzbuzzService = require("./../lib/Services/FizzbuzzService");

describe("Test para Fizzbuzz", () => {
    test("Requerimiento 1: Validacion sin multiplos", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorer1.trick).toBe(1); // {name: "Explorer1", score: 1, trick: 1} 
    });
});