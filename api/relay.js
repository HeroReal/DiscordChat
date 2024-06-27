const axios = require('axios');

module.exports = async (req, res) => {
    const { playerName, message } = req.body;

    const DISCORD_WEBHOOK_URL = 'https://webhook.lewisakura.moe/api/webhooks/1213511752403263570/885voICZXScAfoqapr77-Qxg9z-z-eTUGmH-0jJhq2d5aJm9l4PTChjIHupALFM3Xahv';

    try {
        const response = await axios.post(DISCORD_WEBHOOK_URL, {
            username: playerName,
            content: message,
        });

        console.log('Message sent to Discord:', response.data);
        res.status(200).send('Message sent to Discord!');
    } catch (error) {
        console.error('Error sending message to Discord:', error.message);
        res.status(500).send('Failed to send message to Discord.');
    }
};
