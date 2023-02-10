package ch.zhaw.sml.iwi.meng.leantodo.controller;

import java.util.List;
import java.util.Optional;

import ch.zhaw.sml.iwi.meng.leantodo.entity.Project;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ProjectRepository;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ProjectTask;
import ch.zhaw.sml.iwi.meng.leantodo.entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ch.zhaw.sml.iwi.meng.leantodo.entity.TaskRepository;



@Component
public class TaskController {


    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    public List<Task> listAllTasks(String loginName) {
        return taskRepository.findAllButArchivedByOwner(loginName);
    }

    public List<Task> listAllTasksByProject(String loginName, Long id) {
        Project project = projectRepository.findById(id).get(); 
        return taskRepository.findAllProjecttasksByProject(loginName, project);
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).get();
    }

    public void persistTask(Task newTask, String owner) {
        newTask.setOwner(owner);
        newTask.setId(null);
        taskRepository.save(newTask);
    }

    public void persistProjectTask(ProjectTask newProjectTask, String owner, Long id) {
        Optional<Project> project = projectRepository.findById(id);

        if(project.isPresent()) {
            newProjectTask.setProject(project.get());
        }

        newProjectTask.setOwner(owner);
        taskRepository.save(newProjectTask);
    }

    public void updateTask(Task task, String owner) {
        Task orig = taskRepository.getOne(task.getId());
        // Check if the original ToDo was present and that it belonged to the same owner
        if(orig == null || !orig.getOwner().equals(owner)) {
            return;
        }
        // Ok, let's overwrite the existing toDo.
        task.setOwner(owner); // Set the owner because this property is ignored in the Rest API
        taskRepository.save(task);
    }
    
}