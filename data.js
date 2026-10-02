window.VOCAB_DATA = [
  {
    id: 'basics',
    title: '代詞與疑問 (Pronouns & Questions)',
    icon: 'Users',
    description: '最基礎的指稱詞與疑問詞，溝通的起點。',
    color: 'bg-blue-600',
    words: [
      { tp: 'mi', cn: '我 / 我們', en: 'I, me, we, us', ja: '私、僕、私たち', type: '代詞' },
      { tp: 'sina', cn: '你 / 你們', en: 'you', ja: 'あなた、君、あなたたち', type: '代詞' },
      { tp: 'ona', cn: '他 / 她 / 它 / 他們', en: 'he, she, it, they', ja: '彼、彼女、それ、彼ら', type: '代詞' },
      { tp: 'ni', cn: '這 / 那 / 這個', en: 'this, that', ja: 'これ、あれ、この、その', type: '代詞' },
      { tp: 'seme', cn: '什麼 / 哪裡 / 誰 (疑問詞)', en: 'what, which, who, where', ja: '何、どの、誰、どこ', type: '疑問' },
      { tp: 'ala', cn: '不 / 無 / 零 / 沒', en: 'no, not, zero, un-', ja: 'いいえ、無、ゼロ、〜ない', type: '否定' },
      { tp: 'ale (ali)', cn: '所有 / 全部 / 100 / 宇宙', en: 'all, every, 100, universe', ja: '全て、みんな、100、宇宙', type: '量詞' },
      { tp: 'ante', cn: '其他的 / 不同的 / 改變', en: 'different, other, change', ja: '違う、他の、変化する', type: '修飾' },
      { tp: 'sama', cn: '一樣 / 相似 / 像是', en: 'same, similar, like', ja: '同じ、似ている、〜のように', type: '修飾' },
    ],
    sentences: [
      { tp: 'sina pilin seme?', cn: '你感覺如何？(你好嗎？)' },
      { tp: 'ni li seme?', cn: '這是什麼？' },
      { tp: 'mi sona ala.', cn: '我不明白 / 我不知道。' },
      { tp: 'jan ale li wile e moku.', cn: '所有人都需要食物。' },
      { tp: 'ona li sama mi.', cn: '他跟我很像。' },
      { tp: 'sina wile e ni anu seme?', cn: '你想要這個嗎？(anu seme = 還是什麼/嗎?)' }
    ]
  },
  {
    id: 'grammar',
    title: '文法助詞 (Particles)',
    icon: 'Layers',
    description: 'Toki Pona 的句法骨架，標記主詞、受詞與情境。',
    color: 'bg-indigo-600',
    words: [
      { tp: 'li', cn: '(主詞標記) 分隔主詞與動詞 (mi/sina 除外)', en: '(predicate marker)', ja: '（述語助詞：主語と述語を区切る）', type: '助詞' },
      { tp: 'e', cn: '(受詞標記) 引導受詞', en: '(object marker)', ja: '（目的語助詞：直接目的語を示す）', type: '助詞' },
      { tp: 'la', cn: '(情境標記) 用於 "如果..." 或 "時間/地點" 之後', en: '(context marker, if/when)', ja: '（文脈助詞：〜の場合、もし〜なら）', type: '助詞' },
      { tp: 'pi', cn: '(詞組標記) "的" / 重新組合後方修飾語', en: 'of, grouping modifier', ja: '（句修飾助詞：後ろの修飾語をまとめる）', type: '助詞' },
      { tp: 'en', cn: '和 (僅用於連接兩個主詞)', en: 'and (coordinates subjects)', ja: 'および（主語同士を結ぶ）', type: '助詞' },
      { tp: 'anu', cn: '或 (連接句子或名詞)', en: 'or', ja: 'または、あるいは', type: '助詞' },
      { tp: 'o', cn: '喔! (呼格 / 命令語氣)', en: 'O (vocative or imperative)', ja: 'おお（呼びかけ、命令・希望）', type: '助詞' },
      { tp: 'taso', cn: '但是 / 只有', en: 'but, however, only', ja: 'しかし、ただし、唯一', type: '連接' },
      { tp: 'kin', cn: '也 / 確實 (強調)', en: 'also, indeed, even', ja: '〜もまた、確かに（強調）', type: '助詞' },
    ],
    sentences: [
      { tp: 'soweli li moku e kili.', cn: '動物正在吃水果。(li 標記主詞，e 標記受詞)' },
      { tp: 'tenpo ni la mi lape.', cn: '在這個時候(la)，我在睡覺。' },
      { tp: 'tomo pi telo nasa.', cn: '酒吧 (瘋狂水的房子)。(pi 改變了修飾順序)' },
      { tp: 'mi en sina li tawa.', cn: '我和你一起走。(en 連接主詞)' },
      { tp: 'o lukin e ni!', cn: '看這個！(o 表示命令)' },
      { tp: 'jan taso li ken toki.', cn: '只有人類能說話。' }
    ]
  },
  {
    id: 'time_space',
    title: '時間與空間 (Time & Space)',
    icon: 'Clock',
    description: '定位位置、方向與時間概念。',
    color: 'bg-violet-600',
    words: [
      { tp: 'tenpo', cn: '時間 / 時刻 / 期間', en: 'time, moment, period', ja: '時間、時、期間', type: '名詞' },
      { tp: 'lon', cn: '在 / 存在 / 真實', en: 'in, at, exist, true', ja: '〜にいる、存在する、真実', type: '介係' },
      { tp: 'ma', cn: '土地 / 國家 / 戶外 / 地球', en: 'earth, land, country, outdoors', ja: '大地、土地、国、屋外', type: '名詞' },
      { tp: 'tawa', cn: '去 / 往 / 為了 / 移動', en: 'to, towards, move, for', ja: '〜へ、移動する、行く、〜にとって', type: '介/動' },
      { tp: 'kama', cn: '來 / 發生 / 未來 / 變成', en: 'come, arrive, become, future', ja: '来る、至る、〜になる、未来', type: '動' },
      { tp: 'pini', cn: '結束 / 過去 / 完成 / 關閉', en: 'end, finish, past, closed', ja: '終わる、完了、過去、閉じる', type: '動' },
      { tp: 'sinpin', cn: '前面 / 臉 / 牆壁', en: 'front, face, wall', ja: '前、顔、壁', type: '名詞' },
      { tp: 'monsi', cn: '後面 / 背部 / 屁股', en: 'back, rear, behind', ja: '後ろ、背中、後方', type: '名詞' },
      { tp: 'sewi', cn: '上面 / 天空 / 神聖', en: 'up, above, high, divine', ja: '上、高い、神聖な、空', type: '名詞' },
      { tp: 'anpa', cn: '下面 / 地板 / 謙卑', en: 'down, below, humble, floor', ja: '下、低い、謙虚な、床', type: '名詞' },
      { tp: 'insa', cn: '裡面 / 中心 / 肚子', en: 'inside, inner, center, stomach', ja: '中、内部、中心、お腹', type: '名詞' },
      { tp: 'poka', cn: '旁邊 / 側邊 / 臀部', en: 'side, nearby, hip', ja: '横、隣、腰、近く', type: '名詞' },
      { tp: 'nasin', cn: '路 / 方法 / 系統 / 主義', en: 'way, road, path, doctrine', ja: '道、方法、主義、システム', type: '名詞' },
    ],
    sentences: [
      { tp: 'tenpo suno ni la mi lon tomo.', cn: '今天(這太陽的時間)，我在家裡。' },
      { tp: 'mi tawa esun.', cn: '我正要去商店。' },
      { tp: 'ona li lon monsi sina.', cn: '他在你後面。' },
      { tp: 'tenpo pini la mi jan lili.', cn: '以前(過去的時間)，我是個小孩。' },
      { tp: 'o tawa sewi!', cn: '向上跳！/ 往上走！' },
      { tp: 'nasin ni li pona.', cn: '這個方法(路)很好。' }
    ]
  },
  {
    id: 'people',
    title: '人物與社會 (Society)',
    icon: 'Briefcase',
    description: '家庭、職業與社會關係。',
    color: 'bg-rose-600',
    words: [
      { tp: 'jan', cn: '人 / 人類 / 某人', en: 'person, human, somebody', ja: '人、人間、誰か', type: '名詞' },
      { tp: 'mama', cn: '父母 / 照顧者 / 創造者', en: 'parent, ancestor, creator', ja: '親、保護者、創造者', type: '名詞' },
      { tp: 'meli', cn: '女性 / 妻子 / 雌性', en: 'woman, female, wife', ja: '女性、妻、メス', type: '名詞' },
      { tp: 'mije', cn: '男性 / 丈夫 / 雄性', en: 'man, male, husband', ja: '男性、夫、オス', type: '名詞' },
      { tp: 'tonsi', cn: '非二元性別 / 跨性別', en: 'non-binary, trans, gender-nonconforming', ja: 'ノンバイナリー、トランスジェンダー', type: '名詞' },
      { tp: 'kulupu', cn: '社群 / 團體 / 社會', en: 'group, community, society', ja: 'グループ、集団、社会', type: '名詞' },
      { tp: 'olin', cn: '愛 / 尊重 / 伴侶關係', en: 'love, respect, compassion', ja: '愛する、愛、好意', type: '動/名' },
      { tp: 'unpa', cn: '性 / 婚姻 / 親密關係', en: 'sex, intimacy, marriage', ja: '性交、親密、結婚', type: '動/名' },
      { tp: 'nimi', cn: '名字 / 字 / 詞', en: 'name, word', ja: '名前、単語、言葉', type: '名詞' },
    ],
    sentences: [
      { tp: 'nimi sina li seme?', cn: '你的名字是什麼？' },
      { tp: 'mi olin e sina.', cn: '我愛你。' },
      { tp: 'jan pona mi li lon.', cn: '我的朋友(好人)在這裡。' },
      { tp: 'kulupu ni li wawa.', cn: '這個團體很強大。' },
      { tp: 'mama mi li pana e sona tawa mi.', cn: '我的父母傳授知識給我。' }
    ]
  },
  {
    id: 'actions',
    title: '動作 (Verbs & Actions)',
    icon: 'Activity',
    description: '常用的動詞與行為描述。',
    color: 'bg-emerald-600',
    words: [
      { tp: 'moku', cn: '吃 / 喝 / 食物', en: 'eat, drink, food', ja: '食べる、飲む、食べ物', type: '動/名' },
      { tp: 'lape', cn: '睡覺 / 休息', en: 'sleep, rest', ja: '眠る、睡眠、休息', type: '動' },
      { tp: 'toki', cn: '說 / 語言 / 交流 / 思考', en: 'talk, speak, language, say', ja: '話す、言葉、言語、コミュニケーション', type: '動/名' },
      { tp: 'sona', cn: '知道 / 理解 / 智慧', en: 'know, understand, wisdom', ja: '知る、理解する、知識、知恵', type: '動/名' },
      { tp: 'pali', cn: '做 / 工作 / 製作 / 建造', en: 'do, work, make, build', ja: 'する、働く、作る、労働', type: '動' },
      { tp: 'lukin', cn: '看 / 尋找 / 閱讀', en: 'see, look, read, seek', ja: '見る、眺める、読む、探す', type: '動' },
      { tp: 'kute', cn: '聽 / 服從 / 耳朵', en: 'hear, listen, ear, obey', ja: '聞く、聴く、耳、従う', type: '動' },
      { tp: 'jo', cn: '擁有 / 拿著', en: 'have, carry, hold', ja: '持つ、所有する、抱える', type: '動' },
      { tp: 'open', cn: '開始 / 打開 / 開啟', en: 'open, turn on, begin', ja: '開く、始める、点ける', type: '動' },
      { tp: 'alasa', cn: '狩獵 / 嘗試 / 搜尋', en: 'hunt, forage, try, seek', ja: '狩る、探す、試みる', type: '動' },
      { tp: 'wile', cn: '想要 / 必須 / 需求', en: 'want, need, must, will', ja: '欲しい、〜したい、必要、〜せねばならない', type: '助動' },
      { tp: 'ken', cn: '能夠 / 可能 / 允許', en: 'can, may, possible, allow', ja: 'できる、〜してもよい、可能性', type: '助動' },
      { tp: 'kepeken', cn: '使用 / 用', en: 'use, with, by means of', ja: '使う、〜を用いて', type: '動/介' },
      { tp: 'pana', cn: '給予 / 發送 / 釋放', en: 'give, send, release, emit', ja: '与える、送る、放つ', type: '動' },
    ],
    sentences: [
      { tp: 'mi wile moku e pan.', cn: '我想要吃麵包。' },
      { tp: 'sina pali e seme?', cn: '你在做什麼？' },
      { tp: 'mi ken ala toki Inli.', cn: '我不會說英文。' },
      { tp: 'o kepeken ilo ni.', cn: '使用這個工具。' },
      { tp: 'ona li pana e mani tawa mi.', cn: '他給了我錢。' },
      { tp: 'mi alasa e tomo.', cn: '我正在找房子。' }
    ]
  },
  {
    id: 'objects',
    title: '物質與物品 (Objects)',
    icon: 'Home',
    description: '日常物品、材質與工具。',
    color: 'bg-amber-600',
    words: [
      { tp: 'ijo', cn: '東西 / 事物 / 對象', en: 'thing, object, matter', ja: '物、事、物体', type: '名詞' },
      { tp: 'ilo', cn: '工具 / 機器 / 設備', en: 'tool, machine, device', ja: '道具、機械、器具', type: '名詞' },
      { tp: 'tomo', cn: '房子 / 室內 / 建築', en: 'house, building, room', ja: '家、建物、部屋', type: '名詞' },
      { tp: 'lipu', cn: '書 / 紙 / 文件 / 網站', en: 'document, book, paper, site', ja: '本、書類、紙、ウェブサイト', type: '名詞' },
      { tp: 'poki', cn: '容器 / 盒子 / 杯子', en: 'container, box, bowl, cup', ja: '容器、箱、コップ、器', type: '名詞' },
      { tp: 'len', cn: '衣服 / 布 / 隱私', en: 'cloth, clothes, fabric, privacy', ja: '布、衣服、覆い、プライバシー', type: '名詞' },
      { tp: 'kiwen', cn: '硬物 / 石頭 / 金屬', en: 'hard object, stone, metal', ja: '硬い物、石、金属', type: '名詞' },
      { tp: 'ko', cn: '粉末 / 膏狀 / 半固體', en: 'semi-solid, powder, paste', ja: '粉末、ペースト、半固体', type: '名詞' },
      { tp: 'kon', cn: '空氣 / 風 / 靈魂', en: 'air, breath, wind, soul', ja: '空気、息、風、精神、魂', type: '名詞' },
      { tp: 'telo', cn: '水 / 液體 / 飲料', en: 'water, liquid, beverage', ja: '水、液体、飲み物', type: '名詞' },
      { tp: 'sike', cn: '圓形 / 輪子 / 循環 / 一年', en: 'circle, wheel, ball, round', ja: '円、球、車輪、回る', type: '名詞' },
      { tp: 'supa', cn: '平面 / 桌子 / 椅子', en: 'horizontal surface, bed, table', ja: '平らな面、テーブル、ベッド、家具', type: '名詞' },
      { tp: 'lupa', cn: '洞 / 門 / 窗戶', en: 'hole, door, window, orifice', ja: '穴、ドア、窓、開口部', type: '名詞' },
      { tp: 'mani', cn: '錢 / 財富 / 家畜', en: 'money, cash, wealth, currency', ja: 'お金、通貨、富、価値', type: '名詞' },
      { tp: 'pan', cn: '穀物 / 麵包 / 麵', en: 'grain, cereal, bread, pasta', ja: '穀物、パン、米、麺', type: '名詞' },
      { tp: 'esun', cn: '商店 / 市場 / 交易', en: 'market, shop, trade, business', ja: '市場、店、売買、商業', type: '名詞' },
    ],
    sentences: [
      { tp: 'mi jo e ilo toki.', cn: '我有手機 (說話的工具)。' },
      { tp: 'telo li lon poki.', cn: '水在杯子裡。' },
      { tp: 'len ni li jaki.', cn: '這件衣服很髒。' },
      { tp: 'mi esun e lipu.', cn: '我買(交易)了一本書。' },
      { tp: 'sike tawa li pakala.', cn: '車輪(移動的圓)壞了。' }
    ]
  },
  {
    id: 'nature',
    title: '自然生態 (Nature)',
    icon: 'Globe',
    description: '動植物與自然現象。',
    color: 'bg-green-600',
    words: [
      { tp: 'suno', cn: '太陽 / 光 / 亮', en: 'sun, light, brightness', ja: '太陽、光、輝き', type: '名詞' },
      { tp: 'mun', cn: '月亮 / 星星 / 夜空物體', en: 'moon, star, night sky object', ja: '月、星、夜空の天体', type: '名詞' },
      { tp: 'kasi', cn: '植物 / 樹 / 葉子', en: 'plant, tree, grass, herb', ja: '植物、木、草、ハーブ', type: '名詞' },
      { tp: 'soweli', cn: '哺乳動物 / 獸', en: 'animal, beast, land mammal', ja: '動物、陸生哺乳類', type: '名詞' },
      { tp: 'waso', cn: '鳥 / 飛禽', en: 'bird, flying creature', ja: '鳥、飛ぶ生き物', type: '名詞' },
      { tp: 'kala', cn: '魚 / 海洋生物', en: 'fish, sea creature', ja: '魚、水生生物', type: '名詞' },
      { tp: 'akesi', cn: '爬蟲 / 兩棲 / 恐龍', en: 'reptile, amphibian, non-cute animal', ja: '爬虫類、両生類', type: '名詞' },
      { tp: 'pipi', cn: '蟲 / 昆蟲', en: 'bug, insect, spider', ja: '虫、昆虫、クモ', type: '名詞' },
      { tp: 'kili', cn: '水果 / 蔬菜 / 果實', en: 'fruit, vegetable, mushroom', ja: '果物、野菜、キノコ', type: '名詞' },
      { tp: 'soko', cn: '蘑菇 / 真菌 (ku)', en: 'mushroom, fungus', ja: 'キノコ、菌類', type: '名詞' },
      { tp: 'kalama', cn: '聲音 / 噪音 / 發聲', en: 'sound, voice, noise', ja: '音、声、ノイズ', type: '名詞' },
      { tp: 'mu', cn: '動物叫聲', en: 'animal noise, woof, meow', ja: '動物の鳴き声（ワン、ニャー等）', type: '擬聲' },
    ],
    sentences: [
      { tp: 'suno li seli mute.', cn: '太陽非常熱。' },
      { tp: 'waso li tawa kon.', cn: '鳥在空中飛 (向空氣移動)。' },
      { tp: 'mi moku e kili lili.', cn: '我吃小果實 (例如莓果)。' },
      { tp: 'kalama suli li lon.', cn: '有一個很大的噪音。' },
      { tp: 'soweli li lape lon anpa kasi.', cn: '動物在樹下睡覺。' }
    ]
  },
  {
    id: 'feelings',
    title: '感受與修飾 (Adjectives)',
    icon: 'Feather',
    description: '形容詞、感覺與狀態描述。',
    color: 'bg-pink-600',
    words: [
      { tp: 'pona', cn: '好 / 簡單 / 正向', en: 'good, simple, positive, nice', ja: '良い、簡単な、素晴らしい、親切な', type: '修飾' },
      { tp: 'ike', cn: '壞 / 複雜 / 負向', en: 'bad, negative, complicated, evil', ja: '悪い、不快な、複雑な、害', type: '修飾' },
      { tp: 'suli', cn: '大 / 重要 / 成年 / 長', en: 'big, tall, long, important', ja: '大きい、長い、重要な', type: '修飾' },
      { tp: 'lili', cn: '小 / 少 / 年輕 / 短', en: 'small, short, few, little', ja: '小さい、短い、少し、幼い', type: '修飾' },
      { tp: 'mute', cn: '多 / 非常', en: 'many, very, much, 20', ja: '多い、たくさん、とても、20', type: '修飾' },
      { tp: 'wawa', cn: '強壯 / 能量 / 激烈', en: 'strong, powerful, energetic', ja: '強い、力、エネルギー、強力な', type: '修飾' },
      { tp: 'nasa', cn: '奇怪 / 瘋狂 / 獨特', en: 'silly, crazy, strange, drunk', ja: '変な、クレイジー、酔った、愚かな', type: '修飾' },
      { tp: 'suwi', cn: '甜 / 可愛', en: 'sweet, cute, fragrant', ja: '甘い、可愛い、愛らしい', type: '修飾' },
      { tp: 'jaki', cn: '髒 / 噁心 / 垃圾', en: 'dirty, gross, trash, pollute', ja: '汚い、ゴミ、不潔な', type: '修飾' },
      { tp: 'pakala', cn: '壞掉 / 錯誤 / 受傷', en: 'broken, damaged, mistake, fail', ja: '壊れる、失敗、事故、破損', type: '修飾' },
      { tp: 'pilin', cn: '感覺 / 情緒 / 心', en: 'feeling, emotion, heart, think', ja: '気持ち、感情、感じる、心', type: '名/動' },
      { tp: 'musi', cn: '好玩 / 藝術 / 娛樂', en: 'fun, play, art, amusing', ja: '楽しい、遊び、芸術、ゲーム', type: '修飾' },
      { tp: 'sin', cn: '新 / 額外 / 更多', en: 'new, fresh, update, another', ja: '新しい、新鮮な、更新する、別の', type: '修飾' },
      { tp: 'namako', cn: '額外的 / 香料 (同 sin)', en: 'spice, extra, embellishment', ja: 'スパイス、調味料、追加、装飾', type: '修飾' },
      { tp: 'weka', cn: '遠離 / 消失 / 缺席', en: 'away, absent, remove, distant', ja: '離れて、不在、取り除く、遠い', type: '修飾' },
    ],
    sentences: [
      { tp: 'mi pilin pona.', cn: '我感覺很好 (我很快樂)。' },
      { tp: 'tomo ni li suli mute.', cn: '這間房子非常大。' },
      { tp: 'o weka e jaki!', cn: '把髒東西拿走！' },
      { tp: 'moku ni li suwi.', cn: '這食物很甜。' },
      { tp: 'sina wawa.', cn: '你很強壯/有力量。' },
      { tp: 'mi wile e ijo sin.', cn: '我想要新的東西。' }
    ]
  },
  {
    id: 'colors_numbers',
    title: '顏色與數字 (Colors & Numbers)',
    icon: 'Palette',
    description: '視覺色彩與計數系統。',
    color: 'bg-cyan-600',
    words: [
      { tp: 'loje', cn: '紅 / 暖色系', en: 'red, reddish', ja: '赤、赤色', type: '顏色' },
      { tp: 'laso', cn: '藍 / 綠 / 冷色系', en: 'blue, green, blue-green', ja: '青、緑、青緑', type: '顏色' },
      { tp: 'jelo', cn: '黃 / 亮綠色系', en: 'yellow, yellowish', ja: '黄、黄色', type: '顏色' },
      { tp: 'pimeja', cn: '黑 / 暗 / 陰影', en: 'black, dark, shadow', ja: '黒、暗い、影', type: '顏色' },
      { tp: 'walo', cn: '白 / 亮 / 蒼白', en: 'white, light-colored, pale', ja: '白、薄い色、明るい', type: '顏色' },
      { tp: 'kule', cn: '顏色 / 多彩 / 塗漆', en: 'color, colorful, paint', ja: '色、カラフル、塗る', type: '顏色' },
      { tp: 'wan', cn: '一 / 統一 / 聯合', en: 'one, unique, unite', ja: '1、一つの、団結する', type: '數字' },
      { tp: 'tu', cn: '二 / 分開 / 雙', en: 'two, duo, divide', ja: '2、二つの、分ける', type: '數字' },
      { tp: 'mute', cn: '多 (>=3) / 20', en: 'many, very, much, 20', ja: '多い、たくさん、とても、20', type: '數字' },
      { tp: 'ale', cn: '100 / 無限', en: 'all, every, 100, universe', ja: '全て、みんな、100、宇宙', type: '數字' },
      { tp: 'nanpa', cn: '號碼 / 第...', en: 'number, -th (ordinal)', ja: '数、数字、〜番目', type: '名詞' },
    ],
    sentences: [
      { tp: 'sitelen tawa ni li kule.', cn: '這部電影(移動的圖片)色彩繽紛。' },
      { tp: 'mi jo e kili tu.', cn: '我有兩個水果。' },
      { tp: 'jan nanpa wan li pona.', cn: '第一個人很好 (贏家)。' },
      { tp: 'len loje li pona tawa mi.', cn: '我喜歡紅色的衣服。' },
      { tp: 'ma pimeja li lon.', cn: '黑暗的地方存在 (意指深淵/暗處)。' }
    ]
  },
  {
    id: 'body',
    title: '身體部位 (Body)',
    icon: 'Zap',
    description: '解剖結構與感官器官。',
    color: 'bg-rose-500',
    words: [
      { tp: 'sijelo', cn: '身體 / 軀幹 / 狀態', en: 'body, physical state', ja: '体、肉体、身体', type: '名詞' },
      { tp: 'lawa', cn: '頭 / 腦 / 控制 / 領導', en: 'head, mind, lead, rule', ja: '頭、指導者、率いる、主導する', type: '名詞' },
      { tp: 'luka', cn: '手 / 手臂 / 五', en: 'hand, arm, five', ja: '手、腕、5', type: '名詞' },
      { tp: 'noka', cn: '腳 / 腿 / 底部', en: 'foot, leg, bottom', ja: '足、脚、歩く、根元', type: '名詞' },
      { tp: 'oko', cn: '眼睛 / 視覺', en: 'eye, vision', ja: '目、視覚', type: '名詞' },
      { tp: 'kute', cn: '耳朵 / 聽覺', en: 'hear, listen, ear, obey', ja: '聞く、聴く、耳、従う', type: '名詞' },
      { tp: 'uta', cn: '嘴巴 / 口 / 唇', en: 'mouth, oral', ja: '口、口腔', type: '名詞' },
      { tp: 'nena', cn: '鼻子 / 山 / 突起物', en: 'bump, hill, mountain, button', ja: '丘、山、突起、ボタン、鼻', type: '名詞' },
      { tp: 'palisa', cn: '棒狀物 / 手指 / 樹枝', en: 'long hard thing, stick, branch', ja: '棒、枝、長い硬い物', type: '名詞' },
    ],
    sentences: [
      { tp: 'lawa mi li pakala.', cn: '我的頭很痛 (頭受傷了/壞了)。' },
      { tp: 'o kepeken luka sina.', cn: '使用你的手 (動手做)。' },
      { tp: 'oko mi li lukin e mun.', cn: '我的眼睛看著月亮。' },
      { tp: 'noka mi li wile lape.', cn: '我的腳想要休息 (走累了)。' },
      { tp: 'nena kute li suli.', cn: '耳廓(聽的突起)很大。' }
    ]
  },
  {
    id: 'sentence_building',
    title: '造句擴充 (Sentence Building)',
    icon: 'PenTool',
    description: '從簡單句到複雜句，一步步學習如何堆疊語意。',
    color: 'bg-orange-500',
    words: [
      { tp: 'la', cn: '情境標記 (放在時間/條件後)', en: '(context marker, if/when)', ja: '（文脈助詞：〜の場合、もし〜なら）', type: '文法' },
      { tp: 'lon', cn: '在 (標記地點/存在)', en: 'in, at, exist, true', ja: '〜にいる、存在する、真実', type: '介係' },
      { tp: 'tan', cn: '因為 / 來自 (標記原因/來源)', en: 'from, because of, cause, origin', ja: '〜から、〜が原因で、起源', type: '介係' },
      { tp: 'kepeken', cn: '使用 (標記工具/手段)', en: 'use, with, by means of', ja: '使う、〜を用いて', type: '介係' },
      { tp: 'tawa', cn: '為了 / 去 (標記目的/方向)', en: 'to, towards, move, for', ja: '〜へ、移動する、行く、〜にとって', type: '介係' },
    ],
    sentences: [
      { tp: 'Set 1 - Level 1: jan li lape.', cn: '【基本句】人睡覺。' },
      { tp: 'Set 1 - Level 2: jan li lape lon tomo.', cn: '【+地點】人在房子裡睡覺。' },
      { tp: 'Set 1 - Level 3: jan pona li lape lon tomo.', cn: '【+形容詞】好人在房子裡睡覺。' },
      { tp: 'Set 1 - Level 4: tenpo pimeja la jan pona li lape lon tomo.', cn: '【+時間情境】在晚上，好人在房子裡睡覺。' },
      { tp: 'Set 1 - Level 5: tenpo pimeja la jan pona li lape lon tomo tan wawa lili.', cn: '【+原因】在晚上，好人因為沒力氣(能量小)所以在房子裡睡覺。' },
      { tp: 'Set 2 - Level 1: mi sitelen.', cn: '【基本句】我在畫畫/寫字。' },
      { tp: 'Set 2 - Level 2: mi sitelen e jan.', cn: '【+受詞】我畫一個人。' },
      { tp: 'Set 2 - Level 3: mi sitelen e jan pona kepeken ilo.', cn: '【+工具】我用工具畫一位朋友。' },
      { tp: 'Set 2 - Level 4: mi sitelen e jan pona kepeken ilo kule.', cn: '【+修飾】我用彩色筆(有顏色的工具)畫一位朋友。' },
      { tp: 'Set 2 - Level 5: tenpo suno la mi sitelen e jan pona kepeken ilo kule.', cn: '【+情境】在白天，我用彩色筆畫一位朋友。' },
      { tp: 'Set 3 - Level 1: mi tawa.', cn: '【基本句】我走/移動。' },
      { tp: 'Set 3 - Level 2: mi tawa esun.', cn: '【+方向】我去市場。' },
      { tp: 'Set 3 - Level 3: mi tawa esun suli.', cn: '【+形容詞】我去大市場。' },
      { tp: 'Set 3 - Level 4: mi tawa esun suli tan moku.', cn: '【+原因】我因為食物的關係去大市場。' },
      { tp: 'Set 3 - Level 5: tenpo pimeja la mi tawa esun suli tan moku.', cn: '【+情境】在晚上，我因為食物的關係去大市場。' },
      { tp: 'Set 4 - Level 1: mi kute.', cn: '【基本句】我聽。' },
      { tp: 'Set 4 - Level 2: mi kute e kalama.', cn: '【+受詞】我聽聲音。' },
      { tp: 'Set 4 - Level 3: mi kute e kalama musi.', cn: '【+複合詞】我聽音樂(好玩的聲音)。' },
      { tp: 'Set 4 - Level 4: mi kute e kalama musi lon tomo mi.', cn: '【+地點】我在我家聽音樂。' },
      { tp: 'Set 4 - Level 5: mi en jan pona li kute e kalama musi lon tomo mi.', cn: '【+複合主詞】我和朋友在我家聽音樂。' }
    ]
  },
  {
    id: 'stories',
    title: '短文閱讀 (Short Stories)',
    icon: 'FileText',
    description: '閱讀完整的段落與小故事，練習語感。',
    color: 'bg-teal-600',
    words: [
      { tp: 'open', cn: '開始', en: 'open, turn on, begin', ja: '開く、始める、点ける', type: '動詞' },
      { tp: 'pini', cn: '結束', en: 'end, finish, past, closed', ja: '終わる、完了、過去、閉じる', type: '動詞' },
      { tp: 'taso', cn: '但是', en: 'but, however, only', ja: 'しかし、ただし、唯一', type: '連接' },
      { tp: 'kin', cn: '也 / 確實', en: 'also, indeed, even', ja: '〜もまた、確かに（強調）', type: '助詞' },
      { tp: 'monsuta', cn: '怪物 / 恐懼', en: 'monster, fear, scary', ja: '怪物、恐怖、怖い', type: '名詞' },
    ],
    sentences: [
      { 
        tp: 'tenpo suno mi (我的一天): tenpo suno la mi open e oko. mi moku e pan, mi moku e telo wawa. mi tawa esun kepeken noka mi. esun li lon.', 
        cn: '早安，我睜開眼睛。我吃麵包，喝咖啡(強力的水)。我走路去商店。商店到了。' 
      },
      { 
        tp: 'soweli lili (小動物): soweli lili li lon ma kasi. ona li alasa e moku. taso, jan suli li kama. soweli li tawa weka. ona li pilin monsuta.', 
        cn: '小動物在森林裡。牠在找食物。但是，大人來了。動物跑走了。牠感到害怕。' 
      },
      {
        tp: 'jan pimeja (忍者?): jan ni li len e sijelo ona. ona li tawa sama kon. jan ala li lukin e ona. ona li pali e ijo suli, taso ona li toki ala.',
        cn: '這個人遮住了身體。他移動得像風一樣。沒人看見他。他做了重要的事情，但他不說話。'
      },
      {
        tp: 'jan pi pali moku (廚師): jan ni li sona e moku. ona li kepeken e kili mute en telo suwi. jan ale li wile moku e ijo ona. ona li pilin pona tan ni.',
        cn: '這個人懂食物。他使用很多水果和甜水。所有人都想吃他的東西。他因此感到開心。'
      },
      {
        tp: 'ilo li weka (遺失的工具): mi jo e ilo. ilo ni li pona tawa mi. taso, tenpo ni la mi lukin ala e ona. mi alasa lon tomo, mi alasa lon ma. mi pilin ike.',
        cn: '我有一個工具。我很喜歡它。但是，現在我看不見它了。我在屋裡找，我在戶外找。我感到難過。'
      },
      {
        tp: 'tenpo pimeja (夜空): suno li tawa anpa. mun li kama. mun lili mute li lon sewi. ma li pimeja. mi lape lon supa.',
        cn: '太陽下山了。月亮來了。許多小星星在天上。大地是黑的。我在床上睡覺。'
      },
      {
        tp: 'kasi suli (生長的植物): mi pana e kasi lili lon ma. mi pana e telo tawa ona. tenpo mute li tawa. kasi li kama suli. kili li kama.',
        cn: '我把小植物種在土裡。我給它澆水。許多時間過去了。植物變大了。果實長出來了。'
      },
      {
        tp: 'telo sewi (雨天): telo li kama tan sewi. ma li kama telo. mi ken ala tawa anpa. mi awen lon tomo. mi lukin e telo tan lupa.',
        cn: '水從天上來（下雨）。地板濕了。我不能出去。我待在家裡。我從窗戶看雨。'
      },
      {
        tp: 'tomo pakala (破房子): tomo ni li suli, taso ona li pakala. jan ala li lon ni. pipi mute li lon. mi wile ala tawa insa.',
        cn: '這房子很大，但它壞了。沒有人在這裡。有很多蟲子。我不想進去裡面。'
      },
      {
        tp: 'kama sona (學習語言): mi kama sona e toki pona. toki ni li lili. mi toki tawa jan pona mi. ona li kute e mi. mi tu li musi.',
        cn: '我正在學 Toki Pona。這個語言很小（詞彙少）。我對我的朋友說。他聽我說。我們兩個很開心。'
      },
      {
        tp: 'waso kalama (吵鬧的鳥): waso li lon sewi tomo. ona li kalama mute. mi wile lape, taso mi ken ala. waso o, o pini e kalama!',
        cn: '鳥在屋頂上。牠發出很多聲音。我想睡覺，但我沒辦法。鳥啊，停止發出聲音吧！'
      },
      {
        tp: 'esun len (買衣服): mi wile e len sin. len mi li jaki. mi tawa esun. mi esun e len loje. ona li pona lukin.',
        cn: '我想要新衣服。我的衣服髒了。我去商店。我買了紅色的衣服。它看起來很好看。'
      },
      {
        tp: 'jan suli (智者): jan suli li lon ma. ona li sona e ijo mute. jan lili li kama tawa ona. ona li toki e sona tawa jan lili.',
        cn: '一位長者在鄉間。他知道很多事情。孩子們來到他身邊。他對孩子們訴說知識。'
      },
      {
        tp: 'tomo tawa wawa (快車): tomo tawa ni li wawa. ona li tawa kepeken tenpo lili. mi lon insa ona. mi pilin wawa. mi tawa weka.',
        cn: '這輛車很強勁。它移動得很快（用很少時間）。我在裡面。我感到很刺激。我遠行去了。'
      },
      {
        tp: 'kala laso (藍色的魚): kala laso li lon telo. ona li tawa pona. kala suli li wile moku e ona. taso, kala laso li tawa wawa. ona li awen.',
        cn: '藍色的魚在水裡。牠游得很優雅。大魚想吃牠。但是，藍魚游得很快。牠活下來了。'
      },
      {
        tp: 'pali kalama (做音樂): mi jo e ilo kalama. mi pali e kalama suwi. jan pona mi li tawa musi. kulupu mi li pilin pona.',
        cn: '我有樂器。我製造甜美的聲音。我的朋友在跳舞。我們這群人感到很開心。'
      },
      {
        tp: 'tenpo lete (冬天): tenpo lete li kama. ko walo li lon ma. mi o lu e len mute. seli li pona tawa mi. mi moku e telo seli.',
        cn: '寒冷的時候（冬天）來了。白色的粉末（雪）在地上。我必須穿很多衣服。我喜歡溫暖。我喝熱水。'
      },
      {
        tp: 'pona pi ijo lili (簡單生活): mi jo e tomo lili, e moku, e jan pona. ni li pona tawa mi. mi wile ala e mani mute. mi pilin pona tan ni: mi lon.',
        cn: '我有小房子、食物和朋友。這對我來說很好。我不想要很多錢。我因為活著而感到快樂。'
      },
      {
        tp: 'jan pi ma weka (遠方的旅人): tenpo pini la, jan wan li tawa weka tan tomo ona. ona li wile lukin e ma ale. ona li tawa kepeken noka. tenpo suno mute li tawa. ona li kama jo e jan pona sin. ona li lukin e kasi kule e ma nena suli. taso, tenpo ni la ona li wile tawa sin tomo mama. "ma ale li pona," ona li toki, "taso tomo mi li pona nanpa wan."',
        cn: '很久以前，有一個人離開家去遠行。他想看看整個世界。他用雙腳走路。許多日子過去了。他結交了新朋友。他看見了彩色的植物和高大的山。但是，現在他想再次回到父母的家（家鄉）。「世界各地都很好，」他說，「但是我家是最好的。」'
      },
      {
        tp: 'tenpo musi suli (盛大的節日): tenpo suno ni li suli tawa kulupu mi. jan ale li kama lon ma open. moku mute en telo suwi li lon. jan li pali e kalama musi kepeken ilo. meli en mije li tawa musi. jan lili li musi kepeken kili. ale li pilin pona. mi toki tawa jan olin mi: "tenpo ni li suwi. mi wile awen lon ni."',
        cn: '今天對我們社群來說很重要。所有人都來到廣場（開闊地）。有許多食物和甜飲料。人們用樂器演奏音樂。男人和女人在跳舞。小孩玩著果實。大家都感到快樂。我對我的愛人說：「這時刻很甜美。我希望能停留在這裡。」'
      }
    ]
  },
  {
    id: 'dialogues',
    title: '日常情境對話 (Conversations)',
    icon: 'MessageSquare',
    description: '精選 5 大生活實用場景，透過雙人對話氣泡卡片與語音朗讀練習實際交際。',
    color: 'bg-teal-600',
    words: [
      { tp: 'pali', cn: '工作 / 做', en: 'do, work, make, build', ja: 'する、働く、作る、労働', type: '動詞' },
      { tp: 'mani', cn: '錢 / 財富', en: 'money, cash, wealth, currency', ja: 'お金、通貨、富、価値', type: '名詞' },
      { tp: 'ijo', cn: '東西 / 事情', en: 'thing, object, matter', ja: '物、事、物体', type: '名詞' },
      { tp: 'wile', cn: '想要 / 需要', en: 'want, need, must, will', ja: '欲しい、〜したい、必要、〜せねばならない', type: '動詞' },
      { tp: 'pona', cn: '好 / 棒 / 簡潔', en: 'good, simple, positive, nice', ja: '良い、簡単な、素晴らしい、親切な', type: '修飾' },
    ],
    sentences: [],
    dialogues: [
      {
        sceneTitle: '1. 日常問候與初次見面 (Greetings & Meeting)',
        rounds: [
          { speaker: 'A', tp: 'toki! sina pilin seme?', cn: '嗨！你感覺怎麼樣？(你好嗎？)' },
          { speaker: 'B', tp: 'toki! mi pilin pona. sina toki e seme?', cn: '嗨！我感覺很好。你說了什麼？(你呢？)' },
          { speaker: 'A', tp: 'nimi mi li Alan. nimi sina li seme?', cn: '我的名字是 Alan。你的名字是什麼？' },
          { speaker: 'B', tp: 'nimi mi li Lina. tenpo ni la mi kama sona e toki pona.', cn: '我的名字是 Lina. 我現在正在學 Toki Pona。' },
          { speaker: 'A', tp: 'ni li pona mute! mi tu li jan pona.', cn: '這太棒了！我們兩個是好朋友。' }
        ]
      },
      {
        sceneTitle: '2. 市場購物與問價 (Market & Shopping)',
        rounds: [
          { speaker: 'A', tp: 'o lukin e ni! kili ni li pona lukin.', cn: '看這個！這個水果看起來很好看。' },
          { speaker: 'B', tp: 'ona li jseli anu seme? mani seme li wile?', cn: '它甜嗎？需要多少錢？(多少錢？)' },
          { speaker: 'A', tp: 'mani lili taso li wile. ona li suwi mute.', cn: '只需要一點錢。它非常甜。' },
          { speaker: 'B', tp: 'pona! mi wile e kili tu.', cn: '太好了！我要兩個水果。' },
          { speaker: 'A', tp: 'ni li mani sina. tenpo pona!', cn: '這是你的錢。祝你有美好的一天！' }
        ]
      },
      {
        sceneTitle: '3. 餐廳點餐與飲食 (Dining & Food)',
        rounds: [
          { speaker: 'A', tp: 'moku li lon. sina wile moku e seme?', cn: '食物來了。你想吃什麼？' },
          { speaker: 'B', tp: 'mi wile moku e pan e kili mute.', cn: '我想吃麵包和很多水果。' },
          { speaker: 'A', tp: 'telo seli anu telo wawa li wile tawa sina?', cn: '你想要熱水(茶/湯)還是能量水(咖啡/飲料)？' },
          { speaker: 'B', tp: 'telo seli li pona. mi wile moku.', cn: '熱水很好。我想要進食了。' },
          { speaker: 'A', tp: 'o moku pona!', cn: '請慢用！(吃得開心！)' }
        ]
      },
      {
        sceneTitle: '4. 問路與方向引導 (Asking Directions)',
        rounds: [
          { speaker: 'A', tp: 'toki! tomo sona li lon seme?', cn: '請問！學校(學習的房子)在哪裡？' },
          { speaker: 'B', tp: 'o tawa nasin ni. o tawa sinpin tenpo lili.', cn: '走這條路。向前走一小段。' },
          { speaker: 'A', tp: 'tomo sona li lon poka anu seme?', cn: '學校在旁邊嗎？' },
          { speaker: 'B', tp: 'lon. ona li lon poka pi tomo moku.', cn: '對。它在餐廳旁邊。' },
          { speaker: 'A', tp: 'ona li pona mute. tenpo tawa pona!', cn: '太感謝了。一路平安！' }
        ]
      },
      {
        sceneTitle: '5. 情感交流與關懷 (Emotions & Comfort)',
        rounds: [
          { speaker: 'A', tp: 'sina pilin ike. ijo seme li pakala?', cn: '你心情不好。發生什麼壞事了嗎？' },
          { speaker: 'B', tp: 'mi pali mute. tenpo lili lape li lon ala.', cn: '我工作很多。最近睡眠不足。' },
          { speaker: 'A', tp: 'o awen. tenpo pimeja la sina o lape pona lon supa.', cn: '保重。今晚你一定要在床上好好睡覺。' },
          { speaker: 'B', tp: 'toki sina li pana e wawa tawa mi. tenpo pona tawa sina.', cn: '你的話給了我力量。謝謝你。' },
          { speaker: 'A', tp: 'mi olin e sina. mi tu li jan pona ale.', cn: '我愛你。我們永遠是好朋友。' }
        ]
      }
    ]
  }
];
