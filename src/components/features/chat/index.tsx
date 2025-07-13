"use client";

import { Button, Card, Group, Slider, Stack, Title } from "@mantine/core";
import { useState } from "react";
import { Feedback } from "./feedback";
import { StepCard } from "./step-card";



// allgemein
// alter, schule, klasse, ausbildung, arbeit


const workflow: ChatStep[] =  [
    {
        id: "alter",
        type: "slider",
        question: "Wie alt bist du?",
        min: 15,
        max: 45
    },

    {
        id: "freizeit",
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
        id: "aufstehen",
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
        id: "fokus",
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
        id: "alltag",
        type: "select",
        question: "Wie planst du deinen Alltag aktuell?",
        answers: [
          "Ich liebe klare Routinen",
          "Ich improvisiere gern",
          "Ich hab keine echte Struktur"
        ]
    },

    { 
        id: "musik",
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

    if(step === workflow.length)
        return <Feedback answers={answers} />

    const stepData = workflow[step];

    
    function saveAnswer(id: string, answer: string) {
        addAnswer(id, answer); 

        const newStep = showNextQuestion(step);
        setStep(newStep);
    }

    function showNextQuestion(currentStep: number) {
        if(currentStep+1 === workflow.length)
            return currentStep+1;

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
                    i < workflow.length &&
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
                    <StepCard step={stepData} saveAnswer={saveAnswer}/>
                </Stack>
               
            </Group>
            
        </Stack>
        
    )
}