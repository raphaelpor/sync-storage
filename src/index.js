// @flow
import {
  AsyncStorage,
} from 'react-native';

export function handleError(func) {
  const message = `${func}() requires at least a key as its first parameter.`;
  console.warn(message);
  return Promise.reject(message);
}

class SyncStorage {
  data: Map<*, *> = new Map();
  loading: boolean = true;

  init(keys: Array<any>): Promise {
    return AsyncStorage.multiGet(keys)
      .then((data: Array<Array<string>>): Array<*> => {
        data.forEach((item: Array<string>) => {
          this.data.set(item[0], item[1] && JSON.parse(item[1]));
          this.loading = false;
        });

        return [...this.data];
      });
  }

  get(key: any): any {
    return this.data.get(key);
  }

  set(key: any, value: any, dontTryAgain?: boolean): Promise {
    if (!key) return handleError('set');

    this.data.set(key, value);
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: any): Promise {
    if (!key) return handleError('remove');

    this.data.delete(key);
    return AsyncStorage.removeItem(key);
  }
}

const syncStorage = new SyncStorage();

export default syncStorage;
