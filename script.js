function performOperation() {
    const operationSelect = document.getElementById("operation");
    const inputContainer = document.getElementById("input-container");
    const inputLabel = document.getElementById("input-label");
    const inputTextarea = document.getElementById("input");
    const outputContainer = document.getElementById("output-container");
    const outputTextarea = document.getElementById("output");
    const operation = parseInt(operationSelect.value);

    //operasi untuk memilih operasi yang ingin dilakukan
    switch (operation) {
        case 1:
            // Text to Binary
            outputTextarea.value = textToBinary(inputTextarea.value);
            break;
        case 2:
            // Binary to Text
            outputTextarea.value = binaryToText(inputTextarea.value);
            break;
        default:
            alert("Invalid choice.");
            return;
    }

    inputContainer.style.display = "block";
    outputContainer.style.display = "block";
}

// Mengosongkan kolom input dan output setelah berganti operasi
document.getElementById("operation").addEventListener("change", function () {
    document.getElementById("input").value = "";
    document.getElementById("output").value = ""; 
});

//fungsi untuk mengubah text ke Binary 
function textToBinary(text) {
    let binaryResult = "";

    for (let i = 0; i < text.length; ++i) {
        binaryResult += text[i].charCodeAt(0).toString(2).padStart(8, '0');
    }

    return binaryResult;
}

//Fungsi untuk mengubah Binary ke text
function binaryToText(binary) {
    let textResult = "";

    for (let i = 0; i < binary.length; i += 8) {
        textResult += String.fromCharCode(parseInt(binary.substr(i, 8), 2));
    }

    return textResult;
}
