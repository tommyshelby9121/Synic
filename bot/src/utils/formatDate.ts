import date from "date-and-time";

function formatDate(object:any, format:string) {
    return date.format(object, format);
}

export default formatDate;
