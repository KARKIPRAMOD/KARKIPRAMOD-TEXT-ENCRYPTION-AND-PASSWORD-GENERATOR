function encryptCaesar() {
  const text = document.getElementById("caesar_text").value;
  const shift = parseInt(document.getElementById("shift").value);

  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let encrypted_text = "";
  for (const char of text.toLowerCase()) {
    if (char == " ") {
      encrypted_text += char;
    } else {
      const index = alphabets.indexOf(char);
      const new_index = (index + shift) % alphabets.length;
      encrypted_text += alphabets[new_index];
    }
  }
  document.getElementById("encrypted_caesar").value = encrypted_text;
}

function decryptCaesar() {
  const text = document.getElementById("old_caesar_text").value;
  const shift = parseInt(document.getElementById("old_shift").value);
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let decrypted_text = "";
  for (const char of text.toLowerCase()) {
    if (char == " ") {
      decrypted_text += char;
    } else {
      const index = alphabets.indexOf(char);
      const old_index = (index - shift + alphabets.length) % alphabets.length;
      decrypted_text += alphabets[old_index];
    }
  }
  document.getElementById("decrypted_caesar").value = decrypted_text;
}
