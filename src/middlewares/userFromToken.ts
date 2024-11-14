import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'T2u8vHBIfXAz7ZOBrZNDPw==';

export const getUserIdFromToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Authentication token is required' });
    } else {
        try {
            const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
            req.body.data.userId = decoded.id ;
            next(); // Proceed to the next middleware/route handler
        } catch (error) {
            res.status(401).json({ message: 'Invalid token' });
        }
    }
};
