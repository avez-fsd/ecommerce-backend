import UnauthorizedException from '@exceptions/unauthorized.exception';
import jwt from 'jsonwebtoken'

class JwtHelper {

    generateToken(payload:any) {
       return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "365 days"
       });
    }

    verifyToken(token:string, options?:any){
        try {
            return jwt.verify(token, process.env.JWT_SECRET, options);
        } catch (err:any) {
            throw new UnauthorizedException(err.message);
        }
    }
}

export default new JwtHelper();