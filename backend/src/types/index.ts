export interface JwtPayload {
    userId: string;
  }
  
  export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
  }
  
  export interface CreateUserInput {
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
  }
  
  export interface LoginInput {
    email: string;
    password: string;
  }