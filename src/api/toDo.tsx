import { db } from "@/firebaseAuth/FirebaseAuth";
import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

interface AddToDoProps {
    userId: string;
    taskTitle: string;
    taskDescription: string;
    taskPriority: string;
    taskProgress: string;
    taskDueDate: string;
};

interface UpdateToDoProps {
    docId: string;
    taskTitle: string;
    taskDescription: string;
    taskPriority: string;
    taskProgress: string;
    taskDueDate: string;
};

interface DeleteToDoProps {
    docId: string;
};

const addToDo = async ({userId, taskTitle, taskDescription, taskPriority, taskProgress, taskDueDate }: AddToDoProps) => {
    try {
        await addDoc(collection(db, 'toDo'), {
            userId: userId,
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskPriority: taskPriority,
            taskProgress: taskProgress,
            taskDueDate: taskDueDate,
            createdAt: new Date().toLocaleString(),
        });
    } catch (err) {
        console.error(err);
    };
};

const updateToDo = async ({docId, taskTitle, taskDescription, taskPriority, taskProgress, taskDueDate}: UpdateToDoProps) => {
    try {
        const todoRef = doc(db, "toDo", docId);
        await updateDoc(todoRef, {
            taskTitle,
            taskDescription,
            taskPriority,
            taskProgress,
            taskDueDate,
        });
    } catch (err) {
        console.log(err);
    };
};

const deleteToDo = async ({docId}: DeleteToDoProps) => {
    try {
        const todoRef = doc(db, "toDo", docId);
        await deleteDoc(todoRef);
    } catch (err) {
        console.log(err);
    };
};

export { addToDo, updateToDo, deleteToDo };
