/*global $*/

var maxNum = 20;
console.log('In arithmetic.js');
var flashcardTemplate = $('#flashcardTemplate').text();
console.log(flashcardTemplate);
var answerFormTemplate = $('#answerFormTemplate').text();
console.log(flashcardTemplate);
var flashcardSlot = $('#flashcard-slot');
var rightAnswerTemplateText = $('#rightAnswerTemplate').text();
var wrongAnswerTemplateText = $('#wrongAnswerTemplate').text();
var scorecard = {total: 0, correct: 0, incorrect: 0};
// nextCard will be defined below.
var nextCard;

var score = function(card, isCorrect) {
    scorecard.total++;
    if (isCorrect) {
        scorecard.correct++;
    } else {
        scorecard.incorrect++;
    }
};

var showScore = function () {
    $('#stats span.rightAnswers').text(scorecard.correct);
    $('#stats span.wrongAnswers').text(scorecard.incorrect);
};

var showCard = function (op1, op2, operator, answer) {
    var card = $(flashcardTemplate);
    card.find('.operand_1').text(op1);
    card.find('.operand_2').text(op2);
    card.find('.operator').text(operator);
    flashcardSlot.contents().remove();
    card.appendTo(flashcardSlot);
    var answerField = card.find('input[name="answer"]');
    var form = card.find('form');
    var getAnswer = $.Deferred();
    form.submit(function (event) {
        getAnswer.resolve({op1: op1, op2: op2,
                           operator: operator, answer: answer,
                           hisAnswer: answerField.val()});
        return false;
    });
    getAnswer.then(function (cardData) {
        var ga = card.find('.getAnswer');
        ga.find('*').remove();
        ga.text(cardData.hisAnswer);
        if (cardData.answer === Number(cardData.hisAnswer)) {
            console.log(cardData, 'is correct');
            var answerBlock = $(rightAnswerTemplateText);
            answerBlock.find('.answer').text(cardData.answer);
            answerBlock.appendTo(card.find('.answer'));
            score(cardData, true);
        } else {
            console.log(cardData, 'is incorrect');
            var answerBlock = $(wrongAnswerTemplateText);
            answerBlock.find('.answer').text(cardData.answer);
            answerBlock.find('.wrong-answer').text(cardData.hisAnswer);
            answerBlock.appendTo(card.find('.answer'));
            score(cardData, false);
        }
        showScore();
        // Now show the next button
        var next = $('<form id="next-card-form" action="#"><input type="submit" value="Next"/></form>');
        card.append(next);
        next.submit(function () {
            card.remove();
            nextCard();
            return false;
        });
    })/* .always(function () {
        card.remove();
       })*/;
};

nextCard = function () {

}
showCard(12,10, '-', 2);

