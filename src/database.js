const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://root:root@gems-db.azu11.mongodb.net/gems?retryWrites=true&w=majority", {
    useCreateIndex : true,
    useNewUrlParser : true,
    useFindAndModify : false,
    useUnifiedTopology : true
})
.then(db => console.log('Db is connected' + db))
.then(err => console.log(err))