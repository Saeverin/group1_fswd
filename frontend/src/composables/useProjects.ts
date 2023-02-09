import { getAllProJects, updateProJect, addNewProJect } from '@/api/projects';
import  { Project } from '../model/project';
import { onMounted, ref } from 'vue';

export function useProjects() {

    const projects = ref<Project[]>([]);

    const newProject = ref<Project>({});

    const getProjects = async () => {
        try {
            projects.value = await getAllProJects();
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const finishProject = async (project: Project) => {
        try {
            project.done = true;
            updateProJect(project);
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const archiveProject = async (project: Project) => {
        try {
            project.archived = true;
            await updateProJect(project);
            getProjects();
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const addProject = async () => {
        try {
            // add the new todo and update the list of all todos afterwards
            await addNewProJect(newProject.value);
            getProjects();
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    onMounted(getProjects);

    return {
        newProject,
        projects,
        getProjects,
        addProject,
        finishProject,
        archiveProject
    }
}