/*global $*/
//$(function () {
var maxNum = 20;
console.log('In arithmetic.js');
var flashcardTemplate = $('#flashcardTemplate').text();
console.log(flashcardTemplate);
var answerFormTemplate = $('#answerFormTemplate').text();
console.log(flashcardTemplate);

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

};

var showCard = function (op1, op2, operator, answer) {
    
};

//});
