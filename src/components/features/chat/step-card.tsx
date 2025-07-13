import { Button, Card, Group, Slider, Title } from "@mantine/core";
import { useState } from "react";

type SaveAnswer = (id: string, answer: string) => void;


export function StepCard({step, saveAnswer}: {step: BaseStep, saveAnswer: SaveAnswer}) {
    if(step.type === 'select')
        return <SelectStepCard step={step as SelectStep} saveAnswer={saveAnswer}/>

    if(step.type === 'slider')
        return <SliderStep step={step as SliderStep} saveAnswer={saveAnswer}/>

    return <div></div>
}

function SelectStepCard({step, saveAnswer}: {step: SelectStep, saveAnswer: SaveAnswer}) {
    return (
        <div>
            {step.answers.map(answer => {
                return (
                    <Card key={answer} shadow="md" withBorder radius="lg" bg="teal" style={{ cursor: "pointer" }} onClick={() => {saveAnswer(step.id, answer)}}>
                        <Title order={5}>{answer}</Title>
                    </Card>
                )
            })};
        
        </div>
    );
}

function SliderStep({step, saveAnswer}: {step: SliderStep, saveAnswer: SaveAnswer}) {
    const [sliderValue, setSliderValue] = useState(0);

    return (
       <Group gap={15} className="w-full">
            <Button onClick={() => {saveAnswer(step.id, sliderValue.toString())}}>Save</Button>
            <Slider className="w-[50vw]" value={sliderValue} onChange={setSliderValue} min={step.min} max={step.max} marks={[
                {value: step.min, label: 'min'},
                {value: step.max, label: 'max'}
            ]}/>
        </Group>
    );
}