const R = 6371.009;
const PI = Math.PI;
const R_ROUND = 2 * PI * R;

export const getDistanceLatitude = () => {
    const lat_km_degrees = R_ROUND / 360;
    const lat_km_minutes = lat_km_degrees / 60;
    const lat_km_seconds = lat_km_minutes / 60;

    return { lat_km_degrees, lat_km_minutes, lat_km_seconds };
}

export const getDistanceLongitude = (degrees) => {
    const R_ROUND_LAT = Math.cos(degrees) * R_ROUND;
    const lng_km_degrees = R_ROUND_LAT / 360;
    const lng_km_minutes = lng_km_degrees / 60;
    const lng_km_seconds = lng_km_minutes / 60;

    return { lng_km_degrees, lng_km_minutes, lng_km_seconds };
}

export const convertMeterToSec = (km, km_sec) => km / km_sec;

export const convertDDToDMS = (dd) => {
    const degrees = Math.floor(dd);
    const minutes = (dd - degrees) * 60;
    const seconds = (minutes - Math.floor(minutes)) * 60;
    return { degrees, minutes, seconds };
}

export const convertDMSToDD = (degrees, minutes, seconds) => degrees + (Math.floor(minutes)/60) + (Number(seconds.toFixed(2))/3600)
