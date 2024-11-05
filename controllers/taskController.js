//tasks controller
exports.createTask = (req, res) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ message: 'Error parsing form' }));
            return;
        }
        const image = files.image[0]

       // if (!fields.title) {
        
        const tasks = readTasksFromFile();
        const newTask = {
            id: Date.now(),
            title: fields.title,
            description: fields?.description || '',
            status: fields?.status || 'pending',
            Image: image ? `/uploads/${image.NewFilename}` : null,
        };

        tasks.push(newTask);
        writeTasksToFile(tasks);
       // res.writeHead(201, {'Content-Type': 'application/json'});
       // res.end(JSON.stringify(newTask));

        if(files.image) {
            copyFileSync(files.image.path, path.join(__dirname, '../uploads', files.image.name));
            res.end(JSON.stringify(newTask))
            
        }
    })
};
exports.createTask = (req, res) => {

}
exports.updateTask = (req, res) => {
    res.end(JSON.stringify({
        message: 'Update Task'
    }))
}
//exports.gettasks = (req, res) => {
exports.deleteTask = (req, res) => {
    res.end(JSON.stringify({
        message: 'Delete Task'
    }))
}
        