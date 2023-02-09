import { getAllTasks, updateTask, addNewSingleTask, addNewProjectTask, getTaskById } from '@/api/tasks';
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


    const getSpecificTaskById = async (id: number) => {
        try {
            specificTask.value = await getTaskById(id);
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }


    const finishTask = async (specificTask: Task) => {
        try {
            specificTask.done = true;
            updateTask(specificTask);
        } catch (error) {
            return(error);
            console.log(error); // FIXME: Errorhandling
        }
    }

    const archiveTask = async (specificTask: Task) => {
        try {
            specificTask.archived = true;
            await updateTask(specificTask);
            getTasks();
        } catch (error) {
            return(error);
            console.log(error); // FIXME: Errorhandling
        }
    }

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
        finishTask,
        archiveTask,
        addProjectTask,
        addSingleTask,
        getSpecificTaskById
    }
}

function getTasks() {
    throw new Error('Function not implemented.');
}
