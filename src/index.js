import AsyncStorage from '@react-native-community/async-storage';

import handleError from './helpers/handleError';

type KeyType = string;

class SyncStorage {
  data: Map<*, *> = new Map();

  loading: boolean = true;

  init(): Promise<Array<*>> {
    return AsyncStorage.getAllKeys().then((keys: Array<KeyType>) =>
      AsyncStorage.multiGet(keys).then((data: Array<Array<KeyType>>): Array<
        *,
      > => {
        data.forEach(this.saveItem.bind(this));

        return [...this.data];
      }),
    );
  }

  get(key: KeyType): any {
    return this.data.get(key);
  }

  set(key: KeyType, value: any): Promise<*> {
    if (!key) return handleError('set', 'a key');

    this.data.set(key, value);
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: KeyType): Promise<*> {
    if (!key) return handleError('remove', 'a key');

    this.data.delete(key);
    return AsyncStorage.removeItem(key);
  }

  saveItem(item: Array<KeyType>) {
    let value;

    try {
      value = JSON.parse(item[1]);
    } catch (e) {
      [, value] = item;
    }

    this.data.set(item[0], value);
    this.loading = false;
  }

  getAllKeys(): Array<*> {
    return Array.from(this.data.keys());
  }
}

const syncStorage = new SyncStorage();

export default syncStorage;
