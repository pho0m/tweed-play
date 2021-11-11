module.exports = {
  name: 'play-list',
  description: 'all music play-list',
  execute(interaction) {

    return void interaction.reply({
      embeds: [
        {
          title: 'Work in process',
          description: `WIP`,
          fields: [
            {
              name: '\u200b',
              value: "WIP",
            },
          ],
          color: 0x00C9AC,
        },
      ],
       //ephemeral: true,
    });
  },
};

