// Tri Trainer Service Worker — offline support + notifications
const CACHE='tri-trainer-v2';
const ASSETS=['/','/index.html','/plan-data.js','/manifest.json','/icon-192.png','/icon-512.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>
    Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request)));
});

// ── Notification scheduling ───────────────────────────────────────────────
let scheduledPlan=null;
let notifTimes={eve:'20:00',morn:'07:00'};
let lastEveCheck='';
let lastMornCheck='';

self.addEventListener('message',e=>{
  if(e.data&&e.data.type==='SCHEDULE_NOTIFICATIONS'){
    scheduledPlan=e.data.plan;
    if(e.data.times)notifTimes=e.data.times;
    if(!self._notifInterval){
      self._notifInterval=setInterval(checkAndNotify,60000);
      checkAndNotify();
    }
  }
});

function todayStr(){return new Date().toISOString().split('T')[0]}
function tomorrowStr(){const d=new Date();d.setDate(d.getDate()+1);return d.toISOString().split('T')[0]}

function findDay(dateStr){
  if(!scheduledPlan)return null;
  for(const week of scheduledPlan)
    for(const day of week.days)
      if(day.date===dateStr)return{week,day};
  return null;
}

function checkAndNotify(){
  if(!scheduledPlan)return;
  const now=new Date();
  const h=now.getHours(),m=now.getMinutes();
  const todayKey=todayStr();
  const tomorrowKey=tomorrowStr();

  const [eH,eM]=notifTimes.eve.split(':').map(Number);
  const [mH,mM]=notifTimes.morn.split(':').map(Number);

  // Evening — night before
  if(h===eH&&m===eM&&lastEveCheck!==todayKey){
    lastEveCheck=todayKey;
    const found=findDay(tomorrowKey);
    if(found&&found.day.discipline!=='REST'){
      const{week,day}=found;
      self.registration.showNotification(`Tomorrow: ${day.discipline} Day`,{
        body:`Week ${week.week} · ${day.type} · ${day.steps.length} steps\nFirst up: ${day.steps[0].label}`,
        icon:'/icon-192.png',tag:'workout-eve',
        actions:[{action:'open',title:'View Workout'}]
      });
    }
  }

  // Morning — day of
  if(h===mH&&m===mM&&lastMornCheck!==todayKey){
    lastMornCheck=todayKey;
    const found=findDay(todayKey);
    if(found&&found.day.discipline!=='REST'){
      const{week,day}=found;
      const icons={Swim:'🏊',Bike:'🚴',Run:'🏃',Brick:'⚡',RACE:'🏁'};
      const icon=icons[day.discipline]||'💪';
      self.registration.showNotification(`${icon} Time to train — ${day.discipline}`,{
        body:`Week ${week.week} · ${day.type}\nFirst up: ${day.steps[0].label}`,
        icon:'/icon-192.png',tag:'workout-morning',requireInteraction:true,
        actions:[{action:'open',title:'Open App'},{action:'dismiss',title:'Later'}]
      });
    }
  }
}

self.addEventListener('notificationclick',e=>{
  e.notification.close();
  if(e.action==='dismiss')return;
  e.waitUntil(
    clients.matchAll({type:'window'}).then(list=>{
      if(list.length>0)return list[0].focus();
      return clients.openWindow('/');
    })
  );
});
