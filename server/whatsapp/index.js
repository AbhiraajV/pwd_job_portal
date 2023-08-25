const qrcode = require("qrcode-terminal");

const { Client, LocalAuth } = require("whatsapp-web.js");
const client = new Client({
  puppeteer: {
    headless: false,
  },
  authStrategy: new LocalAuth({
    clientId: "ANY_NAME_OR_ID",
  }),
});

client.on("qr", (qr) => {
  //   qrcode.generate(qr, { small: true });
  console.log("QR " + qr);
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  if (message.body === "09PING") {
    client.sendMessage(message.from, "pong");
  }
});

client.initialize();
