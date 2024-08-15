export class User {
  constructor(
    private email: string,
    public idToken: string,
    private localID: string,
    public expirationDate: string
  ) {}

  get expirationTime() {
    return this.expirationDate;
  }

  get userToken() {
    return this.idToken;
  }
}
