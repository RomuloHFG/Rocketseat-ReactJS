interface ButtonProps{
    color?: "primary" | "secondary" | "danger" | "success";
}

export default function Button(props: ButtonProps){
    return <button>Enviar</button>
}