const Stud = require('../models/StudSchema');
class StudData {

    constructor(model) {
    this.model = model;
    }
    create(rollno, name) {

        
        
    const newStud = { rollno, name };
    const stud = new this.model(newStud);
    return stud.save();
    }
    find(name) {
        return this.model.findOne({name:name});
    }
        //find todo by the id
    findById(id) {
    return this.model.findById(id);
    }
    updateStatusById(id, object) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { done:
        object.done } });
    }
}
module.exports = new StudData(Stud);