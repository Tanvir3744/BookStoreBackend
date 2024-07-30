import { NextFunction } from 'express'
import { AnyZodObject, ZodEffects} from 'zod'

const validateRequest = (schema: AnyZodObject | ZodEffects<AnyZodObject>) => (req:Request, res: Response, next: NextFunction) => {

}