interface IPostcardModel{
    postcardID: number;
    userID: number;
    title: string;
    imageURL: string;
    description: string;
    rating: number;
    cost: number;
    activityLocation: string;
    activityCity: string;
}
export default IPostcardModel;