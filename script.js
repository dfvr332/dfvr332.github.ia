    const botonNo = document.getElementById("no");
    const botonSi = document.getElementById("si");
    const mensaje = document.getElementById("mensaje");

    botonNo.addEventListener("mouseover", () => {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 50);

      botonNo.style.left = `${x}px`;
      botonNo.style.top = `${y}px`;
    });

    botonSi.addEventListener("click", () => {
      mensaje.style.display = "block";
    });