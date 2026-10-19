'use client';
import {storageKey} from '../lib/storage-key';
import {createContext,useContext,useMemo} from 'react';
const Scope=createContext<string|null>(null);
export function WorkspaceScope({id,children}:{id:string;children:React.ReactNode}){return <Scope.Provider value={id}>{children}</Scope.Provider>}
export function useScopedStorage(){const id=useContext(Scope);if(!id)throw Error('A verified workspace identity is required.');return useMemo(()=>{return {getItem:(key:string)=>localStorage.getItem(storageKey(id,key)),setItem:(key:string,value:string)=>localStorage.setItem(storageKey(id,key),value),removeItem:(key:string)=>localStorage.removeItem(storageKey(id,key))}},[id])}
