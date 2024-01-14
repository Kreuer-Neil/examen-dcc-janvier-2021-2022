// Nom    :
// Prénom :
// Groupe : 2285


const tymper = {
    cardListElement: document.querySelector('.app'),
    dataFontElement: document.getElementById('fonts'),
    formElement: document.getElementById('play'),
    scoreElement: document.querySelector('.information__score'),
    timeElement: document.querySelector('.information__time'),
    score: 0,




    init() {
        // this.generateScore();
        this.scoreElement = this.scoreElement.querySelector('span');
        this.addEventListeners();
        this.generateCards();
    },

    addEventListeners(){
        console.log(this.formElement);
        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            const fontNameAnswer = document.querySelector('.app li:last-child').dataset.fontName;
            const familyNameAnswer = document.querySelector('.app li:last-child').dataset.familyName;
            const fontNameEntry = document.getElementById('font').value;
            const familyNameEntry = document.getElementById('family').value;
            if(fontNameAnswer === fontNameEntry) {
                this.score+=0.5;
            }if(familyNameAnswer === familyNameEntry) {
                this.score+=0.5;
            }
            this.scoreElement.firstElementChild.textContent = `${this.score}/${fonts.length}`;
        });
        fonts.forEach((font) => {
            document.getElementById('fonts').insertAdjacentHTML('beforeend', `<option value="${font.name}">`);
        });

        this.scoreElement.insertAdjacentHTML('beforeend', `${this.scoreElement.dataset.text} <span>${this.score}/${fonts.length}</span>`);
        this.timeElement.insertAdjacentHTML('beforeend', `${this.timeElement.dataset.text} <time datetime="00:10">00:10</time>`);
    },

    generateCards(){
        fonts.forEach((font) => {
            this.cardListElement.insertAdjacentHTML('beforeend', `
     \t<li data-font-name="${font.name}" data-family="${font.family}" class='app__item'>
     \t<div class="app__item__info"><span class="app__item__info__name">${font.name}</span>
     \t<span class="app__item__info__info">${font.family} - ${font.author}</span>
     \t</div>
     \t<img class='app__item__font' src='./assets/fonts/${font.file}.svg' alt='Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ'>
     \t</li>`);
        });
    },
    updateScore() {

    }
}

tymper.init();

