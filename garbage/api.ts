import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

//---


type Day = Date & { readonly __tag: unique symbol }
type DateTime = Date & { readonly __tag: unique symbol }


//---

type ArticleMediaConversionRateElementDTO = {
  mediaId: string,
  views?: number,
  conversions?: number,
  rate?: number
}
type ArticleConversionsResponse = ArticleMediaConversionRateElementDTO[]
type ArticleReferralViewsBySourceDTO = {
  views: number,
  source?: string
}
type ArticleReferralsDTO = {
  total: number,
  referrals?: ArticleReferralViewsBySourceDTO[]
}
type ArticleReferralsResponse = { [str: string]: ArticleReferralsDTO }
type ArticleWindowDTO = {
  windowStart: DateTime,
  windowEnd?: DateTime,
  uniques?: number,
  views?: number,
  percentConsumedAvg?: number,
  secondsVisibleAvg?: number,
  secondsActiveAvg?: number
}
type ArticleTotalsResponse = { [str: string]: ArticleWindowDTO }
type ArticleWindowsResponse = { [str: string]: ArticleWindowDTO[] }
type ContentFolderAveragesDTO = {
  contentFolderIds: string[],
  from?: DateTime,
  to?: DateTime,
  articleCount?: number,
  viewsAvg?: number,
  uniquesAvg?: number,
  percentConsumedAvg?: number,
  secondsVisibleAvg?: number,
  secondsActiveAvg?: number
}
type ViewCountRange = {
  from: number,
  to?: number
}
type ContentFolderRangeViewsDTO = {
  range: ViewCountRange,
  total?: number,
  contentIds?: string[]
}
type ArticleContentFolderRangeViewsResponse = ContentFolderRangeViewsDTO[]
type ContentFolderSortedListDTO = {
  contentId: string,
  published?: DateTime,
  from?: DateTime,
  to?: DateTime,
  uniques?: number,
  views?: number,
  percentConsumedAvg?: number,
  secondsVisibleAvg?: number,
  secondsActiveAvg?: number
}
type ArticleContentFolderSortedListResponse = ContentFolderSortedListDTO[]
type ArticleContentFolderWindowsResponse = ArticleWindowDTO[]
type PodcastListensDTO = {
  episodeId: string,
  count?: number
}
type RadioPodcastListensResponse = PodcastListensDTO[]
type MediaArticleConversionRateElementDTO = {
  articleId: string,
  views?: number,
  conversions?: number,
  rate?: number
}
type VideoClipConversionsResponse = MediaArticleConversionRateElementDTO[]
type TotalScreenRatingElemDTO = {
  fromDate: Day,
  toDate?: Day,
  tsr?: number,
  live?: number,
  recording?: number,
  rebroadcast?: number,
  webRating?: number
}
type WebRatingDTO = {
  date: Day,
  webRating?: number
}
type VideoProgramWebRatingResponse = WebRatingDTO[]
type FrequencyDTO = {
  days: number,
  uniques?: number
}
type FrequenciesByClientDTO = {
  clientType: string,
  average?: number,
  total?: number,
  frequencies?: FrequencyDTO[]
}
type VisitorFrequenciesDTO = {
  date: Day,
  clients?: FrequenciesByClientDTO[]
}
type ServiceVisitorFrequenciesResponse = VisitorFrequenciesDTO[]
type UniqueDateDTO = {
  date: Day,
  uniques?: number
}
type UniquesByClientDTO = {
  clientType: string,
  total?: number,
  dates?: UniqueDateDTO[]
}
type UniqueVisitorDTO = {
  date: Day,
  clients?: UniquesByClientDTO[]
}
type ServiceUniqueVisitorsResponse = UniqueVisitorDTO[]

//---

