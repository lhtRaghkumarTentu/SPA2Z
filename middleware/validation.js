import Utils from '../app/utils'
import * as yup from 'yup'

module.exports = {

    validateUserSignUp: async(req, res, next) => {
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            username: yup.string().min(8).max(26).required(),
            dateOfBirth: yup.number(),
        })
        await validate(schema, req.body, res, next)
    },

}

const validate = async(schema, reqData, res, next) => {
    try {
        await schema.validate(reqData, { abortEarly: false })
        next()
    } catch (e) {
        const errors = e.inner.map(({ path, message, value }) => ({ path, message, value }))
        Utils.responseForValidation(res, errors)
    }
}