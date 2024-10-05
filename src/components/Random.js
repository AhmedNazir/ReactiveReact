export function getRandomInteger(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomString(length = 10) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getUuid() {
  return Crypto.getRandomValues();
}

export function getRandomWord() {
  const words = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
  ];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
