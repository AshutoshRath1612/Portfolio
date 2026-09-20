import { Experience as ExperienceType } from '@/app/schemas/experience.schema'
import React from 'react'
import Section from '../ui/Section';
import ExperienceTimeline from '../experiences/ExperienceTimeline';

interface ExperienceProps {
    experience: ExperienceType[];
}

const Experience = ({experience}:ExperienceProps) => {
  return (
    <Section
    id='experience'
    eyebrow='Experience'
    title="Where I've done the work"
    description="Professional experience described generally to respect confidentiality. Bracketed figures are placeholder for verified numbers"
    >
        <div className='max-w-3xl'>
            <ExperienceTimeline experience={experience} />
        </div>
    </Section>
  )
}

export default Experience