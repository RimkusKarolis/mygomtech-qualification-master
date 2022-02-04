import getUrl from '../utils/getUrl';
const logout = () => {
    window.localStorage.clear();
    window.location.href = getUrl + "login";
};

export default logout;
