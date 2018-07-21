var schemaGenerator = require('generate-schema');
const fs = require('fs');

fs.readFile('./responseJSON/Input.json',(err,data)=>{
    if(err){
        console.log(err);
    } else {
        const jsonObject = JSON.parse(data);
        console.log(jsonObject);
        var schema = schemaGenerator.json(jsonObject);
        console.log(JSON.stringify(schema));
        fs.writeFileSync('./resultJSONSchema/Output.json',JSON.stringify(schema));
        console.log('JSON Schema generation successful!')
    }
});



