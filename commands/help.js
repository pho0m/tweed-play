const fs = require('fs');

module.exports = {
  name: 'help',
  description: 'List all available commands.',
  execute(interaction) {
    let str = [];
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
      const command = require(`./${file}`);
      str += `📗  /**${command.name}** \n▶︎${command.description} \n\n`;
    }

    return void interaction.reply({
      embeds: [
        {
          title: 'Help in tweed-play',
          description: `🎶 All command in tweed-play`,
          fields: [
            {
              name: '\u200b',
              value: str,
            },
          ],
          color: 0x00C9AC,
        },
      ],
       ephemeral: false,
    });
  },
};

