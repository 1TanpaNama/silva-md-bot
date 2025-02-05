import { downloadContentFromMessage } from '@whiskeysockets/baileys';

const handler = async (m, { conn }) => {
  try {
    // Ensure it's a view-once message
    if (!m.quoted || !/viewOnce/.test(m.quoted.mtype)) {
      throw new Error('✳️❇️ The quoted message is not a ViewOnce message.select a viewonce message let violence begin. No peace everywhere');
    }

    const mtype = Object.keys(m.quoted.message)[0];
    const caption = m.quoted.message[mtype]?.caption || '';
    const buffer = await downloadContentFromMessage(m.quoted, 'buffer');

    // Notify the user
    await conn.sendMessage(
      m.chat,
      { 
        text: '🔄 Silva MD: Starting violence... Please wait.', 
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363200367779016@newsletter',
            newsletterName: "DOWNLOADING VIEW ONCE WITH SILVA MD 🌚🌚",
            serverMessageId: 143
          }
        } 
      },
      { quoted: m }
    );

    // Send the ViewOnce content back to the chat
    await conn.sendMessage(
      m.chat,
      { 
        [mtype.replace(/Message/, '')]: buffer, 
        caption,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363200367779016@newsletter',
            newsletterName: "EXPOSING VIEW ONCE WITH SILVA MD 👀👀",
            serverMessageId: 143
          }
        }
      },
      { quoted: m }
    );
  } catch (error) {
    // Handle errors
    await conn.sendMessage(
      m.chat,
      { 
        text: `❌ Error: ${error.message || error}`, 
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363200367779016@newsletter',
            newsletterName: "EXPOSING VIEW ONCE WITH SILVA MD 🥰",
            serverMessageId: 143
          }
        }
      },
      { quoted: m }
    );
  }
};

handler.help = ['readvo'];
handler.tags = ['tools'];
handler.command = ['readviewonce', 'read', 'vv', 'readvo'];

export default handler;
