import { questions } from './data.js'

// 질문 화면의 각 요소를 찾아요!
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0 // 현재 질문 번호
let mbti = '' // MBTI 결과

// 화면에 질문을 랜더링하는 함수에요!
function renderQuestion() {
  const question = questions[currentNumber]
  questionEl.innerHTML = question.question
  numberEl.innerHTML = question.number
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

// 첫 번째 질문을 렌더링해요!
renderQuestion()
