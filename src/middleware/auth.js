import jwt from 'jsonwebtoken'

const auth =  async (req,res,next)=>{

    try {
        const token = req.headers.authorization.split('')[1];

        let decodedData;

        if(token){
            decodedData = jwt.verify(token,'ABC')

            req.userId = decodedData.id;
        }
        next()
        
    } catch (error) {
        
    }

}