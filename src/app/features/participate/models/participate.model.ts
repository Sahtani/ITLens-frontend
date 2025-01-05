export interface ParticipateModel {
  questionId: number;
  answerId: number;
  answers?: {
    answerId: string,
  }[];
}
