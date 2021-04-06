const mongoose = require("mongoose");
mongoose.pluralize(null);

const url = 'mongodb://52.15.177.88:27017/student'
const options = {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false
};
mongoose.connect(url, options)
var db = mongoose.connection;
//handle mongo error
db.once('open', _ => {
console.log('Database connected:', url)
})
db.on('error', err => {
console.error('connection error:', err)
})
const studSchema = new mongoose.Schema({
    rollno: {type: String,required: true},
    name: {type: String,required: true}
    }, {
        versionKey: false // You should be aware of the outcome after set to false
    })
module.exports = mongoose.model('stud_data',studSchema);