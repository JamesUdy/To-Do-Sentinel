interface ColorProps {
    light: string;
    dark: string;
};

interface categoriesProps {
    id: number;
    label: string;
    colors: ColorProps;
};

export const categories: categoriesProps[] = [
  {
    "id": 1,
    "label": "Personal",
    "colors": {
      "light": "bg-[#00b4d8]",  
      "dark": "bg-[#0077b6]"   
    }
  },
  {
    "id": 2,
    "label": "Home",
    "colors": {
      "light": "bg-[#2ecc71]",  
      "dark": "bg-[#006400]"  
    }
  },
  {
    "id": 3,
    "label": "Studies",
    "colors": {
      "light": "bg-[#f48c06]", 
      "dark": "bg-[#dc2f02]"    
    }
  },
  {
    "id": 4,
    "label": "Business",
    "colors": {
      "light": "bg-[#10002b]",  
      "dark": "bg-[#6200b3]"   
    }
  },
  {
    "id": 5,
    "label": "Fitness",
    "colors": {
      "light": "bg-[#e74c3c]",  
      "dark": "bg-[#d90429]"    
    }
  },
  {
    "id": 6,
    "label": "Other",
    "colors": {
      "light": "bg-[#212529]",  
      "dark": "bg-[#495057]"   
    }
  }
];
