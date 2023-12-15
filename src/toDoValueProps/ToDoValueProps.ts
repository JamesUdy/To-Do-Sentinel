interface FileObject {
  fileName: string;
  fileUrl: string;
  id: number;
}

export interface ToDoValueProps {
  taskTitle: string;
  taskDescription: string;
  taskPriority: string;
  taskProgress: string;
  taskFileUpload: FileList;
  taskDueDate: string; 
};
