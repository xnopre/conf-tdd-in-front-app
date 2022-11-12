export class HttpRequester {
    static getJson<T>(url: string) : Promise<T> {
        return fetch(url).then((response) => {
            return response.json();
        });
    }

    static postJson<T>(url: string, payload: PostData) : Promise<T> {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then((response) => {
            return response.json();
        });
    }
}

interface PostData {
    [key: string]: string | {}
}
