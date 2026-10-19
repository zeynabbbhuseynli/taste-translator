import {Room} from '../lib/planner';
const swatches:Record<string,string>={Sage:'#a8b69a',Cream:'#eee5cf',Terracotta:'#c78267',Charcoal:'#505653',Blush:'#d9aaa5',Blue:'#849daf'};
export function RoomPalette({room}:{room:Room}){const colors=Array.from(new Set(room.people.filter(p=>p.complete).flatMap(p=>p.colors))).filter(c=>swatches[c]).slice(0,6);if(!colors.length)return null;return <div className="shared-palette" aria-label="Colors from confirmed taste profiles">{colors.map(c=><span key={c}><i style={{background:swatches[c]}}/>{c}</span>)}</div>}
