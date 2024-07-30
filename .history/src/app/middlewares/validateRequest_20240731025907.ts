import { NextFunction } from 'express'
import { AnyZodObject, ZodEffects } from 'zod'

const validateRequest =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
      async (req: Request, res: Response, next: NextFunction) => {
     try {
         await schema.parseAsync({
             body: req.body,
             params: req.params, 
             query: req.query,
             cookies: req.cookies
        })
     } catch (error) {
        
     }
  }
