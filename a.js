card = document.getElementById("image")
document.addEventListener('mousemove', function (e) {
    // mouse position
    const ex = e.pageX
    const ey = e.pageY

    // viewport size
    const width = window.innerWidth
    const height = window.innerHeight

    // screen center
    const centerX = width / 2
    const centerY = height / 2

    // offset from center
    const dx = ex - centerX
    const dy = ey - centerY

    // rotation
    const rotateY = (dx / width) * 90
    const rotateX = -(dy / height) * 90

    card.style.transform =
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  })