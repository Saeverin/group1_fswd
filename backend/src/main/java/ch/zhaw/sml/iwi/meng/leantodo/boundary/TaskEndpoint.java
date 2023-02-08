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

import ch.zhaw.sml.iwi.meng.leantodo.controller.TaskController;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ProjectTask;
import ch.zhaw.sml.iwi.meng.leantodo.entity.SingleTask;
import ch.zhaw.sml.iwi.meng.leantodo.entity.Task;

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

    /* @RequestMapping(path = "/api/project/{id}/task", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<ProjectTask> getProjectTasks(Principal principal) {
        return  toDoController.listAllToDos(principal.getName());        
    } */

    @RequestMapping(path = "/api/projecttask", method = RequestMethod.POST)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void addProjectTask(@RequestBody ProjectTask projectTask, Principal principal) {
        taskController.persistProjectTask(projectTask, "user");
    }
    
    @RequestMapping(path = "/api/singletask", method = RequestMethod.POST)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void addSingleTask(@RequestBody SingleTask singleTask, Principal principal) {
        taskController.persistTask(singleTask, principal.getName());
    }

    @RequestMapping(path = "/api/projecttask/{id}", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void updateProjectTask(@PathVariable("id") Long id,@RequestBody ProjectTask projectTask, Principal principal) {
        taskController.updateTask(projectTask, principal.getName());
    }

    @RequestMapping(path = "/api/singletask/{id}", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void updateSingleTask(@PathVariable("id") Long id,@RequestBody SingleTask singleTask, Principal principal) {
        taskController.updateTask(singleTask, principal.getName());
    }
}