interface ColorProps {
    light: string;
    dark: string;
};

interface categoriesProps {
    id: number;
    label: string;
    colors: ColorProps;
};

export const categories: categoriesProps[] =// categories.json
[
  {
    "id": 1,
    "label": "Personal",
    "colors": {
      "light": "bg-[#00b4d8]",  // Light Blue
      "dark": "bg-[#0077b6]"    // Dark Blue
    }
  },
  {
    "id": 2,
    "label": "Home",
    "colors": {
      "light": "bg-[#2ecc71]",  // Light Green
      "dark": "bg-[#006400]"    // Dark Green
    }
  },
  {
    "id": 3,
    "label": "Studies",
    "colors": {
      "light": "bg-[#f48c06]",  // Light Orange
      "dark": "bg-[#dc2f02]"    // Dark Orange
    }
  },
  {
    "id": 4,
    "label": "Business",
    "colors": {
      "light": "bg-[#10002b]",  // Light Dark Blue
      "dark": "bg-[#6200b3]"    // Dark Violet
    }
  },
  {
    "id": 5,
    "label": "Fitness",
    "colors": {
      "light": "bg-[#e74c3c]",  // Light Red
      "dark": "bg-[#d90429]"    // Dark Red
    }
  },
  {
    "id": 6,
    "label": "Other",
    "colors": {
      "light": "bg-[#212529]",  // Light Gray
      "dark": "bg-[#495057]"    // Dark Gray
    }
  }
]

