class Auth {
  private _value: boolean ;
  public constructor(value: boolean = true) {
    this._value = value;
  }

  get getBool(): boolean {
    return this._value;
  }

  set setBool(authBoo: boolean) {
    this._value = authBoo;
  }
}

export const auth = new Auth()
