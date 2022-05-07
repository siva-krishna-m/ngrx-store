export interface AuthResponseData {
  password: string;
  idToken: string;
  email: string;
  refreshToken: string,
  expiresIn: string;
  localId: string;
  registered: boolean;
}
