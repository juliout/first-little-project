export default function Buttons({children, className, onClick}){
    return(
    <button onClick={onClick} className={className}>{children}</button>

    )
}