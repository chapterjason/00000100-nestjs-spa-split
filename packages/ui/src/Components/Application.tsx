import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ApplicationContextProps } from "../Contexts/ApplicationContextProps";
import { ApplicationContextProvider } from "../Contexts/ApplicationContextProvider";
import { CreateCat } from "../Pages/Cats/CreateCat";
import { EditCat } from "../Pages/Cats/EditCat";
import { ListCats } from "../Pages/Cats/ListCats";
import { Home } from "../Pages/Home";
import { Client } from "../Services/Client";
import { ApplicationProps } from "./ApplicationProps";
import { Navigation } from "./Navigation";

export function Application(props: ApplicationProps) {
    const { base } = props;
    const client = new Client(base);

    const applicationContext: ApplicationContextProps = {
        client,
    };

    return (
        <ApplicationContextProvider value={applicationContext}>
            <HashRouter>
                <Navigation/>
                <Container>
                    <Row>
                        <Col>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/cats/edit/:id" component={EditCat}/>
                                <Route path="/cats/create" component={CreateCat}/>
                                <Route path="/cats" component={ListCats}/>
                            </Switch>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col className="text-center">
                            <strong>
                                NestJS Single Page Application
                            </strong>{" "}
                            Created with <span className="fa fa-heart text-danger"/> by{" "}
                            <a href="https://github.com/chapterjason" rel="noopener noreferrer" target="_blank">
                                chapterjason
                            </a>
                        </Col>
                    </Row>
                </Container>
            </HashRouter>
        </ApplicationContextProvider>
    );
}
