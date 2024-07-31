function generate_Password() {
  const length = parseInt(document.getElementById("length").value) || 8;
  const alphabets =
    document.getElementById("alphabets").value || "abcdefghijklmnopqrstuvwxyz";
  const special_Characters =
    parseInt(document.getElementById("special_character").value) || 0;
  const upper_letters =
    parseInt(document.getElementById("upper_case").value) || 0;
  const lower_letters =
    parseInt(document.getElementById("lower_case").value) || 0;

  const all_upper_case = alphabets.toUpperCase();
  const all_lower_case = alphabets.toLowerCase();
  const allSpecial = "!@#$%^&*()_+-=[]{}|;:',.<>?";
  let all_char_set = alphabets;
  let password = "";

  if (special_Characters > 0) {
    all_char_set += allSpecial;
  }
  if (upper_letters > 0) {
    all_char_set += all_upper_case;
  }
  if (lower_letters > 0) {
    all_char_set += all_lower_case;
  }

  for (let i = 0; i < upper_letters; i++) {
    password += all_upper_case.charAt(
      Math.floor(Math.random() * all_upper_case.length)
    );
  }

  for (let i = 0; i < lower_letters; i++) {
    password += all_lower_case.charAt(
      Math.floor(Math.random() * all_lower_case.length)
    );
  }

  for (let i = 0; i < special_Characters; i++) {
    password += allSpecial.charAt(
      Math.floor(Math.random() * allSpecial.length)
    );
  }

  while (password.length < length) {
    password += all_char_set.charAt(
      Math.floor(Math.random() * all_char_set.length)
    );
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  document.getElementById("generated_password").value = password;
}
