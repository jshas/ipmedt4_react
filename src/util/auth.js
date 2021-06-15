/* External imports */
import Cookies from "js-cookie";
import cookie from "cookie";

export const isLoggedIn = (reqCookies = null) => {
    // if we don't have request cookies, get the cookie from client
    if (!reqCookies) {
        return !!Cookies.get("kva_is_user_logged_in");
    }

    // otherwise get cookie from server
    return !!cookie.parse(reqCookies).kva_is_user_logged_in;
};

export const logIn = () => {
    Cookies.set("kva_is_user_logged_in", true, {
        expires: 86400,
        sameSite: "lax",
    });

    window.location.replace("/");
};

export const logOut = () => {
    if (typeof window !== "undefined") {
        // remove logged in user's cookie and redirect to login page
        Cookies.remove("kva_is_user_logged_in", {
            expires: 86400,
            sameSite: "lax",
        });

        window.location.replace("/login");
    }
};
