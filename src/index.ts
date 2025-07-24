import app from "./app";
import AppDatasource from "./datasource";

AppDatasource
    .initialize()
    .then(()=>{
        app.listen(3000, ()=>{
            console.log('App running');
        });
    })
    .catch(err=>{
        console.error(err);
    })
