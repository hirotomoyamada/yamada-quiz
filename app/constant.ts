export type Quiz = {
  question: string;
  description?: string;
  choices: Choice[];
  answer: number;
};

export type Choice = {
  id: number;
  label: string;
};

export type Quizzes = {
  low: Quiz[];
  middle: Quiz[];
  high: Quiz[];
};

export const quizzes: Quizzes = {
  low: [
    {
      question: '山田がマクドナルドで飲むドリンクは？',
      choices: [
        { id: 1, label: 'コカ・コーラ' },
        { id: 2, label: 'ファンタグレープ' },
        { id: 2, label: 'スプライト' },
        { id: 2, label: 'ファンタメロン' },
      ],
      answer: 2,
    },
    {
      question: '山田の誕生日は？',
      choices: [
        { id: 1, label: '1993年8月11日' },
        { id: 2, label: '1993年8月16日' },
        { id: 3, label: '1993年8月18日' },
        { id: 4, label: '1993年8月19日' },
      ],
      answer: 3,
    },
    {
      question: '山田が1番好きなスポーツは？',
      choices: [
        { id: 1, label: 'サッカー' },
        { id: 2, label: '野球' },
        { id: 3, label: 'バスケットボール' },
        { id: 4, label: 'テニス' },
      ],
      answer: 2,
    },
    {
      question: '山田の1番の大好物は？',
      choices: [
        { id: 1, label: 'ピザ' },
        { id: 2, label: 'ハンバーグ' },
        { id: 3, label: 'ポテトサラダ' },
        { id: 4, label: 'カレー' },
      ],
      answer: 3,
    },
    {
      question: '山田が映画館で飲むドリンクは？',
      choices: [
        { id: 1, label: 'コカ・コーラ' },
        { id: 2, label: 'ファンタグレープ' },
        { id: 3, label: 'スプライト' },
        { id: 4, label: 'ファンタメロン' },
      ],
      answer: 4,
    },
    {
      question: '山田の誕生日にすることは？',
      choices: [
        { id: 1, label: '島旅行' },
        { id: 2, label: '海外旅行' },
        { id: 3, label: '帰省' },
        { id: 4, label: '温泉旅行' },
      ],
      answer: 1,
    },
    {
      question: '山田の1番好きな作品は？',
      choices: [
        { id: 1, label: '機動戦士ガンダム' },
        { id: 2, label: '天元突破グレンラガン' },
        { id: 3, label: '新世紀エヴァンゲリオン' },
        { id: 4, label: '超時空要塞マクロス' },
      ],
      answer: 2,
    },
    {
      question: '山田の代表作は？',
      choices: [
        { id: 1, label: 'Yamada UI' },
        { id: 2, label: 'shadcn/ui' },
        { id: 3, label: 'Chakra UI' },
        { id: 4, label: 'Mantine' },
      ],
      answer: 1,
    },
    {
      question: '山田が好きな数字は？',
      choices: [
        { id: 1, label: '1' },
        { id: 2, label: '7' },
        { id: 3, label: '8' },
        { id: 4, label: '2' },
      ],
      answer: 3,
    },
    {
      question: '山田が1番好きな映画は？',
      choices: [
        { id: 1, label: '日本沈没' },
        { id: 2, label: 'アルマゲドン' },
        { id: 3, label: '黄泉がえり' },
        { id: 4, label: 'バック・トゥ・ザ・フューチャー' },
      ],
      answer: 2,
    },
  ],
  middle: [
    {
      question: '山田が会社を立ち上げた歳は？',
      choices: [
        { id: 1, label: '16歳' },
        { id: 2, label: '17歳' },
        { id: 3, label: '19歳' },
        { id: 4, label: '20歳' },
      ],
      answer: 2,
    },
    {
      question: '山田が1番嫌いなスポーツは？',
      choices: [
        { id: 1, label: 'サッカー' },
        { id: 2, label: '野球' },
        { id: 3, label: 'バスケットボール' },
        { id: 4, label: 'テニス' },
      ],
      answer: 1,
    },
    {
      question: '山田のデスクに必ずあるものは？',
      choices: [
        { id: 1, label: '定規' },
        { id: 2, label: 'メモ帳' },
        { id: 3, label: '電卓' },
        { id: 4, label: 'ペン' },
      ],
      answer: 1,
    },
    {
      question: '山田の好きな色は？',
      choices: [
        { id: 1, label: '赤' },
        { id: 2, label: '黒' },
        { id: 3, label: '青' },
        { id: 4, label: '緑' },
      ],
      answer: 4,
    },
    {
      question: '山田の自宅で好きな場所は？',
      choices: [
        { id: 1, label: 'デスク' },
        { id: 2, label: 'ベッド' },
        { id: 3, label: 'トイレ' },
        { id: 4, label: 'ベランダ' },
      ],
      answer: 3,
    },
    {
      question: '山田が好きなスポーツブランドは？',
      choices: [
        { id: 1, label: 'アディダス' },
        { id: 2, label: 'ナイキ' },
        { id: 3, label: 'プーマ' },
        { id: 4, label: 'アシックス' },
      ],
      answer: 1,
    },
    {
      question: '山田が1番好きな花は？',
      choices: [
        { id: 1, label: '金木犀' },
        { id: 2, label: '胡蝶蘭' },
        { id: 3, label: '朝顔' },
        { id: 4, label: '向日葵' },
      ],
      answer: 1,
    },
    {
      question: '山田の血液型は？',
      choices: [
        { id: 1, label: 'A型' },
        { id: 2, label: 'B型' },
        { id: 3, label: 'O型' },
        { id: 4, label: 'AB型' },
      ],
      answer: 2,
    },
    {
      question: '山田が留学していた国は？',
      choices: [
        { id: 1, label: 'ドイツ' },
        { id: 2, label: 'フランス' },
        { id: 3, label: 'イギリス' },
        { id: 4, label: 'アメリカ' },
      ],
      answer: 4,
    },
    {
      question: '山田が1番好きなゲームは？',
      choices: [
        { id: 1, label: 'Halo' },
        { id: 2, label: 'Gears of War' },
        { id: 3, label: 'ファイナルファンタジー' },
        { id: 4, label: '太鼓の達人' },
      ],
      answer: 1,
    },
  ],
  high: [
    {
      question: '山田の先祖ではない人は？',
      choices: [
        { id: 1, label: '山田重忠' },
        { id: 2, label: '山田重満' },
        { id: 3, label: '浦野重直' },
        { id: 4, label: '山田方谷' },
      ],
      answer: 4,
    },
    {
      question: '山田の名付け親は？',
      choices: [
        { id: 1, label: '神様' },
        { id: 2, label: '祖父' },
        { id: 3, label: '父親' },
        { id: 4, label: '母親' },
      ],
      answer: 1,
    },
    {
      question: '山田が落ち込むと行く場所は？',
      choices: [
        { id: 1, label: '河川敷' },
        { id: 2, label: '堤防' },
        { id: 3, label: 'パチンコ' },
        { id: 4, label: 'バー' },
      ],
      answer: 2,
    },
    {
      question: '山田のママの旧姓は？',
      choices: [
        { id: 1, label: '斉藤' },
        { id: 2, label: '山岸' },
        { id: 3, label: '鈴木' },
        { id: 4, label: '西野' },
      ],
      answer: 2,
    },
    {
      question: '山田の1番好きなポケモンは？',
      choices: [
        { id: 1, label: 'コダック' },
        { id: 2, label: 'ルギア' },
        { id: 3, label: 'ミュウツー' },
        { id: 4, label: 'カイリュー' },
      ],
      answer: 2,
    },
    {
      question: '山田の出生地は？',
      choices: [
        { id: 1, label: '名古屋市千種区' },
        { id: 2, label: '名古屋市中川区' },
        { id: 3, label: '名古屋市北区' },
        { id: 4, label: '名古屋市西区' },
      ],
      answer: 3,
    },
    {
      question: '山田の子ども頃のゲーム内のあだ名は？',
      choices: [
        { id: 1, label: '山田' },
        { id: 2, label: 'ゴキポン' },
        { id: 3, label: '火星人' },
        { id: 4, label: '太郎' },
      ],
      answer: 2,
    },
    {
      question: '山田の好きな音響メーカーは？',
      choices: [
        { id: 1, label: 'ソニー' },
        { id: 2, label: 'JBL' },
        { id: 3, label: 'デノン' },
        { id: 4, label: '三菱電機' },
      ],
      answer: 4,
    },
    {
      question: '山田が1番好きなウルトラマンは？',
      choices: [
        { id: 1, label: 'ウルトラマンティガ' },
        { id: 2, label: 'ウルトラマンタロウ' },
        { id: 3, label: 'ウルトラマンセブン' },
        { id: 4, label: 'ウルトラマンダイナ' },
      ],
      answer: 2,
    },
    {
      question: '山田が結婚式を行う場所は？',
      choices: [
        { id: 1, label: '熱田神宮' },
        { id: 2, label: '伊勢神宮' },
        { id: 3, label: '明治神宮' },
        { id: 4, label: '那古野神社' },
      ],
      answer: 1,
    },
  ],
};

export const scores = {
  12: 'ゴミ',
  14: '山田の知り合い',
  16: '山田のお気に入り',
  18: '山田の彼女',
  20: '山田の奥さん',
};

export const getScoreColor = (score: number) => {
  if (score >= 18) return 'success.emphasized';
  if (score >= 14) return 'warning.emphasized';

  return 'error.emphasized';
};
