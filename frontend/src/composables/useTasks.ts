import { getAllTasks, addNewSingleTask, addNewProjectTask, getTaskById, getAllTasksByProject, updateSingleTask, updateProjectTask } from '@/api/tasks';
import { Task } from '@/model/task';
import { SingleTask } from '@/model/singleTask';
import { ProjectTask } from '@/model/projectTask';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export function useTasks() {
    
    const specificTask = ref<Task>();

    const tasks = ref<Task[]>([]);

    const newTask = ref<Task>({});

    const newProjectTask = ref<ProjectTask>({});

    const newSingleTask = ref<SingleTask>({});

    const getTasks = async () => {
        try {
            tasks.value = await getAllTasks();
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const getTasksByProject = async (id: number) => {
        try {
            tasks.value = await getAllTasksByProject(id);
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const getSpecificTaskById = async (id: number) => {
        try {
            specificTask.value = await getTaskById(id);
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }


    const finishSingleTask = async (id: number) => {
        try {
            newSingleTask.value.done = true;
            newSingleTask.value.type = "SingleTask";
            updateSingleTask(newSingleTask.value, id);
        } catch (error) {
            return(error);
            console.log(error); // FIXME: Errorhandling
        }
    }

    const finishProjectTask = async (id: number) => {
        try {
            newProjectTask.value.done = true;
            newProjectTask.value.type = "ProjectTask";
            updateProjectTask(newProjectTask.value, id);
        } catch (error) {
            return(error);
            console.log(error); // FIXME: Errorhandling
        }
    }

    /* const archiveTask = async (id: number) => {
        try {
            newTask.value.archived = true;
            await updateTask(newTask.value, id);
            getTasks();
        } catch (error) {
            return(error);
            console.log(error); // FIXME: Errorhandling
        }
    }  */

   
    

    const addSingleTask = async () => {
        try {
            // add the new todo and update the list of all todos afterwards
            await addNewSingleTask(newSingleTask.value);
            getTasks();
        } catch (error) {
            return(error);
            console.log(error); // FIXME: Errorhandling
        }
    }

    const addProjectTask = async () => {
        try {
            // add the new todo and update the list of all todos afterwards
            await addNewProjectTask(newProjectTask.value);
            getTasks();
        } catch (error) {
            return(error);
            console.log(error); // FIXME: Errorhandling
        }
    }

    onMounted(getTasks);

    return {
        newTask,
        newProjectTask,
        newSingleTask,
        tasks,
        specificTask,
        getTasks,
        getTasksByProject,
        finishSingleTask,
        finishProjectTask,
        addProjectTask,
        addSingleTask,
        getSpecificTaskById
    }
}

function getTasks() {
    throw new Error('Function not implemented.');
}
