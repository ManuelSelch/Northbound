// type: "select" | "boolean" | "number"
declare interface BaseStep {
    id: string;
    type: 'select' | 'slider';
    question: string
    conditions?: { id: string, op: '=' | '!=' | '>' | '<', value: string }[]
}

declare interface SelectStep extends BaseStep {
    type: 'select'
    answers: string[]
}

declare interface SliderStep extends BaseStep {
    type: 'slider'
    min: number
    max: number
}

declare type ChatStep = SelectStep | SliderStep;