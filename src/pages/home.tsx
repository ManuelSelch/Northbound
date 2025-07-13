import { useState } from "react";
import {Chat} from "../components/features/chat";
import { Dashboard } from "./dashboard";

export function Home() {
    const [isChat, setChat] = useState(false);

    if(isChat)
        return <Chat />
    else
        return <Dashboard start={() => setChat(true)}/>
}