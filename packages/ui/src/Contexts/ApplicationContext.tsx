import * as React from "react";
import { ApplicationContextProps } from "./ApplicationContextProps";
import { NotImplementedClient } from "./NotImplementedClient";

export const ApplicationContext = React.createContext<ApplicationContextProps>({
    client: new NotImplementedClient(),
});
