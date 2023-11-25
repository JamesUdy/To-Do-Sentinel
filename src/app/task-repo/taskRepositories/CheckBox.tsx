import React from 'react';

interface CheckBoxProps {
    name: string;
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({name, isChecked, onChange}) => {
  return (
    <div>{name}</div>
  );
};

export default CheckBox;
