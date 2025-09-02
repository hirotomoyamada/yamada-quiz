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
  row: Quiz[];
  middle: Quiz[];
  high: Quiz[];
};

export const quizzes: Quizzes = {
  row: [
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
  ],
};

export const scores = {
  4: 'ゴミ',
  8: '山田の知り合い',
  12: '山田のお気に入り',
  16: '山田の彼女',
  20: '山田の奥さん',
};
