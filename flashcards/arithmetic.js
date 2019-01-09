/*global $*/

var maxNum = 20;
console.log('In arithmetic.js');
var flashcardTemplate = $('#flashcardTemplate').text();
console.log(flashcardTemplate);
var answerFormTemplate = $('#answerFormTemplate').text();
console.log(flashcardTemplate);
var flashcardSlot = $('#flashcard-slot');

var scorecard = {total: 0, correct: 0, incorrect: 0};

var score = function(card, isCorrect) {
    scorecard.total++;
    if (isCorrect) {
        scorecard.correct++;
    } else {
        scorecard.incorrect++;
    }
};

var showScore = function () {
    $('#stats span.rightAnswers').txt(scorecard.correct);
    $('#stats span.wrongAnswers').txt(scorecard.incorrect);
};

var showCard = function (op1, op2, operator, answer) {
    var card = $(flashcardTemplate);
    card.find('.operand_1').text(op1);
    card.find('.operand_2').text(op2);
    card.find('.operator').text(operator);
    flashcardSlot.contents().remove();
    card.appendTo(flashcardSlot);
};


showCard(10,12, '-', 22);
