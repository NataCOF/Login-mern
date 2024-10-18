import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
username : {
    type : String,
    required : true,
    trim : true
},
email: {
    type : String,
    unique: true,
    required: true,
    trim: true
},
password: {
    type : String,
    require : true
}
}, { 
    timestamps: true // Fecha de creación y actualización automatica
});

export default mongoose.model("User", userSchema);