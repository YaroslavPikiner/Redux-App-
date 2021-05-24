export const convertDurationToHours = (date, durr) => {
    const duration = convertMinToHours(durr)
    const dateOrigin = convertDate(date)
    const resDurationHours = duration.slice(0, 2)
    const resOriginHours = dateOrigin.slice(0, 2)
    const resDurationMin = duration.slice(4, 7)
    const resOriginMin = dateOrigin.slice(3, 5)

    let hours = +resDurationHours + +resOriginHours
    let min = +resDurationMin + +resOriginMin
    if (min > 60) {
        min -= 60
        hours += 1
    };
    if (hours > 24) {
        hours -= 24
    };
    if (min < 10) min = "0" + min;
    return `${hours}:${min}`
}

export const convertDate = (dateNum) => {
    const date = new Date(dateNum);
    const res = date.toString().slice(16, 21)
    return res;
}


export const convertMinToHours = (time) => {
    let hours = time / 60 ^ 0;
    if (hours) {
        let minutes = time % 60;
        if (minutes < 10) minutes = '0' + minutes
        return time = hours + ' ч ' + minutes + ' м';
    } else {
        return time = time + ' м';
    }
}