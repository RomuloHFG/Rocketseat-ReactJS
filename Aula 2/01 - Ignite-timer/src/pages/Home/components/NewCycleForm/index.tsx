import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";


export default function NewCycleForm() {
    return (
        <FormContainerontainer>
            <label htmlFor="task" >Vou trabalhar em</label>
            <TaskInputput
                id="task"
                list="task-suggestions"
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}
                {...register('task')}

            />

            <datalist id="task-suggestions">
                <option value="projeto 1"></option>
                <option value="projeto 2"></option>
                <option value="projeto 3"></option>
                <option value="projeto 4"></option>
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInputountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={5}
                min={1}
                max={60}
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}

            />

            <span>minutos.</span>
        </FormContainer>
    )

}


