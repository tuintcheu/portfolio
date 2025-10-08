const Add =(...args)=>{

}

const Button = ({ className, onClick, ...props })=>{
    const handleClick = () => {
        // do something

        onClick()
    }
    return (
        <button onClick={handleClick} {...props}></button>
    )
}