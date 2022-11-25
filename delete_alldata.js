const {client}=require("./index");

const deleteAllData=async()=>{

    try {

        const database = client.db("college");

        const student = database.collection("student");

        const query = {};

        const result = await student.deleteMany(query);

        console.log("Deleted " + result.deletedCount + " documents");

    } catch (error) {

        console.log(error);
        
    }finally{

        await client.close();
    }
}

deleteAllData();