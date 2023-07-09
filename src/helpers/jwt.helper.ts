import UnauthorizedException from '@exceptions/unauthorized.exception';
import jwt from 'jsonwebtoken'

class JwtHelper {

    generateToken(payload:any) {
       return new Promise((resolve, reject) => {
           jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "365 days"
           }, 
           (err: any, token:any) => {
                if(err) reject(err.message);
                resolve(token);
           });
       })
    }

    verifyToken(token:string, options?:any){
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.JWT_SECRET, options, 
            (err: any, token:any) => {
                 if(err) reject(new UnauthorizedException(err.message));
                 resolve(token);
            });
        })
    }

    extractJwtToken(authHeaders:string) {
        const authHeader = authHeaders.split(' ');
        if (authHeader.length !== 2) return false;
        if (authHeader[0] !== 'Bearer') return false;
        return authHeader[1];
    }
}

export default new JwtHelper();