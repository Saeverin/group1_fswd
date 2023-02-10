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