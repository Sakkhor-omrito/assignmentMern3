const {client}=require("./index");

const allUpDateData=async()=>{

    try {


        const database = client.db("college");

        const student = database.collection("student");

        const filter = {};

        const updateDoc = {

            $set: {

                roll:"10"
      
            },
      
          };

          const result = await student.updateMany(filter, updateDoc);

          console.log(`Updated ${result.modifiedCount} documents`);
        
    } catch (error) {
        
        console.log(error);
    }finally{

        await client.close();
    }
}

allUpDateData();