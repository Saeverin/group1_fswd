import axios from 'axios';
import { API_ROOT } from "@/config/development";
import { Project } from '@/model/project';
import {getAllProjectsFail, getProjectByIdFail, deleteProjectByIdSuccess, deleteProjectByIdFail, changeProjectByIdSuccess, changeProjectByIdFail, addNewProjectSuccess, addNewProjectFail, updateProjectSuccess, updateProjectFail} from '@/composables/useToast';

export async function getAllProJects(): Promise<Project[]>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/project', config);
        return response.data;
    } catch (error) {
        getAllProjectsFail();
        return <any>error;   
    }
}

export async function getAllArchivedProjects(): Promise<Project[]>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/archive/project', config);
        return response.data;
    } catch (error) {
        getAllProjectsFail();
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
        getProjectByIdFail();
        return <any>error;   
    }
}

export async function deleteProjectById(pathId: number): Promise<any>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.delete(API_ROOT + '/api/project/'+pathId, config);
        deleteProjectByIdSuccess();
    } catch (error) {
        deleteProjectByIdFail();
        return <any>error;   
    }
}

export async function changeProjectById(newProject: Project, pathId: number): Promise<any>   { 
    newProject.deadline = newProject.deadline?.substring(0,19)
    const config = {        
        withCredentials: true
    }
    try {
        console.log(newProject)
        const response = await axios.put(API_ROOT + '/api/project/'+pathId, newProject, config);
        changeProjectByIdSuccess();
    } catch (error) {
        changeProjectByIdFail();
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
        addNewProjectSuccess();
        return response.data;
    } catch (error) {
        addNewProjectFail();
        return error;   
    }
}

export async function updateProJect(proJect: Project): Promise<any>   {
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.put(API_ROOT + '/api/projects', proJect, config);
        updateProjectSuccess();
        return response.data;
    } catch (error) {
        updateProjectFail();
        return error;   
    }
}