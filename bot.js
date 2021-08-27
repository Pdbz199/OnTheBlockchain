require('dotenv').config()

const Twitter = require('twitter')
const T = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET_KEY,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
})
const randomWords = require('random-words')

const ONE_DAY_IN_MILLIS = 1000 * 60 * 60 * 24
const ONE_WEEK_IN_MILLIS = ONE_DAY_IN_MILLIS * 7

async function main() {
    const idea = randomWords({ exactly: 2, join: ' ' })
    const tweet = `a ${idea}... on the blockchain`
    console.log(tweet)

    await T.post('statuses/update', { status: tweet })
}

main()
// setInterval(main, ONE_WEEK_IN_MILLIS)