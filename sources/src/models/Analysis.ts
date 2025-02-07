export interface Paper {
  _attributes: {
    description?: string;
    keyword?: string;
    locale?: string;
    permalink?: string;
    synonyms?: string;
    title?: string;
    titleWidth?: number;
    url?: string;
  };
  _text: any;
  [id: string]: any;
}

export interface Result {
  marks: any[];
  score: number;
  text: string;
  _hasMarks: boolean;
  _hasScore: boolean;
  _identifier: string;
  _marker: Function;
  actual?: number;
  rating?: 'bad' | 'ok' | 'good';
  [id: string]: any;
}

export interface Rating {
  rating: 'bad' | 'ok' | 'good';
  text: string;
  identifier: string;
  score: number;
}

export interface Assessor {
  i18n: any;
  results: Result[];
  type: string;
  _assessments: any[];
  _hasMarkers: boolean;
  _lastPaper: Paper;
  _options: Object;
  _researcher: any;
}

export interface SnippetPreviewProps {
  analyzerApp: any,
  placeholder: {
    title: string,
    metaDesc: string,
    urlPath: string
  },
  defaultValue: {
    title: string,
    metaDesc: string
  },
  baseURL: string,
  targetElement: HTMLElement,
  callbacks: {
    saveSnippetData: Function
  },
  addTrailingSlash: boolean,
  metaDescriptionDate: string,
  // i18n: Jed,
  previewMode: string
}
