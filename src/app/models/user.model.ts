export class User {
  constructor(
    private email: string,
    private idToken: string,
    private localID: string,
    public expirationDate: string
  ) {}

  get expirationTime() {
    return this.expirationDate;
  }
}
