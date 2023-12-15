import { db, storage } from "@/firebaseAuth/FirebaseAuth";
import { collection, addDoc, updateDoc, doc, deleteDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { useEffect, useState } from "react";
import useAuth from "@/app/hooks/useAuth";

interface FileObject {
    fileName: string;
    fileUrl: string;
    id: number;
}

interface AddToDoProps {
    userId: string;
    taskTitle: string;
    taskDescription: string;
    taskPriority: string;
    taskProgress: string;
    taskFileDetails: FileObject[];
    taskFileUpload: FileList;
    taskDueDate: string;
};

interface UpdateToDoProps {
    docId: string;
    taskTitle: string;
    taskDescription: string;
    taskPriority: string;
    taskProgress: string;
    taskFileUpload: FileList;
    taskDueDate: string;
};

interface DeleteToDoProps {
    docId: string;
};

const ToDoMethodComponent = () => {

    const { user } = useAuth();
    
    // const [fileUrl, setFileUrl] = useState<{id: number, fileName: string, fileUrl: string}[]>([]);

    // useEffect(() => {
    //     // Function to get URLs of previous files
    //     const getPreviousFileUrls = async (userId: string) => {
    //         const filesRef = ref(storage, `toDoFiles/${userId}/`);
            
    //         try {
    //             const filesList = await listAll(filesRef);
    //             const previousFileUrls = await Promise.all(filesList.items.map(async (file) => {
    //                 const url = await getDownloadURL(file);
    //                 return url;
    //             }));
    //             setFileUrl(previousFileUrls);
    //         } catch (error) {
    //             console.error('Error getting previous file URLs:', error);
    //             // Handle the error as needed
    //         }
    //     };

    //     // Replace 'YOUR_USER_ID' with the actual user ID
    //     user?.uid && getPreviousFileUrls(user.uid);
    // }, []);

    const addToDo = async ({ userId, taskTitle, taskDescription, taskPriority, taskProgress, taskFileDetails, taskFileUpload, taskDueDate }: AddToDoProps) => {
        try {
            const fielDetails = await Promise.all(Array.from(taskFileUpload).map(async (file, index) => {
                const storageRef = ref(storage, `toDoFiles/${userId}/${file.name}`);
            
                try {
                    await uploadBytes(storageRef, file);
                    const url = await getDownloadURL(storageRef);
                    return { fileName: file.name, fileUrl: url, id: index };
                } catch (error) {
                    console.error('Error getting file URL:', error);
                    throw error; // Rethrow the error to indicate failure
                }
            }));
            
            // setFileUrl(fielDetails);

            // Store file metadata in Firestore
            await addDoc(collection(db, 'toDo'), {
                userId: userId,
                taskTitle: taskTitle,
                taskDescription: taskDescription,
                taskPriority: taskPriority,
                taskProgress: taskProgress,
                taskFileDetails: fielDetails,
                taskDueDate: taskDueDate,
                createdAt: new Date().toLocaleString(),
            });
        } catch (err) {
            console.error(err);
        }
    };

    const updateToDo = async ({docId, taskTitle, taskDescription, taskPriority, taskProgress, taskFileUpload, taskDueDate}: UpdateToDoProps) => {
        try {
            const todoRef = doc(db, "toDo", docId);
            await updateDoc(todoRef, {
                taskTitle,
                taskDescription,
                taskPriority,
                taskProgress,
                taskFileUpload,
                taskDueDate,
            });
        } catch (err) {
            console.log(err);
        };
    };

    const deleteToDo = async ({ docId }: DeleteToDoProps) => {
        try {
            const todoRef = doc(db, "toDo", docId);
    
            // Get the taskFileUpload array from the document
            const docSnapshot = await getDoc(todoRef);
            if (docSnapshot.exists()) {
                const { taskFileDetails } = docSnapshot.data();
    
                // Delete each file in storage
                const storageRef = ref(storage, `toDoFiles/${user?.uid}/`);
                taskFileDetails.forEach(async (fileUrl: string) => {
                    const fileRef = ref(storage, fileUrl);
                    await deleteObject(fileRef);
                });
            }
    
            // Delete the document in Firestore
            await deleteDoc(todoRef);
        } catch (err) {
            console.log(err);
        }
    };
    

    return { addToDo, updateToDo, deleteToDo };
};

// const addToDo = async ({userId, taskTitle, taskDescription, taskPriority, taskProgress, taskFileUpload, taskDueDate }: AddToDoProps) => {
//     try {
//         await addDoc(collection(db, 'toDo'), {
//             userId: userId,
//             taskTitle: taskTitle,
//             taskDescription: taskDescription,
//             taskPriority: taskPriority,
//             taskProgress: taskProgress,
//             taskFileUpload: taskFileUpload,
//             taskDueDate: taskDueDate,
//             createdAt: new Date().toLocaleString(),
//         });
//     } catch (err) {
//         console.error(err);
//     };
// };


// export ;

export default ToDoMethodComponent;
