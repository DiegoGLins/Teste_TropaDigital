interface ContainerTextProps {
    children: React.ReactNode
}

const ContainerText: React.FC<ContainerTextProps> = ({ children }) => {
    return (
        <>
            <div className="containerText">
                {children}
            </div>
        </>
    )
}

export default ContainerText