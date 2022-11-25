const {client}=require("./index");

const deleteOneData=async()=>{

    try {

        const database = client.db("college");

        const student = database.collection("student");

        const query = { name: "sakkhor" };

        const result = await student.deleteOne(query);

        if (result.deletedCount === 1) {

            console.log("Successfully deleted one document.");
      
          } else {
      
            console.log("No documents matched the query. Deleted 0 documents.");
      
          }
        
    } catch (error) {
        
        console.log(error);
    }finally{

        await client.close();
    }
}

deleteOneData();