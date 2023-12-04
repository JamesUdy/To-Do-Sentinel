interface ProgressStatusProps {
    id: number;
    status: string;
};

export const progressStatus: ProgressStatusProps[] = [
    {
        id: 1,
        status: 'Yet to start ⏳',
    },
    {
        id: 2,
        status: 'In Progress 🚧',
    },
    {
        id: 3,
        status: 'Completed ✅',
    },
];
