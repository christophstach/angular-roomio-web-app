import {User} from './user.model.ts';
import {Picture} from './picture.model.ts';

export interface Accommodation {
    id: number
    type: AccommodationType;
    address: string,
    securityDeposit: number;
    availableFrom: Date,
    availableTill: Date,
    squareMeters: number;
    title: string;
    pictures: Picture[];
    roomMates: User[];
    match: number;
    price: number;
    payingPeriod: AccommodationPayingPeriod;
    currency: string;
    introText: string;
    socializingText: string;
    miscellaneousText: string;
    hasWifi: boolean;
    hasWashingMachine: boolean;
    hasDishWashMachine: boolean;
    hasTelevision: boolean;
    hasPet: boolean;
    hasCommonRoom: boolean;
    smokingPolicy: AccommodationSmokingPolicy;
}

export enum AccommodationType {
    ROOM = 1,
    FLAT = 2,
    SHARE_ROOM = 3,
    HOUSE = 4,
    DORMITORY = 5
}

export enum AccommodationPayingPeriod {
    DAILY = 1,
    WEEKLY = 2,
    MONTHLY = 3
}

export enum AccommodationSmokingPolicy {
    NO_SMOKING = 1,
    SMOKING_ALLOWED_EVERYWHERE = 2,
    SMOKING_ALLOWED_IN_KITCHEN = 3,
    SMOKING_ALLOWED_IN_OWN_ROOM_ONLY = 4,
    SMOKING_ALLOWED_ON_BALCONY = 5
}