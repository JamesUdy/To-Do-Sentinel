export type listDataProps = {
    id: number;
    link: string;
    name?: string;
};

export const gettingStarted: listDataProps[] = [
    {
        id: 1,
        link: 'heroContent',
        name: 'System Introduction'
    },
    {
        id: 2,
        link: 'formContent',
        name: 'Form Demonstration'
    },
    {
        id: 3,
        link: 'repositoryContent',
        name: 'Repository Overview'
    },
    {
        id: 4,
        link: 'customContent',
        name: 'Customization Guide'
    },
    {
        id: 5,
        link: 'extraFeaturesContent',
        name: 'Feature Showcase' 
    },
];

export const pages: listDataProps[] = [
    {
        id: 1,
        link: '/',
        name: 'Home',
    },
    {
        id: 3,
        link: '/todo-form',
        name: 'Task Form',
    },
    {
        id: 4,
        link: '/task-repo',
        name: 'Task Repository',
    },
    {
        id: 5,
        link: '/credits',
        name: 'Credits',
    },
];

export const contact: listDataProps[] = [
    {
        id: 1,
        link: 'https://github.com/JamesUdy',
        name: 'GitHub Profile',
    },
    {
        id: 2,
        link: 'https://www.linkedin.com/inl/udhaya-prakash-m-835b83226/',
        name: 'LinkedIn Profile',
    },
    {
        id: 3,
        link: 'mailto:udayamvad@gmail.com',
        name: 'Email (Gmail)',
    },
];
