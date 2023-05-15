import Liky from './Liky.interface';
import Comment from './Comment.interface';


export interface ILikeUser {
    likeUserProfile: string;
    likeUserNickname: string;
}

export interface ICommentItem {
    commentUserProfile: string;
    commentUserNickname: string;
    commentContent: string;
    commentDatetime: string;
}

export type { Comment, Liky };