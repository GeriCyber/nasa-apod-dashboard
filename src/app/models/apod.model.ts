export interface APOD {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: MediaType;
  service_version: string;
  title: string;
  url: string;
  copyright?: string;
}

export enum MediaType {
  video = 'video',
  image = 'image',
}
