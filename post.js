let rest = require('restler');

const linenotify = (name, email) => {
    rest.post('https://notify-api.line.me/api/notify', {
        data: {
            message: `message: ${name} and ${email} create successfully`
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer BXXIH018anRcXd2vgbX3Oi4ys9CAHfFp3Ze6fVyf1z6'
        }
    }).on('complete', function (data, response) {
        console.log(data)
        if (response.statusCode == 201) {
            // you can get at the raw response like this...
        }
    });
}

module.exports = {
    linenotify
}