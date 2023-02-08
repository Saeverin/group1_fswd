import { getAllTasks, updateTask, addNewTask } from '@/api/tasks';
import { Task } from '@/model/task';
import { onMounted, ref } from 'vue';

export function useTasks() {

    const tasks = ref<Task[]>([]);

    const newTask = ref<Task>({});

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
            console.log(error); // FIXME: Errorhandling
        }
    }

    const archiveTask = async (task: Task) => {
        try {
            task.archived = true;
            await updateTask(task);
            getTasks();
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    const addTask = async () => {
        try {
            // add the new todo and update the list of all todos afterwards
            await addNewTask(newTask.value);
            getTasks();
        } catch (error) {
            console.log(error); // FIXME: Errorhandling
        }
    }

    onMounted(getTasks);

    return {
        newTask,
        tasks,
        getTasks,
        addTask,
        finishTask,
        archiveTask
    }
}

function getTasks() {
    throw new Error('Function not implemented.');
}
