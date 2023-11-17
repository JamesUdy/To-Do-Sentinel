import React, { useEffect, useState } from 'react';
import { db } from '@/firebaseAuth/FirebaseAuth';
import useAuth from '@/app/hooks/useAuth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

interface ListProps {
  id: string;
  userId: string;
  taskTitle: string;
  taskDescription: string;
  taskPriority: string;
  taskProgress: string;
  taskDueDate: string;
};

const TaskList = () => {
  const [toDoList, setToDoList] = useState<React.SetStateAction<ListProps[]>>([]);
  const { user } = useAuth();

  const ListData = () => {
    if(!user) {
      setToDoList([]);
      return;
    };

    const queryList = query(collection(db, "toDo"), where("userId", "==", user.uid));

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

  useEffect(() => {
    console.log(toDoList);
  }, [toDoList]);

  return (
    <div>TaskList</div>
  );
};

export default TaskList;
