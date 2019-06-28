/*
    * This object matches the data given by the api. The response of the api is stored in this object
 */

export interface Sentiment {

  _id: string;
  luisIntent: string;
  responseMessage: string;
  inputMessage: string;
  sentimentScore: number;
  __v: number;
}
