const formatName = (userName: string | null | undefined) => {
    if(userName !== undefined && userName !== null) {
      const words = userName?.split(' ');

      const formattedName = words?.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });

      return formattedName?.join(' ');
    } else {
      return '';
    };
};

export default formatName;
