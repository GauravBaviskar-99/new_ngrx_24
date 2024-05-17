export class User {
  constructor(
    private email: string,
    private idToken: string,
    private localID: string,
    private expirationDate: string
  ) {}
}
