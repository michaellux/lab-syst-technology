function serialize(numbers) {
  return numbers.sort((a, b) => a - b).map(n => String.fromCharCode(n + 33)).join('');
}

function deserialize(s) {
  return s.split('').map(c => c.charCodeAt(0) - 33).sort((a, b) => a - b);
}

module.exports = { serialize, deserialize };