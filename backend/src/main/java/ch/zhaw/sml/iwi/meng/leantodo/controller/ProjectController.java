package ch.zhaw.sml.iwi.meng.leantodo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.leantodo.entity.Project;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ProjectRepository;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ProjectTask;

@Component
public class ProjectController {


    @Autowired
    private ProjectRepository projectRepository;



    public List<Project> listAllProjects(String loginName) {
        return projectRepository.findByOwner(loginName);
    }

    public void persistProject(Project newProject, String owner) {
        newProject.setId(null);
        // We only create empty projects
        newProject.getProjectTasks().clear();
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

    /* public List<ProjectTask> listTasksByProject(Long projectId, String loginName) {
        return projectRepository.findAllButArchivedByOwner(loginName);
    } */

    public static void updateProject(Project proJect, String name) {
    }

    public void addProject(Long projectId, ProjectTask projectTask, String name) {
    }
    

}