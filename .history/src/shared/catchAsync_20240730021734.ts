import { NextFunction, Request, RequestHandler, Response } from 'express'

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
      try {
        return await fn()
    } catch (error) {
      next()
    }
  }
}
