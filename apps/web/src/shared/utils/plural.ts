/**
 * Возвращает правильную форму слова в зависимости от числа.
 *
 * @param {Array<string>} forms - Массив словоформ: [одна, несколько, много].
 * @param {number} n - Число, для которого определяется форма слова.
 * @returns {string} - Правильная словоформа.
 */
const plural = (forms: [string, string, string], n: number): string => {
  let idx: number;

  if (n % 10 === 1 && n % 100 !== 11) {
    idx = 0;
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    idx = 1;
  } else {
    idx = 2;
  }

  return forms[idx] || "";
};

export { plural };
