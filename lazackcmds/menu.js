import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
  // Load the audio file
  const audioUrl = 'https://github.com/SilvaTechB/silva-md-bot/raw/main/media/Menu.mp3';

  // Read commands from lazackcmds folder dynamically
  const lazackPath = './lazackcmds';
  const commands = fs.readdirSync(lazackPath).map(file => path.parse(file).name);

  // Format commands into menu sections
  const commandList = commands
    .map((cmd, idx) => `> *${idx + 1}.* ${cmd}`)
    .join('\n');

  // Define Menu Template
  const menuTemplate = `
    ◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤
   ╭───「 𝐒𝐈𝐋𝐕𝐀 𝐌𝐃 」───
    *│ 👋 Hi, ${m.pushName || 'User'}!*
    *│ Welcome to Silva MD Bot.*
    ╭──────────────
    *│ ⌛ Speed: super*
    *│ 💻 RAM Usage: 32.68GB of 2.65TB*
    *│ ⏱️ Uptime: infinity*
    *│ 🔧 Version: 2024/25 vr*
    *│ 👨‍💻 Developer: SilvaTechB*
    ╰──────────────
    *│ Explore my commands below:*
    *╰──────────────*
◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤
🍑🍆 𝐒𝐈𝐋𝐕𝐀 𝐌𝐃 𝐁𝐎𝐓 💦☣
◢◤◢◤◢◤◢◤
*📜 Main Menu:*
『 *COMMAND LIST* 』 
> *use this shortcuts*
┏━━━━━━━━━━━━━━┈⊷
${commandList}
┗━━━━━━━━━━━━━┈⊷
◢◤◢◤◢◤◢◤
🚀 Powered by *SilvaTech Inc.*
  `;

  // Send the menu message
  await conn.sendMessage(
    m.chat,
    {
      text: menuTemplate,
      contextInfo: {
        externalAdReply: {
          title: 'SILVA MD BOT',
          body: 'SYLIVANUS MEMBA',
          thumbnailUrl: 'https://files.catbox.moe/8324jm.jpg', // Replace with your preferred image
          sourceUrl: 'https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v', // Replace with your bot's repo or website
          renderLargerThumbnail: true,
        },
      },
    },
    { quoted: m }
  );

  // Play the audio file smoothly
  await conn.sendMessage(
    m.chat,
    {
      audio: { url: audioUrl },
      mimetype: 'audio/mp4',
      ptt: true, // Set to true if you want it to appear as a voice note
      contextInfo: {
        externalAdReply: {
          title: 'Silva MD Bot - Menu Music',
          body: 'Enjoy the vibes!',
          thumbnailUrl: 'https://files.catbox.moe/8324jm.jpg',
          sourceUrl: 'https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v',
          renderLargerThumbnail: true,
        },
      },
    },
    { quoted: m }
  );
};

// Command Metadata
handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu'];

export default handler;
