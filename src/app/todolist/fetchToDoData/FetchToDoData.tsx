import { useEffect, useState } from 'react';
import { db } from '@/firebaseAuth/FirebaseAuth';
import useAuth from '@/app/hooks/useAuth';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';

export interface ListProps {
  id: string;
  userId: string;
  taskTitle: string;
  taskDescription: string;
  taskPriority: string;
  taskProgress: string;
  taskDueDate: string; 
  createdAt: string;
};

const FetchToDoData = () => {
  const [toDoList, setToDoList] = useState<ListProps[]>([]);
  const { user } = useAuth();

  const ListData = () => {
    if(!user) {
      setToDoList([]);
      return;
    };

    const queryList = query(collection(db, "toDo"), where("userId", "==", user.uid), orderBy("createdAt", "desc"));

    onSnapshot(queryList, (querySnapshot) => {
      let list: ListProps[] = [];

      querySnapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() } as ListProps);
      });

      setToDoList(list);
    });
  };

  useEffect(() => {
    ListData();    
  }, [user]);

  return toDoList;
}

export default FetchToDoData;
