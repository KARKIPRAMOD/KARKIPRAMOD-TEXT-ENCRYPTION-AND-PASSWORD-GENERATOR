function encrypt() {
  const text = document.getElementById("cipher_text").value.toLowerCase();
  const key = document.getElementById("key").value.toLowerCase();

  let key_index = 0;
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let encrypted_text = "";

  for (const char of text) {
    if (!char.match(/[a-z]/)) {
      encrypted_text += char;
    } else {
      const key_char = key[key_index % key.length];
      key_index += 1;
      const offset = alphabets.indexOf(key_char);
      const index = alphabets.indexOf(char);
      const new_index =
        (index + offset * 1 + alphabets.length) % alphabets.length;
      encrypted_text += alphabets[new_index];
    }
  }
  document.getElementById("encrypted_vigenere").value = encrypted_text;
}

function decrypt() {
  const text = document.getElementById("old_cipher_text").value.toLowerCase();
  const key = document.getElementById("old_key").value.toLowerCase();

  let key_index = 0;
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let encrypted_text = "";

  for (const char of text) {
    if (!char.match(/[a-z]/)) {
      encrypted_text += char;
    } else {
      const key_char = key[key_index % key.length];
      key_index += 1;
      const offset = alphabets.indexOf(key_char);
      const index = alphabets.indexOf(char);
      const new_index =
        (index + offset * -1 + alphabets.length) % alphabets.length;
      encrypted_text += alphabets[new_index];
    }
  }
  document.getElementById("decrypted_vigenere").value = encrypted_text;
}
