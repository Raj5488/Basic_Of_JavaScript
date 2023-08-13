const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const mixedColorInput = document.getElementById('mixed-color');

function mixColors() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;

    // Convert color values to RGB
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    // Calculate the average of each RGB component
    const mixedR = Math.floor((rgb1.r + rgb2.r) / 2);
    const mixedG = Math.floor((rgb1.g + rgb2.g) / 2);
    const mixedB = Math.floor((rgb1.b + rgb2.b) / 2);

    // Convert the mixed RGB values to hexadecimal
    const mixedColor = rgbToHex(mixedR, mixedG, mixedB);

    // Set the mixed color as the input value
    mixedColorInput.value = mixedColor;
}

function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

// Add event listeners to color inputs
color1Input.addEventListener('input', mixColors);
color2Input.addEventListener('input', mixColors);
