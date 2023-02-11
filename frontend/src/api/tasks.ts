import axios from 'axios';
import { API_ROOT } from "@/config/development";
import { Task } from "@/model/task";
import { ProjectTask } from '@/model/projectTask';
import { SingleTask } from '@/model/singleTask';
import { toastController } from '@ionic/vue';
import { getAllTasksFail, getAllTasksByProjectFail, getTaskByIdFail, addNewSingleTaskSuccess, addNewSingleTaskFail, addNewProjectTaskSuccess, addNewProjectTaskFail, updateSingleTaskSuccess, updateSingleTaskFail, updateProjectTaskSuccess, updateProjectTaskFail, archiveSingleTaskSuccess, archiveSingleTaskFail, archiveProjectTaskSuccess, archiveProjectTaskFail } from '@/composables/useToast';

export async function getAllTasks(): Promise<Task[]> {
    const config = {
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/task', config);
        return response.data;
    } catch (error) {
        getAllTasksFail();
        return <any>error;
    }
}

export async function getAllTasksByProject(pathId: number): Promise<Task[]> {
    const config = {
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/project/' + pathId + "/task", config);
        return response.data;
    } catch (error) {
        getAllTasksByProjectFail();
        return <any>error;
    }
}

export async function getTaskById(pathId: number): Promise<Task> {
    const config = {
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/task/' + pathId, config);
        return response.data;
    } catch (error) {
        getTaskByIdFail();
        return <any>error;
    }
}

export async function deleteTaskById(pathId: number): Promise<any>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.delete(API_ROOT + '/api/task/'+pathId, config);
    } catch (error) {
        return <any>error;   
    }
}

export async function addNewSingleTask(newTask: SingleTask): Promise<any> {
    newTask.type = 'SingleTask'
    newTask.endDate = newTask.endDate?.substring(0, 19)
    newTask.startDate = newTask.startDate?.substring(0, 19)
    const config = {
        withCredentials: true
    }
    try {
        const response = await axios.post(API_ROOT + '/api/singletask', newTask, config);
        addNewSingleTaskSuccess();
        return response.data;
    } catch (error) {
        addNewSingleTaskFail();
        return error;
    }
}

export async function addNewProjectTask(newTask: ProjectTask): Promise<any> {
    newTask.type = 'ProjectTask'
    newTask.endDate = newTask.endDate?.substring(0, 19)
    newTask.startDate = newTask.startDate?.substring(0, 19)
    const projectId = newTask.project;
    console.log(projectId)
    console.log(newTask)

    const { project, ...newObj } = newTask;
    console.log(newObj)

    const config = {
        withCredentials: true
    }
    try {
        const response = await axios.post(API_ROOT + '/api/project/' + projectId, newObj, config);
        addNewProjectTaskSuccess();
        return response.data;
    } catch (error) {
        addNewProjectTaskFail();
        return error;
    }
}

export async function updateSingleTask(task: SingleTask, taskId: number): Promise<any> {
    const config = {
        withCredentials: true
    }
    try {
        console.log(task);
        const response = await axios.put(API_ROOT + '/api/task/' + taskId, task, config);
        updateSingleTaskSuccess();
        return response.data;
    } catch (error) {
        updateSingleTaskFail();
        return error;
    }
}

export async function changeSingleTask(task: SingleTask, taskId: number): Promise<any> {
    const config = {
        withCredentials: true
    }
    try {
        console.log(task);
        const response = await axios.put(API_ROOT + '/api/singletask/' + taskId, task, config);
        updateSingleTaskSuccess();
        return response.data;
    } catch (error) {
        updateSingleTaskFail();
        return error;
    }
}



export async function updateProjectTask(task: ProjectTask, taskId: number): Promise<any> {
    const config = {
        withCredentials: true
    }
    try {
        console.log(task);
        const response = await axios.put(API_ROOT + '/api/task/' + taskId, task, config);
        updateProjectTaskSuccess();
        return response.data;
    } catch (error) {
        updateProjectTaskFail();
        return error;
    }
}

export async function changeProjectTask(task: ProjectTask, taskId: number): Promise<any> {
    const config = {
        withCredentials: true
    }
    try {
        console.log(task);
        const response = await axios.put(API_ROOT + '/api/projecttask/' + taskId, task, config);
        updateProjectTaskSuccess();
        return response.data;
    } catch (error) {
        updateSingleTaskFail();
        return error;
    }
}

export async function archiveSingleTask(task: SingleTask, taskId: number): Promise<any> {
    const config = {
        withCredentials: true
    }
    try {
        console.log(task);
        const response = await axios.put(API_ROOT + '/api/task/' + taskId, task, config);
        archiveSingleTaskSuccess();
        return response.data;
    } catch (error) {
        archiveSingleTaskFail();
        return error;
    }
}

export async function archiveProjectTask(task: ProjectTask, taskId: number): Promise<any> {
    const config = {
        withCredentials: true
    }
    try {
        console.log(task);
        const response = await axios.put(API_ROOT + '/api/task/' + taskId, task, config);
        archiveProjectTaskSuccess();
        return response.data;
    } catch (error) {
        archiveProjectTaskFail();
        return error;
    }
} 