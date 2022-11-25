const { client } = require("./index");

const moultipleInsertData = async()=>{

    try {

        const database = client.db("college");

        const student = database.collection("student");

        const docs = [

            { name: "islam",},
      
            { name: "sakkhor",},
      
            { name: " saha",}
      
          ];

          const result = await student.insertMany(docs);

          console.log(`${result.insertedCount} documents were inserted`);
        
    } catch (error) {

        console.log(error);
        
    }finally{

        await client.close();
    }
}

moultipleInsertData();