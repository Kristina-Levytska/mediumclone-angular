import { PopularTag } from '../modules/popular-tags/types/popular-tags.interface';
import { ProfileInterface } from './profile.interface';

export interface ArticlesInterface {
  author: ProfileInterface;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: PopularTag[];
  title: string;
  updatedAt: string;
}
