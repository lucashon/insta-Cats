
const Likes = require('../models/Like')


module.exports = class LikeController{
    static async likePost(request,response){
        const PublicationId = request.body.PublicationId
        const UserId = request.session.userId

        const like = {
            USerId: UserId,
            PublicationId: PublicationId
        }

        try {
            await Likes.create(like)
            response.redirect('/')

        } catch (error) {
            console.log(error)
        }
    }
}