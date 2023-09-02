fetch('questions.json')
.then(response=>{
    console.log("fetched json")
    if(!response.ok){
        throw new Error("Network reponse issue")
    }
    return response.json();
})
.then(data=>{
    console.log(data)

    const quizContainer = document.getElementById("quiz-container");
    const questionTag = document.getElementById("question");
    const choicesContainer = document.getElementById("choices-container");
    const submitButton = document.getElementById("submit");
    const resultContainer = document.getElementById("result-container");
    const resultTag = document.getElementById("result");

    let currentQuestionIndex = 0
    let score = 0

    function loadQuestion() {
        console.log("Insideload question");
        const currentQuestion = data.questions[currentQuestionIndex];
        questionTag.innerText = currentQuestion.question;
        choicesContainer.innerHTML = "";
        currentQuestion.choices.forEach(choice => {
            //<li><input type="radio" name="" value="option1">option1</li>
            const li = document.createElement("li");
            const input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "answer");
            input.setAttribute("value", choice);
            li.appendChild(input);
            li.appendChild(document.createTextNode(" " + choice));
            choicesContainer.appendChild(li);
        });
    }

    function checkAnswer() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            const currentQuestion = data.questions[currentQuestionIndex];
            if (userAnswer === currentQuestion.answer) {score++}
            currentQuestionIndex++;
            if (currentQuestionIndex < data.questions.length) {
                loadQuestion()
            } else {
                showResult()
            }
        }
    }

    function showResult() {
        quizContainer.style.display = "none";
        resultContainer.style.display = "block";
        resultTag.innerText = `Your score is ${score} out of ${data.questions.length}!`;
    }

    submitButton.addEventListener("click", checkAnswer);
    loadQuestion();
})