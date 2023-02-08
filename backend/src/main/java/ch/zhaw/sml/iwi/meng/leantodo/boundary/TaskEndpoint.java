package ch.zhaw.sml.iwi.meng.leantodo.boundary;

import java.security.Principal;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.sml.iwi.meng.leantodo.controller.ToDoController;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ProjectTask;
import ch.zhaw.sml.iwi.meng.leantodo.entity.SingleTask;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ToDo;

@RestController
@CrossOrigin
public class TaskEndpoint {

    @Autowired
    private TaskController taskController;

    @RequestMapping(path = "/api/task", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<Task> task(Principal principal) {
        return  taskController.listAllTasks(principal.getName());        
    }

<<<<<<< HEAD:backend/src/main/java/ch/zhaw/sml/iwi/meng/leantodo/boundary/ToDoEndpoint.java
    /* @RequestMapping(path = "/api/project/{id}/task", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<ProjectTask> getProjectTasks(Principal principal) {
        return  toDoController.listAllToDos(principal.getName());        
    } */

    @RequestMapping(path = "/api/projecttask", method = RequestMethod.POST)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void addProjectTask(@RequestBody ProjectTask projectTask, Principal principal) {
        toDoController.persistToDo(projectTask, principal.getName());
    }
    
    @RequestMapping(path = "/api/singletask", method = RequestMethod.POST)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void addSingleTask(@RequestBody SingleTask singleTask, Principal principal) {
        toDoController.persistToDo(singleTask, principal.getName());
    }

    @RequestMapping(path = "/api/projecttask/{id}", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void updateProjectTask(@PathVariable("id") Long id,@RequestBody ProjectTask projectTask, Principal principal) {
        toDoController.updateToDo(projectTask, principal.getName());
    }

    @RequestMapping(path = "/api/singletask/{id}", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void updateSingleTask(@PathVariable("id") Long id,@RequestBody SingleTask singleTask, Principal principal) {
        toDoController.updateToDo(singleTask, principal.getName());
=======
    @RequestMapping(path = "/api/task", method = RequestMethod.POST)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void addTask(@RequestBody Task newTask, Principal principal) {
        taskController.persistTask(newTask, principal.getName());
    }
    
    @RequestMapping(path = "/api/task", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void updateTask(@RequestBody Task task, Principal principal) {
        taskController.updateTask(task, principal.getName());
>>>>>>> 513b507e52d3babac762efb31a42ed41fe9a0d56:backend/src/main/java/ch/zhaw/sml/iwi/meng/leantodo/boundary/TaskEndpoint.java
    }
}