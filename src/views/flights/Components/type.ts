import type Stepper from 'bs-stepper'
import type { LinkType } from '@/types'

export type StepPropsType = {
  stepperInstance?: Stepper
}

type FlightDetailType = {
  time: string
  tag: string
  placeName: string
}

export type FlightRouteDetailType = {
  departure: FlightDetailType
  arrival: FlightDetailType
  travelDuration: string
  link?: LinkType
}

export type HotelDetailType = {
  name: string
  room: string
  date: string
  rating: number
  link?: LinkType
}
