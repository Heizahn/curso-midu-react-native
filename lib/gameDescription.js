export default function gameDescription(description) {
	let newDescription = '';

	for (let i = 0; i < 117; i++) {
		newDescription += description[i];
	}

	return newDescription + '...';
}
