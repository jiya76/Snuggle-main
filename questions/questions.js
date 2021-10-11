const quesData = [
    {
        question: "Which word describes you better?",
        a: "Carefree",
        b: "Intense",
    },
    {
        question: "What is your favourite music to dance to?",
        a: "Punjabi and Bollywood",
        b: "Electronic music",
    },
    {
        question: "Would you express your feelings to someone you’ve never met in person?",
        a: "Yes, if it feels right",
        b: "No, online connections are not real ",
    },
    {
        question: "Could you just survive on Maggi alone for one week?",
        a: "Yes",
        b: "No",
    },
    {
        question: "What’s your ideal short vacation?",
        a: "Leh",
        b: "Goa",
    }



];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quesData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quesData[currentQuiz]) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quesData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered all questions! </h2>

           <button onclick>Continue to your profile</button>
           `
        }
    }
})