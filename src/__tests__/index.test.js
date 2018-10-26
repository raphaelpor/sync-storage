import SyncStorage from '../';

test("Can init with a list of keys", () => {
  expect.assertions(1);
  return SyncStorage.set('foo', 'bar').then(() =>
    SyncStorage.init().then((data) => {
      expect(data[0][1]).toBe('bar');
    }));
});

test("Can set and get a value", () => {
  SyncStorage.set('foo', 'bar');
  expect(SyncStorage.get('foo')).toBe('bar');
});

test("Can set and remove a value", () => {
  SyncStorage.set('foo', 'bar');
  SyncStorage.remove('foo')
  expect(SyncStorage.get('foo')).toBeFalsy();
});

test("Returns a error when set() don't have a key", () => {
  expect.assertions(1);
  return SyncStorage.set()
  .catch((error) => {
    expect(error).toMatch('set() requires at least a key as its first parameter.');
  });
});

test("Returns a error when remove() don't have a key", () => {
  expect.assertions(1);
  return SyncStorage.remove()
  .catch((error) => {
    expect(error).toMatch('remove() requires at least a key as its first parameter.');
  });
});

test("Can update an item", () => {
  SyncStorage.saveItem(['bar', 'baz']);
  expect(SyncStorage.get('bar')).toBe('baz');
});

test('Can get all keys from storage', () => {
  const all_keys = SyncStorage.getAllKeys();
  SyncStorage.set('foo', 'bar');
  expect(all_keys)
    .toEqual(expect.arrayContaining(['foo']));
});

