import { ActionIcon, Button, Card, Center, Image, Stack, Text } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";

export function Dashboard({start}: {start: () => void}) {
    return (
        <Stack gap={25}>
            <Center style={{ position: 'relative', width: 200, margin: 'auto' }}>
            
                {/* avatar */}
                <Image
                src="/avatar.png"
                alt="Avatar"
                radius="xl"
                style={{
                    border: '3px solid rgb(236,230,220)',
                    width: 200,
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: '50%',
                }}
                />

                {/* edit button */}
                <ActionIcon
                    variant="filled"
                    color="blue"
                    size="lg"
                    style={{
                        position: 'absolute',
                        bottom: -5,  // leicht nach unten verschoben, damit es am Rand ist
                        right: -5,   // leicht nach rechts verschoben
                        borderRadius: '50%',
                        border: '2px solid rgb(236,230,220)', // Weißer Rand für bessere Abhebung
                    }}
                >
                    <IconPencil size={20} />
                </ActionIcon>
            </Center>
            
        
            <Center>
                <Card shadow="md" withBorder radius="md">
                    <Stack>
                        <Text>Hey, lass uns loslegen, gemeinsam dein Profil einzustellen</Text>
                        <Center>
                            <Button w={100} onClick={start}>Start</Button>
                        </Center>
                    </Stack>
                </Card>
            </Center>
        </Stack>
    )
} 