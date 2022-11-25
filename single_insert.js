const {client} =require("./index")

const singleDataInsert=async()=>{
    try {
        const database = client.db("college");
        const student = database.collection("student");

        const doc = {
            name:"sakkhor",
          }
          const result = await student.insertOne(doc);
          console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } catch (error) {
        console.log(error)
    }finally{
        await client.close();
    }
}

singleDataInsert();