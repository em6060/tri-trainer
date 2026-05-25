// ─── TRAINING PLAN DATA ───────────────────────────────────────────────────────
// Start date: Tuesday May 26, 2026. Race day: Sunday July 19, 2026.
// Each week runs Mon–Sun. Monday = REST every week.
// Dates are assigned so Week 1 Tue = May 26.

const PLAN = [
  {
    week: 1, phase: "Return to Form", phaseColor: "#2563EB",
    focus: "Re-establish base fitness. Bike first on Tuesday. 3 swim sessions.",
    days: [
      { date: "2026-05-25", day: "Mon", discipline: "REST",  type: "Rest Day",
        steps: [{ label: "Full rest", note: "Foam roll legs and hips. Stay loose." }] },
      { date: "2026-05-26", day: "Tue", discipline: "Bike",  type: "Endurance",
        steps: [
          { label: "Warm-up: 10 min easy spin", note: "High cadence, low resistance." },
          { label: "Main: 35 min Zone 2 steady", note: "Flat terrain. First session back — no heroics." },
          { label: "Cool-down: 5 min easy spin", note: "Let heart rate settle." }] },
      { date: "2026-05-27", day: "Wed", discipline: "Swim",  type: "Technique",
        steps: [
          { label: "Warm-up: 200m easy freestyle", note: "Long, relaxed strokes." },
          { label: "Drill: 4 × 50m catch-up drill", note: "Touch thumbs before next stroke. Builds stroke length." },
          { label: "Drill: 4 × 50m fingertip drag", note: "Drag fingertips on recovery. Keeps elbow high." },
          { label: "Main: 4 × 100m easy with 20 sec rest", note: "Focus on form, not speed." },
          { label: "Cool-down: 200m easy", note: "Shake out the shoulders." }] },
      { date: "2026-05-28", day: "Thu", discipline: "Run",   type: "Easy Run",
        steps: [
          { label: "5 min walk warm-up", note: "Don't skip — injury prevention." },
          { label: "20 min easy jog — Zone 2", note: "Stop if injury site hurts." },
          { label: "5 min walk cool-down", note: "" },
          { label: "Stretch: calves, hamstrings, quads (5 min)", note: "Extra care on injured leg." }] },
      { date: "2026-05-29", day: "Fri", discipline: "Swim",  type: "Endurance",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "Main: 6 × 150m on 25 sec rest", note: "Aim for even pace each rep. Note times." },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-05-30", day: "Sat", discipline: "Brick", type: "Bike + Run",
        steps: [
          { label: "Bike: 10 min easy warm-up spin", note: "" },
          { label: "Bike: 25 min Zone 2", note: "Comfortable effort." },
          { label: "Transition: rack bike, put on run shoes (no break!)", note: "Time yourself." },
          { label: "Run: 10 min easy jog", note: "Embrace the jelly legs." },
          { label: "5 min walk cool-down + stretch", note: "" }] },
      { date: "2026-05-31", day: "Sun", discipline: "Swim",  type: "Open Water Sim",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "⭐ TIME TRIAL: 750m non-stop", note: "RACE DISTANCE. Start timer. Write down your time — this is your Week 1 baseline." },
          { label: "Cool-down: 200m easy", note: "How did it feel? Breathing? Pacing?" }] }
    ]
  },
  {
    week: 2, phase: "Return to Form", phaseColor: "#2563EB",
    focus: "Add swim volume. Longer brick. Protect the leg on runs.",
    days: [
      { date: "2026-06-01", day: "Mon", discipline: "REST",  type: "Rest Day",
        steps: [{ label: "Full rest", note: "Recovery is training." }] },
      { date: "2026-06-02", day: "Tue", discipline: "Bike",  type: "Endurance",
        steps: [
          { label: "Warm-up: 10 min easy spin", note: "" },
          { label: "Main: 45 min Zone 2", note: "" },
          { label: "3 × 5 min Zone 3 efforts", note: "Zone 3 = short sentences only. 2 min easy between." },
          { label: "Cool-down: 5 min easy spin", note: "" }] },
      { date: "2026-06-03", day: "Wed", discipline: "Swim",  type: "Technique",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "Drill: 4 × 50m bilateral breathing", note: "Breathe on both sides. Essential for open water." },
          { label: "Drill: 4 × 50m sighting practice", note: "Lift head every 6 strokes. Look forward, not up." },
          { label: "Main: 4 × 200m on 30 sec rest", note: "Sight every 8 strokes during main set." },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-06-04", day: "Thu", discipline: "Run",   type: "Easy Run",
        steps: [
          { label: "5 min walk warm-up", note: "" },
          { label: "25 min easy jog — Zone 2", note: "Still conservative. Injured leg check." },
          { label: "5 min walk cool-down", note: "" },
          { label: "Foam roll legs (5 min)", note: "Quads, IT band, calves." }] },
      { date: "2026-06-05", day: "Fri", discipline: "Swim",  type: "Intervals",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "Main: 8 × 100m on 15 sec rest", note: "Push pace. Record your avg 100m time." },
          { label: "200m pull buoy easy", note: "Arms only. Feel your catch." },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-06-06", day: "Sat", discipline: "Brick", type: "Bike + Run",
        steps: [
          { label: "Bike: 10 min warm-up", note: "" },
          { label: "Bike: 35 min Zone 2-3", note: "A little harder than last week." },
          { label: "Transition: rack bike, shoes on", note: "Aim under 90 seconds." },
          { label: "Run: 15 min easy", note: "" },
          { label: "Cool-down walk + stretch", note: "" }] },
      { date: "2026-06-07", day: "Sun", discipline: "Swim",  type: "Endurance",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "Main: 3 × 400m on 45 sec rest", note: "Aim for consistent splits across all 3." },
          { label: "Cool-down: 200m easy", note: "" }] }
    ]
  },
  {
    week: 3, phase: "Build", phaseColor: "#D97706",
    focus: "Introduce run tempo and bike intervals. Swim gets harder.",
    days: [
      { date: "2026-06-08", day: "Mon", discipline: "REST",  type: "Rest Day",
        steps: [{ label: "Full rest", note: "Let Week 2 adaptations settle." }] },
      { date: "2026-06-09", day: "Tue", discipline: "Bike",  type: "Intervals",
        steps: [
          { label: "Warm-up: 15 min easy spin", note: "" },
          { label: "Interval 1: 4 min Zone 4", note: "Hard — can't hold a conversation." },
          { label: "Recovery: 3 min easy spin", note: "" },
          { label: "Interval 2: 4 min Zone 4", note: "" },
          { label: "Recovery: 3 min easy spin", note: "" },
          { label: "Interval 3: 4 min Zone 4", note: "" },
          { label: "Recovery: 3 min easy spin", note: "" },
          { label: "Interval 4: 4 min Zone 4", note: "" },
          { label: "Recovery: 3 min easy spin", note: "" },
          { label: "Interval 5: 4 min Zone 4", note: "" },
          { label: "Cool-down: 10 min easy spin", note: "" }] },
      { date: "2026-06-10", day: "Wed", discipline: "Swim",  type: "Intervals",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "Main: 10 × 100m on 15 sec rest", note: "Race pace effort. Record splits." },
          { label: "Kick set: 4 × 50m kick only", note: "Builds leg drive and ankle flexibility." },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-06-11", day: "Thu", discipline: "Run",   type: "Tempo",
        steps: [
          { label: "Warm-up: 10 min easy jog", note: "" },
          { label: "Tempo: 10 min at comfortably hard pace", note: "Zone 3-4. 3-4 words max per breath." },
          { label: "Cool-down: 10 min easy jog", note: "" },
          { label: "Stretch legs (5 min)", note: "" }] },
      { date: "2026-06-12", day: "Fri", discipline: "Swim",  type: "Technique",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "Drill: 4 × 50m catch-up drill", note: "Revisit with better feel now." },
          { label: "Main: 3 × 300m on 30 sec rest — sight every 8", note: "" },
          { label: "Drill: 4 × 50m drafting position", note: "Practice swimming close to imaginary swimmer." },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-06-13", day: "Sat", discipline: "Brick", type: "Bike + Run",
        steps: [
          { label: "Bike: 10 min warm-up", note: "" },
          { label: "Bike: 45 min Zone 2-3", note: "Stay aero if you have that position." },
          { label: "Transition: rack bike, shoes on", note: "" },
          { label: "Run: 15 min easy then final 5 min Zone 3", note: "Push the last 5 min. Train tired legs." },
          { label: "Cool-down walk + stretch", note: "" }] },
      { date: "2026-06-14", day: "Sun", discipline: "Run",   type: "Long Run",
        steps: [
          { label: "5 min walk warm-up", note: "" },
          { label: "35 min easy long run — Zone 2", note: "Breathing hard? Slow down." },
          { label: "5 min walk cool-down", note: "" },
          { label: "Full lower body stretch (10 min)", note: "" }] }
    ]
  },
  {
    week: 4, phase: "Build", phaseColor: "#D97706",
    focus: "Longer bike and brick. Swim endurance block.",
    days: [
      { date: "2026-06-15", day: "Mon", discipline: "REST",  type: "Rest Day",
        steps: [{ label: "Full rest", note: "Recovery is training." }] },
      { date: "2026-06-16", day: "Tue", discipline: "Bike",  type: "Endurance",
        steps: [
          { label: "Warm-up: 10 min easy spin", note: "" },
          { label: "Main: 60 min Zone 2-3", note: "Simulate race effort. Aero position if possible." },
          { label: "Cool-down: 5 min easy spin", note: "" }] },
      { date: "2026-06-17", day: "Wed", discipline: "Swim",  type: "Endurance",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "Main: 2 × 800m on 90 sec rest", note: "Try to match pace on both. Note splits." },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-06-18", day: "Thu", discipline: "Run",   type: "Easy Run",
        steps: [
          { label: "5 min walk warm-up", note: "" },
          { label: "30 min easy jog — Zone 2", note: "" },
          { label: "5 min walk cool-down + stretch", note: "" }] },
      { date: "2026-06-19", day: "Fri", discipline: "Swim",  type: "Intervals",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "Main: 12 × 100m on 12 sec rest", note: "Shorter rest = harder. Push race pace." },
          { label: "200m pull buoy easy", note: "" },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-06-20", day: "Sat", discipline: "Brick", type: "Long Brick",
        steps: [
          { label: "Bike: 10 min warm-up", note: "" },
          { label: "Bike: 55 min Zone 2-3 — practice nutrition", note: "Gel or drink at 25 min mark. Test race-day fuel." },
          { label: "Transition: rack bike, shoes on", note: "" },
          { label: "Run: 20 min easy", note: "Longest brick run yet." },
          { label: "Cool-down walk + stretch", note: "" }] },
      { date: "2026-06-21", day: "Sun", discipline: "REST",  type: "Recovery",
        steps: [{ label: "Full rest — you've earned it", note: "Biggest week so far. Let the body absorb it." }] }
    ]
  },
  {
    week: 5, phase: "Peak Build", phaseColor: "#DC2626",
    focus: "Race-specific efforts. Highest training load. Full race simulation Saturday.",
    days: [
      { date: "2026-06-22", day: "Mon", discipline: "REST",  type: "Rest Day",
        steps: [{ label: "Rest day", note: "Big week ahead — save the energy." }] },
      { date: "2026-06-23", day: "Tue", discipline: "Bike",  type: "Race Pace",
        steps: [
          { label: "Warm-up: 15 min easy spin", note: "" },
          { label: "Main: 35 min at race effort (Zone 3-4)", note: "This is how hard you'll push on race day." },
          { label: "Cool-down: 15 min easy spin", note: "" }] },
      { date: "2026-06-24", day: "Wed", discipline: "Swim",  type: "Intervals",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "Set 1: 600m easy — find your rhythm", note: "90 sec rest after." },
          { label: "Set 2: 600m at race pace", note: "90 sec rest after. Push." },
          { label: "Set 3: 600m at race pace", note: "Hold pace when tired." },
          { label: "Kick set: 4 × 50m kick only", note: "" },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-06-25", day: "Thu", discipline: "Run",   type: "Intervals",
        steps: [
          { label: "Warm-up: 10 min easy jog", note: "" },
          { label: "Interval 1: 5 min at 5K race pace", note: "Hard breathing — you should feel it." },
          { label: "Recovery: 90 sec easy jog", note: "" },
          { label: "Interval 2: 5 min at 5K race pace", note: "" },
          { label: "Recovery: 90 sec easy jog", note: "" },
          { label: "Interval 3: 5 min at 5K race pace", note: "" },
          { label: "Recovery: 90 sec easy jog", note: "" },
          { label: "Interval 4: 5 min at 5K race pace", note: "" },
          { label: "Cool-down: 5 min easy jog", note: "" }] },
      { date: "2026-06-26", day: "Fri", discipline: "REST",  type: "Recovery",
        steps: [{ label: "Full rest", note: "Legs up. Review Week 1 swim baseline. Saturday is huge." }] },
      { date: "2026-06-27", day: "Sat", discipline: "Brick", type: "Full Race Sim",
        steps: [
          { label: "⭐ Bike: 20km — full race distance", note: "Race effort. Nutrition at halfway." },
          { label: "⏱ T2 Transition — time yourself", note: "Aim under 90 seconds." },
          { label: "⭐ Run: 5km — full race distance", note: "Your dress rehearsal. Finish strong." },
          { label: "Cool-down walk + full stretch (10 min)", note: "Note how everything felt." }] },
      { date: "2026-06-28", day: "Sun", discipline: "Swim",  type: "Time Trial",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "⭐ TIME TRIAL: 750m at race effort", note: "Compare to Week 1 baseline. Record your time!" },
          { label: "Main: 4 × 100m descending pace", note: "Each 100m faster than the last." },
          { label: "Cool-down: 200m easy", note: "" }] }
    ]
  },
  {
    week: 6, phase: "Peak Build", phaseColor: "#DC2626",
    focus: "Consolidate fitness. Sharpen transitions. Swim volume peaks.",
    days: [
      { date: "2026-06-29", day: "Mon", discipline: "REST",  type: "Rest Day",
        steps: [{ label: "Rest day", note: "After last week's peak, you need this." }] },
      { date: "2026-06-30", day: "Tue", discipline: "Bike",  type: "Intervals",
        steps: [
          { label: "Warm-up: 15 min easy spin", note: "" },
          { label: "6 × 3 min Zone 4-5 high intensity", note: "2 min easy between each. Top-end power." },
          { label: "Cool-down: 10 min easy spin", note: "" }] },
      { date: "2026-07-01", day: "Wed", discipline: "Swim",  type: "Endurance",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "⭐ Main: 2 × 1,000m on 2 min rest", note: "Longest swim sets of the plan. Pace yourself." },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-07-02", day: "Thu", discipline: "Run",   type: "Easy Run",
        steps: [
          { label: "30 min truly easy jog — Zone 2", note: "After Week 5's load, genuinely easy. No exceptions." },
          { label: "5 min walk cool-down + stretch", note: "" }] },
      { date: "2026-07-03", day: "Fri", discipline: "Swim",  type: "Intervals",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "⭐ Main: 15 × 100m on 12 sec rest", note: "Highest interval count of plan. Race pace. Log splits." },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-07-04", day: "Sat", discipline: "Brick", type: "Brick + Transitions",
        steps: [
          { label: "Bike: 10 min warm-up", note: "" },
          { label: "Bike: 45 min Zone 2-3", note: "" },
          { label: "⏱ T2 Transition — time yourself", note: "Aim: under 90 sec." },
          { label: "Run: 25 min easy", note: "Longest brick run of the plan." },
          { label: "Cool-down + stretch", note: "" }] },
      { date: "2026-07-05", day: "Sun", discipline: "Run",   type: "Long Run",
        steps: [
          { label: "5 min walk warm-up", note: "" },
          { label: "40 min easy long run — Zone 2", note: "Longest run of the plan. Enjoy it." },
          { label: "5 min walk cool-down", note: "" },
          { label: "Full body stretch (10 min)", note: "Peak volume done. Taper starts next week." }] }
    ]
  },
  {
    week: 7, phase: "Taper", phaseColor: "#7C3AED",
    focus: "Volume drops 30%. Stay sharp. Trust the training.",
    days: [
      { date: "2026-07-06", day: "Mon", discipline: "REST",  type: "Rest Day",
        steps: [{ label: "Rest day", note: "Taper week — the hay is in the barn." }] },
      { date: "2026-07-07", day: "Tue", discipline: "Bike",  type: "Easy Spin",
        steps: [{ label: "40 min easy Zone 2 spin", note: "Zone 2 only. Legs need rest, not stress." }] },
      { date: "2026-07-08", day: "Wed", discipline: "Swim",  type: "Sharpener",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "⭐ TIME TRIAL: 750m at race effort", note: "Compare to Weeks 1 and 5. Should be fastest yet." },
          { label: "Main: 6 × 100m on 15 sec rest", note: "Race pace. Keep the sharpness." },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-07-09", day: "Thu", discipline: "Run",   type: "Sharpener",
        steps: [
          { label: "Warm-up: 10 min easy jog", note: "" },
          { label: "3 × 3 min at 5K race pace", note: "90 sec jog recovery. Keep the snap." },
          { label: "Cool-down: 5 min easy jog", note: "" }] },
      { date: "2026-07-10", day: "Fri", discipline: "Swim",  type: "Technique",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "Drills: 4 × 50m — your weakest area", note: "Sighting? Entry? Bilateral breathing?" },
          { label: "3 × 100m at race pace — full rest between", note: "Feel fast and controlled." },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-07-11", day: "Sat", discipline: "Brick", type: "Short Brick",
        steps: [
          { label: "Bike: 30 min comfortable Zone 2", note: "Nothing hard. Remind legs what transitions feel like." },
          { label: "Transition: rack bike, shoes on", note: "" },
          { label: "Run: 15 min easy", note: "Should feel easier than usual — taper working." },
          { label: "Stretch + rest the remainder of the day", note: "" }] },
      { date: "2026-07-12", day: "Sun", discipline: "REST",  type: "Recovery",
        steps: [{ label: "Full rest", note: "Eat well. Hydrate. Sleep 8+ hours tonight." }] }
    ]
  },
  {
    week: 8, phase: "Race Week", phaseColor: "#DB2777",
    focus: "Protect your energy for July 19. Short, sharp sessions only.",
    days: [
      { date: "2026-07-13", day: "Mon", discipline: "REST",  type: "Rest Day",
        steps: [{ label: "Rest day", note: "Race week. Eat carbs, sleep well." }] },
      { date: "2026-07-14", day: "Tue", discipline: "Run",   type: "Easy Shakeout",
        steps: [
          { label: "20 min very easy jog — Zone 1", note: "Maintenance, not a workout. Shake out the legs." },
          { label: "Light stretch (5 min)", note: "" }] },
      { date: "2026-07-15", day: "Wed", discipline: "Swim",  type: "Sharpener",
        steps: [
          { label: "Warm-up: 200m easy", note: "" },
          { label: "4 × 100m at race pace — full rest", note: "Feel fast. Finish feeling good, not tired." },
          { label: "Cool-down: 200m easy", note: "" }] },
      { date: "2026-07-16", day: "Thu", discipline: "Bike",  type: "Easy Spin",
        steps: [
          { label: "Warm-up: 15 min easy spin", note: "" },
          { label: "3 × 30 sec race-pace bursts", note: "2 min easy between. Wake up the legs." },
          { label: "Cool-down: 10 min easy spin", note: "" }] },
      { date: "2026-07-17", day: "Fri", discipline: "REST",  type: "Pre-Race Rest",
        steps: [
          { label: "Complete rest — no training", note: "Eat carb-rich meals. Check bike: tires, gears, brakes." },
          { label: "Pack your race bag", note: "Swim gear, T1 gear, T2 gear, nutrition, race belt." },
          { label: "Lights out by 9:30pm", note: "" }] },
      { date: "2026-07-18", day: "Sat", discipline: "REST",  type: "Pre-Race Rest",
        steps: [
          { label: "Rest or 10 min very easy jog only", note: "Don't do anything new today." },
          { label: "Visit race venue if possible", note: "Scope T1/T2, swim start, transition layout." },
          { label: "Carb-rich dinner — nothing exotic", note: "Pasta, rice, potatoes. Nothing new." },
          { label: "Set alarm — sleep early", note: "You've done the work. Trust it." }] },
      { date: "2026-07-19", day: "Sun", discipline: "RACE",  type: "RACE DAY — July 19",
        steps: [
          { label: "Wake up 2.5 hrs before start — eat breakfast", note: "Oats, banana, toast. Coffee if normal for you." },
          { label: "Arrive at venue — set up transition", note: "Rack bike. Lay out T1 and T2 gear in order." },
          { label: "🏊 SWIM: 750m", note: "Start conservatively. First 100m easy. Sight every 6 strokes." },
          { label: "T1: Swim → Bike transition", note: "Goggles off, helmet on, shoes on. Move with purpose." },
          { label: "🚴 BIKE: 20km", note: "First 5km easy. Build effort. Take nutrition." },
          { label: "T2: Bike → Run transition", note: "Rack bike, helmet off, run shoes on. Go!" },
          { label: "🏃 RUN: 5km", note: "First 1km will feel awful — push through. Finish strong." },
          { label: "🎉 Cross the finish line!", note: "8 weeks of work. Celebrate every second." }] }
    ]
  }
];
