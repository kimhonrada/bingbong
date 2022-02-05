const { SlashCommandBuilder } = require("@discord.js/builders");
const { REST } = require("@discord/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, guildId, token } = require("./config.json");

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
  new SlashCommandBuilder()
    .setName("bing")
    .setDescription("Replies with bong!"),
].map((command) => command.toJSON());

const rest = new REST({ version: 9 }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Succesfully registered application commands"))
  .catch(console.error);
