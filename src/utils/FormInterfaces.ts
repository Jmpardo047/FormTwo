export interface Response{
    idoptresponse: string,
    responseuser: string[],
}
  
export interface FormTemplate{
qId: string;
surveyId: "1",
chapterId: string,
qFather: string;
response:[Response];
}