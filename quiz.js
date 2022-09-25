'use strict' ;
{
  const ALLQUIZ = [
    {
      id: 1,
      question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
      answers: ['約28万人', '約79万人', '約183万人'],
      correctNumber: 1,
      note: '経済産業省 2019年3月 － IT 人材需給に関する調査'
    },
    {
      id: 2,
      question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
      answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
      correctNumber: 2,
    },
    {
      id: 3,
      question: 'IoTとは何の略でしょう？',
      answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
      correctNumber: 0,
    },
    {
      id: 4,
      question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
      answers: ['Society 5.0', 'CyPhy', 'SDGs'],
      correctNumber: 0,
      note: 'Society5.0 - 科学技術政策 - 内閣府'
    },
    {
      id: 5,
      question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
      answers: ['Web3.0', 'NFT', 'メタバース'],
      correctNumber: 0,
    },
    {
      id: 6,
      question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
      answers: ['約2倍', '約5倍', '約11倍'],
      correctNumber: 1,
      note: 'Accenture Technology Vision 2021'
    }
  ];

  const Container = document.getElementById("js-quizContainer");

  //ContainerのinnerHTMLの作成
  const CreateQuizHTML = (quizItem,questionNumber) => {

    //AnswersのHTML作成
    const AnswersHTML = quizItem.answers.map((answer,answerIndex) => `<li class="p-quiz-box__answer__item">
      <button class="p-quiz-box__answer__button js-answer" data-answer="${answerIndex}">
      ${answer}<i class="u-icon__arrow"></i>
      </button>
    </li>`
    ).join('') ;

    //noteのHTMLの作成
    const NoteHTML = quizItem.note ? `<cite    class="p-quiz-box__note">
      <i class="u-icon__note"></i>${quizItem.note}
    </cite>` : '';

    return `<section class="p-quiz-box js-quiz" data-quiz="${questionNumber}">
      <div class="p-quiz-box__question">
        <h2 class="p-quiz-box__question__title">
          <span class="p-quiz-box__label">Q${questionNumber + 1}</span>
          <span
            class="p-quiz-box__question__title__text">${quizItem.question}</span>
        </h2>
        <figure class="p-quiz-box__question__image">
          <img src="../assets/img/quiz/img-quiz0${quizItem.id}.png" alt="">
        </figure>
      </div>
      <div class="p-quiz-box__answer">
        <span class="p-quiz-box__label   p-quiz-box__label--accent">A</span>
        <ul class="p-quiz-box__answer__list">
          ${AnswersHTML}
        </ul>
        <div class="p-quiz-box__answer__correct js-answerBox">
          <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
          <p class="p-quiz-box__answer__correct__content">
            <span class="p-quiz-box__answer__correct__content__label">A</span>
            <span class="js-answerText"></span>
          </p>
        </div>
      </div>
      ${NoteHTML}
    </section>`
  }

  //問題のシャッフル
  const shuffle = arrays => {
    const array = arrays.slice(); //全配列を取得
    for (let i = array.length-1 ; i>0 ; i--) {
      const randomIndex = Math.floor(Math.random()*(i+1));
      [array[i],array[randomIndex]] = [array[randomIndex],array[i]];
    }
    return array
  }

  const ALLQUIZ_Shuffle = shuffle(ALLQUIZ)
  
  //各問題のクイズのhtmlすべて作成(解答以外)
  Container.innerHTML = ALLQUIZ_Shuffle.map((quizItem,Index)
  => {
    return CreateQuizHTML(quizItem,Index)
  }).join('')
  
  //すべての問題を取得し、各問題に対して処理を施す
  const allQuiz  = document.querySelectorAll('.js-quiz')

  //問題の非活性化 + 解答のタイトル + 解答にクラス設定
  const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;
    });
  }

  const setQuizTitle = (target,isCorrect) => {
    target.innerHTML = isCorrect ? '正解！' : '不正解...';
  }

  const setQuizClass = (target,isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct':'is-incorrect');
  }

  //各問題の処理を記述
  allQuiz.forEach(quiz=>{
    const answerBox = quiz.querySelector('.js-answerBox');
    const answerTitle = quiz.querySelector('.js-answerTitle'); 
    const answerText = quiz.querySelector('.js-answerText');
    
    const answers = quiz.querySelectorAll('.js-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'))

    answers.forEach(answer => {
      answer.addEventListener('click',() => {
        answer.classList.add('is-selected');
        const selectedAnswerNumber = Number(answer.getAttribute('data-answer'));

        setDisabled(answers);

        const correctNumber = ALLQUIZ_Shuffle[selectedQuiz].correctNumber 
        const isCorrect = correctNumber === selectedAnswerNumber

        answerText.innerHTML = ALLQUIZ_Shuffle[selectedQuiz]. answers[correctNumber];
        setQuizTitle(answerTitle,isCorrect)
        setQuizClass(answerBox,isCorrect)
      })
    })
  })
}