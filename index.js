require('dotenv').config();

const Xray = require('x-ray');
const x = Xray();

const Twitter = require('twitter');
const client = new Twitter({
    consumer_key: process.env.APIKey,
    consumer_secret: process.env.APISecretKey,
    access_token_key: process.env.AccessToken,
    access_token_secret: process.env.AccessTokenSecret
});

var url = `https://github.com/users/jdkfx/contributions`;
x(url, 'rect', [ {  date: '@data-date', count: '@data-count' }])((error, result) => {
    if (error) {
        console.log(error);
    } else {
        console.log(result[result.length - 1]);
        client.post('account/update_profile', {"name" : `Haruki Tazoe🍒🌱${result[result.length - 1].count}`}, function(error){
            if (!error) {
                console.log('success!');
            } else {
                console.log('error');
            }
        });
    }
});