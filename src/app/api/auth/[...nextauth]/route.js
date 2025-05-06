import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'  

const authHandler = NextAuth({
    providers:[
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                emai: { label:"email", type:"text"},
                password: { label: "password", type:'password'}
            },
            async authorize(credentials){
                try{
                    const {email, password} = credentials;
                    if(email === 'demo@example.com' && password === "password") {
                        return { id:1, name: "demo user" }
                    }
                    
                } catch(e){
                    return null
                }
            }
        })
    ],
    pages:{
        signIn:'/login'
    }
})

export { authHandler as GET, authHandler as POST}