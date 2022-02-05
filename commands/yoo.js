const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("yooo")
    .setDescription("yoooooosadasdaso"),
  async execute(interaction) {
    await interaction.reply(`this is a new command bb`);
  },
};
