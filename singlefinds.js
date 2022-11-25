const{client}=require("./index");

const singleDataFind=async()=>{

    try {

        const database = client.db("college");

        const student = database.collection("student");

        const query = { name: "islam" };

        const result = await student.findOne(query);

        console.log(result);
        
    } catch (error) {
        console.log(error);
    }finally{

        await client.close();
    }
}

singleDataFind();