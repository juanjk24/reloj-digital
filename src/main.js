const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")
const ampm = document.getElementById("ampm")
const darkmodeButton = document.getElementById("darkmode-btn")
const darkmodeIcon = document.getElementById("darkmode-icon")

const actualizarHora = () => {
  const fecha = new Date()

  let hora = fecha.getHours()
  let minuto = fecha.getMinutes()
  let segundo = fecha.getSeconds()
  let sufijo = "AM"

  if (hora >= 12) {
    sufijo = "PM"
  }
  if (hora > 12) {
    hora -= 12
  }

  if (hora < 10) {
    hora = "0" + hora
  }

  if (minuto < 10) {
    minuto = "0" + minuto
  }

  if (segundo < 10) {
    segundo = "0" + segundo
  }

  horas.textContent = hora
  minutos.textContent = minuto
  segundos.textContent = segundo
  ampm.textContent = sufijo
}

//llamar a la funcin actualizar la hora cada segundo
setInterval(actualizarHora, 1000)

// Cambiar el color de los elementos al pasar el mouse
function getRandomColor() {
  let letras = "0123456789"
  let char = "#"

  for (let i = 0; i < 6; i++) {
    char += letras[Math.floor(Math.random() * letras.length)]
  }

  return char
}


const elementos = [horas, minutos, segundos, ampm]

elementos.forEach((elemento) => {
  elemento.addEventListener("mouseenter", () => {
    if (window.innerWidth <= 600) {
      elemento.style.margin = "0 16px"
    } else {
      elemento.style.margin = "0 40px"
    }
    elemento.style.scale = "1.5"
    elemento.style.color = getRandomColor()
    elemento.style.transition = "all 0.5s"
    elemento.style.rotate = "45deg"
  })
})

elementos.forEach((elemento) => {
  elemento.addEventListener("mouseleave", () => {

    if (document.body.classList.contains("dark")) {
      elemento.style.color = "#f1f1f1"
    }else{
      elemento.style.color = "#222"
    }

    elemento.style.scale = "1"
    elemento.style.margin = "0"
    elemento.style.rotate = "360deg"
  })
})

//Para resetear el margin del sufijo cada vez que salga el mouse
ampm.addEventListener("mouseleave", () => {

  if (window.innerWidth <= 600) {
    ampm.style.marginLeft = "8px"
  } else {
    ampm.style.marginLeft = "30px"
  }
})

// DARK MODE
let darkmode = false

darkmodeButton.addEventListener("click", () => {
  darkmode = !darkmode

  if (darkmode) {
    elementos.forEach((elemento) => {
      elemento.style.color = "#f1f1f1"
    })
    document.body.classList.add("dark")
    darkmodeButton.classList.add("dark")
    document.body.classList.remove("light")
    darkmodeButton.classList.remove("light")
    darkmodeIcon.setAttribute("src", "/light.svg")
  } else {
    elementos.forEach((elemento) => {
      elemento.style.color = "#222"
    })
    document.body.classList.add("light")
    darkmodeButton.classList.add("light")
    document.body.classList.remove("dark") 
    darkmodeButton.classList.remove("dark")
    darkmodeIcon.setAttribute("src", "/moon.svg")
  }
})
