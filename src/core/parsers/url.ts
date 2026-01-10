/**
 * Parser URL metadata (Open Graph + fallbacks)
 */

export interface UrlMetadata {
  titre: string;
  description: string;
  image: string;
  url: string;
}

export const fetchUrlMetadata = async (url: string): Promise<UrlMetadata> => {
  try {
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl, {
      signal: AbortSignal.timeout(10000),
    });
    
    if (!response.ok) throw new Error('Fetch failed');
    
    const data = await response.json();
    const html = data.contents;
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const getMetaContent = (property: string): string => {
      const meta = doc.querySelector(`meta[property="${property}"]`) || 
                    doc.querySelector(`meta[name="${property}"]`);
      return meta?.getAttribute('content') || '';
    };
    
    const title = getMetaContent('og:title') || 
                  doc.querySelector('title')?.textContent || 
                  '';
    
    const description = getMetaContent('og:description') || 
                       getMetaContent('description') || 
                       '';
    
    let image = getMetaContent('og:image') || 
                doc.querySelector('img')?.getAttribute('src') || 
                '';
    
    // Absolutize image URL
    if (image && !image.startsWith('http')) {
      const urlObj = new URL(url);
      image = new URL(image, urlObj.origin).href;
    }
    
    return {
      titre: title.slice(0, 100),
      description: description.slice(0, 500),
      image,
      url,
    };
  } catch (error) {
    console.error('Error fetching URL metadata:', error);
    return {
      titre: new URL(url).hostname,
      description: '',
      image: '',
      url,
    };
  }
};