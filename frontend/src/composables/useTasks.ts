import { getAllTasks, updateTask, addNewSingleTask, addNewProjectTask } from '@/api/tasks';
import { Task } from '@/model/task';
import { SingleTask } from '@/model/singleTask';
import { ProjectTask } from '@/model/projectTask';
import { onMounted, ref } from 'vue';

export function useTasks() {

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

    const finishTask = async (task: Task) => {
        try {
            task.done = true;
            updateTask(task);
        } catch (error) {
            return(error);
            console.log(error); // FIXME: Errorhandling
        }
    }

    const archiveTask = async (task: Task) => {
        try {
            task.archived = true;
            await updateTask(task);
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
        getTasks,
        finishTask,
        archiveTask,
        addProjectTask,
        addSingleTask
    }
}

function getTasks() {
    throw new Error('Function not implemented.');
}
