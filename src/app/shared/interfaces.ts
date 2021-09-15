export interface User {
    email: string;
    password: string;
    returnSecureToken?: boolean;
}

export interface FbAuthResponse {
    displayName: string;
    email: string;
    idToken: string;
    expiresIn: string;
    kind: string;
    localId: string;
    refreshToken: string;
    registered: boolean;
}

export interface Post  {
    id?: string;
    title: string;
    text: string;
    author: string;
    date: Date;
}

export interface FbCreateResponse {
    name?: string;
}