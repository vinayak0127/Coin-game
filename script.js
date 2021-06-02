let coins = document.getElementById("coins");
      let score = 0;
      let scoreItem = document.getElementById("score");
      let coinSound = new Audio("./coins.mp3");

      setInterval(function () {
        let coin = document.createElement("img");
        coin.src = "./img/coin-794.png";
        let alive = true;

        let rw = parseInt((window.innerWidth - 50) * Math.random());
        let rh = parseInt((window.innerHeight - 50) * Math.random());

        coin.style.setProperty("position", "absolute");
        coin.style.setProperty("bottom", `${rh}px`);
        coin.style.setProperty("left", `${rw}px`);

        coin.style.setProperty("width", "80px");
        coin.style.setProperty("height", "80px");
        coins.appendChild(coin);

        coin.onmouseover = function () {
          coinSound.play();
          score += 10;
          scoreItem.innerHTML = `Score: ${score}`;
          coins.removeChild(coin);
          console.log("collected");
          alive = false;
        };

        setTimeout(function () {
          if (alive) {
            coins.removeChild(coin);
          }
        }, 2000);
      }, 500);