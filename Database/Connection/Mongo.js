const { mongoose } = require("mongoose");
const mongoDB = "mongodb+srv://san:just@nebula.v9wn0.mongodb.net/test"
function mongoConect() {
    console.log(`------- DATABASE -------`);

        if (!mongoDB) {
            console.log('⚠ | MongoDB is not configured');
            console.log(`------------------------`);
        }

        mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log(`✅ | ` + ('MongoDB connected'))
                console.log(`------------------------`);
        }).catch(err => {
            console.log(`- ERROR -\n`, (err));
        });
}

module.exports =  mongoConect;