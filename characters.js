const characters = [
    {
        name: "Sơn Tùng MTP",
        image: "./assets/character-1.png",
        dialogs: [
            "Hello Thảo!",
            "Sơn Tùng M-TP xin được gửi một cái ôm thật to và một lời chúc thật chất đến em trong ngày đặc biệt này.",
            "Hôm nay là một ngày rất gì và này nọ, vì đó là ngày em đến với thế giới này – như một vì sao toả sáng trong dải ngân hà mang tên ‘người tuyệt vời’.",
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
        name: "Harry Potter",
        image: "./assets/character-6.png",
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
        name: "Sắm được đồ mình thích thật tuyệt",
        image: "./assets/character-9.png",
        dialogs: [           
        ]
    },
    {
        name: "Không muốn dậy đâu nhưng vẫn phải dậy",
        image: "./assets/character-10.png",
        dialogs: [
        ]
    },
    {
        name: "Đồ ăn nhiều mà không mụp",
        image: "./assets/character-11.png",
        dialogs: [
        ]
    },
    {
        name: "Thức làm gì? Thế giới đẹp nhất là khi ngủ",
        image: "./assets/character-12.png",
        dialogs: [
        ]
    },
    {
        name: "Du dịch vòng quanh thế giới",
        image: "./assets/character-13.png",
        dialogs: [
        ]
    },
    {
        name: "Cuộc sống slowlife tận hưởng thư giãn",
        image: "./assets/character-14.png",
        dialogs: [            
        ]
    },
    {
        name: "Makeup xinh lung linh",
        image: "./assets/character-15.png",
        dialogs: [
           
        ]
    },
    {
        name: "Học sao được bị ADHD mà",
        image: "./assets/character-16.png",
        dialogs: [
        ]
    },
    {
        name: "Cute in the rain",
        image: "./assets/character-17.png",
        dialogs: [
        ]
    },
    {
        name: "Nấu ăn như đấm vào mồm",
        image: "./assets/character-18.png",
        dialogs: [
        ]
    },
    {
        name: "Phim cuốn quá không ngủ được",
        image: "./assets/character-19.png",
        dialogs: [
        ]
    },
    {
        name: "Tự cho phép mình mít ướt",
        image: "./assets/character-20.png",
        dialogs: [
        ]
    },
    {
        name: "The Crown",
        image: "./assets/character-21.png",
        dialogs: [
        ]
    },
    {
        name: "The Cake",
        image: "./assets/character-22.png",
        dialogs: [
           
        ]
    },
    {
        name: "The Flower",
        image: "./assets/character-23.png",
        dialogs: [
            
        ]
    },
    {
        name: "The Dress",
        image: "./assets/character-24.png",
        dialogs: [
            
        ]
    },
    {
        name: "The Shoes",
        image: "./assets/character-25.png",
        dialogs: [          
        ]
    }
];
