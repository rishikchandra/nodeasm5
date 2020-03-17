const connection = require('../databases/db');

const insert = (id, name, rating)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`insert into student values(${id},'${name}',${rating})`,(err,res)=>{
            if(err){
                reject(err);
            }
            else
            resolve(res);
        });
    });
}

const teams = (input) => {
    try {
        return new Promise((resolve,reject)=>
        {
            db.query('select * from team order by rating desc',(err,count)=>
            {
                if (err){
                    reject(err);
                }
                else
                console.log(count);
                var data=[];
                Object.keys(count).forEach(function(key){
                    data.push(count[key]);
                });
        
        function chunkAverage(arr, len) {
            var chunks = [];
            var i = 0;
            var n = arr.length;
            
            var chunk;
        
            while (i < n) {
              chunk = arr.slice(i, i += len);
              chunks.push(
                chunk.reduce((s, n) => s + n) / chunk.length
              );
            }
        
            return chunks;
        };
        
        var avg = (chunkAverage(data, input));
        console.log(avg);
        resolve(avg);
        
            });
    
    
        });
    } catch (error) {
                console.log(error);
                throw error;
            }
        }


module.exports = {insert,teams};