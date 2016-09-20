/**
 * Created by kozin on 20.09.2016.
 */

window.onload = function () {

    var wrapper = document.createElement("section");
    wrapper.classList.add("wrapper");
    document.body.insertBefore(wrapper, document.body.childNodes[0]);

    var test = {
        header: function () {
            var header = document.createElement("header");
            header.innerHTML = "<p>Тест по программированию</p>";
            wrapper.appendChild(header);
        },

        questions: function () {
            var questionSection = document.createElement("section");
            wrapper.appendChild(questionSection);

            for (var i = 1; i <= 3; i++) {
                var question = document.createElement("p");
                question.innerHTML = "<p>" + i + ". Вопрос №" + i + "</p>";
                questionSection.appendChild(question);

                for (var j = 1; j <= 3; j++) {
                    var label = document.createElement("label");
                    question.appendChild(label);
                    label.innerHTML = "<input id=\"j + \"-checkbox\"\" type=\"checkbox\" />Вариант ответа №" + j + "";
                    questionSection.appendChild(label);
                }
            }
        },
        
        button: function () {
            var button = document.createElement("section");
            button.innerHTML = "<button class=\"btn btn-primary btn-lg\">Проверить мои результаты</button>";
            wrapper.appendChild(button);
        }
    };

    test.header();
    test.questions();
    test.button();
};
