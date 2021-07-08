const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient

async function main() {


    //ajouter users
    const addUser = await prisma.user.create({
        data: {
            email: 'steevesanon65@gmail.com',
            name: 'sanon steeve'
        }
    })

    if (addUser) {
        console.log("user ajouter")
    } else {
        console.log("user non ajoiuter")
    }
    //modifier user
    const _email="steevesanon63@gmail.com"
    const editUser=await prisma.user.update({
        
        where:{
            email:_email
        },
        data:{
            name:'Steeve Sanon Edit'
        }
    })

    if(editUser){
        console.log("user edit Successfull")
    }else{
        console.log("error edit")
    }
    //delete user
    const deleteUser=await prisma.user.delete({
        where:{
            email:_email
        }
    })
    if(deleteUser){
        console.log("user supprimer")
    }else{
        console.log("user non supprimer")
    }
    //lister user
    const allUsers = await prisma.user.findMany();
    console.log(allUsers)
}
main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })