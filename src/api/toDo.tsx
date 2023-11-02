import { db } from "@/firebaseAuth/FirebaseAuth";
import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

interface AddToDoProps {
    userId: string;
    task: string;
    description: string;
    status: string;
};

interface ToggleToDoStatusProps {
    docId: string;
    status: string;
};

interface DeleteToDoProps {
    docId: string;
};

const addToDo = async ({userId, task, description, status }: AddToDoProps) => {
    try {
        await addDoc(collection(db, 'toDo'), {
            userId: userId,
            task: task,
            description: description,
            status: status,
            createdAt: new Date().getTime(),
        });
    } catch (err) {
        console.error(err);
    };
};

const toggleToDoStatus = async ({docId, status}: ToggleToDoStatusProps) => {
    try {
        const todoRef = doc(db, "toDo", docId);
        await updateDoc(todoRef, {
            status,
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

export { addToDo, toggleToDoStatus, deleteToDo };
