import { useEffect, useState } from 'react';
import { db } from '@/firebaseAuth/FirebaseAuth';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { ToDoValueProps } from '@/toDoValueProps/ToDoValueProps';
import Constants from '@/constants/Constants';

export interface ListProps extends ToDoValueProps {
  id: string;
  userId: string;
  createdAt: string;
};

const FetchToDoData = () => {
  const [toDoList, setToDoList] = useState<ListProps[]>([]);
  const { user } = Constants();

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
