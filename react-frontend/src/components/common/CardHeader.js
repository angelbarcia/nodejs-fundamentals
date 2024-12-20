export default function CardHeader({title,headerContent}) {
    return (
        <div className={"card-header"}>
            <h3 className={"card-title"}>{title}</h3>
            {headerContent}
        </div>
    )
}
