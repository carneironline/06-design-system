import { Label, MultiStepContainer, Step, Steps } from './styles';

export interface MultiStepProps {
    size: number;
    currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
    const arraySize = Array.from({ length: size }, (_, i) => i + 1);

    return (
        <MultiStepContainer>
            <Label>
                Passo {currentStep} de {size}
            </Label>

            <Steps css={{ '--steps-size': size }}>
                {arraySize.map((step) => {
                    const isActive = currentStep >= step;
                    return <Step key={step} active={isActive}></Step>;
                })}
            </Steps>
        </MultiStepContainer>
    );
}
