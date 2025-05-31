interface WordPressMedia {
    source_url: string;
}
  
export interface WordPressArticle {
id: number;
title: {
    rendered: string;
};
content: {
    rendered: string;
};
excerpt: {
    rendered: string;
};
slug: string;
date: string;
featured_media: number;
_embedded?: {
    'wp:featuredmedia'?: WordPressMedia[];
};
}