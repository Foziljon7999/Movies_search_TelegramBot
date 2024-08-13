const TelegramBot = require("node-telegram-bot-api");

const token = "7366660344:AAG32qKrqN504TFX0-KcQMCZODCqwMR7dao";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const fullName = msg.from.first_name;
  bot.sendMessage(
    chatId,
    `Assalomu alaykum ${fullName} sizni ushbu botimizda ko'rib turganimizdan juda hursandmiz`,
    {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "Fantastic 🎭",
            },
            {
              text: "Sarguzasht 🔎",
            },
            {
              text: "Dramatic ✅",
            },
          ],
          [
            {
              text: "Uzbek Retro kinolari 📽",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    }
  );
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  let text = msg.text;

  if (text === "Fantastic 🎭") {
    bot.sendMessage(chatId, "Fantastic", {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "Fantastic to'rtlik ❇️",
            },
            {
              text: "Jodu saltanati ❇️",
            },
          ],
          [
            {
              text: "Tinchlikparvar ❇️",
            },
            {
              text: "Fantomas ❇️",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    });
  }
});

bot.on("message", (msg) => {
  let chatId = msg.chat.id;
  let text = msg.text;

  if (text === "Fantastic to'rtlik ❇️") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/ii/1591245700/aee65004/30712905.jpg",
      {
        caption: `
            <strong>Nomi: Fantastic to'rtlik</strong> \n
            <strong>Janr: Fantastika</strong>\n
            <strong>Davlati: AQSH</strong>\n
            <strong>Yili: 2006</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 34 minut</strong>\n
            <strong>Yosh chegarasi: 🔞</strong>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://ok.ru/video/524755536402",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Jodu saltanati ❇️") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/2022-05-20/ad5d390297994d175e604bcdae7fe0dd.jpg",
      {
        caption: `
            <strong>Nomi: JODU SALTANATI-3</strong>\n
            <strong>Janr: Fantastika</strong>\n
            <strong>Davlati: AQSH</strong>\n
            <strong>Yili: 2022</strong>\n
            <strong>Tili O'zbek tilida</strong>\n
            <strong>Davomiyligi: 2 soat 22 minut</strong>\n
            <strong>Yosh chegarasi: 🔞</strong>\n
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://exporntoons.net/watch/-186124728_456243944",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Tinchlikparvar ❇️") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/ii/1645802067/652887ff/38220376.jpg",
      {
        caption: `
            <strong>Nomi: TINCHLIKPARVAR</strong>\n
            <strong>Janr: Fantastika</strong>\n
            <strong>Davlati: AQSH</strong>\n
            <strong>Yili: 2022</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 46 minut</strong>\n
            <strong>Yosh chegarasi: 🔞</strong>\n
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://ok.ru/video/38706088576",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Fantomas ❇️") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/ii/1578831497/17ee1a0c/29179266.jpg",
      {
        caption: `
            <strong>Nomi: FANTOMAS</strong>\n
            <strong>Janr: Fantastika</strong>\n
            <strong>Davlati: Fransiya</strong>\n
            <strong>Yili: 2003</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1soat 30 minut</strong>\n
            <strong>Yosh chegarasi: 🔞</strong>\n
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://ok.ru/video/835825306150",
              },
            ],
          ],
        },
      }
    );
  }
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  let text = msg.text;

  if (text === "Sarguzasht 🔎") {
    bot.sendMessage(chatId, "Sarguzasht", {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "Norm Sarguzashtlari 🧚‍♀️",
            },
            {
              text: "Yo'ldagi Sarguzashtlar 🤠",
            },
          ],
          [
            {
              text: "Trollar Saltanati 🗿",
            },
            {
              text: "Jungli Sarguzashtlari 🔆",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    });
  }
});

