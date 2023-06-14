import { verify } from 'jsonwebtoken';
import { AppError } from '../../../errors/AppError';

module.exports = function ensureAuthenticated(
  request,
  response,
  next,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token inválido', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, "default");

    const { sub } = decoded;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Token inválido', 401);
  }
}