const {GuildMember} = require('discord.js');

module.exports = {
    name: 'lyrics',
    description: 'show lyrics in this song',
  
    async execute(interaction, player) {
  
        if (!(interaction.member instanceof GuildMember) || !interaction.member.voice.channel) {
          return void interaction.reply({
            content: 'You are not in a voice channel!',
            ephemeral: true,
          });
        }

        if (
          interaction.guild.me.voice.channelId &&
          interaction.member.voice.channelId !== interaction.guild.me.voice.channelId
        ) {
          return void interaction.reply({
            content: 'You are not in my voice channel!',
            ephemeral: true,
          });
        }

        await interaction.deferReply();
        const queue = player.getQueue(interaction.guildId);
        if (!queue || !queue.playing)
        return void interaction.followUp({
          content: '❌ | No music is being played!',
        });

        const lyricsFinder = require('lyrics-finder');
        let lyrics = null;

        try {
            lyrics = await lyricsFinder('', queue.current.title);
            if (!lyrics) lyrics = `lyrics not found ${queue.current.title}`

        } catch (error) {
            lyrics = `lyrics not found ${queue.current.title}`
        }

        return void interaction.followUp({
            embeds: [
              {
                title: `Now Playing \n**${queue.current.title}**`,
                description: `🎶 lyrics 🎶\n\n${lyrics}`,
                color: 0x00C9AC,
              },
            ],
        });
    },
  };
  