bot.on("message", (msg) => {
  let chatId = msg.chat.id;
  let text = msg.text;

  if (text === "Norm Sarguzashtlari 🧚‍♀️") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/ii/1588998424/9b880361/30460162.jpg",
      {
        caption: `
            <strong>Nomi: Norm Sarguzashtlari</strong> \n
            <strong>Janr: Sarguzasht</strong>\n
            <strong>Davlati: AQSH</strong>\n
            <strong>Yili: 2020</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 47 minut</strong>\n
            <strong>Yosh chegarasi: 6+ </strong>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://www.youtube.com/watch?v=-kCJa7ZO4P8&pp=ygUcbm9ybSBzYXJndXphc2h0bGFyaSBtdWx0ZmlsbQ%3D%3D",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Yo'ldagi Sarguzashtlar 🤠") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/ii/1595168141/3f2ebdee/31113750.jpg",
      {
        caption: `
            <strong>Nomi: Yo'ldagi Sarguzashtlar </strong> \n
            <strong>Janr: Sarguzasht</strong>\n
            <strong>Davlati: AQSH</strong>\n
            <strong>Yili: 2013</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 47 minut</strong>\n
            <strong>Yosh chegarasi: 16+ </strong>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://ok.ru/video/408378215011",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Trollar Saltanati 🗿") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/ii/1591710832/e87dc009/30761373.jpg",
      {
        caption: `
            <strong>Nomi: Trollar Saltanati </strong> \n
            <strong>Janr: Sarguzasht</strong>\n
            <strong>Davlati: AQSH</strong>\n
            <strong>Yili: 2021</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 39 minut</strong>\n
            <strong>Yosh chegarasi: 16+ </strong>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://ok.ru/video/524755536402",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Jungli Sarguzashtlari 🔆") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/2023-08-06/42dcafce2fcd09e04e6beaf863c6e30e.jpg",
      {
        caption: `
            <strong>Nomi: Jungli Sarguzashtlari  </strong> \n
            <strong>Janr: Sarguzasht</strong>\n
            <strong>Davlati: Fransiya</strong>\n
            <strong>Yili: 2023</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 47 minut</strong>\n
            <strong>Yosh chegarasi: 16+ </strong>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://youtu.be/m4e2HwtIPj0?t=19",
              },
            ],
          ],
        },
      }
    );
  }
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  let text = msg.text;

  if (text === "Dramatic ✅") {
    bot.sendMessage(chatId, "Dramatic", {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "Hayot daraxti 🎋",
            },
            {
              text: "Mening apelsin daraxtim 🌴",
            },
          ],
          [
            {
              text: "Daraxt 🌱",
            },
            {
              text: "100 daraja qahrataonda ❄️",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    });
  }

  if (text === "Hayot daraxti 🎋") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/2024-03-18/cb9760980e6296b45705764cf16c50a0.jpg",
      {
        caption: ` 
            <strong>Nomi: Hayot daraxti  </strong> \n
            <strong>Janr: Melodrama</strong>\n
            <strong>Davlati: AQSH</strong>\n
            <strong>Yili: 2011</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 40 minut</strong>\n
            <strong>Yosh chegarasi: 16+ </strong>
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://www.youtube.com/watch?v=AZW064Ck6o8&pp=ygUUaGF5b3QgZGFyYXh0aSAxIHFpc20%3D",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Mening apelsin daraxtim 🌴") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/2024-05-30/caccf8b3721dd420991548a31c009aae.jpg",
      {
        caption: ` 
            <strong>Nomi: Mening apelsin daraxtim  </strong> \n
            <strong>Janr: Drama</strong>\n
            <strong>Davlati: AQSH</strong>\n
            <strong>Yili: 2012</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 38 minut</strong>\n
            <strong>Yosh chegarasi: 6+ </strong>
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://www.youtube.com/watch?v=g9lKYPpsh4c&pp=ygUabXkgc3dlZXQgb3JhbmdlIHRyZWUgbW92aWU%3D",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Daraxt 🌱") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/2024-04-20/c5ba5990c25489bb49d6249b728523a5.jpg",
      {
        caption: ` 
            <strong>Nomi: Daraxt  </strong> \n
            <strong>Janr: Melodrama</strong>\n
            <strong>Davlati: Angliya</strong>\n
            <strong>Yili: 2024</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 50 minut</strong>\n
            <strong>Yosh chegarasi: 12+ </strong>
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://youtu.be/GmtXBFschUA?t=19",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "100 daraja qahrataonda ❄️") {
    bot.sendPhoto(
      chatId,
      "https://images.uzmovi.com/ii/1600100138/be3f7ff0/31631609.jpg",
      {
        caption: ` 
            <strong>Nomi: 100 daraja qahrataonda ❄️  </strong> \n
            <strong>Janr: Drama</strong>\n
            <strong>Davlati: AQSH</strong>\n
            <strong>Yili: 2020</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 47 minut</strong>\n
            <strong>Yosh chegarasi: 16+ </strong>
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://www.youtube.com/watch?v=PwVJOSZMGRo&pp=ygUaMTAwIGRhcmFqYSBxYWhyYXRvbmRhIGtpbm8%3D",
              },
            ],
          ],
        },
      }
    );
  }
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "Uzbek Retro kinolari 📽") {
    bot.sendMessage(chatId, "Uzbek Retro kinolari 📽", {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "Suyunchi 🎗",
            },
            {
              text: "Ko'zlarim yo'lingda 👀",
            },
          ],
          [
            {
              text: "Chinor ostidagi duel 🤼‍♂️",
            },
            {
              text: "Yor-yor 🧝‍♀️",
            },
          ],
          [
            {
              text: "Abdullajon 🪐",
            },
            {
              text: "Toxir va Zuhra 💃🕺",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    });
  }

  if (text === "Suyunchi 🎗") {
    bot.sendPhoto(
      chatId,
      "https://files.itv.uz/uploads/content/poster/2023/08/11//86f4f6b2cd8101a3771e8cb7a8699f0b-q-700x1002.jpeg",
      {
        caption: ` 
            <strong>Nomi: Suyunchi 🎗 </strong> \n
            <strong>Janr: Drama</strong>\n
            <strong>Davlati: O'zbekirston</strong>\n
            <strong>Yili: 1983</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 9 minut</strong>\n
            <strong>Yosh chegarasi: 6+ </strong>
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://youtu.be/-5OM5kgDvb8?list=PLMqrZvPA0L4xrKjIvGwsTPVwnlFk5X1uO&t=5",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Ko'zlarim yo'lingda 👀") {
    bot.sendPhoto(
      chatId,
      "https://files.itv.uz/uploads/content/poster/2018/12/06/7c4e73718401774bad3582adfce9ab75-q-700x1002.jpeg",
      {
        caption: ` 
            <strong>Nomi:Ko'zlarim yo'lingda 👀 </strong> \n
            <strong>Janr: Melodrama</strong>\n
            <strong>Davlati: O'zbekirston</strong>\n
            <strong>Yili: 1991</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 22 minut</strong>\n
            <strong>Yosh chegarasi: 6+ </strong>
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://youtu.be/XOZaMVyxPP8?list=PLMqrZvPA0L4xrKjIvGwsTPVwnlFk5X1uO&t=1",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Chinor ostidagi duel 🤼‍♂️") {
    bot.sendPhoto(
      chatId,
      "https://upload.wikimedia.org/wikipedia/uz/4/45/Chinor_tagidagi_duel.jpeg",
      {
        caption: ` 
            <strong>Nomi: Chinor ostidagi duel 🤼‍♂️ </strong> \n
            <strong>Janr: Melodrama</strong>\n
            <strong>Davlati: O'zbekirston</strong>\n
            <strong>Yili: 1979</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 3 minut</strong>\n
            <strong>Yosh chegarasi: 6+ </strong>
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://youtu.be/OIG8aPagQQM?list=PLMqrZvPA0L4xrKjIvGwsTPVwnlFk5X1uO&t=2",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Yor-yor 🧝‍♀️") {
    bot.sendPhoto(
      chatId,
      "https://files.itv.uz/uploads/content/poster/2018/12/06/b70d61c136ebc882b77903b51119df9d-q-700x1002.jpeg",
      {
        caption: ` 
            <strong>Nomi: Yor-yor 🧝‍♀️ </strong> \n
            <strong>Janr: Komediya</strong>\n
            <strong>Davlati: O'zbekirston</strong>\n
            <strong>Yili: 1964</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 7 minut</strong>\n
            <strong>Yosh chegarasi: 6+ </strong>
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://youtu.be/PMWsH4dIvrE?list=PLMqrZvPA0L4xrKjIvGwsTPVwnlFk5X1uO&t=2",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Abdullajon 🪐") {
    bot.sendPhoto(
      chatId,
      "https://files.itv.uz/uploads/content/poster/2023/08/11//d5a5913df62a76fd5aa52fbce9603ca3-q-700x1002.jpeg",
      {
        caption: ` 
            <strong>Nomi: Abdullajon 🪐 </strong> \n
            <strong>Janr: Komediya va Fantastika</strong>\n
            <strong>Davlati: O'zbekirston</strong>\n
            <strong>Yili: 1991</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 28 minut</strong>\n
            <strong>Yosh chegarasi: 6+ </strong>
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://youtu.be/4JhASWD_NmI?list=PLMqrZvPA0L4xrKjIvGwsTPVwnlFk5X1uO&t=3",
              },
            ],
          ],
        },
      }
    );
  }

  if (text === "Toxir va Zuhra 💃🕺") {
    bot.sendPhoto(
      chatId,
      "https://files.itv.uz/uploads/content/poster/2021/01/14/174ec22fd02135107bef0963b12cf051-q-700x1002.jpeg",
      {
        caption: ` 
            <strong>Nomi: Toxir va Zuhra 💃🕺 </strong> \n
            <strong>Janr: Komediya va Melodramma</strong>\n
            <strong>Davlati: O'zbekirston</strong>\n
            <strong>Yili: 1999</strong>\n
            <strong>Tili: O'zbek tilida</strong>\n
            <strong>Davomiyligi: 1 soat 47 minut</strong>\n
            <strong>Yosh chegarasi: 6+ </strong>
            `,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kinoni ko'rish 🎥",
                url: "https://youtu.be/VQVRg2oIj_U?list=PLMqrZvPA0L4xrKjIvGwsTPVwnlFk5X1uO&t=8",
              },
            ],
          ],
        },
      }
    );
  }
});
