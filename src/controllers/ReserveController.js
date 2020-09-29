import Reserve from '../models/Reserve'
import User from '../models/User'
import House from '../models/House'

class ReserveController {
    async index(req, res) {
        const { user_id } = req.headers

        const reserve = await Reserve.find({ user: user_id }).populate('house')

        return res.json(reserve)

    }
    async store(req, res) {
        const { user_id } = req.headers
        const { house_id } = req.params
        const { date } = req.body

        const user = await User.findById({ _id: user_id })
        const house = await House.findById({ _id: house_id })

        if (!house) {
            return res.status(400).json({ error: 'Casa não encontrada.' })
        }
        if (house.status !== true) {
            return res.status(400).json({ error: 'Casa indisponivel.' })
        }

        if (String(user._id) === String(house.user)) {
            return res.status(401).json({ error: 'Reserva não permitida.' })
        }

        const reserve = await Reserve.create({
            user: user_id,
            house: house_id,
            date
        })

        await reserve.populate('house').populate('user').execPopulate()
        return res.json(reserve)

    }
    async destroy(req, res) {
        const { reserve_id } = req.body

        const reserve = await Reserve.findByIdAndDelete({ _id: reserve_id })

        if(!reserve){
            return res.status(400).json({error: 'Reserva não encontrada.'})
        }
        return res.json({message: 'Reserva cancelada.'})
    }
}

export default new ReserveController()