'use client';
import {Heart,MessageCircle,X,CircleDashed} from 'lucide-react';
import {Avatar} from './studio';
import {AvatarStyle,defaultAvatar,displayName} from '../lib/member-identity';
import {Room} from '../lib/planner';
export const voteNames=['Pass','Let’s discuss','Love it'];
export const voteState=(vote:number)=>vote===2?'love':vote===1?'discuss':vote===0?'pass':'pending';
export function VoteIcon({value,size=14}:{value:number;size?:number}){return value===2?<Heart size={size} fill="currentColor"/>:value===1?<MessageCircle size={size}/>:value===0?<X size={size}/>:<CircleDashed size={size}/>}
export function VoteLegend(){return <div className="vote-legend" aria-label="Vote key">{[2,1,0,-1].map(v=><span className={'state-'+voteState(v)} key={v}><VoteIcon value={v}/>{voteNames[v]||'Pending'}</span>)}</div>}
export function VoteChips({room,votes,avatars,active}:{room:Room;votes:number[];avatars:AvatarStyle[];active:number}){return <div className="vote-avatar-row" aria-label="Everyone’s votes">{room.people.map((person,n)=>{const value=votes[n]??-1;const name=displayName(person.name);const look=avatars[n]||defaultAvatar(n);return <details key={person.memberId||n} onKeyDown={e=>{if(e.key==='Escape'){e.currentTarget.open=false;e.currentTarget.querySelector('summary')?.focus()}}} className={'vote-person state-'+voteState(value)+(active===n?' current-voter':'')} style={{'--member-color':look.shirt} as React.CSSProperties}><summary aria-label={name+': '+(voteNames[value]||'Pending')+(active===n?' (voting as this person)':'')} title={name+': '+(voteNames[value]||'Pending')}><Avatar small look={look} name={name} mood="still"/><span className="vote-status-icon"><VoteIcon value={value} size={12}/></span></summary><span className="vote-tooltip">{name}: {voteNames[value]||'Pending'}</span></details>})}</div>}
