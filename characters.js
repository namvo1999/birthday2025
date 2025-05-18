const characters = [
    {
        name: "Sơn Tùng MTP",
        image: "./assets/character-1.png",
        musicPath: "./assets/music-01.mp3",
        musicStart: 71, // seconds, where to start the music (1:11)
        dialogs: [
            "Hello Thảo!",
            "Sơn Tùng M-TP xin được gửi một cái ôm thật to và một lời chúc thật chất đến em trong ngày đặc biệt này.",
            "Hôm nay là một ngày rất gì và này nọ, vì đó là ngày em đến với thế giới này",
            "Như một vì sao toả sáng trong dải ngân hà mang tên ‘người tuyệt vời’.",
            "Hãy luôn là chính mình, toả sáng theo cách riêng, và đừng quên:",
            "‘Muốn ngồi ở vị trí không ai ngồi được... phải chịu những cảm xúc không ai chịu được!’",
            "Chúc em tuổi mới nhiều sức khoẻ, nhiều năng lượng tích cực, nhiều thành công rực rỡ và thật nhiều yêu thương.",
            "Happy Birthday cô gái!",
            "Sky luôn bên em!",
            "Love u in a very M-TP way! ✨"
        ]
    },
    {
        name: "Andree Right Hand",
        image: "./assets/character-2.png",
        musicPath: "./assets/music-02.mp3",
        musicStart: 123, // seconds, where to start the music (2:05)
        dialogs: [
            "Yo Thảo! Happy Birthday em!",
            "Hôm nay là ngày đặc biệt, nên anh phải lên tiếng, dù đang chill đâu đó với bản beat mới.",
            "Em sinh ra để chất – giống như cách anh bước vào track và để lại dấu ấn.",
            "Tuổi mới, giữ cho mình cool như iced-out chain, nhưng vẫn ấm như lời chúc này anh dành cho em.",
            "Đời không chỉ có bánh kem và nến – mà còn là những cột mốc em vượt qua với bản lĩnh riêng.",
            "Anh không biết em thích RnB hay Trap, nhưng mong em luôn sống đúng giai điệu của chính mình.",
            "Hãy yêu đời như cách em yêu vibe mùa hè, và đừng để ai tắt tiếng nhạc trong tâm hồn em.",
            "Thêm tuổi mới, thêm tự tin, thêm thành công — và nếu được, thêm một chút bad girl energy cho ngầu.",
            "Happy birthday again — from Right Hand with real vibes only."
        ]
    },
    {
        name: "Luffy Mũ Rơm",
        image: "./assets/character-3.png",
        musicPath: "./assets/music-03.mp3",
        musicStart: 86, // seconds, where to start the music (1:26)
        dialogs: [
            "Thảo ơiiiiiiiiiiiii!!!",
            "Hôm nay là sinh nhật cậu đúng không? TUYỆT VỜI!!!",
            "Ăn mừng thôi!!! Cậu có bánh không? Có thịt không? Có cả buffet không?!",
            "Chúc cậu tuổi mới vui như lênh đênh trên biển với hội bạn chất như băng Mũ Rơm!",
            "Cậu phải luôn mạnh mẽ nha, vì ai cũng có giấc mơ riêng giống như tớ muốn làm Vua Hải Tặc vậy đó!",
            "Đừng bao giờ bỏ cuộc, dù sóng to gió lớn!",
            "Nếu ai làm cậu buồn, cứ nói với tớ, tớ đấm cho một phát bay luôn!",
            "Chúc cậu cười thật nhiều, ăn thật ngon, chơi thật đã, sống thật vui!",
            "Tớ không giỏi mấy cái chúc tụng, nhưng… HAPPY BIRTHDAY THẢO!!!"
        ]
    },
    {
        name: "Obito",
        image: "./assets/character-4.png",
        musicPath: "./assets/music-04.mp3",
        musicStart: 39,
        dialogs: [
            "Yo Thảo, sinh nhật vui nha.",
            "Anh không biết em đang nghe nhạc gì, nhưng hy vọng hôm nay là một bản beat thật chill.",
            "Cuộc đời này có lúc nhanh như verse 16 bars, có lúc chậm như hook êm ái – quan trọng là mình biết feel đúng chỗ.",
            "Chúc em tuổi mới đủ lặng để hiểu, đủ lửa để bước, đủ chất để không lẫn vào ai cả.",
            "Dù ngoài kia có bao nhiêu noise, chỉ cần em giữ được melody trong lòng – thì sẽ không lạc beat.",
            "Sinh nhật không cần quá ồn ào, chỉ cần đúng vibe là đáng nhớ.",
            "Mong em sẽ sống như bản demo không cần chỉnh – vì chính em đã đủ hay rồi.",
            "Happy birthday – keep it real, keep it fresh, keep it you.",
            "Chúc mọi thứ trong em đều rhyme, kể cả những điều không nói ra."
        ]
    },
    {
        name: "Tlinh",
        image: "./assets/character-5.png",
        musicPath: "./assets/music-05.mp3",
        musicStart: 20, // seconds, where to start the music (0:20)
        dialogs: [
            "Hi Thảo, hôm nay là ngày của bạn đúng không?",
            "Sinh nhật là dịp để được yêu, được tự hào về chính mình, và được vibe thật lớn với mọi cảm xúc đang có.",
            "tlinh muốn gửi đến bạn một lời chúc: bạn luôn đủ tự tin để bước đi, và đủ dịu dàng để được ôm lấy chính mình.",
            "Đừng để ai định nghĩa bạn ngoài chính trái tim bạn.",
            "Có thể không phải ai cũng hiểu hành trình bạn đang đi, nhưng chỉ cần bạn biết bạn đang sống đúng là đủ rồi.",
            "Tuổi mới, bạn hãy yêu mình hơn một chút mỗi ngày.",
            "Nếu buồn, cứ chill; nếu vui, hãy sáng lên như bạn vốn là.",
            "tlinh tin là bạn rất tuyệt vời, theo một cách riêng không ai thay thế được.",
            "Happy birthday, Thảo – keep shining, keep healing, keep being real.",
        ]
    },
    {
        name: "Ariana Grande",
        image: "./assets/character-6.png",
        musicPath: "./assets/music-06.mp3",
        musicStart: 0,
        dialogs: [
            "Hi sweet Thảo 💖",
            "Just popping in to say… happiest birthday to you, beautiful soul.",
            "I hope today you feel as magical and loved as you truly are.",
            "You’re light, you’re strength, you’re a melody in a noisy world.",
            "Keep shining like you were born to – soft but unstoppable.",
            "This year, choose yourself more. Protect your peace. Glow without apology.",
            "The world doesn’t need another you — because the one and only already exists.",
            "May your dreams be bold, your coffee strong, and your ponytail high ☕✨",
            "Sending love, sparkles, and a little whistle tone just for you 🎶",
            "Happy birthday, darling. You’re doing amazing. Keep going."
        ]
    },
    {
        name: "Rihanna",
        image: "./assets/character-7.png",
        musicPath: "./assets/music-07.mp3",
        musicStart: 0,
        dialogs: [
            "Hey Thảo, bad gal Riri here 👑",
            "It’s your birthday? That’s a whole celebration, baby.",
            "I hope you’re stepping into this new year like a boss – heels high, chin up.",
            "You don’t just shine — you glow through the noise.",
            "Don’t forget: being soft is power, and being real is luxury.",
            "The world needs more women like you: raw, radiant, unapologetic.",
            "Laugh louder. Dream bigger. Love harder. And never dim your light for anybody.",
            "If anyone tells you to “calm down,” tell them Riri said: “Nah, level up.”",
            "Happy birthday, queen. Stay savage, stay golden."
        ]
    },
    {
        name: "Charlie Puth",
        image: "./assets/character-8.png",
        musicPath: "./assets/music-08.mp3",
        musicStart: 38, // seconds, where to start the music (0:38)
        dialogs: [
            "Hey Thảo! It’s Charlie.",
            "I don’t usually write birthday songs for people I haven’t met… but I might make an exception today.",
            "Just imagine this message comes with a piano chord or two, maybe even a whistle note if I’m feeling fancy.",
            "Happy birthday to someone who, I’m told, brings great vibes and even better energy to this world.",
            "Hope your day is filled with music, laughter, and a few notes that hit just right.",
            "And if anything goes off-key — hey, that’s how the best songs are written.",
            "You don’t need autotune when you’re already in tune with yourself.",
            "Keep being kind, curious, and just a little bit unexpected. That’s how all the greats do it.",
            "Wishing you an unforgettable year — and maybe someday we’ll jam.",
            "Happy birthday, Thảo 🎶 You’re the hook everyone remembers."
        ]
    },
    {
        name: "Doraemon",
        image: "./assets/character-9.png",
        musicPath: "./assets/music-09.mp3",
        musicStart: 31, // seconds, where to start the music (0:31)
        dialogs: [
            "Hôm nay là sinh nhật của bạn đúng không? Chúc mừng sinh nhậttttt nhaaa! 🥳",
            "Tớ đã lục tung cả túi thần kỳ để chuẩn bị vài thứ đặc biệt nè:",
            "🧁 Một chiếc bánh sinh nhật siêu ngon (ăn hoài không hết!)",
            "🎁 Một món quà bất ngờ (bí mật nhé, mở ra sẽ biết!)",
            "💫 Và một ngày thật vui vẻ, ấm áp bên những người bạn yêu thương nhất!",
            "Tớ hy vọng bạn sẽ luôn cười thật tươi, gặp nhiều may mắn, và có một tuổi mới tràn đầy năng lượng – giống như khi Nobita được điểm 100 vậy đó! 😄",
            "Nếu có điều ước nào cho tuổi mới, cứ nói với tớ nha – biết đâu trong túi thần kỳ lại có cách giúp đấy~",
            "Sinh nhật vui vẻ nha, bạn của tớ! 🎈💙"
        ]
    },
    {
        name: "Ủa có ai mời Valak không ?",
        image: "./assets/character-10.png",
        musicPath: "./assets/music-10.mp3",
        musicStart: 0,
        dialogs: [
        ]
    },
    {
        name: "Liu Grace",
        image: "./assets/character-11.png",
        musicPath: "./assets/music-11.mp3",
        musicStart: 13, // seconds, where to start the music (0:13)
        dialogs: [
            "Yo Thảo! Happy Birthday nha bạn!",
            "Tớ không cần rap một track dài đâu, vì vibe của bạn đã đủ chất rồi.",
            "Chúc bạn tuổi mới vẫn xinh, vẫn chất, và vẫn làm chủ được cuộc chơi của riêng mình.",
            "Mỗi năm lớn thêm là một lần được yêu bản thân sâu hơn.",
            "Đừng sợ thay đổi — vì bạn vốn không phải để đứng yên.",
            "Nếu ai đó bảo bạn “quá khác biệt”, hãy mỉm cười. Khác biệt là style.",
            "Cứ đi – cứ chill – cứ sống – cứ yêu – cứ kệ thiên hạ.",
            "Thế giới đủ rộng để bạn bung lụa theo kiểu bạn chọn.",
            "Happy birthday Thảo – từ một người cũng đang học cách glow lên mỗi ngày."
        ]
    },
    {
        name: "Chắc cậu không nhớ phim này hehe",
        image: "./assets/character-12.png",
        musicPath: "./assets/music-12.mp3",
        musicStart: 0,
        dialogs: [
        ]
    },    
    {
        name: "MCK",
        image: "./assets/character-13.png",
        musicPath: "./assets/music-13.mp3",
        musicStart: 50,
        dialogs: [
            "Thảo ơi, sinh nhật hả? Happy real chill birthday nha bạn.",
            "Hôm nay cậu là nhân vật chính, còn thế giới thì... đang đợi cậu bước lên stage.",
            "Mong tuổi mới của bạn như beat hay: lên – xuống – chill – rồi drop đúng lúc.",
            "Nếu có buồn, hãy biến nó thành verse. Nếu có vui, hãy sống như một track không cần drop.",
            "Năm nay, hãy cứ sống thật – thật xinh, thật gắt, thật chill, thật bạn.",
            "Không cần phải khác biệt – bạn vốn là một version giới hạn rồi.",
            "Nếu cuộc đời là một cypher – thì bạn chắc chắn là câu punchline.",
            "Happy birthday, Thảo – let the world catch your vibe, not the other way around.",
            "Cứ đẹp, cứ đỉnh, cứ đúng như bạn là."
        ]
    },
    {
        name: "Cuộc sống slowlife tận hưởng thư giãn",
        image: "./assets/character-14.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [            
        ]
    },
    {
        name: "Makeup xinh lung linh",
        image: "./assets/character-15.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [
           
        ]
    },
    {
        name: "Học sao được bị ADHD mà",
        image: "./assets/character-16.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [
        ]
    },
    {
        name: "Liệu sau này c có nấu ăn được không ?",
        image: "./assets/character-17.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [
        ]
    },
    {
        name: "Luôn luôn vui vẻ",
        image: "./assets/character-18.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [
        ]
    },
    {
        name: "Phim cuốn quá không ngủ được",
        image: "./assets/character-19.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [
        ]
    },
    {
        name: "Mít ướt một tí cũng không sao đâu",
        image: "./assets/character-20.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [
        ]
    },
    {
        name: "Ăn nhiều nhưng mà không mập",
        image: "./assets/character-21.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [
        ]
    },
    {
        name: "Ngủ thiệt là nhiều vào nhé",
        image: "./assets/character-22.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [
           
        ]
    },
    {
        name: "Tự do du lịch khám phá",
        image: "./assets/character-23.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [
            
        ]
    },
    {
        name: "Mong thời gian sẽ ngừng lại",
        image: "./assets/character-24.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [
            
        ]
    },
    {
        name: "Nam",
        image: "./assets/character-25.png",
        musicPath: "",
        musicStart: 0,
        dialogs: [        
            "Chúc mừng sinh nhật Thảo!",
            "Cuối cùng cũng tìm thấy t rồi!",
            "Quà năm nay thú vị chứ?",
            "Năm sau lại trông chờ nhé!",
            "Chúc cậu luôn vui vẻ và hạnh phúc!",
            "Chúc cậu luôn xinh đẹp và thành công trong cuộc sống!",
        ]
    }
];
