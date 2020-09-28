import House from '../models/House'
import User from '../models/User'
import *as Yup from 'yup'
import { constant } from 'lodash'
import { error } from 'console'

class HouseController {
    async index(req, res) {
        const { status } = req.query
        const house = await House.find({ status })
        return res.json(house)
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            description: Yup.string().required(),
            price: Yup.number().required(),
            location: Yup.string().required(),
            status: Yup.string().required()
        })

        const { filename } = req.file
        const { description, price, location, status } = req.body
        const { user_id } = req.headers

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ message: 'Preencha os campos.' })
        }
        const house = await House.create({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status
        })
        return res.json(house)

    }
    async update(req, res) {
        const schema = Yup.object().shape({
            description: Yup.string().required(),
            price: Yup.number().required(),
            location: Yup.string().required(),
            status: Yup.string().required()
        })

        const { filename } = req.file
        const { house_id } = req.params
        const { user_id } = req.headers
        const { description, price, location, status } = req.body

        const house = await House.findById({ _id: house_id })
        const user = await User.findById({ _id: user_id })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ message: 'Preencha os campos' })
        }

        if (String(user._id) !== String(house.user)) {
            return res.status(401).json({ error: 'Não autorizado.' })
        }

        await House.updateOne({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status
        })

        return res.json({message: 'ALterado com sucesso.'})
    }
}

export default new HouseController()