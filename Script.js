const questions = [
    "Would you rather be able to fly or be invisible?",
    "Would you rather live in the city or the countryside?",
    "Would you rather have the ability to read minds or teleport?",
    "Would you rather be always hot or always cold?",
    "Would you rather have a rewind button or a pause button on your life?",
    "Would you rather be able to speak any language fluently or be able to talk to animals?",
    "Would you rather never use social media sites/apps again or never watch another movie or TV show?",
    "Would you rather have the power to control the weather or the ability to talk to animals?",
    "Would you rather always have to sing instead of speaking or dance everywhere you go?",
    "Would you rather be a famous actor or a famous singer?"
];

function showQuestion() {
    const questionElement = document.getElementById('question');
    const randomIndex = Math.floor(Math.random() * questions.length);
    questionElement.innerText = questions[randomIndex];
}
