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

    public List<Task> listAllArchivedTasks(String loginName) {
        return taskRepository.findAllArchivedByOwner(loginName);
    }

    public List<Task> listAllTasksByProject(String loginName, Long id) {
        Project project = projectRepository.findById(id).get(); 
        return taskRepository.findAllProjecttasksByProject(project);
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
            Project p = project.get();
            newProjectTask.setProject(project.get());
            p.setDone(false);
            projectRepository.save(p);
        }

        newProjectTask.setOwner(owner);
        taskRepository.save(newProjectTask);
    }

    public void updateTask(Task task, Long id) {
        Task orig = taskRepository.findById(id).get();
        
        if(task.getDone()) {
            orig.setDone(task.getDone());
        }
        if(task.getArchived()) {
            orig.setArchived(task.getArchived());
        }
        if(task.getTitle() != null && task.getTitle() != "") {
            orig.setTitle(task.getTitle());
        }
        if(task.getCategory() != null && task.getCategory() != "") {
            orig.setCategory(task.getCategory());
        }
        if(task.getText() != null && task.getText() != "") {
            orig.setText(task.getText());
        }

        taskRepository.save(orig);
        taskRepository.flush();


        if(task instanceof ProjectTask) {
            System.out.println("It's a Projecttask!");
            ProjectTask projectTask = (ProjectTask) taskRepository.findById(id).get();
            Project project = projectTask.getProject();
            List<Task> allProjectTasks = taskRepository.findAllProjecttasksByProject(project);
            
            Boolean projectStatus = true;
            for (Task t : allProjectTasks) {
                if(!t.getDone()) {
                    projectStatus = false;
                    break;
                }
            }

            if (projectStatus) {
                project.setDone(true);
                projectRepository.save(project);
                projectRepository.flush();
            }
        }
    }

    public void archiveTask(Task task, Long id) {
        Task orig = taskRepository.findById(id).get();
        
        orig.setDone(task.getDone());

        taskRepository.save(orig);
    }

    public void deleteTaskById(Long id) {
        taskRepository.deleteById(id);
    }
    
}