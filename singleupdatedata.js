const {client}=require("./index");

const singleUpDateData=async()=>{

    try {

        const database = client.db("college");

        const student = database.collection("student");

        const filter = {name: "sakkhor" };

        const options = { upsert: true };

        const updateDoc = {

            $set: {
      
              isStudent:true,
      
            },
      
          };

          const result = await student.updateOne(filter, updateDoc, options);

          console.log(

            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      
          );
        
    } catch (error) {

        console.log(error);
        
    }finally{

        await client.close();
    }
}

singleUpDateData();