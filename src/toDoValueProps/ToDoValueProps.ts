interface FileObject {
  fileName: string;
  fileUrl: string;
  id: number;
};

export interface ToDoValueProps {
  taskTitle: string;
  taskDescription: string;
  taskPriority: string;
  taskProgress: string;
  taskFileDetails: FileObject[];
  taskFileUpload: FileList;
  taskDueDate: string; 
};
