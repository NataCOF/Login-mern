import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export function createTokenAccess(Payload){
    return new Promise((resolve, reject) => {
        jwt.sign(
            Payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if(err) reject(err);
                resolve(token)
            }
        )
    })
}