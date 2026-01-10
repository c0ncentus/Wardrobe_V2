/**
 * Abstraction LocalStorage avec typage
 */

export class StorageService<T = any> {
  constructor(private key: string) {}

  get(): T | null {
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error loading ${this.key}:`, error);
      return null;
    }
  }

  set(data: T): void {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error saving ${this.key}:`, error);
    }
  }

  remove(): void {
    try {
      localStorage.removeItem(this.key);
    } catch (error) {
      console.error(`Error removing ${this.key}:`, error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}

// Factory pour créer des services typés
export const createStorage = <T>(key: string) => new StorageService<T>(key);