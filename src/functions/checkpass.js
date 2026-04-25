export default function checkPass(e) {
	e.preventDefault();
	const isLetter = (c) => (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");

	const isNumber = (c) => c >= "0" && c <= "9";

	let password = e.target.password.value;

	let hasLetter = false;
	let hasNumber = false;

	for (let char of password) {
		if (isLetter(char)) {
			hasLetter = true;
		}
		if (isNumber(char)) {
			hasNumber = true;
		}
	}

    let isValid = password.length >=8 && hasLetter && hasNumber

    if (!isValid){
        alert("Check if your password meets the conditions")
    }
}
