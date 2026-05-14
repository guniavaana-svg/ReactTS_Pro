interface SubtitlesType {
  title: string;
  text: string;
}
 export interface ArticleDataType {
  id: number;
  title: string;
  mainImage: string;
  images: string[];
  description: string;
  subtitles?: SubtitlesType[];
  content: string;
}
 export interface CategoryDataType {
  id: number;
  name: string;
  slug: string;
}

