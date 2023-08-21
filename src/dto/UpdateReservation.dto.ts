type UpdateReservationBody = {
  dateDeb: string;
  type: string;
  duration: number;
  prixTotal: number;
};

export type UpdateReservationDto = Partial<UpdateReservationBody>;
