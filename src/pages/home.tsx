import { Header } from "../components/layout/header";
import {Chat} from "../components/features/chat";
import { Container } from "@mantine/core";
import { Footer } from "../components/layout/footer";

export function Home() {
    return (
        <div>
            <div className="min-h-screen">
                <Header />

                <Container>
                    <Chat/>
                </Container>
            </div>
        
            <Footer/>
        </div>
    );
}