"use client";

import { Button, Card, Group, Slider, Stack, Title } from "@mantine/core";
import { useState } from "react";


// type: "select" | "boolean" | "number"
interface BaseStep {
    id: string;
    type: 'select' | 'slider';
    question: string
    conditions?: { id: string, op: '=' | '!=' | '>' | '<', value: string }[]
}

interface SelectStep extends BaseStep {
    type: 'select'
    answers: string[]
}

interface SliderStep extends BaseStep {
    type: 'slider'
    min: number
    max: number
}

type ChatStep = SelectStep | SliderStep;

// allgemein
// alter, schule, klasse, ausbildung, arbeit


const workflow: ChatStep[] =  [
    {
        id: "age",
        type: "slider",
        question: "Wie alt bist du?",
        min: 15,
        max: 45
    },

    {
        id: "2",
        type: "select",
        question: "Wie verbringst du am liebsten deine Freizeit",
        answers: [
          "Spielen",
          "Lesen, Musik oder kreativer Kram",
          "Sport",
          "Sonstiges"
        ]
    },

    {
        id: "4",
        type: "select",
        question: "Wann stehst du normalerweise auf?",
        answers: [
          "Vor 6 Uhr",
          "Zwischen 6 und 8 Uhr",
          "Zwischen 8 und 10 Uhr",
          "Später als 10 Uhr"
        ]
    },

    { // -> Mini Ziele: 5min Fokuszone: keine Ausreden, kein Stress
        id: "4",
        type: "select",
        question: "Wie oft hast du letzte Woche Dinge aufgeschoben, obwohl du sie erledigen wolltest?",
        answers: [
          "Gar nicht",
          "1-2 Mal",
          "3-5 Mal",
          "Täglich"
        ]
    },

    { 
        id: "4",
        type: "select",
        question: "Wie planst du deinen Alltag aktuell?",
        answers: [
          "Ich liebe klare Routinen",
          "Ich improvisiere gern",
          "Ich hab keine echte Struktur"
        ]
    },

    { 
        id: "4",
        type: "select",
        question: "Was hörst du in letzere Zeit am meisten?",
        answers: [
          "Motivation & Wokrout",
          "Chill & Lo-Fi",
          "Emotional / Melancholisch",
          "Ich höre kaum Musik"
        ]
    },

]

export function Chat() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [sliderValue, setSliderValue] = useState(0);

    const stepData = workflow[step];

    
    function saveAnswer(id: string, answer: string) {
        addAnswer(id, answer); 

        const newStep = showNextQuestion(step);
        setStep(newStep);
    }

    function showNextQuestion(currentStep: number) {
        if(currentStep+1 === workflow.length)
            return currentStep;

        let newStep = currentStep+1;

        const newQuestion = workflow[newStep];
        let skipQuestion = false;
        newQuestion.conditions?.forEach(q => {
            switch(q.op) {
                case '=':
                    skipQuestion = answers[q.id] !== q.value;
                    break;
                case '!=':
                    skipQuestion = answers[q.id] === q.value;
                    break;
                case '>':
                    skipQuestion = answers[q.id] <= q.value;
                    break;
                case '<':
                    skipQuestion = answers[q.id] >= q.value;
                    break;
            }
            
            if(skipQuestion) 
                return showNextQuestion(newStep);
        });

        return newStep;
    }

    function addAnswer(id: string, answer: string) {
        answers[id] = answer;
        setAnswers(answers);
    }

    return (
        <Stack>
            {
                // show last / answered questions
            }
            {
                Array.from({length: step}, (_, i) => (
                   <div key={i}>
                        <Group justify="start">
                            <Card shadow="md" withBorder radius="lg">
                                <Title order={5}>{workflow[i].question}</Title>
                            </Card>
                        </Group>
                        
                        <Group justify="end">
                            <Stack>
                                <Card shadow="md" withBorder radius="lg">
                                    <Title order={5}>{answers[workflow[i].id]}</Title>
                                </Card>
                            </Stack>
                        
                        </Group>
                    </div>
                ))
                
            }


            {
                // show current question
            }
            <Group justify="start">
                <Card shadow="md" withBorder radius="lg">
                    <Title order={5}>{stepData.question}</Title>
                </Card>
            </Group>
            
            <Group justify="end">
                <Stack>
                    {stepData.type === 'select' &&
                        stepData.answers.map(answer => {
                            return (
                                <Card key={answer} shadow="md" withBorder radius="lg" bg="teal" style={{ cursor: "pointer" }} onClick={() => {saveAnswer(stepData.id, answer)}}>
                                    <Title order={5}>{answer}</Title>
                                </Card>
                            )
                        })
                    }

                    {stepData.type === 'slider' &&
                        <Group gap={15} className="w-full">
                            <Button onClick={() => {saveAnswer(stepData.id, sliderValue.toString())}}>Save</Button>
                            <Slider className="w-[50vw]" value={sliderValue} onChange={setSliderValue} min={stepData.min} max={stepData.max} marks={[
                                {value: stepData.min, label: 'min'},
                                {value: stepData.max, label: 'max'}
                            ]}/>
                        </Group>
                        
                    }

                </Stack>
               
            </Group>
            
        </Stack>
        
    )
}