const invitados = [
    "Andrea",
    "Beatriz",
    "Carlos",
    "Cecilia",
    "Daniel",
    "Diana",
    "Elena",
    "Emilio",
    "Fernanda"
  ];
  
  function buscarInvitados() {
    let i = 0;
    let j = 1;
    let encontrados = false;
  
    while (j < invitados.length) {
      if (invitados[i][0] === invitados[j][0]) {
        document.getElementById("resultado").innerText = 
          `✔️ ${invitados[i]} y ${invitados[j]} pueden sentarse juntos.`;
        encontrados = true;
        break;
      }
      i++;
      j++;
    }
  
    if (!encontrados) {
      document.getElementById("resultado").innerText = 
        "❌ No se encontraron invitados con la misma inicial.";
    }
  }
  