type ArticleConversionsEndpoint = {
  /**
   * Shows the conversion rate from an article to media elements linked to in the article
   * @param id - The articles you want data for. At least one article id required
  */
   get: (id: string[]) => Promise<AxiosResponse<ArticleConversionsResponse>>
}
type ArticleReferralsEndpoint = {
  /**
   * List referrals for article in the given period $from $to
   * @param id - The articles you want data for
   * @param from - Aggregate data from / after this point in time. Valid format is [YYYY-MM-DD, YYYY-MM-DDThh:mm, YYYY-MM-DDThh:mm:ss]. If timezone is omitted it defaults to Europe/Oslo. Example 2018-11-09T10:30+0200
   * @param to - Aggregate data up to this point in time. Valid format is [YYYY-MM-DD, YYYY-MM-DDThh:mm, YYYY-MM-DDThh:mm:ss]. If timezone is omitted it defaults to Europe/Oslo. Example 2018-11-09T10:30+0200
   * @param limit - Limit
  */
   get: (id?: string[], from?: string, to?: string, limit?: number) => Promise<AxiosResponse<ArticleReferralsResponse>>
}
type ArticleTotalsEndpoint = {
  /**
   * Returns the total number of
   * 
   *   * views
   *   * an estimate of the number of unique viewers
   *   * read time
   * 
   * for an article.
   *           
   * @param id - The articles you want data for. At least one article id required
   * @param from - Aggregate data from / after this point in time.  Valid format is [YYYY-MM-DD, YYYY-MM-DDThh:mm, YYYY-MM-DDThh:mm:ss]. If timezone is omitted it defaults to Europe/Oslo. Example 2018-11-09T10:30+0200
   * @param to - Aggregate data up to this point in time. Valid format is [YYYY-MM-DD, YYYY-MM-DDThh:mm, YYYY-MM-DDThh:mm:ss]. If timezone is omitted it defaults to Europe/Oslo. Example 2018-11-09T10:30+0200
  */
   get: (id: string[], from?: string, to?: string) => Promise<AxiosResponse<ArticleTotalsResponse>>
}
type ArticleWindowsEndpoint = {
  /**
   * Returns the number of
   * 
   *   * views
   *   * an estimate of the number of unique viewers
   *   * read time
   * 
   * for an article. The output returns series of all data between two timestamps where each series is split into
   * window interval chunks.
   *          
   * @param id - The articles you want data for. At least one article id required
   * @param interval - The highest time range of the aggregated data / series. Example `1day` will try to return windows of each day. Valid units are  [minute, hour, day, week, month, quarter, year]. If omitted, we return all data for a given contentId in a single window. `from` and `to` will then limit the start and end of this window.
   * @param from - Aggregate data from / after this point in time.  Valid format is [YYYY-MM-DD, YYYY-MM-DDThh:mm, YYYY-MM-DDThh:mm:ss]. If timezone is omitted it defaults to Europe/Oslo. Example 2018-11-09T10:30+0200
   * @param to - Aggregate data up to this point in time. Valid format is [YYYY-MM-DD, YYYY-MM-DDThh:mm, YYYY-MM-DDThh:mm:ss]. If timezone is omitted it defaults to Europe/Oslo. Example 2018-11-09T10:30+0200
  */
   get: (id: string[], interval: string, from?: string, to?: string) => Promise<AxiosResponse<ArticleWindowsResponse>>
}
type ArticleContentFolderAveragesEndpoint = {
   get: (id: string[], from: string, to: string, exclude?: string[], publishedInsideDateRange?: boolean) => Promise<AxiosResponse<ContentFolderAveragesDTO>>
}
type ArticleContentFolderRangeViewsEndpoint = {
   get: (id: string[], from: string, to: string, exclude?: string[], range?: string[], publishedInsideDateRange?: boolean) => Promise<AxiosResponse<ArticleContentFolderRangeViewsResponse>>
}
type ArticleContentFolderReferralsEndpoint = {
   get: (id: string[], exclude?: string[], from?: string, to?: string, limit?: number, publishedInsideDateRange?: boolean) => Promise<AxiosResponse<ArticleReferralsDTO>>
}
type ArticleContentFolderSortedListEndpoint = {
   get: (id: string[], from: string, to: string, sort: string, limit: number, exclude?: string[], publishedInsideDateRange?: boolean) => Promise<AxiosResponse<ArticleContentFolderSortedListResponse>>
}
type ArticleContentFolderWindowsEndpoint = {
  /**
   * Returns the number of
   * 
   *   * views
   *   * an estimate of the number of unique viewers
   *   * read time
   * 
   * for an article. The output returns series of all data between two timestamps where each series is split into
   * window interval chunks.
   *          
   * @param id - The content folders you want data for. At least one content folder id required
   * @param from - Aggregate data from / after this point in time. Valid format is [YYYY-MM-DD, YYYY-MM-DDThh:mm, YYYY-MM-DDThh:mm:ss]. If timezone is omitted it defaults to Europe/Oslo. Example 2018-11-09T10:30+0200
   * @param to - Aggregate data up to this point in time. Valid format is [YYYY-MM-DD, YYYY-MM-DDThh:mm, YYYY-MM-DDThh:mm:ss]. If timezone is omitted it defaults to Europe/Oslo. Example 2018-11-09T10:30+0200
   * @param interval - The highest time range of the aggregated data / series. Example `1day` will try to return windows of each day. Valid units are  [minute, hour, day, week, month, quarter, year]. If omitted, we return all data for a given contentId in a single window. `from` and `to` will then limit the start and end of this window.
   * @param exclude - List of content folders that should NOT be included in results.
   * @param publishedInsideDateRange - If the articles was published inside date range
  */
   get: (id: string[], from: string, to: string, interval: string, exclude?: string[], publishedInsideDateRange?: boolean) => Promise<AxiosResponse<ArticleContentFolderWindowsResponse>>
}
type RadioPodcastListensEndpoint = {
  /**
   * Showing downloaded/listened statistics for a set of podcasts
   * @param fromDate - Start date for podcast listens period, inclusive (yyyy-MM-dd)
   * @param toDate - End date for podcast listens period, inclusive (yyyy-MM-dd). Must be later than fromDate
  */
   get: (fromDate: string, toDate: string) => Promise<AxiosResponse<RadioPodcastListensResponse>>
}
type VideoClipConversionsEndpoint = {
  /**
   * Gives the conversion rate on users starting with a video clip and going to an associated article
   * @param id - The video clip you want data for
   * @param to - Aggregate data up to this point in time. Valid format is [YYYY-MM-DD, YYYY-MM-DDThh:mm, YYYY-MM-DDThh:mm:ss]. If timezone is omitted it defaults to Europe/Oslo. Example 2018-11-09T10:30+0200
  */
   get: (id: string, to?: string) => Promise<AxiosResponse<VideoClipConversionsResponse>>
}
type VideoProgramTotalScreenRatingEndpoint = {
  /**
   * Total Screen Rating (TSR) for programs
   * @param id - The program id you want data for
  */
   get: (id: string) => Promise<AxiosResponse<TotalScreenRatingElemDTO>>
}
type VideoProgramWebRatingEndpoint = {
   get: (id: string, to: string) => Promise<AxiosResponse<VideoProgramWebRatingResponse>>
}
type ServiceVisitorFrequenciesEndpoint = {
   get: (id: string, from: string, to: string) => Promise<AxiosResponse<ServiceVisitorFrequenciesResponse>>
}
type ServiceUniqueVisitorsEndpoint = {
   get: (id: string, from: string, to: string) => Promise<AxiosResponse<ServiceUniqueVisitorsResponse>>
}

