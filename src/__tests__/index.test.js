import syncStorage from '../';

test("Can init with a list of keys", () => {
  expect.assertions(1);
  return syncStorage.init(['foo']).then((data) => {
    expect(data[0][1]).toBe(undefined);
  });
});

test("Can set and get a value", () => {
  syncStorage.set('foo', 'bar');
  expect(syncStorage.get('foo')).toBe('bar');
});

test("Can set and remove a value", () => {
  syncStorage.set('foo', 'bar');
  syncStorage.remove('foo')
  expect(syncStorage.get('foo')).toBeFalsy();
});

test("Returns a error when set() don't have a key", () => {
  expect.assertions(1);
  return syncStorage.set()
  .catch((error) => {
    expect(error).toMatch('set() requires at least a key as its first parameter.');
  });
});

test("Returns a error when remove() don't have a key", () => {
  expect.assertions(1);
  return syncStorage.remove()
  .catch((error) => {
    expect(error).toMatch('remove() requires at least a key as its first parameter.');
  });
});
