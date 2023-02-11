import { getAllProJects, updateProJect, addNewProJect, getProjectById, deleteProjectById, changeProjectById, getAllArchivedProjects } from '@/api/projects';
import {getAllProjectsFail, getProjectByIdFail, deleteProjectByIdSuccess, deleteProjectByIdFail, changeProjectByIdSuccess, changeProjectByIdFail, addNewProjectSuccess, addNewProjectFail, updateProjectSuccess, updateProjectFail} from '@/composables/useToast';
import  { Project } from '../model/project';
import { onMounted, ref } from 'vue';

export function useProjects() {

    const specificProject = ref<Project>();

    const projects = ref<Project[]>([]);

    const archivedProjects = ref<Project[]>([]);

    const newProject = ref<Project>({});

    const getProjects = async () => {
        try {
            projects.value = await getAllProJects();
        } catch (error) {
            getAllProjectsFail();
            console.log(error);
        }
    }

    const getArchivedProjects = async () => {
        try {
            archivedProjects.value = await getAllArchivedProjects();
        } catch (error) {
            getAllProjectsFail();
            console.log(error);
        }
    }

    const getSpecificProjectById = async (id: number) => {
        try {
            specificProject.value = await getProjectById(id);
        } catch (error) {
            getProjectByIdFail();
            console.log(error);
        }
    }

    const deleteProject = async (id:number) => {
        try {
            await deleteProjectById(id);
            deleteProjectByIdSuccess();
        } catch (error) {
            deleteProjectByIdFail();
            console.log(error);
        }
    }

    const changeProject = async (id:number) => {
        try {
            await changeProjectById(newProject.value, id);
            changeProjectByIdSuccess();
        } catch (error) {
            changeProjectByIdFail();
            console.log(error);
        }
    }

    const finishProject = async (project: Project) => {
        try {
            project.done = true;
            updateProJect(project);
            updateProjectSuccess();
        } catch (error) {
            updateProjectFail();
            console.log(error);
        }
    }

    const archiveProject = async (project: Project) => {
        try {
            project.archived = true;
            await updateProJect(project);
            updateProjectSuccess();
            getProjects();
        } catch (error) {
            updateProjectFail();
            console.log(error);
        }
    }

    const addProject = async () => {
        try {
            // add the new todo and update the list of all todos afterwards
            await addNewProJect(newProject.value);
            addNewProjectSuccess();
            getProjects();
        } catch (error) {
            addNewProjectFail();
            console.log(error);
        }
    }

    onMounted(getProjects);

    return {
        newProject,
        projects,
        archivedProjects,
        specificProject,
        getProjects,
        getArchivedProjects,
        getSpecificProjectById,
        deleteProject,
        addProject,
        finishProject,
        archiveProject,
        changeProject
    }
}