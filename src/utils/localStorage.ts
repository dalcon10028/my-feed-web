export class TokenStorage {
  static KEY_NAME = 'myfeed-token';

  static setToken(token: string) {
    localStorage.setItem(this.KEY_NAME, token);
  }

  static getToken(): string {
    return localStorage.getItem(this.KEY_NAME) ?? '';
  }

  static removeToken(): void {
    localStorage.removeItem(this.KEY_NAME);
  }
}
