import { getAllTasks, addNewSingleTask, addNewProjectTask, getTaskById, getAllTasksByProject, updateSingleTask, updateProjectTask, archiveSingleTask, archiveProjectTask, changeProjectTask, changeSingleTask, deleteTaskById, getAllArchivedTasks } from '@/api/tasks';
import { Task } from '@/model/task';
import { SingleTask } from '@/model/singleTask';
import { ProjectTask } from '@/model/projectTask';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getAllTasksFail, getAllTasksByProjectFail, getTaskByIdFail, addNewSingleTaskSuccess, addNewSingleTaskFail, addNewProjectTaskSuccess, addNewProjectTaskFail, updateTaskFail, updateSingleTaskSuccess, updateSingleTaskFail, updateProjectTaskSuccess, updateProjectTaskFail, deleteTaskByIdSuccess, deleteTaskByIdFail, archiveSingleTaskSuccess, archiveSingleTaskFail, archiveProjectTaskSuccess, archiveProjectTaskFail } from '@/composables/useToast';


export function useTasks() {
    
    const specificTask = ref<Task>();

    const tasks = ref<Task[]>([]);

    const archivedTasks = ref<Task[]>([]);

    const newTask = ref<Task>({});

    const newProjectTask = ref<ProjectTask>({});

    const newSingleTask = ref<SingleTask>({});

    const getTasks = async () => {
        try {
            tasks.value = await getAllTasks();
        } catch (error) {
            getAllTasksFail();
            console.log(error);
        }
    }

    const getArchivedTasks = async () => {
        try {
            archivedTasks.value = await getAllArchivedTasks();
        } catch (error) {
            getAllTasksFail();
            console.log(error);
        }
    }

    const getTasksByProject = async (id: number) => {
        try {
            tasks.value = await getAllTasksByProject(id);
        } catch (error) {
            getAllTasksByProjectFail();
            console.log(error);
        }
    }

    const getSpecificTaskById = async (id: number) => {
        try {
            specificTask.value = await getTaskById(id);
        } catch (error) {
            getTaskByIdFail();
            console.log(error);
        }
    }


    const finishSingleTask = async (id: number) => {
        try {
            newSingleTask.value.done = true;
            newSingleTask.value.type = "SingleTask";
            updateSingleTask(newSingleTask.value, id).then(async () => {
                try {
                    specificTask.value = await getTaskById(id);
                } catch {
                    console.log("error")
                }
                
            });
            updateSingleTaskSuccess();
        } catch (error) {
            updateSingleTaskFail();
            console.log(error);
            return(error);
        }
    }

    const finishProjectTask = async (id: number) => {
        try {
            newProjectTask.value.done = true;
            newProjectTask.value.type = "ProjectTask";
            updateProjectTask(newProjectTask.value, id).then(async () => {
                try {
                    specificTask.value = await getTaskById(id);
                } catch {
                    console.log("error")
                }
                
            });
            updateProjectTaskSuccess();
        } catch (error) {
            updateProjectTaskFail();
            console.log(error);
            return(error);
        }
    }

    const archiveSingleTask = async (id: number) => {
        try {
            newSingleTask.value.archived = true;
            newSingleTask.value.type = "SingleTask";
            updateSingleTask(newSingleTask.value, id);
            updateSingleTaskSuccess();
            getTasks();
        } catch (error) {
            archiveSingleTaskFail();
            console.log(error);
            return(error);
        }
    }

    const archiveProjectTask = async (id: number) => {
        try {
            newProjectTask.value.archived = true;
            newProjectTask.value.type = "ProjectTask";
            await updateProjectTask(newProjectTask.value, id);
            updateProjectTaskSuccess();
            getTasks();
        } catch (error) {
            archiveProjectTaskFail();
            console.log(error);
            return(error);
        }
    }    

   

    const addSingleTask = async () => {
        try {
            // add the new todo and update the list of all todos afterwards
            await addNewSingleTask(newSingleTask.value).then(async () => {
                try {
                    tasks.value = await getAllTasks();
                } catch {
                    console.log("error")
                }
                
            });
            addNewSingleTaskSuccess();
        } catch (error) {
            addNewSingleTaskFail();
            console.log(error);
            return(error);         
        }
    }

    const addProjectTask = async () => {
        try {
            // add the new todo and update the list of all todos afterwards
            await addNewProjectTask(newProjectTask.value);
            addNewProjectTaskSuccess();
            getTasks();
        } catch (error) {
            addNewProjectTaskFail();
            console.log(error);
            return(error);
        }
    }

    const changeTask = async (id: number) => {
        try {
            // add the new todo and update the list of all todos afterwards
            if(newTask.value.type == "SingleTask") {
                newSingleTask.value.type = newTask.value.type;
                newSingleTask.value.title = newTask.value.title;
                newSingleTask.value.category = newTask.value.category;
                newSingleTask.value.text = newTask.value.text;
                changeSingleTask(newSingleTask.value, id);
                updateSingleTaskSuccess();
            } else {
                newProjectTask.value.type =  newTask.value.type;
                newProjectTask.value.title =  newTask.value.title;
                newProjectTask.value.category =  newTask.value.category;
                newProjectTask.value.text =  newTask.value.text;
                changeProjectTask(newProjectTask.value, id);
                updateProjectTaskSuccess();
            }
        } catch (error) {
            updateTaskFail();
            console.log(error);
            return(error);
        }
    }

    const deleteTask = async (id:number) => {
        try{
            await deleteTaskById(id);
            deleteTaskByIdSuccess();
        } catch (error) {
            deleteTaskByIdFail();
            console.log(error);
        }
    }

    onMounted(getTasks);

    return {
        newTask,
        newProjectTask,
        newSingleTask,
        tasks,
        specificTask,
        archivedTasks,
        getTasks,
        getTasksByProject,
        finishSingleTask,
        finishProjectTask,
        archiveSingleTask,
        archiveProjectTask,
        addProjectTask,
        addSingleTask,
        getSpecificTaskById,
        changeTask,
        deleteTask,
        getArchivedTasks
    }
}
