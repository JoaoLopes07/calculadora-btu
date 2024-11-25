function calculateBTU() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const wallThickness = parseFloat(document.getElementById('wallThickness').value);
    const wallMaterial = document.getElementById('wallMaterial').value;
    const people = parseInt(document.getElementById('people').value);
    const equipment = parseInt(document.getElementById('equipment').value);
    const lights = parseInt(document.getElementById('lights').value);
    const lightType = document.getElementById('lightType').value;
    const insulatedArea = parseFloat(document.getElementById('insulatedArea').value);
    if (
      isNaN(length) || isNaN(width) || isNaN(height) ||
      isNaN(wallThickness) || isNaN(people) ||
      isNaN(equipment) || isNaN(lights) || isNaN(insulatedArea)
    ) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
  
    let wallFactor;
    switch (wallMaterial) {
      case 'concreto':
        wallFactor = 1.5;
        break;
      case 'tijolo':
        wallFactor = 1.2;
        break;
      case 'madeira':
        wallFactor = 1.0;
        break;
      default:
        wallFactor = 1.0;
    }
    let lightFactor;
    switch (lightType) {
      case 'led':
        lightFactor = 5; // LED gera menos calor
        break;
      case 'fluorescente':
        lightFactor = 15;
        break;
      case 'incandescente':
        lightFactor = 60;
        break;
      default:
        lightFactor = 10;
    }

    const volume = length * width * height; // Volume do ambiente
    const btuWalls = volume * wallFactor * (wallThickness / 10); // Fator das paredes
    const btuPeople = people * 600; // Calor humano
    const btuEquipment = equipment * 600; // Calor dos equipamentos
    const btuLights = lights * lightFactor; // Calor das lâmpadas
    const btuInsulation = insulatedArea * 50; // Isolamento reduz calor
  
    const totalBTU = btuWalls + btuPeople + btuEquipment + btuLights - btuInsulation;
  
    // Exibir o resultado
    const resultElement = document.getElementById('result');
    resultElement.textContent = `A carga térmica necessária para o ambiente é de aproximadamente ${totalBTU.toFixed(2)} BTU/h.`;
  }
  