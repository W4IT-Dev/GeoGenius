//DOM Stuff
let startScreen = document.querySelector('#startScreen');
let game = document.querySelector('#game');
let gameOverScreen = document.querySelector('#gameOver')
let startBtn = document.querySelector('#startBtn');
let helpBtn = document.querySelector('#helpBtn');
let retryBtn = document.querySelector('#retry');
let homeBtn = document.querySelector('#home')
let Help = document.querySelector('#help')
let flag = document.querySelector('#flag');
let answerBtns = document.querySelectorAll('.answer-select-button');
let triesLeftP = document.querySelector('#tries-left p');
let correctP = document.querySelector('#correct p');
let streakP = document.querySelector('#streak p');


//App variables
let flags = [
    {
        flag: '/img/flag/afghanistan.png',
        name: 'Afghanistan'
    },
    {
        flag: '/img/flag/albania.png',
        name: 'Albania'
    },
    {
        flag: '/img/flag/algeria.png',
        name: 'Algeria'
    },
    {
        flag: '/img/flag/andorra.png',
        name: 'andorra'
    },
    {
        flag: '/img/flag/angola.png',
        name: 'angola'
    },
    {
        flag: '/img/flag/antigua-and-bardbudas.png',
        name: 'antigua and bardbudas'
    },
    {
        flag: '/img/flag/argentina.png',
        name: 'argentina'
    },
    {
        flag: '/img/flag/armenia.png',
        name: 'armenia'
    },
    {
        flag: '/img/flag/australia.png',
        name: 'australia'
    },
    {
        flag: '/img/flag/austria.png',
        name: 'austria'
    },
    {
        flag: '/img/flag/azerbaijan.png',
        name: 'azerbaijan'
    },
    {
        flag: '/img/flag/bahamas.png',
        name: 'bahamas'
    },
    {
        flag: '/img/flag/bahrain.png',
        name: 'bahrain'
    },
    {
        flag: '/img/flag/bangladesh.png',
        name: 'bangladesh'
    },
    {
        flag: '/img/flag/barbados.png',
        name: 'barbados'
    },
    {
        flag: '/img/flag/bazil.png',
        name: 'brazil'
    },
    {
        flag: '/img/flag/belarus.png',
        name: 'belarus'
    },
    {
        flag: '/img/flag/belgium.png',
        name: 'belgium'
    },
    {
        flag: '/img/flag/belize.png',
        name: 'belize'
    },
    {
        flag: '/img/flag/benin.png',
        name: 'benin'
    },
    {
        flag: '/img/flag/bhutan.png',
        name: 'bhutan'
    },
    {
        flag: '/img/flag/bolivia.png',
        name: 'bolivia'
    },
    {
        flag: '/img/flag/bosnia-and-herzegovina.png',
        name: 'bosnia and herzegovina'
    },
    {
        flag: '/img/flag/botswana.png',
        name: 'botswana'
    },
    {
        flag: '/img/flag/brunei.png',
        name: 'brunei'
    },
    {
        flag: '/img/flag/bulgaria.png',
        name: 'bulgaria'
    },
    {
        flag: '/img/flag/burundi.png',
        name: 'burundi'
    },
    {
        flag: '/img/flag/Cabo-verde.png',
        name: 'cabo verde'
    },
    {
        flag: '/img/flag/cambodia.png',
        name: 'cambodia'
    },
    {
        flag: '/img/flag/cameroon.png',
        name: 'cameroon'
    },//30
    {
        flag: '/img/flag/car.png',
        name: 'Central Africa'
    },
    {
        flag: '/img/flag/chad.png',
        name: 'Chad'
    },
    {
        flag: '/img/flag/chile.png',
        name: 'Chile'
    },//33
    {
        flag: '/img/flag/china.png',
        name: 'China'
    },
    {
        flag: '/img/flag/colombia.png',
        name: 'Colombia'
    },
    {
        flag: '/img/flag/comoros.png',
        name: 'Comoros'
    },
    {
        flag: '/img/flag/congo.png',
        name: 'Congo'
    },
    {
        flag: '/img/flag/costa-rica.png',
        name: 'Costa Rica'
    },
    {
        flag: "/img/flag/Cote d'Ivoire.png",
        name: "Côte d'Ivoire"
    },
    {
        flag: '/img/flag/croatia.png',
        name: 'Croatia'
    },
    {
        flag: '/img/flag/cuba.png',
        name: 'Cuba'
    },
    {
        flag: '/img/flag/cyprus.png',
        name: 'Cyprus'
    },
    {
        flag: '/img/flag/czechia.png',
        name: 'Czechia'
    },
    {
        flag: '/img/flag/denmark.png',
        name: 'Denmark'
    },
    {
        flag: '/img/flag/djibouti.png',
        name: 'Djibouti'
    },
    {
        flag: '/img/flag/dominica.png',
        name: 'Dominica'
    },
    {
        flag: '/img/flag/dominican-republic.png',
        name: 'Dominican Republic'
    },
    {
        flag: '/img/flag/ecuador.png',
        name: 'Ecuador'
    },
    {
        flag: '/img/flag/egypt.png',
        name: 'Egpyt'
    },
    {
        flag: '/img/flag/el-salvador.png',
        name: 'El Salvador'
    },
    {
        flag: '/img/flag/equatorial-guinea.png',
        name: 'Equatorial Guinea'
    },
    {
        flag: '/img/flag/eritrea.png',
        name: 'Eritrea'
    },
    {
        flag: '/img/flag/estonia.png',
        name: 'Estonia'
    },
    {
        flag: '/img/flag/eswatini.png',
        name: 'Eswatini'
    },
    {
        flag: '/img/flag/ethiopia.png',
        name: 'Ethiopia'
    },
    {
        flag: '/img/flag/fiji.png',
        name: 'Fiji'
    },
    {
        flag: '/img/flag/france.png',
        name: 'France'
    },
    {
        flag: '/img/flag/gabon.png',
        name: 'Gabon'
    },
    {
        flag: '/img/flag/gambia.png',
        name: 'Gambia'
    },
    {
        flag: '/img/flag/georgia.png',
        name: 'Georgia'
    },
    {
        flag: '/img/flag/germany.png',
        name: 'Germany'
    },
    {
        flag: '/img/flag/ghana.png',
        name: 'Ghana'
    },
    {
        flag: '/img/flag/greece.png',
        name: 'Greece'
    },//60+
    {
        flag: '/img/flag/guatemala.png',
        name: 'Guatemala'
    },
    {
        flag: '/img/flag/guinea-bissau.png',
        name: 'Guinea Bissau'
    },
    {
        flag: '/img/flag/guinea.png',
        name: 'Guinea'
    }//67
];
let rightAnswer;
let triesLeft = 3;
let correct = streak = 0;


//SOFTKEY FOR PC THING
function softkey(e) {
    const { target, key, bubbles, cancelable, repeat, type } = e;
    if (!/Left|Right/.test(key) || !key.startsWith("Arrow") || !e.ctrlKey) return;
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    target.dispatchEvent(new KeyboardEvent(type, { key: "Soft" + key.slice(5), bubbles, cancelable, repeat }));
}

document.addEventListener("keyup", softkey, true);
document.addEventListener("keydown", softkey, true);
window.addEventListener('error', e => {
    console.error(e)
})