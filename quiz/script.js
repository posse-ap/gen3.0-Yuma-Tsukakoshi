'use strict';

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

  const QuizContainer = document.getElementById('js-QuizContainer');

  const createQuizHtml = (quizItem,quizNumber) => {

//<li>タグの解答HTML
  function AnsShuffle(arr){
    for(let i =arr.length-1 ; i>0 ;i--){
        let j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
    return arr
  }
  
  const AnswersHtml = quizItem.Answer.map((Answer,AnswerIndex) => `<li class="p-quiz-box-answer-item">
      <button class="p-quiz-box-answer-button js-answer" answer-index="${AnswerIndex}">
        ${Answer}<i class="u-icon-arrow"></i>
    </button>
  </li>`
  ); //mapメソッドにアロー関数で引数を2つ、valueとindexという名前でとる。1つ目の引数のvalueには配列の値が入り、2つ目の引数のindexにはインデックス番号が入る。
  const Shulle_Answer_HTML = AnsShuffle(AnswersHtml).join("")
  console.log(Shulle_Answer_HTML);

//<blockquote>タグのHTML
  const QuoteHtml = quizItem.Quote ? `<blockquote class="p-quiz-box-note">
    <i class="u-icon-note"></i>${quizItem.Quote}
  </blockquote>` : "";

  return `<section class="p-quiz-box js-quiz" quiz-number="${quizNumber}">
      <div class="p-quiz-box-question">
        <h2 class="p-quiz-box-question-title">
          <span class="p-quiz-box-label">Q${quizNumber+1}</span>
          
          <span class="p-quiz-box-question-title-text">${quizItem.Question}</span>
        </h2>
        <figure class="p-quiz-box-question-image">
          <img src="./img/img-${quizItem.QuizNumber}.png" alt="">
        </figure>
      </div>
      <div class="p-quiz-box-answer">
        <span class="p-quiz-box-label p-quiz-box-label-accent">A</span>
        <ul class="p-quiz-box-answer-list">
          ${Shulle_Answer_HTML}
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
    </section>`
  }  

  function QuizNumberShuffle(arr){
    for(let i =arr.length-1 ; i>0 ;i--){
        let j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
    return arr
}

  const Shuffle_Question = QuizNumberShuffle(ALL_QUESTION);

  //↓ALL＿QUESTIONの各要素をquizItemに格納
    QuizContainer.innerHTML = Shuffle_Question.map((quizItem,quizNumber) => {
      return createQuizHtml(quizItem,quizNumber)
    }).join('')

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

        const ANSWER_ELEMENT = Shuffle_Question[selectedQuiz] 
        const correctNumber = ANSWER_ELEMENT.CorrectIndex
        const isCorrect = correctNumber === selectedAnswer;
        answerText.innerText = ANSWER_ELEMENT.Answer[correctNumber]; 
        setAnsTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);
      })
    })
  })
} 
