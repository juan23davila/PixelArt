var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
let colorIndicador     = document.getElementById('indicador-de-color');
let paleta             = document.getElementById('paleta');
let grillaPixs         = document.getElementById('grilla-pixeles');
let clickStatus        = false;

$(document).ready(function(){
  createColorPalette();
  createPixelGrid();
});

/**
 * Se modifica color personalizado
 */
colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorIndicador.style.backgroundColor = colorActual;

  })
);

/**
 * Modifica un indicador de color cuando un color es seleccionado de la paleta de colores
 */
function changeIndicadorColor(e){
  let colorClicked = e.target.style.backgroundColor;
  colorIndicador.style.backgroundColor = colorClicked;
}

/**
 * Modifica color del pixel seleccionado al que se encuentra en el indicador cuando el usuario hace clic.
 */
function changeGridPXColor(e){
  if(clickStatus){
    e.target.style.backgroundColor = colorIndicador.style.backgroundColor;
  }
}

/**
 * Crea la paleta de colores
 */
function createColorPalette(){
  let newDiv;
  for(let i = 0; i< nombreColores.length; i++){
    newDiv = null;
    newDiv = document.createElement("div");
    newDiv.className = "color-paleta";
    newDiv.style.backgroundColor = nombreColores[i];
    newDiv.addEventListener("click", changeIndicadorColor);
    paleta.appendChild(newDiv);
  }
}

function changeClickStatus(e){
  if(e.type === "mousedown"){
    clickStatus = true;
    e.target.style.backgroundColor = colorIndicador.style.backgroundColor;
  }
  
  if(e.type === "mouseup"){
    clickStatus = false;
  }
}

/**
 * Crea grilla de pixeles
 */
function createPixelGrid(){
  let newDiv;
  for(let i = 0; i< 1750; i++){
    newDiv = null;
    newDiv = document.createElement("div");
    grillaPixs.appendChild(newDiv);
  }
  grillaPixs.addEventListener("mouseover", changeGridPXColor);
  grillaPixs.addEventListener("mousedown", changeClickStatus);
  grillaPixs.addEventListener("mouseup", changeClickStatus);
}
