import { Header } from "../components/layout/header";
import {Chat} from "../components/features/chat";

export function Home() {
    return (
        <div>
            <Header />
            <Chat/>
        </div>
    );
}