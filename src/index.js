function classifyPlayer(wins, losses) {
    const winBalance = wins - losses; 
    let rank
    if (wins <=10) {
        rank = "Iron";
    } else if (wins >= 11 && wins <= 20) {
        rank = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        rank = "Silver";
    } else if (wins >= 51 && wins <= 80) {
        rank = "Gold";
    } else if (wins >= 81 && wins <= 90) {
        rank = "Diamond";
    } else if (wins >= 91 && wins <= 100) {
        rank = "Legendary";
    } else {
        rank = "Immortal";
    }

    
    return { winBalance, rank };
}


const result = classifyPlayer(11, 0); 


console.log(`The Hero has a win balance of **${result.winBalance}** and is ranked as **${result.rank}**`);

