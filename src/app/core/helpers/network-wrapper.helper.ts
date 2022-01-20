import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkWrapperHelper
{

  constructor(
    private _httpClient: HttpClient
  )
  {
  }

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  post(data: PostMethod)
  {

    return this._httpClient.post(
      data.url,
      data.model,
      { headers: this.headers }
    );
  }

  get(data: GetMethod)
  {

    return this._httpClient.get(
      this.makeCompleteUrl(data),
      { headers: this.headers }
    );

  }

  delete(data: DeleteMethod)
  {

    return this._httpClient.delete(
      this.makeCompleteUrl(data),
      { headers: this.headers }
    );

  }

  put(data: PutMethod)
  {

    return this._httpClient.put(
      data.url,
      data.model,
      { headers: this.headers }
    );
  }

  makeCompleteUrl(data: GetMethod): string
  {

    let completeUrl: string = data.url;

    if (data.params)
    {

      completeUrl = completeUrl + "?";

      Object.keys(data.params).forEach((key) =>
      {

        completeUrl = completeUrl + key + "=" + data.params[key] + "&";

      });

      completeUrl = completeUrl.slice(0, -1);
    }
    return completeUrl;
  }

}


export class PostMethod
{
  url: string = '';
  model: any;
}

export class PutMethod extends PostMethod
{
}

export class GetMethod
{
  url: string = '';
  params?: any;
}

export class DeleteMethod extends GetMethod
{
}
