const quizData = [
    {
      question: 'Hangisi periyodik tabloda bulunan bir element değildir?',
      a: 'Azot',
      b: 'Su',
      c: 'Oksijen',
      d: 'Potasyum',
      e: 'Hidrojen',
      correct: 'b',
    },
    {
      question: ' Hangisi kuvvet birimidir?',
      a: 'Pascal',
      b: 'Newton',
      c: 'Joule',
      d: 'Kelvin',
      e: 'Kandela',
      correct: 'b',
    },
    {
      question: 'Kuyucaklı Yusuf adlı eser kime aittir?',
      a: 'Orhan Pamuk',
      b: 'Yaşar Kemal',
      c: 'Zülfü Livaneli',
      d: 'Sabahattin Ali',
      e: 'Orhan Kemal',
      correct: 'd',
    },
    {
      question: 'İstiklal Marşı hangi yıl yazılmıştır?',
      a: '1919',
      b: '1920',
      c: '1921',
      d: '1922',
      e: '1923',
      correct: 'c',
    },
    {
      question: 'Aşağıdaki Anadolu takımlarından hangisi Türkiye Süper Liginde şampiyonluk yaşamıştır?',
      a: 'Sakaryaspor',
      b: 'Kocaelispor',
      c: 'Sivasspor',
      d: 'Mersin İdman Yurdu',
      e: 'Bursaspor',
      correct: 'e',
    }
  ]
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const e_text = document.getElementById('e_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
  }
  
  function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Denemek İçin Lütfen Tıklayınız 🌀  </button>
  
      `
      }
    }

  })
