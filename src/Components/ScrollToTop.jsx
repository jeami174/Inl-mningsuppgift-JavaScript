import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//This component ensures that the window scrolls to the top whenever the user navigates to a new route.
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
