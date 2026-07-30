import ProgressOverview from "../Sections/ProgressOverview";
// import { Subtitles } from "lucide-react";

export default function ProgressCard({    title,
    value,
    subtitle
}){
    return (
        <div>
            <h3>{title}</h3>
            <p> {value}</p>
            <p>{subtitle}</p>
        
        </div>
    )
}