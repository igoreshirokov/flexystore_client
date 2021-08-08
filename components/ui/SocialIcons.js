import React from 'react';
import { LINKS } from '../../contstants';



const SocialIcons = () => {
    return (
        <div className="socialicons">
            <a href={LINKS.vk} className="vk">
                vk
            </a>
            <a href={LINKS.instagram} className="instagram">
                instagram
            </a>
            <a href={LINKS.telegram} className="telegram">
                telegram
            </a>
            <a href={LINKS.whatsapp} className="whatsapp">
                whatsapp
            </a>
        </div>

    );
};

export default SocialIcons;