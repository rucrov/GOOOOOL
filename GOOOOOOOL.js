
let GOOOOOOOOOOOOLIMG = document.getElementById("GOOOOOOOLIMG");
let GOOOOOOOLCOUNTER = 0;

GOOOOOOOOOOOOLIMG.addEventListener("click", () => {
    const GOOOOOOOL = new Audio('GOOOOOOOL.mp3'); 
    GOOOOOOOL.play();
    GOOOOOOOLCOUNTER += 1;

    GOOOOOOOOOOOOLIMG.style.transform = 'scale(0.8)';
    setTimeout(() => {
        GOOOOOOOOOOOOLIMG.style.transform = 'scale(1)';
    }, 100);
    
    document.getElementById('GOOOOOOOLCOUNTER').innerHTML = "GOOOOOOOOOOOOOOOOOL " + GOOOOOOOLCOUNTER;
})