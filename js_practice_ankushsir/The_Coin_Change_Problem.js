function countWaysToMakeChange(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    console.log(dp ,"=")
    dp[0] = 1;
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
}
const amount = 5;
const coins = [1, 2, 5];
const ways = countWaysToMakeChange(amount, coins);
// console.log("Number of ways to make change:", ways);

const coinProblem = (amount, coins) => {
    for(let i = 0; i < coins.length; i++) {
        // console.log(coins[i])
    }
}
coinProblem(amount, coins);
