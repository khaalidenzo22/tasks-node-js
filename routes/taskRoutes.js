//tasks routes
const { gettasks, createTask, updateTask } = require("../controllers/taskController")

const taskRoutes = (req,res)=>{

   // const { files } = req;
    if (req.methd === 'GET'){
        gettasksasks(req, res)
    }else if (req.methd === 'POST'){
        createTask(req, res)
    }else if (req.methd === 'PATCH'){
        updateTask(req, res)
    }else if (req.methd === 'DELETE'){
        deleteTask(req, res)
        
    }
    else{

        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Not Found'}));
    }
}

module.exports = taskRoutes;