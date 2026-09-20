import { Certification as CertificationType } from '@/app/schemas/certification.schema'
import React from 'react'
import Section from '../ui/Section';
import Reveal from '../animations/Reveal';
import CertificationCard from '../certifications/CertificationCard';

interface CertificationProps {
    certifications: CertificationType[];
}

const Certification = ({certifications}: CertificationProps) => {

    if (certifications.length === 0) return null;
  return (
    <Section
    id='certifications'
    eyebrow='Credentials'
    title='Certifications & Recognition'
    description='Industry certifications, digital badges, and recognitions that back up how I build.'
    >
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {certifications.map((certification, index) => (
                <Reveal key={certification.id} delay={0.05 * index} effect='scale'>
                    <CertificationCard certification={certification} />
                </Reveal>
            ))}
        </div>
    </Section>
  )
}

export default Certification