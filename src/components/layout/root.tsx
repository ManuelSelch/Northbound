import { Container } from "@mantine/core";
import { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

interface MyWrapperProps {
  children: ReactNode
}

export function Root({ children }: MyWrapperProps) {
    return (
        <div>
            <div className="min-h-screen">
                <Header />

                <Container>
                    {children}
                </Container>
            </div>
        
            <Footer/>
        </div>
    );
}