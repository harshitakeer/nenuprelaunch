import { Col, Container, Button, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Nenu Projects (8).png";
import projImg2 from "../assets/img/Nenu Projects (1).png";
import projImg3 from "../assets/img/Nenu Projects (2).png";
import projImg4 from "../assets/img/Nenu Projects (10).png";
import confetti from 'canvas-confetti';
import 'bootstrap/dist/css/bootstrap.min.css';



export const Projects = () => {
    
    const projects = [
        {
            title: "actions",
            description: "to express yourself yo",
            imgUrl: projImg1,
        },
        {
            title: "hats",
            description: "to complete the look",
            imgUrl: projImg2,
        },
        {
            title: "faces",
            description: "to be silly!",
            imgUrl: projImg3,
        },
        {
            title: "hair",
            description: "or no hair to be sleek",
            imgUrl: projImg4,
        },
       
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>pieces</h2>
                    <p>choose your own actions, faces, hats, and more for your own avatar! more pieces will be added and updated here. any suggestions or want to sign-up? scroll down and sign up using the google form!</p>
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant = "pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) => {
                                          return(
                                            <ProjectCard
                                              key={index}
                                              {...project}
                                              />
                                          ) 
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                        <div className="iframe-container">
                            <iframe
                                src="https://forms.gle/Ai2XoLc7EGUfZ8dx5"
                                className="responsive-iframe"
                                title="Project Feedback Form">Loading…</iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )
}