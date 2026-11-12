import site from './site.js';
import indexPage from './pages/index.js';
import proyectosPage from './pages/proyectos-page.js';
import contactoPage from './pages/contacto.js';

const getPageContext = (pagePath) => {
    let pageData = {};
    switch (pagePath) {
        case '/':
        case '/index.html':
            pageData = indexPage;
            break;
        case '/proyectos.html':
            pageData = proyectosPage;
            break;
        case '/contacto.html':
            pageData = contactoPage;
            break;
    }
    return { ...site, ...pageData };
};

export default getPageContext;
