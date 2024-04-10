const { serialize, deserialize } = require('../index.js')

describe('Serialization and Deserialization', () => {
  test('Serializes and deserializes a short array of numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    const serialized = serialize(numbers);
    const deserialized = deserialize(serialized);
    expect(deserialized).toEqual(numbers);
    const compressionRatio = serialized.length / (numbers.length * 2);
    expect(compressionRatio).toBeLessThan(1);
  });
  test('Serializes and deserializes a random array of 50 numbers', () => {
    const numbers = Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 1);
    const serialized = serialize(numbers);
    const deserialized = deserialize(serialized);
    expect(deserialized).toEqual(numbers);
    const compressionRatio = serialized.length / (numbers.length * 2);
    expect(compressionRatio).toBeLessThan(1);
  });
  test('Serializes and deserializes a random array of 100 numbers', () => {
    const numbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 300) + 1);
    const serialized = serialize(numbers);
    const deserialized = deserialize(serialized);
    expect(deserialized).toEqual(numbers);
    const compressionRatio = serialized.length / (numbers.length * 2);
    expect(compressionRatio).toBeLessThan(1);
  });
  test('Serializes and deserializes a random array of 500 numbers', () => {
    const numbers = Array.from({ length: 500 }, () => Math.floor(Math.random() * 300) + 1);
    const serialized = serialize(numbers);
    const deserialized = deserialize(serialized);
    expect(deserialized).toEqual(numbers);
    const compressionRatio = serialized.length / (numbers.length * 2);
    expect(compressionRatio).toBeLessThan(1);
  });
  test('Serializes and deserializes a random array of 1000 numbers', () => {
    const numbers = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300) + 1);
    const serialized = serialize(numbers);
    const deserialized = deserialize(serialized);
    expect(deserialized).toEqual(numbers);
    const compressionRatio = serialized.length / (numbers.length * 2);
    expect(compressionRatio).toBeLessThan(1);
  });
  test('Serializes and deserializes an array of numbers with one digit', () => {
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
    const serialized = serialize(numbers);
    const deserialized = deserialize(serialized);
    expect(deserialized).toEqual(numbers);
    const compressionRatio = serialized.length / (numbers.length * 2);
    expect(compressionRatio).toBeLessThan(1);
  });
  test('Serializes and deserializes an array of numbers with two digits', () => {
    const numbers = Array.from({ length: 100 }, (_, i) => i * 10 + 1);
    const serialized = serialize(numbers);
    const deserialized = deserialize(serialized);
    expect(deserialized).toEqual(numbers);
    const compressionRatio = serialized.length / (numbers.length * 2);
    expect(compressionRatio).toBeLessThan(1);
  });
  test('Serializes and deserializes an array of numbers with three digits', () => {
    const numbers = Array.from({ length: 100 }, (_, i) => (i + 1) * 100);
    const serialized = serialize(numbers);
    const deserialized = deserialize(serialized);
    expect(deserialized).toEqual(numbers);
    const compressionRatio = serialized.length / (numbers.length * 2);
    expect(compressionRatio).toBeLessThan(1);
  });
  test('Serializes and deserializes an array of numbers with each number repeated three times', () => {
    const numbers = Array.from({ length: 300 }, (_, i) => i + 1);
    const serialized = serialize(numbers);
    const deserialized = deserialize(serialized);
    expect(deserialized).toEqual(numbers);
    const compressionRatio = serialized.length / (numbers.length * 2);
    expect(compressionRatio).toBeLessThan(1);
  });
});