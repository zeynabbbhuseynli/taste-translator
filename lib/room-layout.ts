export type Wall='back'|'left'|'front'|'right';
export type Opening={wall:Wall;offset:number;width:number};
export type RoomPhoto={id:string;url:string;name:string};
export type RoomFurniture={id:string;name:string;kind:'bed'|'desk'|'storage'|'other';width:number;depth:number;height:number;x:number;y:number;rotated:boolean;color:string};
export type RoomLayout={configured:boolean;ceiling:number;door:Opening;window:Opening;photos:RoomPhoto[];furniture:RoomFurniture[]};
export function emptyLayout():RoomLayout{return {configured:false,ceiling:8,door:{wall:'front',offset:1,width:3},window:{wall:'back',offset:1,width:4},photos:[],furniture:[]};}
export function furnitureBounds(f:RoomFurniture){return {x:f.x,y:f.y,width:f.rotated?f.depth:f.width,depth:f.rotated?f.width:f.depth};}
export function layoutIssues(width:number,length:number,layout:RoomLayout){const issues:string[]=[];for(const [label,o] of [['Door',layout.door],['Window',layout.window]] as const){const side=o.wall==='back'||o.wall==='front'?width:length;if(o.offset+o.width>side)issues.push(label+' extends beyond its wall.')}layout.furniture.forEach((f,n)=>{const a=furnitureBounds(f);if(a.x+a.width>width||a.y+a.depth>length)issues.push(f.name+' extends outside the room.');layout.furniture.slice(n+1).forEach(other=>{const b=furnitureBounds(other);if(a.x<b.x+b.width&&a.x+a.width>b.x&&a.y<b.y+b.depth&&a.y+a.depth>b.y)issues.push(f.name+' overlaps '+other.name+'.')});if(f.height>layout.ceiling)issues.push(f.name+' is taller than the ceiling.')});return issues;}
