const formatTimeStamp = (accountCreatedAt: string | number | Date | null | undefined) => {
    if(accountCreatedAt !== undefined && accountCreatedAt !== null) {
        const dateObject = new Date(accountCreatedAt);

        if(!isNaN(dateObject.getTime())) {
          const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
          const formattedDate = dateObject.toLocaleDateString('en-US', options);    
          return formattedDate;
        } else {
          return "Invalid Date";
        };
    } else {
        return "Invalid Date";
    };
};

export default formatTimeStamp;
