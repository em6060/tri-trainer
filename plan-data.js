// ─── TRAINING PLAN DATA ───────────────────────────────────────────────────────
// 70.3 Half Ironman — 22-week plan (base 20-week Triathlete.com plan + IT-band-safe
// Build-phase ramp + daily mobility/strength/stretch additions).
// Start date: 2026-10-12 (Monday). Race day: 2027-03-14 (Sunday).
// Each week runs Mon–Sun. Monday = light mobility/activation, not a full rest day.
// Tue & Thu = Bike + whole-body strength (gym). Wed & Fri = Swim + Run.
// Every day ends with a 10-min stretch. Sat/Sun match the original 70.3 plan's load.
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
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-12"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Power Intervals: 45 min + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 4 × 20-sec sprints in high gear (enough recovery to reach 45 min total)",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat — 3 × 10",
            "note": "Moderate dumbbell/kettlebell, full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 8 each leg",
            "note": "Light-moderate weight. This is the #1 ITB-prevention exercise — control the wobble.",
            "disc": "Strength"
          },
          {
            "label": "Cable/band hip abduction — 3 × 12 each side",
            "note": "Standing, slow, resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Bench press or push-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Plank — 3 × 30 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-13"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: 1,200 Yards + Run: Fartlek: 30 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 2 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 5 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 6 × 30 sec @ VO2max with active recovery to fill 30 min",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 5 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-14"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1 hr + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 40 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Lat pulldown or pull-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 2 × 10 each leg (light)",
            "note": "Low box, bodyweight or light dumbbells — keep legs fresh for tomorrow.",
            "disc": "Strength"
          },
          {
            "label": "Side plank — 2 × 25 sec each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-15"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: 1,200 Yards + Run: Foundation: 35 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 100 (25 easy/25 hard), RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 15 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-16"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1 hr",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 40 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-17"
      },
      {
        "day": "Sun",
        "discipline": "Run",
        "type": "Run: Foundation: 40 min",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 20 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-19"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Power Intervals: 50 min + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 5 × 20-sec sprints in high gear (enough recovery to reach 50 min total)",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat — 3 × 10",
            "note": "Moderate dumbbell/kettlebell, full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 8 each leg",
            "note": "Light-moderate weight. This is the #1 ITB-prevention exercise — control the wobble.",
            "disc": "Strength"
          },
          {
            "label": "Cable/band hip abduction — 3 × 12 each side",
            "note": "Standing, slow, resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Bench press or push-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Plank — 3 × 30 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-20"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,300 Yards + Run: Fartlek: 30 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 5 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 8 × 30 sec @ VO2max with active recovery to fill 30 min",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 5 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-21"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1 hr + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 40 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Lat pulldown or pull-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 2 × 10 each leg (light)",
            "note": "Low box, bodyweight or light dumbbells — keep legs fresh for tomorrow.",
            "disc": "Strength"
          },
          {
            "label": "Side plank — 2 × 25 sec each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-22"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Fartlek + Sprint: 1,300 Yards + Run: Foundation: 35 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 100 (25 build/25 descend), RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 15 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-23"
      },
      {
        "day": "Sat",
        "discipline": "Brick",
        "type": "Brick: 55 min",
        "steps": [
          {
            "label": "MS: Bike 45 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: Run 10 min @ moderate aerobic (no break)",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-24"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 1,600 Yards + Run: Foundation: 40 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,000 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 20 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-26"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Power Intervals: 50 min + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 5 × 20-sec sprints in high gear",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat — 3 × 10",
            "note": "Moderate dumbbell/kettlebell, full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 8 each leg",
            "note": "Light-moderate weight. This is the #1 ITB-prevention exercise — control the wobble.",
            "disc": "Strength"
          },
          {
            "label": "Cable/band hip abduction — 3 × 12 each side",
            "note": "Standing, slow, resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Bench press or push-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Plank — 3 × 30 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-27"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,400 Yards + Run: Fartlek: 35 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 5 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 8 × 30 sec @ VO2max with active recovery to fill 35 min",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 5 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-28"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1 hr + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 40 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Lat pulldown or pull-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 2 × 10 each leg (light)",
            "note": "Low box, bodyweight or light dumbbells — keep legs fresh for tomorrow.",
            "disc": "Strength"
          },
          {
            "label": "Side plank — 2 × 25 sec each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-29"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Fartlek + Sprint: 1,400 Yards + Run: Foundation: 40 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 100 (25 easy/25 hard), RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 20 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-30"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:15",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 55 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-10-31"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 1,700 Yards + Run: Foundation: 45 min",
        "steps": [
          {
            "label": "WU: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,200 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 25 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
    "note": "⚡ Recovery Week — training reduced to let your body absorb recent gains",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-02"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Power Intervals: 45 min + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 4 × 20-sec sprints in high gear",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat — 3 × 10",
            "note": "Moderate dumbbell/kettlebell, full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 8 each leg",
            "note": "Light-moderate weight. This is the #1 ITB-prevention exercise — control the wobble.",
            "disc": "Strength"
          },
          {
            "label": "Cable/band hip abduction — 3 × 12 each side",
            "note": "Standing, slow, resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Bench press or push-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Plank — 3 × 30 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-03"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,000 Yards + Run: Fartlek: 30 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 2 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 5 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 6 × 30 sec @ VO2max",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 5 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-04"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 30 min + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Lat pulldown or pull-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 2 × 10 each leg (light)",
            "note": "Low box, bodyweight or light dumbbells — keep legs fresh for tomorrow.",
            "disc": "Strength"
          },
          {
            "label": "Side plank — 2 × 25 sec each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-05"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Fartlek + Sprint: 1,200 Yards + Run: Foundation: 35 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 100 (25 build/25 descend), RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 15 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-06"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Foundation: 45 min",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 25 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-07"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 1,400 Yards + Brick: 55 min",
        "steps": [
          {
            "label": "WU: 200 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,000 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 200 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: Bike 45 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: Run 10 min @ moderate aerobic (no break)",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-09"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Short Hill Climbs: 55 min + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 6 × 1-min hill climbs @ speed intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat — 3 × 10",
            "note": "Moderate dumbbell/kettlebell, full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 8 each leg",
            "note": "Light-moderate weight. This is the #1 ITB-prevention exercise — control the wobble.",
            "disc": "Strength"
          },
          {
            "label": "Cable/band hip abduction — 3 × 12 each side",
            "note": "Standing, slow, resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Bench press or push-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Plank — 3 × 30 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-10"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,450 Yards + Run: Speed Intervals: 39 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 25 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 8 × 30 sec with 2-min active recoveries",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 9 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-11"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1 hr + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 40 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Lat pulldown or pull-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 2 × 10 each leg (light)",
            "note": "Low box, bodyweight or light dumbbells — keep legs fresh for tomorrow.",
            "disc": "Strength"
          },
          {
            "label": "Side plank — 2 × 25 sec each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-12"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Fartlek + Sprint: 1,600 Yards + Run: Foundation: 40 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 150 (50 easy/25 hard), RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 20 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 2 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-13"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Foundation: 90 min",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 70 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-14"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 1,800 Yards + Run: Foundation: 50 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,200 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 30 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-16"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Short Hill Climbs: 1 hr + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 7 × 1-min hill climbs @ speed intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat — 3 × 10",
            "note": "Moderate dumbbell/kettlebell, full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 8 each leg",
            "note": "Light-moderate weight. This is the #1 ITB-prevention exercise — control the wobble.",
            "disc": "Strength"
          },
          {
            "label": "Cable/band hip abduction — 3 × 12 each side",
            "note": "Standing, slow, resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Bench press or push-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Plank — 3 × 30 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-17"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,575 Yards + Run: Speed Intervals: 42 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 7 × 25 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 9 × 30 sec with 2-min active recoveries",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-18"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:15 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 55 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Lat pulldown or pull-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 2 × 10 each leg (light)",
            "note": "Low box, bodyweight or light dumbbells — keep legs fresh for tomorrow.",
            "disc": "Strength"
          },
          {
            "label": "Side plank — 2 × 25 sec each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-19"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Fartlek + Sprint: 1,700 Yards + Run: Foundation: 40 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 50 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 150 (50 build/25 descend), RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 20 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 4 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-20"
      },
      {
        "day": "Sat",
        "discipline": "Brick",
        "type": "Brick: 1 hr",
        "steps": [
          {
            "label": "MS: Bike 45 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: Run 15 min @ moderate aerobic (no break)",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-21"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Time Trial: 1,400 Yards + Run: Foundation: 25 min",
        "steps": [
          {
            "label": "WU: 200 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,000 @ MAXIMUM intensity — race effort!",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 200 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 5 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-23"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Short Climbs: 1:05 + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 8 × 1-min hill climbs @ speed intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat — 3 × 10",
            "note": "Moderate dumbbell/kettlebell, full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 8 each leg",
            "note": "Light-moderate weight. This is the #1 ITB-prevention exercise — control the wobble.",
            "disc": "Strength"
          },
          {
            "label": "Cable/band hip abduction — 3 × 12 each side",
            "note": "Standing, slow, resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Bench press or push-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Plank — 3 × 30 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-24"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,700 Yards + Run: Speed Intervals: 45 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 5 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 10 × 30 sec with 2-min active recoveries",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-25"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:15 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 55 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Lat pulldown or pull-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 2 × 10 each leg (light)",
            "note": "Low box, bodyweight or light dumbbells — keep legs fresh for tomorrow.",
            "disc": "Strength"
          },
          {
            "label": "Side plank — 2 × 25 sec each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-26"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Fartlek + Sprint: 1,750 Yards + Run: Foundation: 40 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 5 × 150 (50 easy/25 hard), RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 20 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 6 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-27"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:45",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 85 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-28"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 2,000 Yards",
        "steps": [
          {
            "label": "WU: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,500 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
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
    "note": "⚡ Recovery Week — reduced volume to absorb training",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-11-30"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Short Hill Climbs: 55 min + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 6 × 1-min hill climbs @ speed intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat — 3 × 10",
            "note": "Moderate dumbbell/kettlebell, full depth, knees tracking over toes.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 8 each leg",
            "note": "Light-moderate weight. This is the #1 ITB-prevention exercise — control the wobble.",
            "disc": "Strength"
          },
          {
            "label": "Cable/band hip abduction — 3 × 12 each side",
            "note": "Standing, slow, resist the urge to swing the leg.",
            "disc": "Strength"
          },
          {
            "label": "Bench press or push-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Plank — 3 × 30 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-01"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,250 Yards + Run: Speed Intervals: 39 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 25 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 8 × 30 sec with 2-min active recoveries",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 9 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-02"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 45 min + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 25 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Lat pulldown or pull-ups — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 2 × 10 each leg (light)",
            "note": "Low box, bodyweight or light dumbbells — keep legs fresh for tomorrow.",
            "disc": "Strength"
          },
          {
            "label": "Side plank — 2 × 25 sec each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-03"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Fartlek + Sprint: 1,600 Yards + Run: Foundation: 35 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 150 (50 build/25 descend), RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 15 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 4 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-04"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1 hr",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 40 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-05"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 1,600 Yards + Brick: 1 hr",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,000 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: Bike 45 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: Run 15 min @ moderate aerobic (no break)",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
    "note": "🟡 Build Primer — a gentler bridge week before real lactate-interval work begins. This is new, added specifically because this is where things broke down last time. Light surges only, strides instead of hard intervals. If anything in the outside knee/hip feels off, stop and walk — don't push through it.",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-07"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Lactate Primer: 50 min + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 2 × 20-sec moderate-hard surges (not max effort) with 3 min easy spin between",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat or goblet squat — 4 × 8",
            "note": "Add weight from Base phase if it felt manageable.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "Progress the weight slowly. Keep hips square.",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 15 steps each direction",
            "note": "Band above knees, stay low, this is direct ITB armor.",
            "disc": "Strength"
          },
          {
            "label": "Incline dumbbell press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 35 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-08"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,700 Yards + Run: Strides Primer: 30 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 5 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 6 × 20-sec relaxed strides (quick but controlled — not a sprint) with 90-sec easy jog between",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Stop immediately if you feel any outside-of-knee or hip tightness — walk it out, don't push through.",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-09"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1 hr + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 40 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Seated row — 4 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Overhead press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 3 × 10 each leg",
            "note": "Still light-moderate — legs need to be fresh for Friday's run.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "Anti-rotation core — good for run stability.",
            "disc": "Strength"
          },
          {
            "label": "Side plank with reach — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-10"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 1,600 Yards + Run: Foundation: 35 min + light strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 200 @ threshold intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 15 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 4 × 20 sec relaxed, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-11"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:10",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 50 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-12"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 1,700 Yards + Run: Foundation: 30 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,200 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
    "note": "First lactate-interval work of the plan. Go by feel — if the outside of your knee or hip tightens up, back off the pace, not the plan.",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-14"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Long Hill Climbs: 1 hr + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 2 × 5-min hill climbs @ VO2max intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat or goblet squat — 4 × 8",
            "note": "Add weight from Base phase if it felt manageable.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "Progress the weight slowly. Keep hips square.",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 15 steps each direction",
            "note": "Band above knees, stay low, this is direct ITB armor.",
            "disc": "Strength"
          },
          {
            "label": "Incline dumbbell press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 35 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-15"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,750 Yards + Run: Lactate Intervals: 32 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 75 @ VO2max intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 25 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 12 × 30 sec @ VO2max with 30-sec active recoveries",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-16"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:15 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 55 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Seated row — 4 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Overhead press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 3 × 10 each leg",
            "note": "Still light-moderate — legs need to be fresh for Friday's run.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "Anti-rotation core — good for run stability.",
            "disc": "Strength"
          },
          {
            "label": "Side plank with reach — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-17"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 1,800 Yards + Run: Foundation: 45 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 200 @ threshold intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 50 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 25 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 6 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-18"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Long Bike: 2 hrs",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 100 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-19"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 2,100 Yards + Run: Foundation: 1 hr",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,500 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 40 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
    "note": "🔁 Consolidation week — repeating this week's intensity rather than stepping up again yet. This extra week at the same load is what last time's plan skipped.",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-21"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Long Hill Climbs: 1 hr + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 2 × 5-min hill climbs @ VO2max intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat or goblet squat — 4 × 8",
            "note": "Add weight from Base phase if it felt manageable.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "Progress the weight slowly. Keep hips square.",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 15 steps each direction",
            "note": "Band above knees, stay low, this is direct ITB armor.",
            "disc": "Strength"
          },
          {
            "label": "Incline dumbbell press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 35 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-22"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,750 Yards + Run: Lactate Intervals: 32 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 75 @ VO2max intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 25 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 12 × 30 sec @ VO2max with 30-sec active recoveries",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-23"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:15 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 55 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Seated row — 4 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Overhead press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 3 × 10 each leg",
            "note": "Still light-moderate — legs need to be fresh for Friday's run.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "Anti-rotation core — good for run stability.",
            "disc": "Strength"
          },
          {
            "label": "Side plank with reach — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-24"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 1,800 Yards + Run: Foundation: 45 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 200 @ threshold intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 50 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 25 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 6 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-25"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Long Bike: 2 hrs",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 100 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-26"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 2,100 Yards + Run: Foundation: 1 hr",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,500 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 40 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-28"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Lactate Intervals: 1 hr + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 2 × 3-min intervals @ VO2max on flat/rolling terrain",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat or goblet squat — 4 × 8",
            "note": "Add weight from Base phase if it felt manageable.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "Progress the weight slowly. Keep hips square.",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 15 steps each direction",
            "note": "Band above knees, stay low, this is direct ITB armor.",
            "disc": "Strength"
          },
          {
            "label": "Incline dumbbell press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 35 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-29"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,825 Yards + Run: Lactate Intervals: 34 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 5 × 75 @ VO2max intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 25 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 14 × 30 sec @ VO2max with 30-sec active recoveries",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-30"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:30 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 70 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Seated row — 4 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Overhead press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 3 × 10 each leg",
            "note": "Still light-moderate — legs need to be fresh for Friday's run.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "Anti-rotation core — good for run stability.",
            "disc": "Strength"
          },
          {
            "label": "Side plank with reach — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2026-12-31"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 1,900 Yards + Run: Foundation: 45 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 200 @ threshold intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 50 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 25 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 6 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-01"
      },
      {
        "day": "Sat",
        "discipline": "Brick",
        "type": "Brick: 1:20",
        "steps": [
          {
            "label": "WU: Bike 1 hr @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: Run 20 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-02"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 2,300 Yards + Run: Foundation: 30 min",
        "steps": [
          {
            "label": "WU: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,800 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-04"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Long Hill Climbs: 1:05 + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 3 × 5-min hill climbs @ VO2max intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat or goblet squat — 4 × 8",
            "note": "Add weight from Base phase if it felt manageable.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "Progress the weight slowly. Keep hips square.",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 15 steps each direction",
            "note": "Band above knees, stay low, this is direct ITB armor.",
            "disc": "Strength"
          },
          {
            "label": "Incline dumbbell press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 35 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-05"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,900 Yards + Run: Lactate Intervals: 36 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 75 @ VO2max intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 25 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 16 × 30 sec @ VO2max with 30-sec active recoveries",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-06"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:30 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 70 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Seated row — 4 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Overhead press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 3 × 10 each leg",
            "note": "Still light-moderate — legs need to be fresh for Friday's run.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "Anti-rotation core — good for run stability.",
            "disc": "Strength"
          },
          {
            "label": "Side plank with reach — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-07"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 2,000 Yards + Run: Foundation: 45 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 200 @ threshold intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 50 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 25 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 6 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-08"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Long Bike: 2:15",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 115 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-09"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Time Trial: 2,150 Yards + Run: Long Run: 1:05",
        "steps": [
          {
            "label": "WU: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,650 @ MAXIMUM intensity — race effort!",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 45 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
    "note": "⚡ Recovery Week + Optional Sprint Triathlon on Sunday",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-11"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Lactate Intervals: 1 hr + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 2 × 3-min intervals @ VO2max on flat/rolling terrain",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat or goblet squat — 4 × 8",
            "note": "Add weight from Base phase if it felt manageable.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "Progress the weight slowly. Keep hips square.",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 15 steps each direction",
            "note": "Band above knees, stay low, this is direct ITB armor.",
            "disc": "Strength"
          },
          {
            "label": "Incline dumbbell press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 35 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-12"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,400 Yards + Run: Lactate Intervals: 32 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 75 @ VO2max intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 12 × 30 sec @ VO2max with 30-sec active recoveries",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-13"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:15 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 55 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Seated row — 4 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Overhead press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Step-ups — 3 × 10 each leg",
            "note": "Still light-moderate — legs need to be fresh for Friday's run.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "Anti-rotation core — good for run stability.",
            "disc": "Strength"
          },
          {
            "label": "Side plank with reach — 2 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-14"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 1,600 Yards + Run: Foundation: 35 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 200 @ threshold intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 15 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 6 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-15"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Recovery: 20 min",
        "steps": [
          {
            "label": "WU: 10 min @ recovery intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ recovery intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-16"
      },
      {
        "day": "Sun",
        "discipline": "RACE",
        "type": "RACE: 🏁 Optional Sprint Triathlon",
        "steps": [
          {
            "label": "WU: Swim 800 yards",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "MS: Bike 12 miles",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "CD: Run 3 miles",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "(Or do this as a solo time trial if no race is available)",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-17"
      }
    ]
  },
  {
    "week": 15,
    "phase": "Peak",
    "note": "Peak phase — long weekend workouts get very long to build race endurance",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-18"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Long Hill Climbs: 1:10 + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 4 × 5-min hill climbs @ VO2max intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat — 4 × 6",
            "note": "Heaviest lifting block of the plan — good form over ego.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 20 steps each direction",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Bulgarian split squat — 2 × 8 each leg",
            "note": "Light-moderate load. Controlled tempo.",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 40 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-19"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,900 Yards + Run: Lactate Intervals",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 5 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 100 @ VO2max intensity, RI=1:00",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 18 × 30 sec @ VO2max with 30-sec active recoveries",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-20"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:30 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 70 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Pull-ups or lat pulldown — 4 × 8",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Single-leg calf raise — 2 × 12 each leg",
            "note": "Light — supports ankle/lower-leg durability for race-distance running.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-21"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 2,100 Yards + Run: Foundation: 45 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 300 @ threshold intensity, RI=1:00",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 50 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 25 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 6 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-22"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Long Bike: 2:30",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 130 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-23"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 2,300 Yards + Run: Long Run: 1:10",
        "steps": [
          {
            "label": "WU: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,800 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 50 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-25"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Lactate Intervals: 1:15 + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 4 × 3-min intervals @ VO2max on flat/rolling terrain",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat — 4 × 6",
            "note": "Heaviest lifting block of the plan — good form over ego.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 20 steps each direction",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Bulgarian split squat — 2 × 8 each leg",
            "note": "Light-moderate load. Controlled tempo.",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 40 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-26"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 2,000 Yards + Run: Lactate Intervals: 40 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 100 @ VO2max intensity, RI=1:00",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 20 × 30 sec @ VO2max with 30-sec active recoveries",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-27"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:30 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 70 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Pull-ups or lat pulldown — 4 × 8",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Single-leg calf raise — 2 × 12 each leg",
            "note": "Light — supports ankle/lower-leg durability for race-distance running.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-28"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 2,100 Yards + Run: Foundation: 50 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 300 @ threshold intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 50 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 30 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 6 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-29"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:45",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 85 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-01-30"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 2,400 Yards + Brick: 1:45",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,800 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: Bike 75 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: Run 30 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
    "note": "Threshold-intensity training becomes the second priority alongside long endurance",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-01"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Tempo: 1 hr + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 13 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 2 × 12 min @ threshold intensity with 10 min active recovery",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 13 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat — 4 × 6",
            "note": "Heaviest lifting block of the plan — good form over ego.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 20 steps each direction",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Bulgarian split squat — 2 × 8 each leg",
            "note": "Light-moderate load. Controlled tempo.",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 40 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-02"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 2,100 Yards + Run: Tempo: 36 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 5 × 100 @ VO2max intensity, RI=1:00",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 16 min @ threshold intensity",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-03"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:30 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 70 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Pull-ups or lat pulldown — 4 × 8",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Single-leg calf raise — 2 × 12 each leg",
            "note": "Light — supports ankle/lower-leg durability for race-distance running.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-04"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 2,100 Yards + Run: Foundation: 50 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 300 @ threshold intensity, RI=0:30",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 50 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 30 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 6 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-05"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Long Bike: 2:45",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 145 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-06"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 2,500 Yards + Run: Long Run: 1:20",
        "steps": [
          {
            "label": "WU: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 2,000 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 60 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
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
    "note": "⚡ Recovery Week + Optional Olympic Distance Triathlon Sunday",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-08"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Tempo: 55 min + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 17 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 22 min @ threshold intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 16 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat — 4 × 6",
            "note": "Heaviest lifting block of the plan — good form over ego.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 20 steps each direction",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Bulgarian split squat — 2 × 8 each leg",
            "note": "Light-moderate load. Controlled tempo.",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 40 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-09"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,600 Yards + Run: Tempo: 34 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 100 @ VO2max intensity, RI=1:00",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 14 min @ threshold intensity",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-10"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1 hr + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 40 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Pull-ups or lat pulldown — 4 × 8",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Single-leg calf raise — 2 × 12 each leg",
            "note": "Light — supports ankle/lower-leg durability for race-distance running.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-11"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 1,400 Yards + Run: Foundation: 40 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 200 @ threshold intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 20 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 4 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-12"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Recovery: 20 min",
        "steps": [
          {
            "label": "WU: 10 min @ recovery intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ recovery intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-13"
      },
      {
        "day": "Sun",
        "discipline": "RACE",
        "type": "RACE: 🏁 Optional Olympic Triathlon",
        "steps": [
          {
            "label": "WU: Swim 1.5 km",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "MS: Bike 40 km",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "CD: Run 10 km",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "(Or do as a solo time trial if no race available)",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
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
    "note": "Peak training week — highest volume of the entire plan",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-15"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Tempo: 1:05 + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 21 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 24 min @ threshold intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 20 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat — 4 × 6",
            "note": "Heaviest lifting block of the plan — good form over ego.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 20 steps each direction",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Bulgarian split squat — 2 × 8 each leg",
            "note": "Light-moderate load. Controlled tempo.",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 40 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-16"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 2,100 Yards + Run: Tempo: 36 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 5 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 100 @ VO2max intensity, RI=1:00",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 16 min @ threshold intensity",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-17"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:30 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 70 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Pull-ups or lat pulldown — 4 × 8",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Single-leg calf raise — 2 × 12 each leg",
            "note": "Light — supports ankle/lower-leg durability for race-distance running.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-18"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 2,100 Yards + Run: Foundation: 55 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 2 × 400 @ threshold intensity, RI=1:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 50 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 35 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 4 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-19"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Long Bike: 3 hrs",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 160 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-20"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 2,500 Yards + Run: Long Run: 1:30",
        "steps": [
          {
            "label": "WU: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 2,000 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 70 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-21"
      }
    ]
  },
  {
    "week": 20,
    "phase": "Peak",
    "note": "",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-22"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Tempo: 1:10 + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 22 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 26 min @ threshold intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 22 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Back squat — 4 × 6",
            "note": "Heaviest lifting block of the plan — good form over ego.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 3 × 10 each leg",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Lateral band walks — 3 × 20 steps each direction",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Bulgarian split squat — 2 × 8 each leg",
            "note": "Light-moderate load. Controlled tempo.",
            "disc": "Strength"
          },
          {
            "label": "Weighted plank — 3 × 40 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-23"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 2,100 Yards + Run: Tempo: 38 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 5 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 100 @ VO2max intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 18 min @ threshold intensity",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-24"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:45 + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 85 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Pull-ups or lat pulldown — 4 × 8",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dumbbell shoulder press — 3 × 10",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Single-leg calf raise — 2 × 12 each leg",
            "note": "Light — supports ankle/lower-leg durability for race-distance running.",
            "disc": "Strength"
          },
          {
            "label": "Pallof press — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Dead bug — 3 × 10 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-25"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 2,100 Yards + Run: Foundation: 1 hr + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 2 × 400 @ threshold intensity, RI=1:00",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 50 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 40 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 4 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-26"
      },
      {
        "day": "Sat",
        "discipline": "Brick",
        "type": "Brick: 2:30",
        "steps": [
          {
            "label": "WU: Bike 105 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: Run 45 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-27"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Time Trial: 2,512 Yards (1.2 miles) + Run: Foundation: 30 min",
        "steps": [
          {
            "label": "WU: 200 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 2,112 yards (1.2 miles) @ MAXIMUM intensity — full race distance swim!",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 200 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-02-28"
      }
    ]
  },
  {
    "week": 21,
    "phase": "Taper",
    "note": "Pre-race taper begins Thursday — training decreases to ensure peak performance on race day",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-01"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Tempo: 1:15 + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 19 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 2 × 14 min @ threshold intensity with 10 min active recovery",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 18 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat — 2 × 10 (light)",
            "note": "Taper means less load, not less movement. Keep it easy.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 2 × 8 each leg (light)",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Plank — 2 × 30 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-02"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 2,100 Yards + Run: Tempo: 40 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 5 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 100 @ VO2max intensity, RI=0:30",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 20 min @ threshold intensity",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-03"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 1:30 (last hard ride) + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 70 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Seated row — 2 × 10 (light)",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Band pull-aparts — 2 × 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Side plank — 2 × 20 sec each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-04"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 2,100 Yards + Run: Foundation: 55 min + Strides",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 2 × 400 @ threshold intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 50 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 kick, RI=0:15",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 35 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "Strides: 4 × 20 sec @ speed intensity, 40-sec recovery",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-05"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Long Bike: 2:15",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 115 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-06"
      },
      {
        "day": "Sun",
        "discipline": "Swim",
        "type": "Swim: Base: 2,000 Yards + Run: Long Run: 1:05",
        "steps": [
          {
            "label": "WU: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 1,500 @ moderate aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 250 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 45 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-07"
      }
    ]
  },
  {
    "week": 22,
    "phase": "Race Week",
    "note": "🏁 Race Week — protect your energy. Sunday is race day!",
    "days": [
      {
        "day": "Mon",
        "discipline": "Mobility",
        "type": "Movement Prep + Stretch",
        "steps": [
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "Light resistance band above knees. Slow and controlled — quality over speed.",
            "disc": "Mobility"
          },
          {
            "label": "Side-lying leg raises — 2 × 12 each side",
            "note": "Keep hips stacked, don't let the top hip roll back.",
            "disc": "Mobility"
          },
          {
            "label": "Glute bridges — 2 × 15",
            "note": "Squeeze glutes at the top, 2-sec hold.",
            "disc": "Mobility"
          },
          {
            "label": "Standing hip 90/90 flow — 2 min each side",
            "note": "Mobility for hip internal/external rotation.",
            "disc": "Mobility"
          },
          {
            "label": "Single-leg balance reach — 2 × 8 each side",
            "note": "Light knee control work — this is what keeps the IT band happy under running load.",
            "disc": "Mobility"
          },
          {
            "label": "🧘 Stretch — 10 min",
            "note": "Hip flexors, glutes, IT band/TFL, calves, quads. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-08"
      },
      {
        "day": "Tue",
        "discipline": "Bike",
        "type": "Bike: Tempo: 1 hr + Strength (hip/glute focus)",
        "steps": [
          {
            "label": "WU: 13 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 2 × 12 min @ threshold intensity with 10 min active recovery",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 13 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Goblet squat — 2 × 10 (light)",
            "note": "Taper means less load, not less movement. Keep it easy.",
            "disc": "Strength"
          },
          {
            "label": "Single-leg RDL — 2 × 8 each leg (light)",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Clamshells — 2 × 15 each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Plank — 2 × 30 sec",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-09"
      },
      {
        "day": "Wed",
        "discipline": "Swim",
        "type": "Swim: Base: 1,700 Yards + Run: Tempo: 32 min",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 8 × 25 drills, RI=0:10",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 3 × 100 @ moderate aerobic, RI=0:05",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 6 × 100 @ VO2max intensity, RI=1:00",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "WU: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "MS: 12 min @ threshold intensity",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "CD: 10 min @ low aerobic",
            "note": "",
            "disc": "Run"
          },
          {
            "label": "🧘 Stretch — 10 min (run-focused)",
            "note": "Hip flexor lunge stretch, standing IT band/TFL stretch against a wall, figure-4 glute stretch, calf stretch, quad stretch. Hold each 30–45 sec per side. Foam roll quads/TFL first if tight.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-10"
      },
      {
        "day": "Thu",
        "discipline": "Bike",
        "type": "Bike: Foundation: 45 min (easy) + Strength (upper/core focus)",
        "steps": [
          {
            "label": "WU: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "MS: 25 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ moderate aerobic",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "Seated row — 2 × 10 (light)",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Band pull-aparts — 2 × 15",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "Side plank — 2 × 20 sec each side",
            "note": "",
            "disc": "Strength"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-11"
      },
      {
        "day": "Fri",
        "discipline": "Swim",
        "type": "Swim: Threshold + Sprint: 1,100 Yards (short & sharp)",
        "steps": [
          {
            "label": "WU: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 2 × 200 @ threshold intensity, RI=0:45",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "MS: 4 × 25 @ speed intensity, RI=0:20",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "CD: 300 @ low aerobic",
            "note": "",
            "disc": "Swim"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-12"
      },
      {
        "day": "Sat",
        "discipline": "Bike",
        "type": "Bike: Recovery: 20 min only",
        "steps": [
          {
            "label": "WU: 10 min @ recovery intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "CD: 10 min @ recovery intensity",
            "note": "",
            "disc": "Bike"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-13"
      },
      {
        "day": "Sun",
        "discipline": "RACE",
        "type": "RACE: 🏁 RACE DAY — 70.3 Half Ironman!",
        "steps": [
          {
            "label": "WU: Swim 1.2 miles (1,931 meters)",
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
            "label": "🎉 YOU ARE A HALF IRONMAN!",
            "note": "",
            "disc": "RACE"
          },
          {
            "label": "🧘 Stretch — 10 min (bike-focused)",
            "note": "Hip flexor lunge stretch, seated figure-4 glute stretch, quad stretch, low-back child's pose, chest/shoulder opener. Hold each 30–45 sec per side.",
            "disc": "Stretch"
          }
        ],
        "date": "2027-03-14"
      }
    ]
  }
];
