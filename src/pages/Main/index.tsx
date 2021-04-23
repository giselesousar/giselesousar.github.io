import { Element } from 'react-scroll';
import HomeView from '../Home';
import ProjectView from '../Projects';
import ContactView from '../Contact';

const Main = () => {
    return (
        <>
            <Element name="home">
                <HomeView />
            </Element>
            <Element name="projects">
                <ProjectView />
            </Element>
            <Element name="contact">
                <ContactView />
            </Element>
        </>
    )
}

export default Main;