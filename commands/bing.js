const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bing")
    .setDescription("bingbingbing"),
  async execute(interaction) {
    await interaction.reply(`bong! what's up ariana grande?????`);
  },
};
