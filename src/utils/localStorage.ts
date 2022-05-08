export class TokenStorage {
  static KEY_NAME = 'myfeed-token';

  static setToken(token: string) {
    console.log(`token: ${token}, keyName: ${this.KEY_NAME}`);
    localStorage.setItem(this.KEY_NAME, token);
  }

  static getToken(): string {
    return localStorage.getItem(this.KEY_NAME) ?? '';
  }
}
