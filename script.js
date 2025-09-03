const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, I love you with everything I am.\n\nAs if my heart knows no limits, yet every beat cuts deeper, a sweetness threaded can ache. \n\nThe world fades to shadow, faces blur, voices vanish, and still, unrelenting, my gaze returns only to you.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}


