import { db, storage } from "@/firebaseAuth/FirebaseAuth";
import { collection, addDoc, updateDoc, doc, deleteDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { ToDoValueProps } from "@/toDoValueProps/ToDoValueProps";
import Constants from "@/constants/Constants";

interface AddToDoProps extends ToDoValueProps {
    userId: string;
};

interface UpdateToDoProps extends ToDoValueProps {
    docId: string;
    userId: string;
};

interface DeleteToDoProps {
    docId: string;
};

const ToDoMethodComponent = () => {
    const { user } = Constants();
   
    const addToDo = async ({ userId, taskTitle, taskDescription, taskPriority, taskProgress, taskFileDetails, taskFileUpload, taskDueDate }: AddToDoProps) => {
        try {
            const fileDetails = await Promise.all(Array.from(taskFileUpload).map(async (file, index) => {
                const storageRef = ref(storage, `toDoFiles/${userId}/${file.name}`);
            
                try {
                    await uploadBytes(storageRef, file);
                    const url = await getDownloadURL(storageRef);
                    return { fileName: file.name, fileUrl: url, id: index };
                } catch (error) {
                    console.error('Error getting file URL:', error);
                    throw error; 
                }
            }));
            
            await addDoc(collection(db, 'toDo'), {
                userId: userId,
                taskTitle: taskTitle,
                taskDescription: taskDescription,
                taskPriority: taskPriority,
                taskProgress: taskProgress,
                taskFileDetails: fileDetails,
                taskDueDate: taskDueDate,
                createdAt: new Date().toLocaleString(),
            });
        } catch (err) {
            console.error(err);
        }
    };

    const updateToDo = async ({docId, userId, taskTitle, taskDescription, taskPriority, taskProgress, taskFileUpload, taskDueDate}: UpdateToDoProps) => {
        try {
            const fileDetails = await Promise.all(Array.from(taskFileUpload).map(async (file, index) => {
                const storageRef = ref(storage, `toDoFiles/${docId}/${file.name}`);
            
                try {
                    await uploadBytes(storageRef, file);
                    const url = await getDownloadURL(storageRef);
                    return { fileName: file.name, fileUrl: url, id: index };
                } catch (error) {
                    console.error('Error getting file URL:', error);
                    throw error; 
                }
            }));
            
            const todoRef = doc(db, "toDo", docId);

            const docSnapshot = await getDoc(todoRef);
            if (docSnapshot.exists()) {
                const { taskFileDetails } = docSnapshot.data();
    
                const storageRef = ref(storage, `toDoFiles/${docId}/`);
                taskFileDetails.forEach(async (fileDetails: { fileUrl: string }) => {
                    const fileRef = ref(storage, fileDetails.fileUrl);
                    await deleteObject(fileRef);
                });
            };

            await updateDoc(todoRef, {
                taskTitle,
                taskDescription,
                taskPriority,
                taskProgress,
                taskFileDetails: fileDetails,
                taskDueDate,
            });
    
        } catch (err) {
            console.log(err);
        }
    };
    

    const deleteToDo = async ({ docId }: DeleteToDoProps) => {
        try {
            const todoRef = doc(db, "toDo", docId);
    
            const docSnapshot = await getDoc(todoRef);
            if (docSnapshot.exists()) {
                const { taskFileDetails } = docSnapshot.data();
    
                const storageRef = ref(storage, `toDoFiles/${user?.uid}/`);
                taskFileDetails.forEach(async (fileDetails: { fileUrl: string }) => {
                    const fileRef = ref(storage, fileDetails.fileUrl);
                    await deleteObject(fileRef);
                });
            }
    
            await deleteDoc(todoRef);
        } catch (err) {
            console.log(err);
        }
    };
    

    return { addToDo, updateToDo, deleteToDo };
};

export default ToDoMethodComponent;
