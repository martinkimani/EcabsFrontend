export class IBooking {
    bookingId:string
    passengerName:string
    passangerContactNumber: Date
    asap: boolean
    price: number
    waitingTime: string
    noOfPassengers?: number
    rating?: number
    createdOn: string
    lastModifiedOn: string
    tripWaypoints: ItripWaypoints[]
    pickupTime: any
}

export class ItripWaypoints {
    tripWayPoint: string
    booking: IBooking
    lastStop: boolean
    locality: string
    lat: number
    lng: number
    tripWayPointTimestamp: string
}