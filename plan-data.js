// ─── TRAINING PLAN DATA ───────────────────────────────────────────────────────
// 70.3 Half Ironman — 21-week plan, rebuilt from the user's own "Matt's Training"
// spreadsheet (16-week base), re-paced for an IT-band-safe run progression:
//  - Long run and the Wed track-style session now climb in small, steady steps
//    (never more than ~1 mile/week), with a real recovery week every 4th week
//    and extra transition weeks inserted right where the original plan's biggest
//    jumps were (exactly where the real-world IT-band flare-up started last time).
//  - Every day: Mon = 15-20 min light mobility/activation (not a full rest day).
//  - Tue & Thu = Bike + a whole-body strength session (hip/glute focus Tue,
//    upper/core focus Thu) — every session includes progressive push-ups + plank.
//  - Every single day ends with a spelled-out 10-min stretch list (individually
//    checkable), not one generic checkbox.
// Start date: 2026-10-12 (Monday). Race day: 2027-03-07 (Sunday).
const PLAN = [
  {
    "week": 1,
    "phase": "Base",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-12"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate, 4x30s sprints scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 10",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 20 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-13"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (4 mi)",
        "steps": [
          {
            "label": "Swim 800 m (8x25 m RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4 miles (~6.4 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "2x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-14"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 10",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 20 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-15"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (4 mi)",
        "steps": [
          {
            "label": "Swim 800 m (3x100 m race pace RI 15s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4 miles (~6.4 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-16"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike",
        "steps": [
          {
            "label": "Bike 20 miles (~32.19 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-17"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (6 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 6 miles (~9.7 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 800 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-18"
      }
    ]
  },
  {
    "week": 2,
    "phase": "Base",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-19"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate, 6x30s sprints scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 10",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 20 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-20"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (4 mi)",
        "steps": [
          {
            "label": "Swim 850 m (10x25 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4 miles (~6.4 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-21"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "5 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 10",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 20 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-22"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (4 mi)",
        "steps": [
          {
            "label": "Swim 850 m (4x100 m race pace RI 15s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4 miles (~6.4 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-23"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike",
        "steps": [
          {
            "label": "Bike 25 miles (~40.23 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-24"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (7 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 7 miles (~11.3 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 1,000 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-25"
      }
    ]
  },
  {
    "week": 3,
    "phase": "Base",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-26"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 40 min, 8x30s sprints scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 11",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 25 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-27"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (4 mi)",
        "steps": [
          {
            "label": "Swim 900 m (12x25 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4 miles (~6.4 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "6x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-28"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "8 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 11",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 25 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-29"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (4.5 mi)",
        "steps": [
          {
            "label": "Swim 900 m (3x200 m race pace RI 15s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4.5 miles (~7.2 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-30"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike",
        "steps": [
          {
            "label": "Bike 30 miles (~48.28 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-31"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (8 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 8 miles (~12.9 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 1,200 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-01"
      }
    ]
  },
  {
    "week": 4,
    "phase": "Base",
    "note": "Recovery week \u2014 reduced volume.",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-02"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 40 min, 6x30s sprints scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 11",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 25 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-03"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (4 mi)",
        "steps": [
          {
            "label": "Swim 800 m (8x25 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4 miles (~6.4 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-04"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "5 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 11",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 25 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-05"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (4 mi)",
        "steps": [
          {
            "label": "Swim 800 m (3x100 m race pace RI 15s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4 miles (~6.4 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-06"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike",
        "steps": [
          {
            "label": "Bike 25 miles (~40.23 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-07"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (6 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 6 miles (~9.7 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 1,000 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-08"
      }
    ]
  },
  {
    "week": 5,
    "phase": "Base",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-09"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 45 min, 8x1 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 12",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 30 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-10"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (4.5 mi)",
        "steps": [
          {
            "label": "Swim 1,000 m (6x50 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4.5 miles (~7.2 km) with 6x30s hard efforts scattered",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-11"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "8 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 12",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 30 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-12"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (4.5 mi)",
        "steps": [
          {
            "label": "Swim 1,000 m (2x200 m race pace RI 30s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4.5 miles (~7.2 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-13"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike + Transition Run",
        "steps": [
          {
            "label": "Bike 35 miles (~56.33 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "10 min transition run moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-14"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (7 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 7 miles (~11.3 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 1,400 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-15"
      }
    ]
  },
  {
    "week": 6,
    "phase": "Base",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-16"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 45 min, 6x2 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 13",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 32 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-17"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (4.5 mi)",
        "steps": [
          {
            "label": "Swim 1,100 m (8x50 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4.5 miles (~7.2 km) with 6x45s hard efforts scattered",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-18"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "10 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 13",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 32 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-19"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (4.5 mi)",
        "steps": [
          {
            "label": "Swim 1,100 m (3x200 m race pace RI 30s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4.5 miles (~7.2 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-20"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike",
        "steps": [
          {
            "label": "Bike 40 miles (~64.37 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-21"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (8 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 8 miles (~12.9 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 1,600 m (1,000 m time trial)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-22"
      }
    ]
  },
  {
    "week": 7,
    "phase": "Base",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-23"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 45 min, 4x3 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 14",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 35 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-24"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (4.5 mi)",
        "steps": [
          {
            "label": "Swim 1,200 m (10x50 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4.5 miles (~7.2 km) with 6x1 min hard efforts scattered",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-25"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "12 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 14",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 35 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-26"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (5 mi)",
        "steps": [
          {
            "label": "Swim 1,200 m (3x200 m race pace RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 5 miles (~8.0 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-27"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike + Transition Run",
        "steps": [
          {
            "label": "Bike 45 miles (~72.42 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "15 min transition run moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-28"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (9 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 9 miles (~14.5 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 1,800 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-29"
      }
    ]
  },
  {
    "week": 8,
    "phase": "Base",
    "note": "Recovery week \u2014 reduced volume.",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-30"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 40 min, 6x1 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 14",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 35 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-01"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (4.5 mi)",
        "steps": [
          {
            "label": "Swim 1,000 m (8x50 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4.5 miles (~7.2 km) with 6x30s hard efforts scattered",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-02"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "8 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 14",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 35 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-03"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (4 mi)",
        "steps": [
          {
            "label": "Swim 1,000 m (2x200 m race pace RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4 miles (~6.4 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-04"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike",
        "steps": [
          {
            "label": "Bike 35 miles (~56.33 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-05"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (7 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 7 miles (~11.3 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 1,400 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-06"
      }
    ]
  },
  {
    "week": 9,
    "phase": "Build",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-07"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 40 min, 6x1 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 15",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 38 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-08"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (5 mi)",
        "steps": [
          {
            "label": "Swim 1,000 m (8x50 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 5 miles (~8.0 km) with 6x1 min hard efforts scattered",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-09"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "8 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 15",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 38 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-10"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (4.5 mi)",
        "steps": [
          {
            "label": "Swim 1,000 m (2x200 m race pace RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4.5 miles (~7.2 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-11"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike",
        "steps": [
          {
            "label": "Bike 42 miles (~67.59 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-12"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (8 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 8 miles (~12.9 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 1,400 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-13"
      }
    ]
  },
  {
    "week": 10,
    "phase": "Build",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-14"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 50 min, 6x2 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 16",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 40 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-15"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (5 mi)",
        "steps": [
          {
            "label": "Swim 1,300 m (6x75 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 1 mile easy, 4x400m @5K pace w/ 2 min jog recovery, 1 mile easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-16"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "15 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 16",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 40 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-17"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (5 mi)",
        "steps": [
          {
            "label": "Swim 1,300 m (2x300 m race pace RI 30s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 5 miles (~8.0 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-18"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike + Transition Run",
        "steps": [
          {
            "label": "Bike 50 miles (~80.47 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "20 min transition run moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-19"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (9 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 9 miles (~14.5 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 2,000 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-20"
      }
    ]
  },
  {
    "week": 11,
    "phase": "Build",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-21"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 50 min, 6x2 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 17",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 42 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-22"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (5.5 mi)",
        "steps": [
          {
            "label": "Swim 1,300 m (6x75 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 1 mile easy, 5x500m @5K pace w/ 90s jog recovery, 1 mile easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-23"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "15 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 17",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 42 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-24"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (5 mi)",
        "steps": [
          {
            "label": "Swim 1,300 m (2x300 m race pace RI 30s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 5 miles (~8.0 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-25"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike + Transition Run",
        "steps": [
          {
            "label": "Bike 50 miles (~80.47 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "20 min transition run moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-26"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (10 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 10 miles (~16.1 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 2,000 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-27"
      }
    ]
  },
  {
    "week": 12,
    "phase": "Build",
    "note": "Recovery week \u2014 reduced volume.",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-28"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 50 min, 5x3 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 17",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 42 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-29"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (5 mi)",
        "steps": [
          {
            "label": "Swim 1,400 m (8x75 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4.5 miles (~7.2 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-30"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "18 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 17",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 42 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-31"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (4.5 mi)",
        "steps": [
          {
            "label": "Swim 1,400 m (2x300 m race pace RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4.5 miles (~7.2 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-01"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike",
        "steps": [
          {
            "label": "Bike 55 miles (~88.51 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-02"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (8 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 8 miles (~12.9 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 2,000 m (1,500 m time trial)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-03"
      }
    ]
  },
  {
    "week": 13,
    "phase": "Build",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-04"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 55 min, 4x4 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 18",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 45 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-05"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (5.5 mi)",
        "steps": [
          {
            "label": "Swim 1,500 m (10x75 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 1 mile easy, 6x600m @5K pace w/ 400m jog recovery, 1 mile easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-06"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "20 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 18",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 45 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-07"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (5 mi)",
        "steps": [
          {
            "label": "Swim 1,500 m (3x300 m race pace RI 30s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 5 miles (~8.0 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-08"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike + Transition Run",
        "steps": [
          {
            "label": "Bike 60 miles (~96.56 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "10 min transition run race pace",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-09"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (9 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 9 miles (~14.5 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 2,200 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-10"
      }
    ]
  },
  {
    "week": 14,
    "phase": "Build",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-11"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 45 min, 5x2 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 19",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 48 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-12"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (6 mi)",
        "steps": [
          {
            "label": "Swim 1,300 m (6x75 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 1 mile easy, 8x600m @5K pace w/ 400m jog recovery, 1 mile easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-13"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "10 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 19",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 48 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-14"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (5.5 mi)",
        "steps": [
          {
            "label": "Swim 1,300 m (2x300 m race pace RI 30s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 5.5 miles (~8.9 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-15"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike",
        "steps": [
          {
            "label": "Bike 45 miles (~72.42 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-16"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (10 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 10 miles (~16.1 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 2,000 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-17"
      }
    ]
  },
  {
    "week": 15,
    "phase": "Build",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-18"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 45 min, 5x2 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 20",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 50 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-19"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (6 mi)",
        "steps": [
          {
            "label": "Swim 1,300 m (6x75 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 1 mile easy, 6x800m @5K pace w/ 400m jog recovery, 1 mile easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-20"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 40 min moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "10 min comfortably hard",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 20",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 50 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-21"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (5.5 mi)",
        "steps": [
          {
            "label": "Swim 1,300 m (2x300 m race pace RI 30s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 5.5 miles (~8.9 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-22"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike",
        "steps": [
          {
            "label": "Bike 45 miles (~72.42 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-23"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (11 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 11 miles (~17.7 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 2,000 m moderate",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-24"
      }
    ]
  },
  {
    "week": 16,
    "phase": "Peak",
    "note": "Recovery week \u2014 reduced volume.",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-25"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 20 min easy, 20 min comfortably hard, 20 min easy",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 20",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 50 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-26"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (5 mi)",
        "steps": [
          {
            "label": "Swim 1,600 m (6x100 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 2 miles easy, 1 mile @10K pace, 2 miles easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-27"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 45 min, 5x2 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 20",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 50 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-28"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (5 mi)",
        "steps": [
          {
            "label": "Swim 1,600 m (2x400 m race pace RI 30s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 5 miles (~8.0 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-29"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike + Transition Run",
        "steps": [
          {
            "label": "Bike 50 miles (~80.47 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "10 miles (~16.09 km) race pace",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "15 min transition run race pace",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-30"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (9 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 9 miles (~14.5 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 2,200 m (500 m race pace)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-31"
      }
    ]
  },
  {
    "week": 17,
    "phase": "Peak",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-01"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 20 min easy, 20 min comfortably hard, 20 min easy",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 21",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 52 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-02"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (6 mi)",
        "steps": [
          {
            "label": "Swim 1,600 m (6x100 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 2 miles easy, 2 miles @10K pace, 2 miles easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-03"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 45 min, 5x2 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 21",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 52 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-04"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (5.5 mi)",
        "steps": [
          {
            "label": "Swim 1,600 m (2x400 m race pace RI 30s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 5.5 miles (~8.9 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-05"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike + Transition Run",
        "steps": [
          {
            "label": "Bike 50 miles (~80.47 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "10 miles (~16.09 km) race pace",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "15 min transition run race pace",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-06"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (10 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 10 miles (~16.1 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 2,200 m (500 m race pace)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-07"
      }
    ]
  },
  {
    "week": 18,
    "phase": "Peak",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-08"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 20 min easy, 25 min comfortably hard, 15 min easy",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 22",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 55 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-09"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (6.5 mi)",
        "steps": [
          {
            "label": "Swim 1,800 m (8x100 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 2 miles easy, 2.5 miles @10K pace, 2 miles easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-10"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 45 min, 4x3 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 22",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 55 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-11"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (6 mi)",
        "steps": [
          {
            "label": "Swim 1,600 m (2x400 m race pace RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 6 miles (~9.7 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-12"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike + Transition Run",
        "steps": [
          {
            "label": "Bike 45 miles (~72.42 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "15 miles (~24.14 km) race pace",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "20 min transition run race pace",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-13"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (11 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 11 miles (~17.7 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 2,400 m (600 m race pace)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-14"
      }
    ]
  },
  {
    "week": 19,
    "phase": "Peak",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-15"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 15 min easy, 30 min comfortably hard, 15 min easy",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 23",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 58 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-16"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (7 mi)",
        "steps": [
          {
            "label": "Swim 2,000 m (10x100 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 2 miles easy, 3 miles @10K pace, 2 miles easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-17"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 45 min, 8x1 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 23",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 58 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-18"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (6 mi)",
        "steps": [
          {
            "label": "Swim 1,600 m (2x400 m race pace RI 30s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 6 miles (~9.7 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "4x10s hill sprints",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-19"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike + Transition Run",
        "steps": [
          {
            "label": "Bike 40 miles (~64.37 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "10 miles (~16.09 km) race pace",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "10 min transition run race pace",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-20"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (12 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 12 miles (~19.3 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 2,400 m (600 m race pace)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-21"
      }
    ]
  },
  {
    "week": 20,
    "phase": "Taper",
    "note": "Taper week.",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-22"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "Bike 15 min easy, 30 min comfortably hard, 15 min easy",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat \u2014 3 \u00d7 10",
            "note": "Full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL \u2014 3 \u00d7 8 each leg",
            "note": "The #1 ITB-prevention exercise \u2014 control the wobble, light-moderate weight.",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Slow and controlled \u2014 resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Hip thrust \u2014 3 \u00d7 12",
            "note": "Full lockout, squeeze glutes at the top.",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 23",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 58 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-23"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run (5 mi)",
        "steps": [
          {
            "label": "Swim 2,000 m (10x100 m sprints RI 20s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 2 miles easy, 1 mile @10K pace, 2 miles easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-24"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike + Strength (upper/core focus)",
        "steps": [
          {
            "label": "Bike 45 min, 8x1 min hard efforts scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Dumbbell row \u2014 3 \u00d7 10",
            "note": "Flat back, pull to the hip, squeeze shoulder blade.",
            "disc": "Strength"
          },
          {
            "label": "Lat pulldown or assisted pull-up \u2014 3 \u00d7 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Standing cable/band hip abduction \u2014 3 \u00d7 12 each side",
            "note": "Keep this in every session \u2014 ongoing ITB protection.",
            "disc": "Strength"
          },
          {
            "label": "Calf raises \u2014 3 \u00d7 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Push-ups \u2014 3 \u00d7 23",
            "note": "Scale to knee push-ups if needed \u2014 keep full-body tension.",
            "disc": "Strength"
          },
          {
            "label": "Plank \u2014 3 \u00d7 58 sec",
            "note": "Flat back, ribs down, breathe \u2014 don't let hips sag or pike.",
            "disc": "Strength"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-25"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run (4 mi)",
        "steps": [
          {
            "label": "Swim 1,600 m (2x400 m race pace RI 30s)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 4 miles (~6.4 km) easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-26"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Long Bike + Transition Run",
        "steps": [
          {
            "label": "Bike 40 miles (~64.37 km) moderate",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "10 miles (~16.09 km) race pace",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "10 min transition run race pace",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-27"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Long Run (8 mi) + Easy Swim",
        "steps": [
          {
            "label": "Run 8 miles (~12.9 km) moderate",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Swim 2,400 m (600 m race pace)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Cross-body shoulder stretch \u2014 30 sec each arm",
            "note": "Pull one arm across your chest with the other hand, shoulder relaxed down.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-28"
      }
    ]
  },
  {
    "week": 21,
    "phase": "Race Week",
    "note": "RACE WEEK!",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells \u2014 2 \u00d7 15 each side",
            "note": "Light resistance band above knees, slow and controlled.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises \u2014 2 \u00d7 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges \u2014 2 \u00d7 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Bird-dog \u2014 2 \u00d7 8 each side",
            "note": "Slow, controlled, keep the hips level.",
            "disc": "Mobility"
          },
          {
            "label": "World's greatest stretch \u2014 2 \u00d7 5 each side",
            "note": "Lunge, rotate, reach \u2014 full-body activation.",
            "disc": "Mobility"
          },
          {
            "label": "Figure-4 glute stretch \u2014 30 sec each side",
            "note": "Lie on your back, cross ankle over opposite knee, pull knee toward chest.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Pigeon pose (hip opener) \u2014 45 sec each side",
            "note": "Front shin angled under torso, back leg extended, fold forward if comfortable.",
            "disc": "Stretch"
          },
          {
            "label": "Thread-the-needle upper back stretch \u2014 30 sec each side",
            "note": "On all fours, thread one arm under and across, rest shoulder toward the floor.",
            "disc": "Stretch"
          },
          {
            "label": "Neck side-bend stretch \u2014 20 sec each side",
            "note": "Gently tilt ear toward shoulder, no shoulder shrugging.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-01"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Easy opener spin",
        "steps": [
          {
            "label": "Bike 10 min easy",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-02"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim + Run: short easy openers",
        "steps": [
          {
            "label": "Swim 1,300 m (5x100 m easy)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 2 miles easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-03"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Easy opener spin",
        "steps": [
          {
            "label": "Bike 10 min easy, 5x30s sprints scattered",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Calf stretch against a wall \u2014 30 sec each leg",
            "note": "Back leg straight, heel down, lean into the wall.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          },
          {
            "label": "Overhead triceps/lat stretch \u2014 30 sec each arm",
            "note": "Reach one arm overhead, bend elbow, gently pull with the other hand.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-04"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim + Run: short easy openers",
        "steps": [
          {
            "label": "Swim 800 m (400 m race pace)",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Run 2 miles easy",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Kneeling hip flexor stretch \u2014 30 sec each side",
            "note": "Half-kneeling, tuck pelvis under and lean forward until you feel the front of the hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-05"
      },
      {
        "day": "Sat",
        "discipline": "Brick",
        "type": "Pre-race openers (swim/bike/run)",
        "steps": [
          {
            "label": "Swim 10 min easy with 4x30s race pace",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "Bike 10 min with 4x30s fast",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Run 10 min with 4x20s at 90% effort",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Standing quad stretch \u2014 30 sec each leg",
            "note": "Grab your ankle behind you, knees together, tuck pelvis slightly.",
            "disc": "Stretch"
          },
          {
            "label": "Seated hamstring stretch \u2014 30 sec each leg",
            "note": "Sit tall, hinge from the hips toward your toes, keep back flat.",
            "disc": "Stretch"
          },
          {
            "label": "Standing IT band / side stretch \u2014 30 sec each side",
            "note": "Cross one foot behind the other, reach overhead and lean away from that hip.",
            "disc": "Stretch"
          },
          {
            "label": "Doorway chest stretch \u2014 30 sec",
            "note": "Forearm on frame, step through gently until you feel a stretch across the chest.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-06"
      },
      {
        "day": "Sun",
        "discipline": "RACE",
        "type": "RACE: \ud83c\udfc1 RACE DAY \u2014 70.3 Half Ironman!",
        "steps": [
          {
            "label": "WU: Swim 1.2 miles (1,931 m)",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "MS: Bike 56 miles (90 km)",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "CD: Run 13.1 miles (half marathon)",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "\ud83c\udf89 YOU ARE A HALF IRONMAN!",
            "note": "",
            "disc": "RACE"
          }
        ],
        "date": "2027-03-07"
      }
    ]
  }
];
