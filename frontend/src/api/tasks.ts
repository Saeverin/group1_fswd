import axios from 'axios';
import { API_ROOT } from "@/config/development";
import { Task } from "@/model/task";
import { ProjectTask } from '@/model/projectTask';
import { SingleTask } from '@/model/singleTask';

export async function getAllTasks(): Promise<Task[]>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/task', config);
        return response.data;
    } catch (error) {
        return <any>error;   
    }
}

export async function getAllTasksByProject(pathId: number): Promise<Task[]>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/project/' + pathId + "/task", config);
        return response.data;
    } catch (error) {
        return <any>error;   
    }
}

export async function getTaskById(pathId: number): Promise<Task>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/task/'+pathId, config);
        return response.data;
    } catch (error) {
        return <any>error;   
    }
}

export async function addNewSingleTask(newTask: SingleTask): Promise<any>   {
    newTask.type = 'SingleTask'
    newTask.endDate = newTask.endDate?.substring(0,19)
    newTask.startDate = newTask.startDate?.substring(0,19)
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.post(API_ROOT + '/api/singletask', newTask, config);
        return response.data;
    } catch (error) {
        return error;   
    }
}

export async function addNewProjectTask(newTask: ProjectTask): Promise<any>   {
    newTask.type = 'ProjectTask'
    newTask.endDate = newTask.endDate?.substring(0,19)
    newTask.startDate = newTask.startDate?.substring(0,19)
    const projectId = newTask.project;
    console.log(projectId)
    console.log(newTask)

    const {project, ...newObj} = newTask;
    console.log(newObj)

    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.post(API_ROOT + '/api/project/'+ projectId, newObj, config);
        return response.data;
    } catch (error) {
        return error;   
    }
}

export async function updateSingleTask(task: SingleTask, taskId: number): Promise<any>   {
    const config = {        
        withCredentials: true
    }
    try {
        console.log(task);
        const response = await axios.put(API_ROOT + '/api/task/'+taskId, task, config);
        return response.data;
    } catch (error) {
        return error;   
    }
} 

export async function updateProjectTask(task: ProjectTask, taskId: number): Promise<any>   {
    const config = {        
        withCredentials: true
    }
    try {
        console.log(task);
        const response = await axios.put(API_ROOT + '/api/task/'+taskId, task, config);
        return response.data;
    } catch (error) {
        return error;   
    }
} 

