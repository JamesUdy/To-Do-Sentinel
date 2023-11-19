import { useEffect, useState } from 'react';
import { db } from '@/firebaseAuth/FirebaseAuth';
import useAuth from '@/app/hooks/useAuth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { ToDoValueProps } from '@/toDoValueProps/ToDoValueProps';

export interface ListProps {
  id: string;
  userId: string;
  toDoValue: ToDoValueProps;
};

const FetchToDoData = () => {
  const [toDoList, setToDoList] = useState<ListProps[]>([]);
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

  return toDoList;
}

export default FetchToDoData;
