import { Card, Group, Stack, Title } from "@mantine/core";
import { IconInfoCircle, IconMessageCircle } from "@tabler/icons-react";

export function Feedback({answers}: {answers: Record<string, string>}) {

    const feedback = generateFeedback();

    function generateFeedback() {
        const feedback: string[] = [];

         // Alter
        const age = Number(answers["alter"]);
        if (age < 20) {
            feedback.push("Du bist noch jung und hast viele Möglichkeiten, dich auszuprobieren.");
        } else if (age <= 30) {
            feedback.push("Du befindest dich in einer spannenden Lebensphase voller Chancen und Herausforderungen.");
        } else {
            feedback.push("Du bringst schon einiges an Lebenserfahrung mit – das ist wertvoll.");
        }

        // Freizeit
        switch (answers["freizeit"]) {
            case "Sport":
                feedback.push("Du scheinst ein aktiver Mensch zu sein – bleib in Bewegung!");
                break;
            case "Lesen, Musik oder kreativer Kram":
                feedback.push("Kreative Tätigkeiten liegen dir – nutze das, um neue Energie zu tanken.");
                break;
            case "Spielen":
                feedback.push("Verspieltheit ist eine wertvolle Eigenschaft – sie hilft dir, flexibel zu bleiben.");
                break;
            case "Sonstiges":
                feedback.push("Du gehst deinen eigenen Weg – das macht dich einzigartig.");
                break;
        }

        // Aufstehen
        switch (answers["aufstehen"]) {
            case "Vor 6 Uhr":
                feedback.push("Du bist ein echter Frühaufsteher – das kann ein klarer Vorteil sein.");
                break;
            case "Zwischen 6 und 8 Uhr":
                feedback.push("Du startest deinen Tag zu einer produktiven Zeit – gut gemacht.");
                break;
            case "Zwischen 8 und 10 Uhr":
                feedback.push("Du nimmst dir morgens etwas mehr Zeit – finde deinen optimalen Rhythmus.");
                break;
            case "Später als 10 Uhr":
                feedback.push("Ein später Start ist okay – wichtig ist, was du daraus machst.");
                break;
        }

        // Fokus
        switch (answers["fokus"]) {
            case "Gar nicht":
                feedback.push("Stark! Du scheinst sehr diszipliniert zu sein.");
                break;
            case "1-2 Mal":
                feedback.push("Kleine Ablenkungen sind normal – du bist auf einem guten Weg.");
                break;
            case "3-5 Mal":
                feedback.push("Es gibt noch Raum für Verbesserung – vielleicht helfen dir Mini-Ziele.");
                break;
            case "Täglich":
                feedback.push("Du bist nicht allein – viele Menschen schieben Aufgaben auf. Kleine Schritte helfen weiter.");
                break;
        }

        // Alltag
        switch (answers["alltag"]) {
            case "Ich liebe klare Routinen":
                feedback.push("Routinen geben dir Sicherheit – das hilft dir, dranzubleiben.");
                break;
            case "Ich improvisiere gern":
                feedback.push("Flexibilität ist eine Stärke – achte darauf, dabei deine Ziele im Blick zu behalten.");
                break;
            case "Ich hab keine echte Struktur":
                feedback.push("Das ist der perfekte Moment, um mit kleinen Routinen zu starten.");
                break;
        }

        // Musik
        switch (answers["musik"]) {
            case "Motivation & Wokrout":
                feedback.push("Du gehst gerne mit Energie in den Tag – das ist ansteckend!");
                break;
            case "Chill & Lo-Fi":
                feedback.push("Du weißt, wie du runterkommst – Balance ist wichtig.");
                break;
            case "Emotional / Melancholisch":
                feedback.push("Du bist im Kontakt mit deinen Gefühlen – das ist eine große Stärke.");
                break;
            case "Ich höre kaum Musik":
                feedback.push("Du brauchst vielleicht keine Musik, um dich zu fokussieren – auch das kann gut funktionieren.");
                break;
        }



        return feedback;
    }

    return (
        <div>
            <Card shadow="md" withBorder radius="lg" mt="xl">
                <Group align="flex-start" wrap="nowrap">
                    <IconMessageCircle size={32} color="#1c7ed6" style={{ marginTop: 4 }} />
                    <Stack gap={10}>
                    <Title order={5} c="blue.7">Dein Feedback</Title>

                    {
                        feedback.map((f, i) => (
                            <Card key={i} bg="gray.0" radius="md" shadow="sm" p="sm">
                                {f}
                            </Card>
                        ))
                    }
    
                    </Stack>
                </Group>
            </Card>

            <Card shadow="md" withBorder radius="lg" mt="xl" bg="blue.0">
                <Group align="flex-start" wrap="nowrap">
                    <IconInfoCircle size={32} color="#1c7ed6" style={{ marginTop: 4 }} />
                    <Stack gap={4}>
                    <Title order={5} c="blue.7">Noch nicht genug Daten</Title>
                    <div>
                        Lehne dich zurück und warte, bis wir genügend Daten gesammelt haben. Dann erhältst du eine erste aussagekräftige Analyse!
                    </div>
                    </Stack>
                </Group>
            </Card>
        </div>
    );
}
