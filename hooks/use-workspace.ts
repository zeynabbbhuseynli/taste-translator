import {useEffect,useRef,useState} from 'react';
import {roomSchema} from '../lib/workspace-schema';
import {Room,normalizeRoom,starterRoom} from '../lib/planner';
import {useScopedStorage} from '../components/workspace-scope';
export function useWorkspace(){const storage=useScopedStorage();const [room,setRoom]=useState<Room>(starterRoom),[ready,setReady]=useState(false),[save,setSave]=useState('Opening browser draft…');const canSave=useRef(true);
useEffect(()=>{try{const raw=storage.getItem('taste-translator-simple');if(raw){const parsed=roomSchema.safeParse(JSON.parse(raw));if(!parsed.success){canSave.current=false;setSave('Saved draft could not be opened. Original browser data is preserved.');}else{setRoom(normalizeRoom(parsed.data));setSave('Saved in this browser only');}}else setSave('Saved in this browser only');}catch{canSave.current=false;setSave('Browser storage unavailable. Export your plan before closing.');}setReady(true)},[storage]);
useEffect(()=>{if(!ready||!canSave.current)return;try{storage.setItem('taste-translator-simple',JSON.stringify(room));setSave('Saved in this browser only');}catch{setSave('Browser storage is full or blocked. Export your plan before closing.')}},[room,ready,storage]);
return {room,setRoom,ready,save,cloud:true,conflict:false,reload:()=>location.reload(),retry:()=>{try{storage.setItem('taste-translator-simple',JSON.stringify(room));setSave('Saved in this browser only')}catch{setSave('Export your plan before closing.')}}};}
