'use strict';
//${ 変数 }とすることで、文字列内に変数を展開できる

{
  const ALL_QUESTION = [
    {
      QuizNumber : 1,
      Question : '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？', 
      Answer :['約28万人','約79万人','約183万人'],
      CorrectIndex : 1,
      Quote : '経済産業省 2019年3月 － IT 人材需給に関する調査'
    },
    {
      QuizNumber : 2,
      Question : '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？', 
      Answer :['INTECH','BIZZTECH','X-TECH'],
      CorrectIndex : 2,
    },
    {
      QuizNumber : 3,
      Question : 'IoTと何の略でしょう？', 
      Answer :['Internet of Things','Integrate into Technology','Information on Tool'],
      CorrectIndex : 0,
    },
    {
      QuizNumber : 4,
      Question : 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？', 
      Answer :['Society 5.0',' CyPhy','SDGs'],
      CorrectIndex : 0,
      Quote :'Society5.0 - 科学技術政策 - 内閣府' ,
    },
    {
      QuizNumber : 5,
      Question : 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？', 
      Answer :['Web5.0','NFT','メタバース'],
      CorrectIndex : 0,
    },
    {
      QuizNumber : 6,
      Question : '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？', 
      Answer :['約2倍','約5倍','約11倍'],
      CorrectIndex : 1,
      Quote :'Accenture Technology Vision 2021'
    },
  ];

//<li>タグの解答HTML
  const AnsersHtml = 
  `<li class="p-quiz-box-answer-item">
    <button class="p-quiz-box-answer-button js-answer" answer-index="${ALL_QUESTION.Answer.index}">${ALL_QUESTION.Answer}<i class="u-icon-arrow"></i>
    </button>
  </li>`

//<blockquote>タグのHTML
  const QuoteHtml = ALL_QUESTION.note ? `<blockquote class="p-quiz-box-note">
    <i class="u-icon-note"></i>${ALL_QUESTION.note}
  </blockquote>` : "";

  document.write(`<section class="p-quiz-box js-quiz" quiz-number="${ALL_QUESTION.QuizNumber}"-1>
      <div class="p-quiz-box-question">
        <h2 class="p-quiz-box-question-title">
          <span class="p-quiz-box-label">Q${ALL_QUESTION.QuizNumber}</span>
          <span class="p-quiz-box-question-title-text">${ALL_QUESTION.Question}</span>
        </h2>
        <figure class="p-quiz-box-question-image">
          <img src="./img/img-${ALL_QUESTION.QuizNumber}.png" alt="">
        </figure>
      </div>
      <div class="p-quiz-box-answer">
        <span class="p-quiz-box-label p-quiz-box-label-accent">A</span>
        <ul class="p-quiz-box-answer-list">
          ${AnsersHtml}
        </ul>
        <div class="p-quiz-box-answer-correct js-answerBox">
          <p class="p-quiz-box-answer-correct-title js-answerTitle"></p>
          <p class="p-quiz-box-answer-correct-content">
            <span class="p-quiz-box-answer-correct-content-label">A</span>
            <span class="js-answerText"></span>
          </p>
        </div>
      </div>
      ${QuoteHtml}
    </section>`)
  

  const allQuestion  = document.querySelectorAll('.js-quiz');
  const correct_text = '正解！';
  const incorrect_text = '不正解...'; 

  function setAnsTitle(target, isCorrect) {
    target.innerText = isCorrect ? correct_text : incorrect_text;
  }
  function setClassName(target, isCorrect) {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
  }  
  const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;
    })
  }

  allQuestion.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');
    const answerBox = quiz.querySelector('.js-answerBox');
    const answerTitle = quiz.querySelector('.js-answerTitle');
    const answerText = quiz.querySelector('.js-answerText');
    const selectedQuiz = Number(quiz.getAttribute('quiz-number')); 

    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        answer.classList.add('is-selected');

        const selectedAnswer = Number(answer.getAttribute('answer-index'));

        setDisabled(answers);

        const ANSWER_ELEMENT = CORRECT_ANSWERS[selectedQuiz] 
        const isCorrect = ANSWER_ELEMENT.index === selectedAnswer;
        answerText.innerText = ANSWER_ELEMENT.value; 
        setAnsTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);
      })
    })
  })
}