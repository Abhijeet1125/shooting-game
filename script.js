let last_max = 0
    let score = 0
    let bullets = 0

    function start() {
        const enemy = document.querySelector('#enemy')

        let intera = setInterval(function () {
            abhi = document.createElement('div')
            abhi.className = 'box'
            let jk = Math.floor(Math.random() * 70) + 24;
            abhi.style.right = String(jk) + '%';
            abhi.style.animation = "box_ani 5s linear"
            enemy.appendChild(abhi);
        }, 1000)


        const shu = document.querySelector(".box2");
        const arrow = document.querySelector('#arrow');
        let shuposi = 40;
        let canListenSpaceKey = true;
        document.addEventListener("keydown", function fun(e) {
            eve = e.key
            if (canListenSpaceKey && eve == " ") {
                bullets += 1;
                canListenSpaceKey = false
                cr = document.createElement('div')
                cr.className = 'arrow'
                cr.style.top = String(shuposi + 7) + '%'
                cr.style.animation = "arrow_ani 3s linear"
                arrow.appendChild(cr);
                setTimeout(() => {
                    canListenSpaceKey = true;
                }, 800);
            }
            else if (eve == 'ArrowUp') {
                shuposi -= 2;
                shu.style.top = String(shuposi) + '%';
                if (shuposi < 2) {
                    shuposi = 2;
                }
            }
            else if (eve == 'ArrowDown') {
                shuposi += 2;
                shu.style.top = String(shuposi) + '%';
                if (shuposi >= 83) {
                    shuposi = 83;
                }
            }
        })

        sco = document.querySelector('#score')
        let interb = setInterval(function () {
            let jk = document.querySelectorAll('.arrow')
            let len = jk.length
            boxes = document.querySelectorAll('.box');
            let len2 = boxes.length
            for (let i = 0; i < len - 5; i++) { jk[i].remove() }
            for (let i = 0; i < len2 - 5; i++) { boxes[i].remove() }
            for (let i = Math.max(0, len - 5); i < len; i++) {
                for (let j = Math.max(0, len2 - 5); j < len2; j++) {
                    let box1Rect = jk[i].getBoundingClientRect();
                    let box2Rect = boxes[j].getBoundingClientRect();
                    if (!(
                        box1Rect.right < box2Rect.left ||
                        box1Rect.left > box2Rect.right ||
                        box1Rect.bottom < box2Rect.top ||
                        box1Rect.top > box2Rect.bottom
                    )) {
                        jk[i].remove();
                        boxes[j].remove();
                        score += 1;
                    }
                }
            }

        }, 100)


        let interc = setInterval(() => {
            sco.innerHTML = `${score} / ${bullets}`
            if (bullets >= 100) {
                clearInterval(intera)
                clearInterval(interb)
                clearInterval(interc)                                
                document.querySelector('#welcome').style.visibility = 'hidden'
                document.querySelector('#arrow').style.visibility = 'hidden'
                cr = document.createElement('li');
                cr.innerHTML = `you killed ${score} enemies using 100 bullets`
                document.querySelector('#finish .ul').appendChild(cr);
                if (score > 80) {
                    cr = document.createElement('div');
                    cr.innerHTML = `<b><h1>NICE PLAYED !!<h1></b>`
                    document.querySelector('#finish').appendChild(cr);
                }
                document.querySelector('#finish').style.visibility = 'visible'
                button = document.querySelectorAll('#finish button')
                button[0].addEventListener('click', function (e) {
                    window.location.href = 'about:blank';
                })
            }
        }, 600);
    }

    function startPlay() {
        document.querySelector('#welcome').style.visibility = 'visible'
        document.querySelector('#finish').style.visibility = 'hidden'
        button = document.querySelectorAll('#welcome button')
        button[0].addEventListener('click', function (e) {
            window.location.href = 'about:blank';
        })
        button[1].addEventListener('click', function (e) {
            document.querySelector('#welcome').style.visibility = 'hidden'
            start();
        })
    }


    startPlay();