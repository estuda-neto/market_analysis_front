import { jwtDecode } from 'jwt-decode';

export interface IObjectClaims {
    id: string;
    username: string;
    email: string;
    imagem: string;
    roles: string | string[];
};

export const decoderTokenToClaims = (token: string): Partial<IObjectClaims> | null => {
    if (token) {
        try {
            const decodedToken = jwtDecode(token) as any;
            return {id: decodedToken.id, username: decodedToken.username,  email: decodedToken.email,  imagem: decodedToken.imagem,  roles: decodedToken.roles};
        } catch (error) {
            return null;
        }
    } else {
        return null;
    }
}