//---

type Paths = '/article/conversions' | '/article/referrals' | '/article/totals' | '/article/windows' | '/article/content-folder/averages' | '/article/content-folder/range/views' | '/article/content-folder/referrals' | '/article/content-folder/sorted-list' | '/article/content-folder/windows' | '/radio/podcast/listens' | '/video/clip/conversions' | '/video/program/total-screen-rating' | '/video/program/web-rating' | '/service/visitor-frequencies' | '/service/unique-visitors'

//---


type ApiEndpoint<P extends Paths> =
  P extends '/article/conversions' ? ArticleConversionsEndpoint :
  P extends '/article/referrals' ? ArticleReferralsEndpoint :
  P extends '/article/totals' ? ArticleTotalsEndpoint :
  P extends '/article/windows' ? ArticleWindowsEndpoint :
  P extends '/article/content-folder/averages' ? ArticleContentFolderAveragesEndpoint :
  P extends '/article/content-folder/range/views' ? ArticleContentFolderRangeViewsEndpoint :
  P extends '/article/content-folder/referrals' ? ArticleContentFolderReferralsEndpoint :
  P extends '/article/content-folder/sorted-list' ? ArticleContentFolderSortedListEndpoint :
  P extends '/article/content-folder/windows' ? ArticleContentFolderWindowsEndpoint :
  P extends '/radio/podcast/listens' ? RadioPodcastListensEndpoint :
  P extends '/video/clip/conversions' ? VideoClipConversionsEndpoint :
  P extends '/video/program/total-screen-rating' ? VideoProgramTotalScreenRatingEndpoint :
  P extends '/video/program/web-rating' ? VideoProgramWebRatingEndpoint :
  P extends '/service/visitor-frequencies' ? ServiceVisitorFrequenciesEndpoint :
  P extends '/service/unique-visitors' ? ServiceUniqueVisitorsEndpoint :
  never


