import React, {createContext, useContext, useReducer} from "react";

type ServiceState = { isModalOpen: boolean; modalMessage: string };

type ServiceAction =
    | { type: "OPEN_MODAL"; payload: string }
    | { type: "CLOSE_MODAL" };

const ServiceContext = createContext<{
    state: ServiceState;
    dispatch: React.Dispatch<ServiceAction>
} | undefined>(undefined);

const serviceReducer = (state: ServiceState, action: ServiceAction): ServiceState => {
    switch (action.type) {
        case "OPEN_MODAL":
            return {...state, isModalOpen: true, modalMessage: action.payload};
        case "CLOSE_MODAL":
            return {...state, isModalOpen: false, modalMessage: ""};
        default:
            return state;
    }
};

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [state, dispatch] = useReducer(serviceReducer, {isModalOpen: false, modalMessage: ""});
    return <ServiceContext.Provider value={{state, dispatch}}>{children}</ServiceContext.Provider>;
};

export const useService = () => {
    const context = useContext(ServiceContext);
    if (!context) throw new Error("useService must be used within a ServiceProvider");
    return context;
};