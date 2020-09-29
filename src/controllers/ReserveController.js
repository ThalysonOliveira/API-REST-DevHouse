import Reserve from '../models/Reserve'
import User from '../models/User'
import House from '../models/House'

class ReserveController{
    async store(req,res){
        return res.json({ok:true})
    }
}

export default new ReserveController()