import {User} from './user.model.ts';
import {Picture} from './picture.model.ts';

export interface Accommodation {
    id: number
    type: AccommodationType;
    squareMeters: number;
    title: string;
    pictures: Picture[];
    roomMates: User[];
}

export enum AccommodationType {
    ROOM = 1,
    FLAT = 2,
    SHARE_ROOM = 3,
    HOUSE = 4,
    DORMITORY = 5
}