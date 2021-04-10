window.onload=()=>{
    let form;
    let mainBlock = document.querySelector('.main-content');
    let button;
    function clerFirst(){
        while (mainBlock.lastChild){
            mainBlock.lastChild.remove();
        }
    }
    function clearSecond(form){
        while (form.lastChild){
            form.lastChild.remove();
        }
    }
    let go = document.getElementById('go');
    go.onclick=()=>{
        clerFirst();
        mainBlock.insertAdjacentHTML("beforeend","<form><div class='form-content'></div></form>");
        form = document.querySelector('.form-content');
        form.insertAdjacentHTML("beforeend","<div class='form-title'>Сколько времени в день вы проводите в дороге?</div><div class='inputs'><label for=''><input type='radio' value='1' placeholder='' checked name='one'>До 1 часа</label><label for=''><input type='radio' value='1' placeholder='' name='one'>1-2 часа</label><label for=''><input type='radio' value='1' placeholder='' name='one'>2-4 часа</label><label for=''><input type='radio' value='1' placeholder='' name='one'>Более 4 часов</label></div><button class=\"btn effect01\" id='next'><span>Следующий вопрос</span></button>");
        let i = 1;
        button = document.getElementById('next');
        button.onclick = change;
            function change(e) {
            e.preventDefault();
            clearSecond(form);
            switch (i) {
                case 1:
                    form.insertAdjacentHTML("beforeend","<div class='form-title'>Выберите предпочитаемые марки автомобилей?</div><div class='inputs'><label for=''><input type='checkbox' value='1' placeholder='' checked name='one'>Mercedes-Benz</label><label for=''><input type='checkbox' value='1' placeholder='' name='one'>BMW</label><label for=''><input type='checkbox' value='1' placeholder='' name='one'>Audi</label><label for=''><input type='checkbox' value='1' placeholder='' name='one'>Lexus</label><label for=''><input type='checkbox' value='1' placeholder='' name='one'>Volvo</label><label for=''><input type='checkbox' value='1' placeholder='' name='one'>Land Rover</label><label for=''><input type='checkbox' value='1' placeholder='' name='one'>Porsche</label><label for=''><input type='checkbox' value='1' placeholder='' name='one'>Infiniti</label></div><button class=\"btn effect01\" id='next'><span>Следующий вопрос</span></button>");
                    button = document.getElementById('next');
                    button.onclick = change;
                    i++;
                    console.log(i);
                    break;
                case 2:
                    form.insertAdjacentHTML("beforeend","<div class='form-title'>Что для вас самое главное в личном водителе?</div><div class='inputs'><label for=''><input type='radio' value='1' placeholder='' checked name='one'>Пунктуальность</label><label for=''><input type='radio' value='1' placeholder='' name='one'>Умение поддержать беседу</label><label for=''><input type='radio' value='1' placeholder='' name='one'>Образованность и такт</label><label for=''><input type='radio' value='1' placeholder='' name='one'>Отсутствие вредных привычек</label></div><button class=\"btn effect01\" id='next'><span>Следующий вопрос</span></button>");
                    button = document.getElementById('next');
                    button.onclick = change;
                    i++;
                    break;
                case 3:
                    form.insertAdjacentHTML("beforeend","<div class='form-title'>В какой сфере вы работаете?</div><div class='inputs'><label for=''><input type='radio' value='1' placeholder='' checked name='one'>Предприниматель</label><label for=''><input type='radio' value='1' placeholder='' name='one'>Финансы и банкинг</label><label for=''><input type='radio' value='1' placeholder='' name='one'>IT технологии</label><label for=''><input type='radio' value='1' placeholder='' name='one'>Другое</label></div><button class=\"btn effect01\" id='next'><span>Следующий вопрос</span></button>");
                    button = document.getElementById('next');
                    button.onclick = change;
                    i++;
                    break;
                case 4:
                    form.insertAdjacentHTML("beforeend","<div class='form-title'>Остался последний шаг. Как с вами связаться?</div><div class='form-title-two'>Менеджер Елена перезвонит вам через 3 минуты и предоставит анкеты подходящих водителей</div><div class='wrap'><label for='' style='font-size: 21px;'>Имя <input type='text' class='text-input'></label><div class='wrap'><label for='' style='font-size: 21px;'>Телефон <input type='tel' class='text-input'></label></div><button class=\"btn effect01\" id='next'><span>Следующий вопрос</span></button>")
                    button = document.getElementById('next');
                    button.onclick = change;
                    i++;
                    break;
                case 5:
                    form.insertAdjacentHTML("beforeend","<div class='form-title'>Спасибо! В течение 5 минут мы вам позвоним</div>");
                    break;
            }
        }

    };






};