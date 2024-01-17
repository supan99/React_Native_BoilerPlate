import AsyncStorage from '@react-native-async-storage/async-storage';
import * as regex from './regex';

export async function asyncForEach(array: any, callback: any) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index);
  }
}

export const asyncStorageKeys = {
  isUserFirstTime: 'isUserFirstTime',
  isUserLogin: 'isUserLogin',
  userToken: 'userToken',
  currentUser: 'CurrentUser',
};

export const storeAsyncData = async (key: any, data: any, callback: any = () => {}) => {
  try {
    await AsyncStorage.setItem(key, data);
    callback();
  } catch (e) {
    console.warn('AsyncStorage(ERROR)=======>>>>>', e);
  }
};

export const getAsyncData = async (key: string, callback: any) => {
  try {
    const value = await AsyncStorage.getItem(key);
    // value previously stored
    callback(value);
  } catch (e) {
    console.warn('AsyncStorage(ERROR)=======>>>>>', e);
  }
};

export const checkValidFormat = (text: string, format: RegExp) => {
  return format.test(text)
}