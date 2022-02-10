const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("test command"),
  async execute(interaction) {
    await interaction.reply(`this is another test command`);
  },
};
