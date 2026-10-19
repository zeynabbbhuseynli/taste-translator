export function storageKey(owner:string,key:string){if(!owner)throw Error('A verified workspace identity is required.');return 'taste-translator:'+encodeURIComponent(owner)+':'+key;}
