import booking from '@assets/partners/booking_logo.svg';
import hootsuite from '@assets/partners/hootsuite_logo.svg';
import meta from '@assets/partners/meta_logo.svg';
import nike from '@assets/partners/nike_logo.svg';
import stanford from '@assets/partners/stanford_logo.svg';
import { PartnersType } from '@type/index.ts';

export const partnersList: PartnersType[] = [
    {
        id: 1,
        logo: stanford,
        alt: 'Stanford Logo',
    },
    {
        id: 2,
        logo: meta,
        alt: 'Meta Logo',
    },
    {
        id: 3,
        logo: booking,
        alt: 'Booking Logo',
    },
    {
        id: 4,
        logo: hootsuite,
        alt: 'Hootsuite Logo',
    },
    {
        id: 5,
        logo: nike,
        alt: 'Nike Logo',
    },
];
