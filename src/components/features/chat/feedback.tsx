import { Card, Group, Stack, Title } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

export function Feedback({answers}: {answers: Record<string, string>}) {

    const feedback = generateFeedback();

    function generateFeedback() {
        const feedback: string[] = [];

        // Freizeit
        if (answers["freizeit"] === "Sport") {
            feedback.push("Du scheinst ein aktiver Mensch zu sein.");
        }
        if (answers["freizeit"] === "Lesen, Musik oder kreativer Kram") {
            feedback.push("Kreative Tätigkeiten scheinen dir zu liegen.");
        }

        // Musik
        if (answers["musik"] === "Motivation & Wokrout") {
            feedback.push("Du scheinst gerne mit Energie und Motivation in den Tag zu starten.");
        }
        if (answers["musik"] === "Emotional / Melancholisch") {
            feedback.push("Du nimmst Emotionen bewusst wahr – das kann eine Stärke sein.");
        }

        return feedback;
    }

    return (
        <div>
            <Card shadow="md" withBorder radius="lg" mt="xl">
                <Title order={4}>Dein Feedback</Title>
                <Stack mt="md">
                    {
                        feedback.map((f, i) => (
                            <Card key={i} bg="gray.0" radius="md" shadow="sm" p="sm">
                                {f}
                            </Card>
                        ))
                    }
                </Stack>
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
