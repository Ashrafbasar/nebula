/* SELECTORS */

const nebula = document.querySelector('#nebula');
const websiteTheme = document.querySelector('#website-theme');

/* VARIABLES */

const websiteThemes = [];

for (const [key, value] of Object.entries(websiteTheme)) {
    websiteThemes.push(value.value);
}

/* EVENTS */

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key == 'r') randomTheme();
    if (e.key == 'j') shiftThemeLeft();
    if (e.key == 'k') shiftThemeRight();
});

websiteTheme.addEventListener('change', () => {
    changeTheme(websiteTheme.selectedIndex);
});

/* FUNCTIONS */

function changeTheme(index) {
    websiteTheme.selectedIndex = index;
    nebula.setAttribute('href', `css/${websiteThemes[index]}`);
}

function shiftThemeLeft() {
    if (websiteTheme.selectedIndex > 0) {
        changeTheme(websiteTheme.selectedIndex - 1);
    }
}

function shiftThemeRight() {
    if (websiteTheme.selectedIndex < (websiteThemes.length - 1)) {
        changeTheme(websiteTheme.selectedIndex + 1);
    }
}

function randomTheme() {
    const randomIndex = Math.floor(Math.random() * websiteThemes.length);
    changeTheme(randomIndex);
}