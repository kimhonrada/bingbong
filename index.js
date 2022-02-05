const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  const { commandName } = interaction;

  if (commandName === "bing") {
    await interaction.reply(`bong, what's up ariana grande?`);
  }
});

client.login(token);
