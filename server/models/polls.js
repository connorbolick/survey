var mongoose = require('mongoose');
var MongooseSchema = new mongoose.Schema({
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String
});

mongoose.model('surveyDB', MongooseSchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');
