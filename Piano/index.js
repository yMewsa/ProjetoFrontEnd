const allKeys = document.querySelectorAll(".key")
allKeys.forEach(key =>
     key.addEventListener("click", (event) => {
       const notePressed = event.target.dataset.musicNote
       const audio = new Audio(`./piano-keys/${notePressed}.wav`)
       audio.play()
     })

    )

