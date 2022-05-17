class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        const score = explorer.score;
        if(explorer.score%3 === 0 && explorer.score%5 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        else if(explorer.score%5 === 0){
            explorer.trick ="BUZZ";
            return explorer;
        }
        else if(explorer.score%3 === 0 ){
            explorer.trick ="FIZZ";
            return explorer;
        }
        else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(explorer){
        const score = explorer.score;
        if (explorer % 3 === 0 && explorer % 5 === 0) {
            trick = "FIZZBUZZ";
            return trick;
        } else {
            if (explorer % 5 === 0) {
                trick = "BUZZ";
                return trick;
            } else {
                if (explorer % 3 === 0) {
                    trick = "FIZZ";
                    return trick;
                } else {
                    trick = explorer;
                    return trick;
                }
            }
        }
}
module.exports = FizzbuzzService;