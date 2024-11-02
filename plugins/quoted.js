import { serialize } from "../lib/serialize.js";
import { command } from "../lib/plugins.js";
import { loadMessage } from "../lib/store.js";

command(
	{
		pattern: "quoted",
		desc: "quoted message",
	},
	async (message, match) => {
		if (!message.reply_message) return await message.reply("*Reply to a message*");
		let key = message.reply_message.quoted_id;
		let msg = await loadMessage(key);
		if (!msg) return await message.sendReply("_Message not found maybe bot might not be running at that time_");
		msg = await serialize(JSON.parse(JSON.stringify(msg.message)), message.client);
		if (!msg.quoted) return await message.reply("No quoted message found");
		await message.forward(message.jid, msg.quoted.message);
	},
);