//---


function unknownPath(path: Paths): never {
  throw Error(`Unknown path ${path}`)
}

function api(config: AxiosRequestConfig) {
  return function<Path extends Paths>(path: Path): ApiEndpoint<Path> {
    switch(path) {
      case '/article/conversions':
        return {
          get: (id: string[]) => {
            return axios
              .get('/article/conversions', {
                ...config,
                params: {
                  id,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<ArticleConversionsResponse>
              })
          }
        } as ArticleConversionsEndpoint as ApiEndpoint<Path>
      case '/article/referrals':
        return {
          get: (id?: string[], from?: string, to?: string, limit?: number) => {
            return axios
              .get('/article/referrals', {
                ...config,
                params: {
                  id,
                  from,
                  to,
                  limit,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<ArticleReferralsResponse>
              })
          }
        } as ArticleReferralsEndpoint as ApiEndpoint<Path>
      case '/article/totals':
        return {
          get: (id: string[], from?: string, to?: string) => {
            return axios
              .get('/article/totals', {
                ...config,
                params: {
                  id,
                  from,
                  to,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<ArticleTotalsResponse>
              })
          }
        } as ArticleTotalsEndpoint as ApiEndpoint<Path>
      case '/article/windows':
        return {
          get: (id: string[], interval: string, from?: string, to?: string) => {
            return axios
              .get('/article/windows', {
                ...config,
                params: {
                  id,
                  from,
                  to,
                  interval,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<ArticleWindowsResponse>
              })
          }
        } as ArticleWindowsEndpoint as ApiEndpoint<Path>
      case '/article/content-folder/averages':
        return {
          get: (id: string[], from: string, to: string, exclude?: string[], publishedInsideDateRange?: boolean) => {
            return axios
              .get('/article/content-folder/averages', {
                ...config,
                params: {
                  id,
                  exclude,
                  from,
                  to,
                  publishedInsideDateRange,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<ContentFolderAveragesDTO>
              })
          }
        } as ArticleContentFolderAveragesEndpoint as ApiEndpoint<Path>
      case '/article/content-folder/range/views':
        return {
          get: (id: string[], from: string, to: string, exclude?: string[], range?: string[], publishedInsideDateRange?: boolean) => {
            return axios
              .get('/article/content-folder/range/views', {
                ...config,
                params: {
                  id,
                  exclude,
                  from,
                  to,
                  range,
                  publishedInsideDateRange,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<ArticleContentFolderRangeViewsResponse>
              })
          }
        } as ArticleContentFolderRangeViewsEndpoint as ApiEndpoint<Path>
      case '/article/content-folder/referrals':
        return {
          get: (id: string[], exclude?: string[], from?: string, to?: string, limit?: number, publishedInsideDateRange?: boolean) => {
            return axios
              .get('/article/content-folder/referrals', {
                ...config,
                params: {
                  id,
                  exclude,
                  from,
                  to,
                  limit,
                  publishedInsideDateRange,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<ArticleReferralsDTO>
              })
          }
        } as ArticleContentFolderReferralsEndpoint as ApiEndpoint<Path>
      case '/article/content-folder/sorted-list':
        return {
          get: (id: string[], from: string, to: string, sort: string, limit: number, exclude?: string[], publishedInsideDateRange?: boolean) => {
            return axios
              .get('/article/content-folder/sorted-list', {
                ...config,
                params: {
                  id,
                  exclude,
                  from,
                  to,
                  sort,
                  limit,
                  publishedInsideDateRange,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<ArticleContentFolderSortedListResponse>
              })
          }
        } as ArticleContentFolderSortedListEndpoint as ApiEndpoint<Path>
      case '/article/content-folder/windows':
        return {
          get: (id: string[], from: string, to: string, interval: string, exclude?: string[], publishedInsideDateRange?: boolean) => {
            return axios
              .get('/article/content-folder/windows', {
                ...config,
                params: {
                  id,
                  exclude,
                  from,
                  to,
                  interval,
                  publishedInsideDateRange,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<ArticleContentFolderWindowsResponse>
              })
          }
        } as ArticleContentFolderWindowsEndpoint as ApiEndpoint<Path>
      case '/radio/podcast/listens':
        return {
          get: (fromDate: string, toDate: string) => {
            return axios
              .get('/radio/podcast/listens', {
                ...config,
                params: {
                  fromDate,
                  toDate,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<RadioPodcastListensResponse>
              })
          }
        } as RadioPodcastListensEndpoint as ApiEndpoint<Path>
      case '/video/clip/conversions':
        return {
          get: (id: string, to?: string) => {
            return axios
              .get('/video/clip/conversions', {
                ...config,
                params: {
                  id,
                  to,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<VideoClipConversionsResponse>
              })
          }
        } as VideoClipConversionsEndpoint as ApiEndpoint<Path>
      case '/video/program/total-screen-rating':
        return {
          get: (id: string) => {
            return axios
              .get('/video/program/total-screen-rating', {
                ...config,
                params: {
                  id,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<TotalScreenRatingElemDTO>
              })
          }
        } as VideoProgramTotalScreenRatingEndpoint as ApiEndpoint<Path>
      case '/video/program/web-rating':
        return {
          get: (id: string, to: string) => {
            return axios
              .get('/video/program/web-rating', {
                ...config,
                params: {
                  id,
                  to,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<VideoProgramWebRatingResponse>
              })
          }
        } as VideoProgramWebRatingEndpoint as ApiEndpoint<Path>
      case '/service/visitor-frequencies':
        return {
          get: (id: string, from: string, to: string) => {
            return axios
              .get('/service/visitor-frequencies', {
                ...config,
                params: {
                  id,
                  from,
                  to,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<ServiceVisitorFrequenciesResponse>
              })
          }
        } as ServiceVisitorFrequenciesEndpoint as ApiEndpoint<Path>
      case '/service/unique-visitors':
        return {
          get: (id: string, from: string, to: string) => {
            return axios
              .get('/service/unique-visitors', {
                ...config,
                params: {
                  id,
                  from,
                  to,
                   ...config.params
                }
              })
              .then(response => {
                return response as AxiosResponse<ServiceUniqueVisitorsResponse>
              })
          }
        } as ServiceUniqueVisitorsEndpoint as ApiEndpoint<Path>
      default:
        return unknownPath(path)
    }
  }
}

//---

export default api