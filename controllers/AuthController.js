const User = require('../models/User')

const bcrypt = require('bcryptjs')

module.exports = class AuthController{

    static async registePost(request, response){
        const {nome, email, password, repeatPassword} = request.body
        console.log(nome, email, password, repeatPassword)

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
        const salt = bcrypt.genSaltSync(10)
		const hashedPassword = bcrypt.hashSync(password + salt)
        const user = {
            nome,
            email,
            password: hashedPassword
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
        const user = await User.findOne({where:{email: email}})

        if(!user){
            request.flash('message', 'Usuário não encontrado')
            response.render('home')
            return
        }

        // const passwordMatch = bcrypt.compareSync(password, user.password)
        // console.log(passwordMatch)
        // console.log(password, user.password)

        // if(!passwordMatch){
        //     request.flash('message', 'Senha inválida')
        //     response.render('home')
        // }

        request.session.userId = user.id
        
        request.flash('message', 'Usuário autenticado com sucesso')

        request.session.save(() => {
            response.redirect('/')
        })

    }

    static async logout(request, response){
        request.session.destroy()
        response.redirect('/')
    }
}