const User = require('../models/User')

const bcrypt = require('bcryptjs')

module.exports = class AuthController{

    static async registePost(request, response){
        const {nome, email, password, repeatPassword} = request.body
        console.log(nome, email,password, repeatPassword)

        if(password != repeatPassword){
            request.flash('message', 'As senhas não conferem')
            response.render('home')
            return
        }
        // Verifica se á existe usuario
        const checkIfUserExist = await User.findOne({where:{email:email}})
        console.log(checkIfUserExist)
        if(checkIfUserExist){

        }
        const user = {
            nome,
            email,
            password
        }

        try {
            const createUser =  await User.create(user)
            request.session.userId = createUser.id

            request.flash('message', 'Cadastro realiado com sucesso')
            request.session.save(()=>{
                response.redirect('/')
            })
        } catch (error) {
            
        }


    }
    static async loginPost(request, response){
        const {email, password} = request.body
        const user = await User.findOne({where:{email:email}})
        if(!user){
            request.flash('message', 'Usuário não encontrado')
            response.render('home')
            return
        }
        console.log('chegou')
    }
}