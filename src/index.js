module.exports = function check(str, bracketsConfig) {
	let stack = [],
		opening = [],
		closing = [];
	for (let i = 0; i < bracketsConfig.length; i++) {
		opening.push(bracketsConfig[i][0]);
		closing.push(bracketsConfig[i][1]);
	}
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		let indInOpening = opening.indexOf(char),
			indInClosing = closing.indexOf(char);
		if (indInOpening >= 0) {
			if (
				//если символы одинаковые и один из них уже есть в стеке
				opening[indInOpening] === closing[indInOpening] &&
				stack[stack.length - 1] === char
			) {
				stack.pop();
			} else {
				//если символ открывающей скобки есть в конфиге
				stack.push(char);
			}
		} else if (
			indInClosing >= 0 && // есть в закрывающих
			opening[indInClosing] === stack[stack.length - 1] // обратный символ есть в стеке
		) {
			stack.pop();
		} else {
			stack.push(char);
		}
	}
	if (stack.length > 0) return false;
	else return true;
};
