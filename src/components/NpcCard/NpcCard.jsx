import './NpcCard.css';

function NpcCard({ id, name, description, portrait}) {
    return (
        <div className="npc-card" id={id}>
            <div className="npc-details">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="npc-portrait">
                {portrait && <img src={portrait} alt={name} />}
            </div>
        </div>
    )
}

export default NpcCard;