import { CatBooks, CatBusiness, CatFitness, CatHome, CatOther, CatPersonal } from "@/assets";

export const categoryData = [
    {
        id: 0,
        icon: CatPersonal,
        label: 'Personal',
        colors: {
            light: "bg-[#00b4d8]",  
            dark: "bg-[#0077b6]"   
        }
    },
    {
        id: 1,
        icon: CatHome,
        label: 'Home',
        colors: {
            light: "bg-[#2ecc71]",  
            dark: "bg-[#006400]"  
        }
    },
    {
        id: 2,
        icon: CatBooks,
        label: 'Studies',
        colors: {
            light: "bg-[#f48c06]", 
            dark: "bg-[#dc2f02]"    
        }
    },
    {
        id: 3,
        icon: CatBusiness,
        label: 'Business',
        colors: {
            light: "bg-[#10002b]",  
            dark: "bg-[#6200b3]"   
        }
    },
    {
        id: 4,
        icon: CatFitness,
        label: 'Fitness',
        colors: {
            light: "bg-[#e74c3c]",  
            dark: "bg-[#d90429]"    
        }
    },
    {
        id: 5,
        icon: CatOther,
        label: 'Other',
        colors: {
            light: "bg-[#212529]",  
            dark: "bg-[#495057]"   
        }
    },
];
