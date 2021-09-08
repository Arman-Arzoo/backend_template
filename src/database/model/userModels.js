import mongoose from 'mongoose';

const YourSchemaName = mongoose.Schema({

    name:String ,//use if no other object

    name:{
      type:String,
      min:4,
    } //use this if you have object with condition
  
    
} , { timestamps: true })


const yourNameForModel = mongoose.model('yourNameForModel',YourSchemaName);

export default yourNameForModel;

//change yourSchemaName to your mongoose shcema
//change yourNameForModel to your own model