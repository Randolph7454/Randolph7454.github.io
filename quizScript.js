function checkAnswers()
{
    //keep score
    var score = 0;
    //store feedback for each question
    var feedback = [];
    //check answer one, first collect info from the infro box
    Q6Answer = document.quiz.a7.value.toLowerCase();
    Q7Answer = document.quiz.a8.value.toLowerCase();
    // toLowercase doesnt matter if i type Link, link, liNK, lINk, or LINK, all of it = link
    if (document.quiz.a2.value === 'waluigi') {
        //increase score by 1
        score++; //score plus 1
        feedback.push("Question 1 is CORRRRRREEECT!!");
    }
    else {
        feedback.push("Incorrect!! Question 1 is WALUIGI!");
    }
    //check answer 2
    if (document.quiz.a3A.checked === true && document.quiz.a3B.checked === false && document.quiz.a3C.checked === false && document.quiz.a3D.checked === true && document.quiz.a3E.checked === false) {
        score++;
        feedback.push("Question 2 is CORRRREEEECT!!!!1!1");
    }
    else {
        feedback.push("Incorrect!! Question 2 was IKORA and CAYDE year");
    }


    //check question 3
    if (document.quiz.a4.value === 'Right') {
        score++;
        feedback.push("Question 3 is CORRREEECT!!1!!1!!")
    }
    else {
        feedback.push("Question 3 is WRONG! Answer is STOKELEY AND THE LAST ANTHOLOGY")
    }
    if (document.quiz.a5.value === 'Contraband') {
        score++;
        feedback.push("Question 4 is CORRREEECT!!1!!1!!")
    }
    else {
        feedback.push("Question 4 is WRONG! Answer is CONTRABAND")
    }
    if (document.quiz.a6A.checked === false && document.quiz.a6B.checked === true && document.quiz.a6C.checked === false && document.quiz.a6D.checked === false && document.quiz.a6E.checked === true) {
        score++;
        feedback.push("Question 5 is CORRREEECT!!1!!1!!")
    }
    else {
        feedback.push("Question 5 is WRONG! Answer is X AND Y")
    }
    if (Q6Answer === 'sunbreaker') {
        //increase score by 1
        score++; //score plus 1
        feedback.push("Question 6 is CORRRRRREEECT!!");
    }
    else {
        feedback.push("Incorrect!! Question 6 is SUNBREAKER!");
    }
    if (Q7Answer === 'ratchet') {
        //increase score by 1
        score++; //score plus 1
        feedback.push("Question 7 is CORRRRRREEECT!!");
    }
    else {
        feedback.push("Incorrect!! Question 7 is RATCHET!");
    }

    alert(score);
    alert(feedback);
}


