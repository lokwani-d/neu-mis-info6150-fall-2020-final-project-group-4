import TeacherService from "./../services/teacher.services";

//fetch all users
const index = (request, response) => {
    TeacherService.search({ })
   .then( (teachers) => {
    response.status(200);
    response.json(teachers);

   })
   .catch( handleError(response));
};

//get specific user by id
const get = (request, response) => {
    const id = request.params.id;
    TeacherService.get(id)
        .then((teacher) => {
            response.status(200);
            response.json(user == null? {message:"User not present"}: teacher);

        })
        .catch(handleError(response));

};

//add new user
const create = (request, response) => {
    const newUser = Object.assign({ }, request.body);
    TeacherService.create(newUser)
    .then((teacher) => {
        response.status(200);
        response.json(teacher);
    })
    .catch(handleError(response));
};

//update specific user
const update = (request, response) => {
    const id = request.params.id;
    if(id == undefined){
        response.status(200);
        response.json("Invalid Input");
        return response;
    }
    const updateUser = Object.assign({ }, request.body);
    TeacherService.update(id,updateUser)
        .then((teacher) => {
            response.status(200);
            response.json(user == null? {message:"User not present"}: teacher);
        })
        .catch(handleError(response));

};

//delete a user
const remove = (request, response) => {
    const id = request.params.id;
    if(id == undefined){
        response.status(200);
        response.json("Invalid Input");
        return response;
    }
    TeacherService.remove(id)
        .then((user) => {
            response.status(200);
            response.json({
                message: "Delete Sucessful"
            });
        })
        .catch(handleError(response));

};

const handleError = (response) => {
    console.log(response)
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })

    };


}

export default {
    index: index,
    get: get,
    create: create,
    update: update,
    remove: remove
}
