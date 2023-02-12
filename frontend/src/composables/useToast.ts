import { toastController } from '@ionic/vue';

export async function getAllTasksFail(){
        const toastGetFail = await toastController.create({
        message: 'Could not load all tasks',
        duration: 1500,
        position: 'middle',
        color: 'danger'
    })
    setTimeout(()=> toastGetFail.present(), 1500);
}

export async function getAllTasksByProjectFail(){
    const toastGetFail = await toastController.create({
        message: 'Could not load Tasks from this Project',
        duration: 1500,
        position: 'middle',
        color: 'danger'
    })
    setTimeout(()=> toastGetFail.present(), 1500);
} 

    export async function getTaskByIdFail(){
    const toastGetFail = await toastController.create({
        message: 'Could not load Task Details',
        duration: 1500,
        position: 'middle',
        color: 'danger'
    })
    await toastGetFail.present();
} 

export async function addNewSingleTaskSuccess(){
    const toastPostSuccess = await toastController.create({
        message: 'Single Task creation successful',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    toastPostSuccess.present();
}

export async function addNewSingleTaskFail(){
    const toastPostFail = await toastController.create({
        message: 'Single Task creation unsuccessful',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    toastPostFail.present();
}

export async function addNewProjectTaskSuccess(){
    const toastPostSuccess = await toastController.create({
        message: 'Project Task creation successful',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    await toastPostSuccess.present();
}

export async function addNewProjectTaskFail(){
    const toastPostFail = await toastController.create({
        message: 'Project Task creation unsuccessful',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    await toastPostFail.present();
}

export async function updateTaskFail(){
    const toastPutFail = await toastController.create({
        message: 'Could not update task',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    await toastPutFail.present();
}

export async function updateSingleTaskSuccess(){
    const toastPutSuccess = await toastController.create({
        message: 'Single task update successful',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    await toastPutSuccess.present();
}

export async function updateSingleTaskFail(){
    const toastPutFail = await toastController.create({
        message: 'Could not update single task',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    await toastPutFail.present();
}

export async function updateProjectTaskSuccess(){
    const toastPutSuccess = await toastController.create({
        message: 'Project task update successful',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    await toastPutSuccess.present();
}

export async function updateProjectTaskFail(){
    const toastPutFail = await toastController.create({
        message: 'Could not update project task',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    await toastPutFail.present();
}

export async function deleteTaskByIdSuccess(){
    const toastDelSuccess = await toastController.create({
        message: 'Task successfully deleted',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    await toastDelSuccess.present();
}

export async function deleteTaskByIdFail(){
    const toastDelFail = await toastController.create({
        message: 'Task successfully deleted',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
}

export async function archiveSingleTaskSuccess(){
    const toastPutSuccess = await toastController.create({
        message: 'Single task archived',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    await toastPutSuccess.present();
}

export async function archiveSingleTaskFail(){
    const toastPutFail = await toastController.create({
        message: 'Could not archive single task',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    await toastPutFail.present();
}

export async function archiveProjectTaskSuccess(){
    const toastPutSuccess = await toastController.create({
        message: 'Project task archived',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    await toastPutSuccess.present();
}

export async function archiveProjectTaskFail(){
    const toastPutFail = await toastController.create({
        message: 'Could not archive project task',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    await toastPutFail.present();
}
export async function getAllProjectsFail(){
    const toastGetFail = await toastController.create({
    message: 'Could not load all projects',
    duration: 1500,
    position: 'middle',
    color: 'danger'
})
setTimeout(()=> toastGetFail.present(), 1500);
}

export async function getProjectByIdFail(){
    const toastGetFail = await toastController.create({
        message: 'Could not load Project Details',
        duration: 1500,
        position: 'middle',
        color: 'danger'
    })
    await toastGetFail.present();
} 



export async function deleteProjectByIdSuccess(){
    const toastDelSuccess = await toastController.create({
        message: 'Project successfully deleted',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    await toastDelSuccess.present();
}

export async function deleteProjectByIdFail(){
    const toastDelSuccess = await toastController.create({
        message: 'Project could not be deleted',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    await toastDelSuccess.present();
}

export async function changeProjectByIdSuccess(){
    const toastPutSuccess = await toastController.create({
        message: 'Project update successful',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    await toastPutSuccess.present();
}

export async function changeProjectByIdFail(){
    const toastPutFail = await toastController.create({
        message: 'Could not update project',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    await toastPutFail.present();
}

export async function addNewProjectSuccess(){
    const toastPostSuccess = await toastController.create({
        message: 'Project creation successful',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    await toastPostSuccess.present();
}

export async function addNewProjectFail(){
    const toastPostFail = await toastController.create({
        message: 'Project creation unsuccessful',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    await toastPostFail.present();
}

export async function updateProjectSuccess(){
    const toastPutSuccess = await toastController.create({
        message: 'Project update successful',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    await toastPutSuccess.present();
}

export async function updateProjectFail(){
    const toastPutFail = await toastController.create({
        message: 'Could not update project',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    await toastPutFail.present();
}

export async function archiveProjectSuccess(){
    const toastPutSuccess = await toastController.create({
        message: 'Project archived',
        duration: 2000,
        position: 'middle',
        color: 'success'
    })
    await toastPutSuccess.present();
}

export async function archiveProjectFail(){
    const toastPutSuccess = await toastController.create({
        message: 'Could not archive project',
        duration: 2000,
        position: 'middle',
        color: 'danger'
    })
    await toastPutSuccess.present();
}
