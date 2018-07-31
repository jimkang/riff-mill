function getControlsValues() {
  var stringTension = 0.0;
  var characterVariation = 0.5;
  var stringDamping = 0.5;
  var stringDampingVariation = 0.25;
  var pluckDamping = 0.5;
  var pluckDampingVariation = 0.25;
  var stereoSpread = 0.2;
  var stringDampingCalculation = 'magic';
  // stringDampingCalculation = 'direct';

  //var body = 'none';
  var body = 'simple';

  return {
    stringTension,
    characterVariation,
    stringDamping,
    stringDampingVariation,
    stringDampingCalculation,
    pluckDamping,
    pluckDampingVariation,
    body,
    stereoSpread
  };
}

// calculate the constant used for the low-pass filter
// used in the Karplus-Strong loop
function calculateSmoothingFactor(string, tab, options) {
  var smoothingFactor;
  if (options.stringDampingCalculation == 'direct') {
    smoothingFactor = options.stringDamping;
  } else if (options.stringDampingCalculation == 'magic') {
    // this is copied verbatim from the flash one
    // is magical, don't know how it works
    var noteNumber = (string.semitoneIndex + tab - 19) / 44;
    smoothingFactor =
      options.stringDamping +
      Math.pow(noteNumber, 0.5) * (1 - options.stringDamping) * 0.5 +
      (1 - options.stringDamping) *
        Math.random() *
        options.stringDampingVariation;
  }
  return smoothingFactor;
}

function updateStringDamping() {
  var stringDampingInput = document.getElementById('stringDamping');
  var stringDamping = stringDampingInput.valueAsNumber;
  var output = document.getElementById('stringDampingValue');
  output.value = stringDamping.toFixed(1);
}
function updateStringDampingVariation() {
  var stringDampingVariationInput = document.getElementById(
    'stringDampingVariation'
  );
  var stringDampingVariation = stringDampingVariationInput.valueAsNumber;
  var output = document.getElementById('stringDampingVariationValue');
  output.value = stringDampingVariation.toFixed(2);
}
function updateStringTension() {
  var stringTensionInput = document.getElementById('stringTension');
  var stringTension = stringTensionInput.valueAsNumber;
  var output = document.getElementById('stringTensionValue');
  output.value = stringTension.toFixed(1);
}
function updateCharacterVariation() {
  var characterVariationInput = document.getElementById('characterVariation');
  var characterVariation = characterVariationInput.valueAsNumber;
  var output = document.getElementById('characterVariationValue');
  output.value = characterVariation.toFixed(1);
}
function updateStereoSpread() {
  var stereoSpreadInput = document.getElementById('stereoSpread');
  var stereoSpread = stereoSpreadInput.valueAsNumber;
  var output = document.getElementById('stereoSpreadValue');
  output.value = stereoSpread.toFixed(1);
}
function updatePluckDamping() {
  var pluckDampingInput = document.getElementById('pluckDamping');
  var pluckDamping = pluckDampingInput.valueAsNumber;
  var output = document.getElementById('pluckDampingValue');
  output.value = pluckDamping.toFixed(1);
}
function updatePluckDampingVariation() {
  var pluckDampingVariationInput = document.getElementById(
    'pluckDampingVariation'
  );
  var pluckDampingVariation = pluckDampingVariationInput.valueAsNumber;
  var output = document.getElementById('pluckDampingVariationValue');
  output.value = pluckDampingVariation.toFixed(2);
}
function updateFilterCutoff() {
  var filterCutoffInput = document.getElementById('filterCutoff');
  var filterCutoff = filterCutoffInput.valueAsNumber;
  var output = document.getElementById('filterCutoffValue');
  output.value = filterCutoff.toFixed(1);
}

module.exports = {
  getControlsValues,
  calculateSmoothingFactor,
  updateStringDamping,
  updateStringDampingVariation,
  updateStringTension,
  updateCharacterVariation,
  updateStereoSpread,
  updatePluckDamping,
  updatePluckDampingVariation,
  updateFilterCutoff
};
