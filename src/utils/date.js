export const isToday = (dateParameter) => {
    var today = new Date();
    return dateParameter.getDay() === today.getDay() && dateParameter.getMonth() === today.getMonth() && dateParameter.getFullYear() === today.getFullYear();
}