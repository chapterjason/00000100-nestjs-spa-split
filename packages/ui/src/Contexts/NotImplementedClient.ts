import { AxiosResponse } from "axios";
import { ClientInterface } from "../Services/ClientInterface";

export class NotImplementedClient implements ClientInterface {

    public delete<T>(): Promise<AxiosResponse<T>> {
        throw new Error("You probably forgot to put <ApplicationContextProvider>.");
    }

    public get<T>(): Promise<AxiosResponse<T>> {
        throw new Error("You probably forgot to put <ApplicationContextProvider>.");
    }

    public patch<T>(): Promise<AxiosResponse<T>> {
        throw new Error("You probably forgot to put <ApplicationContextProvider>.");
    }

    public post<T>(): Promise<AxiosResponse<T>> {
        throw new Error("You probably forgot to put <ApplicationContextProvider>.");
    }

}
