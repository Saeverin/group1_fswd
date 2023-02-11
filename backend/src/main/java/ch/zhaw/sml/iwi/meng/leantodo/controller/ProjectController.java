package ch.zhaw.sml.iwi.meng.leantodo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.leantodo.entity.Project;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ProjectRepository;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ProjectTask;
import ch.zhaw.sml.iwi.meng.leantodo.entity.TaskRepository;

@Component
public class ProjectController {


    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private TaskRepository taskRepository;

    public List<Project> listAllProjects(String loginName) {
        return projectRepository.findAllButArchivedByOwner(loginName);
    }

    public List<Project> listAllArchivedProjects(String loginName) {
        return projectRepository.findAllArchivedByOwner(loginName);
    }

    public Project getProjectById(Long id) {
        return projectRepository.findById(id).get();
    }

    public void deleteProjectById(Long id) {
        Project project = projectRepository.findById(id).get();
        taskRepository.deleteProjectTaskByProject(project);
        projectRepository.deleteById(id);
    }

    public void persistProject(Project newProject, String owner) {
        newProject.setId(null);
        // We only create empty projects
        newProject.setOwner(owner);
        projectRepository.save(newProject);
    }

    public void addProjectTask(Long projectId, ProjectTask projectTask, String owner) {
        Project project = projectRepository.getOne(projectId);
        if(project == null || !project.getOwner().equals(owner)) {
            return;
        }  
        // Ensure that JPA creates a new entity
        projectTask.setId(null);
        projectTask.setOwner(owner);
        project.getProjectTasks().add(projectTask);
        projectRepository.save(project);
    }

    public void updateProjectById(Project project, Long id){
        Project oldProject = projectRepository.findById(id).get();

        oldProject.setTitle(project.getTitle());

        if(project.getDeadline() != null) {
            oldProject.setDeadline(project.getDeadline());
        }

        projectRepository.save(oldProject);
    }



    /* public List<ProjectTask> listTasksByProject(Long projectId, String loginName) {
        return projectRepository.findAllButArchivedByOwner(loginName);
    } */

    /* public static void updateProject(Project proJect, String name) {
    } */
    

}