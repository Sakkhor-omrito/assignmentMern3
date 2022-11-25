const {client}=require("./index");

const multipleDataFind=async()=>{

    try {
        
        const database = client.db("college");

        const student = database.collection("student");

        const query={};

        const cursor=student.find(query);

        if ((await cursor.estimatedDocumentCount) === 0) {

            console.log("No documents found!");
      
          }else{

            const student=await cursor.toArray();

            await student.forEach(student=>console.log(student));
          }

    } catch (error) {

        console.log(error);
        
    }finally{

        await client.close();
    }
}

multipleDataFind();