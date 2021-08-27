export default  function Inputs({children, className, type, name, id}){
    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input type={type} className={className} name={name} id={id}/>
        </>
    )
}