
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface IconImageProps {
    name: string;
}

export default function IconImages({ name }: IconImageProps) {
    switch (name) {
        case 'GitHub': 
            return (
                <GitHubIcon />
            )
        case 'LinkedIn': 
            return (
                <LinkedInIcon />
            )
        case 'Facebook': 
            return (
                <FacebookIcon />
            )
        case 'Email': 
            return (
                <EmailIcon />
            )
        case 'Website': 
            return (
                <OpenInNewIcon />
            )
        default:
            return (
                <div>Icon not found</div>
            )
    }

    
}
