import './Tag.scss'

const Tag = ({ tags }) => {
    return (
        <ul className="tag-ul">
            {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </ul>
    )
}

export default Tag
