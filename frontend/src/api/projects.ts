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

export async function addNewProJect(newProJect: Project): Promise<any>   {
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.post(API_ROOT + '/api/projects', newProJect, config);
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