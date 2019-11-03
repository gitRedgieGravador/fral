const mongoose  = require('mongoose')
require('../auth/auth')
const UserSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    age:{
        type: Number,
        default: 0
    },
    email:{
        type: String,
        required: true,
        unique:true,
        trim: true

    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength: 7
    },
    tokens:[{
        token:{
            type:String,
            required: true
        }
    }],
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

UserSchema.methods.newAuthToken = async function(){
    const user  = this
    const token =  jwt.sign({ _id: user.id.toString() },'fralauth', {expiresIn: "7 days"})
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

UserSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

module.exports = User;