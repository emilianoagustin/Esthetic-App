
export const isValidDate = (date: String, hour: Number) => {
    let actual = new Date();
    const actualYear = actual.getFullYear();
    const actualMonth = actual.getMonth();
    const actualDay = actual.getDay();
    const actualHours = actual.getHours();
    const dateSplit = date.split("/");

    if (parseInt(dateSplit[2]) > actualYear) return true;
    if (parseInt(dateSplit[2]) === actualYear) {
        if (parseInt(dateSplit[1]) > actualMonth) return true;
        if (parseInt(dateSplit[1]) === actualMonth) {
            if (parseInt(dateSplit[0]) > actualDay) return true;
            if (parseInt(dateSplit[0]) === actualDay) {
                if (hour >= actualHours) return true;
                else return false;
            }
            else return false;
        }
        else return false;
    }
    else return false;


}