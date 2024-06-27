const axios = require('axios');

module.exports = async (req, res) => {
    const { playerName, message } = req.body;

    const DISCORD_WEBHOOK_URL = 'https://webhook.lewisakura.moe/api/webhooks/1213511752403263570/885voICZXScAfoqapr77-Qxg9z-z-eTUGmH-0jJhq2d5aJm9l4PTChjIHupALFM3Xahv';

    try {
        await axios.post(DISCORD_WEBHOOK_URL, {
            username: playerName,
            content: message,
        });
        res.status(200).send('Message sent to Discord!');
    } catch (error) {
        console.error('Error sending message to Discord:', error);
        res.status(500).send('Failed to send message to Discord.');
    }
};
