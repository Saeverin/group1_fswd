import axios from 'axios';
import { API_ROOT } from "@/config/development";
import { Project } from '@/model/project';

export async function getAllProJects(): Promise<Project[]>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/project', config);
        return response.data;
    } catch (error) {
        return <any>error;   
    }
}

export async function getProjectById(pathId: number): Promise<Project>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/project/'+pathId, config);
        return response.data;
    } catch (error) {
        return <any>error;   
    }
}

export async function deleteProjectById(pathId: number): Promise<any>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.delete(API_ROOT + '/api/project/'+pathId, config);
    } catch (error) {
        return <any>error;   
    }
}

export async function addNewProJect(newProject: Project): Promise<any>   {
    newProject.deadline = newProject.deadline?.substring(0,19)

    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.post(API_ROOT + '/api/project', newProject, config);
        return response.data;
    } catch (error) {
        return error;   
    }
}

export async function updateProJect(proJect: Project): Promise<any>   {
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.put(API_ROOT + '/api/projects', proJect, config);
        return response.data;
    } catch (error) {
        return error;   
    }
}