document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.nav_menu');
    let menu_toggle = document.querySelector('.mobile-menu-icon');
    let menu_toggle_icon = document.querySelector('.mobile-menu-icon ion-icon');
    menu_toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menu.classList.contains('active') ?
            menu_toggle_icon.setAttribute('name', 'close-outline') :
            menu_toggle_icon.setAttribute('name', 'menu-outline');
    });
    
});

let seconds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let minutes = [7, 10, 15, 26, 35, 44, 50, 14, 54, 56, 58, 57];
let hours = [4, 8, 16, 9, 5, 5, 3, 4, 2, 2, 7, 7];
let day = [1, 3, 5, 7, 10, 11, 11, 11, 12, 13, 14, 15];
let cards = document.querySelectorAll('.points')


function viewTime() {
    day.forEach((element, index) => {
        let field_seconds = cards[index].querySelector('.time-count__seconds .time-count__val')
        field_seconds.innerHTML = seconds[index];
        let field_minutes = cards[index].querySelector('.time-count__minutes .time-count__val')
        field_minutes.innerHTML = minutes[index];
        let field_hours = cards[index].querySelector('.time-count__hours .time-count__val')
        field_hours.innerHTML = hours[index];
        let field_days = cards[index].querySelector('.time-count__days .time-count__val')
        field_days.innerHTML = day[index];
    });
}

viewTime();


function timeCount() {
    day.forEach((element, index) => {
        if (seconds[index] == 0) {
            if (minutes[index] == 0) {
                if (hours[index] == 0) {
                    if (day[index] != 0) {
                        day[index]--;
                        hours[index] = 24;
                    }

                    hours[index]--;
                    minutes[index] = 60;
                } else {
                    hours[index]--;
                    minutes[index] = 60;
                }

                minutes[index]--;
                seconds[index] = 60;
            } else {
                minutes[index]--;
                seconds[index] = 60;
            }

            seconds[index]--;
        } else {
            seconds[index]--;
        }
    });

    viewTime();
}

setInterval(timeCount, 1000)
