const configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function(){
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@mycluster.kfyahe3.mongodb.net/?retryWrites=true&w=majority`
    }
}