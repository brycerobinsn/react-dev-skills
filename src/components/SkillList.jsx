import SkillListItem from "./SkillListItem"

export default function SkillList ({skills}) {
    
    return (
        <ul>
            {skills.map(skill =>(
                <SkillListItem key={skill} skill={skill} />
            ))}
        </ul>
    )
}