const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("bing"),
  async execute(interaction) {
    await interaction.reply(`bong! what's up ariana grande?????`);
  },
};
